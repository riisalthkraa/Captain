#!/usr/bin/env python3
import re
import json

def extract_string_value(text, key):
    """Extrait la valeur d'une clé qui est une string"""
    # Chercher key: 'value' ou key: "value"
    pattern = rf"{key}:\s*(['\"])(.+?)\1"
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return match.group(2).replace("\\'", "'").replace('\\"', '"')
    return None

def extract_array_values(text):
    """Extrait les valeurs d'un tableau d'options"""
    # Trouver le contenu entre [ et ]
    match = re.search(r'options:\s*\[(.*?)\]', text, re.DOTALL)
    if not match:
        return []

    content = match.group(1)
    options = []

    # Parser chaque string du tableau
    # Gérer les guillemets simples et doubles
    pattern = r"(['\"])(.+?)\1"
    for m in re.finditer(pattern, content):
        value = m.group(2)
        # Décoder les échappements
        value = value.replace("\\'", "'").replace('\\"', '"').replace("\\\\", "\\")
        options.append(value)

    return options

def analyze_file(filepath, filename):
    """Analyse un fichier pour trouver les erreurs MCQ"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    errors = []
    current_exercise_id = None

    # Split par lignes pour garder les numéros
    lines = content.split('\n')
    i = 0

    while i < len(lines):
        line = lines[i]

        # Détecter ID d'exercice
        if re.search(r"^\s*id:\s*['\"](?:math|fr|sci|hist|ang|dec)-", line):
            match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", line)
            if match:
                current_exercise_id = match.group(1)

        # Détecter une question
        if re.search(r"^\s*id:\s*['\"]q\d+", line):
            q_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", line)
            if not q_match:
                i += 1
                continue

            question_id = q_match.group(1)
            start_line = i + 1

            # Collecter tout le bloc de la question jusqu'au },
            question_text = ''
            j = i
            brace_count = 0
            found_start = False

            while j < len(lines):
                current_line = lines[j]
                question_text += current_line + '\n'

                # Compter les accolades
                for char in current_line:
                    if char == '{':
                        brace_count += 1
                        found_start = True
                    elif char == '}':
                        brace_count -= 1
                        if found_start and brace_count == 0:
                            break

                if found_start and brace_count == 0:
                    break
                j += 1

            # Vérifier si c'est une MCQ
            if 'type: \'multiple-choice\'' not in question_text and 'type: "multiple-choice"' not in question_text:
                i = j + 1
                continue

            # Extraire options
            options = extract_array_values(question_text)

            # Extraire correctAnswer
            correct_answer = extract_string_value(question_text, 'correctAnswer')

            # Vérifier
            if options and correct_answer is not None:
                if correct_answer not in options:
                    errors.append({
                        'file': filename,
                        'exercise_id': current_exercise_id or 'inconnu',
                        'question_id': question_id,
                        'line': start_line,
                        'options': options,
                        'correct_answer': correct_answer
                    })

            i = j + 1
        else:
            i += 1

    return errors

# Analyser les fichiers
files = [
    ('src/services/exerciseLibrary.ts', 'exerciseLibrary.ts'),
    ('src/data/exercisesLibraryExtended.ts', 'exercisesLibraryExtended.ts')
]

print('\n' + '=' * 100)
print('ANALYSE EXHAUSTIVE - QUESTIONS MULTIPLE-CHOICE')
print('=' * 100 + '\n')

all_errors = []

for filepath, filename in files:
    full_path = f"C:\\Users\\RK\\Desktop\\Cap'taine\\Cap'taine DEV\\{filepath}"
    print(f"Analyse de {filename}...")
    try:
        errors = analyze_file(full_path, filename)
        all_errors.extend(errors)
        print(f"  -> {len(errors)} erreur(s) trouvee(s)\n")
    except Exception as e:
        print(f"  X Erreur: {e}\n")

print('=' * 100 + '\n')

if not all_errors:
    print('OK - Aucune erreur trouvee\n')
else:
    print(f'ERREUR - {len(all_errors)} ERREUR(S) TROUVEE(S)\n')
    print('-' * 100 + '\n')

    for i, error in enumerate(all_errors, 1):
        print(f"[ERREUR #{i}]")
        print(f"  Fichier: {error['file']}")
        print(f"  Exercice ID: {error['exercise_id']}")
        print(f"  Question ID: {error['question_id']}")
        print(f"  Ligne: {error['line']}")
        print(f"\n  Options disponibles ({len(error['options'])}):")
        for j, opt in enumerate(error['options']):
            print(f"    [{j}] '{opt}'")
        print(f"\n  correctAnswer: '{error['correct_answer']}'")
        print(f"\n  PROBLEME: '{error['correct_answer']}' N'EST PAS dans le tableau options!\n")
        print('-' * 100 + '\n')

print('=' * 100 + '\n')
