/**
 * Navigateur d'Exercices
 * Interface pour parcourir et faire les exercices de la bibliothèque
 */

import { useState, useEffect, useRef } from 'react'
import { Book, Clock, Target, ArrowLeft, Check, X, Lightbulb, Trophy, Swords } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { useAuthStore } from '@/store/useAuthStore'
import { useGuestProfileStore } from '@/store/useGuestProfileStore'
import { useGamificationStore } from '@/store/useGamificationStore'
import { useExerciseTracking } from '@/services/exerciseTracking'
import { useAdaptiveLearning } from '@/services/adaptiveLearning'
import { Button } from './ui/Button'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/Card'
import { ResultModal } from './ui/Modal'
import { ConfirmModal } from './ui/ConfirmModal'
import { cn } from '@/lib/cn'
import { VSCaptainMode } from './VSCaptainMode'
import {
  getExercisesByLevel,
  getAvailableSubjectsForLevel,
  countExercisesBySubject,
  getExercisesByLevelAndSubject,
  checkAnswer,
  type Exercise,
  type ExerciseQuestion,
  type Subject
} from '@/services/exerciseLibrary'

const SUBJECT_LABELS: Record<Subject, string> = {
  'maths': '🔢 Mathématiques',
  'francais': '📝 Français',
  'sciences': '🔬 Sciences',
  'histoire-geo': '🌍 Histoire-Géo',
  'anglais': '🇬🇧 Anglais',
  'decouverte': '🌈 Découverte du Monde',
  'espagnol': '🇪🇸 Espagnol',
  'allemand': '🇩🇪 Allemand',
  'italien': '🇮🇹 Italien',
  'latin': '🏛️ Latin',
  'arabe': '🌙 Arabe',
  'emc': '🏛️ EMC',
  'technologie': '⚙️ Technologie',
  'arts-plastiques': '🎨 Arts Plastiques'
}

const DIFFICULTY_LABELS: Record<number, string> = {
  1: '⭐ Facile',
  2: '⭐⭐ Moyen',
  3: '⭐⭐⭐ Difficile',
  4: '⭐⭐⭐⭐ Expert',
  5: '⭐⭐⭐⭐⭐ Maître'
}

export function ExerciseBrowser() {
  const { currentStudent } = useAppStore()
  const { session } = useAuthStore()
  const { currentProfile } = useGuestProfileStore()
  const { addExperience, incrementExercises, incrementCorrectAnswers } = useGamificationStore()
  const { recordAttempt } = useExerciseTracking()
  const { currentSession, startSession, recordAnswer } = useAdaptiveLearning()

  // Timer pour calculer le temps de réponse
  const questionStartTime = useRef<number>(Date.now())

  const activeProfile = session?.role === 'guest' && currentProfile
    ? { name: currentProfile.name, age: currentProfile.age, level: currentProfile.level }
    : currentStudent

  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  const [vsMode, setVsMode] = useState(false) // Mode VS Cap'taine
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [hintsUsed, setHintsUsed] = useState<number[]>([])
  const [usedHint3, setUsedHint3] = useState(false) // Si l'indice 3 (réponse) a été utilisé, pas de point
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set())
  const [showResultModal, setShowResultModal] = useState(false)
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]) // Options mélangées pour éviter que la bonne réponse soit toujours en premier
  const [showQuitConfirm, setShowQuitConfirm] = useState(false) // Modal de confirmation pour quitter

  const level = activeProfile?.level || 'CM2'
  const availableSubjects = getAvailableSubjectsForLevel(level)
  const exerciseCounts = countExercisesBySubject(level)

  // Analyse ML pour recommandations
  const { analyzeProfile } = useExerciseTracking()
  const profileId = activeProfile?.name || 'unknown'
  const analysis = analyzeProfile(profileId)

  useEffect(() => {
    // Reset l'exercice quand on change de niveau
    setSelectedExercise(null)
    setSelectedSubject(null)
  }, [level])

  // Mélanger les options à chaque nouvelle question (pour éviter que la bonne réponse soit toujours en premier)
  useEffect(() => {
    if (selectedExercise && selectedExercise.questions[currentQuestionIndex]) {
      const currentQuestion = selectedExercise.questions[currentQuestionIndex]
      if (currentQuestion.options && currentQuestion.options.length > 0) {
        // Mélanger les options de façon aléatoire
        const shuffled = [...currentQuestion.options].sort(() => Math.random() - 0.5)
        setShuffledOptions(shuffled)
      } else {
        setShuffledOptions([])
      }
    }
  }, [selectedExercise, currentQuestionIndex])

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject)
    setSelectedExercise(null)
  }

  const handleExerciseStart = (exercise: Exercise, isVsMode = false) => {
    setSelectedExercise(exercise)
    setVsMode(isVsMode)
    setCurrentQuestionIndex(0)
    setScore(0)
    setCompletedQuestions(new Set())
    setHintsUsed([])
    setUserAnswer('')
    setShowFeedback(false)

    // Démarrer le timer pour la première question
    questionStartTime.current = Date.now()

    // Démarrer une session adaptative si nécessaire
    const profileId = activeProfile?.name || 'unknown'
    if (!currentSession) {
      startSession(profileId, exercise.difficulty)
      console.log('[ExerciseBrowser] 📊 Session ML démarrée (hors-ligne ready)')
    }
  }

  const handleAnswerSubmit = () => {
    if (!selectedExercise || !userAnswer.trim()) return

    const currentQuestion = selectedExercise.questions[currentQuestionIndex]
    const result = checkAnswer(currentQuestion, userAnswer)

    setIsCorrect(result.correct)
    setShowFeedback(true)

    // Calculer le temps de réponse
    const responseTime = (Date.now() - questionStartTime.current) / 1000 // En secondes

    // 🆕 TRACKER LA TENTATIVE POUR L'ANALYSE ML
    const profileId = activeProfile?.name || 'unknown'
    const profileType = session?.role === 'guest' ? 'guest' : 'student'

    // Démarrer une session si nécessaire
    if (!currentSession) {
      startSession(profileId, selectedExercise.difficulty)
    }

    // 📊 ENREGISTRER DANS LE SYSTÈME ADAPTATIF (ML)
    const adaptiveResult = recordAnswer(result.correct, responseTime, hintsUsed.length)
    console.log('[ExerciseBrowser] 📊 ML adaptatif:', {
      isCorrect: result.correct,
      responseTime: responseTime.toFixed(1) + 's',
      emotionalState: adaptiveResult.emotionalState,
      difficulty: currentSession?.currentDifficulty
    })

    recordAttempt({
      profileId,
      profileType,
      exerciseId: selectedExercise.id,
      subject: selectedExercise.subject,
      level: level,
      skills: selectedExercise.skills,
      difficulty: selectedExercise.difficulty,
      questionId: currentQuestion.id,
      questionText: currentQuestion.question,
      userAnswer: userAnswer,
      correctAnswer: Array.isArray(currentQuestion.correctAnswer)
        ? currentQuestion.correctAnswer[0]
        : currentQuestion.correctAnswer,
      isCorrect: result.correct,
      hintsUsed: hintsUsed.length,
      timeSpent: responseTime
    })

    if (result.correct && !usedHint3) {
      // Point gagné seulement si la réponse est correcte ET l'indice 3 n'a pas été utilisé
      setScore(score + 1)
      setCompletedQuestions(prev => new Set(prev).add(currentQuestion.id))
    } else if (result.correct && usedHint3) {
      // Bonne réponse mais indice 3 utilisé = pas de point
      console.log('[ExerciseBrowser] Bonne réponse mais indice 3 utilisé - pas de point')
      setCompletedQuestions(prev => new Set(prev).add(currentQuestion.id))
      // Note: L'XP et les stats sont maintenant donnés à la FIN de l'exercice uniquement
    }
  }

  const handleNextQuestion = () => {
    if (!selectedExercise) return

    // Reset le timer pour la prochaine question
    questionStartTime.current = Date.now()

    if (currentQuestionIndex < selectedExercise.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setUserAnswer('')
      setShowFeedback(false)
      setHintsUsed([])
      setUsedHint3(false) // Reset l'état de l'indice 3 pour la nouvelle question
    } else {
      // Fin de l'exercice
      handleExerciseComplete()
    }
  }

  const handleExerciseComplete = () => {
    if (!selectedExercise) return

    const totalQuestions = selectedExercise.questions.length
    const percentage = Math.round((score / totalQuestions) * 100)

    // ✅ Compter UN exercice terminé (pas une question)
    incrementExercises()

    // ✅ Compter les bonnes réponses de cet exercice
    // Le score représente le nombre de bonnes réponses dans cet exercice
    for (let i = 0; i < score; i++) {
      incrementCorrectAnswers()
    }

    // ✅ XP basé sur le résultat de l'exercice COMPLET
    // Base: 20 XP par exercice terminé
    // Bonus selon le pourcentage de réussite
    let xpGained = 20 // XP de base pour avoir terminé l'exercice

    if (percentage >= 90) {
      xpGained += 30 // Excellent : +30 XP bonus
    } else if (percentage >= 70) {
      xpGained += 20 // Bien : +20 XP bonus
    } else if (percentage >= 50) {
      xpGained += 10 // Passable : +10 XP bonus
    }
    // Moins de 50% : seulement les 20 XP de base

    // Multiplicateur selon la difficulté de l'exercice
    xpGained = Math.round(xpGained * (1 + (selectedExercise.difficulty - 1) * 0.2))

    addExperience(xpGained)
    console.log(`[ExerciseBrowser] Exercice terminé ! Score: ${percentage}%, XP gagné: ${xpGained}`)

    // Afficher le modal de résultat
    setShowResultModal(true)
  }

  const handleCloseResultModal = () => {
    setShowResultModal(false)
    setSelectedExercise(null)
    setSelectedSubject(null)
  }

  const showHint = (hintIndex: number) => {
    if (!hintsUsed.includes(hintIndex)) {
      setHintsUsed([...hintsUsed, hintIndex])
    }
  }

  // Vue : Liste des matières
  if (!selectedSubject) {
    // Filtrer les exercices recommandés
    const allExercises = availableSubjects.flatMap(subject =>
      getExercisesByLevelAndSubject(level, subject)
    )

    const recommendedExercises = analysis.topWeaknesses.length > 0
      ? allExercises.filter(ex =>
          ex.skills.some(skill =>
            analysis.topWeaknesses.some(w => w.skill.toLowerCase().includes(skill.toLowerCase()))
          )
        ).slice(0, 3)
      : []

    return (
      <div className="h-full overflow-y-auto">
        <div className="p-8 pt-24 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Bibliothèque d'Exercices</h1>
          <p className="text-muted-foreground">
            Choisis une matière pour t'entraîner (Niveau : {level})
          </p>
        </div>

        {/* Recommandations personnalisées */}
        {recommendedExercises.length > 0 && (
          <Card className="border-2 border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                Recommandations pour toi
              </CardTitle>
              <CardDescription>
                Cap'taine a détecté que tu peux t'améliorer sur ces exercices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recommendedExercises.map(exercise => (
                <Card
                  key={exercise.id}
                  className="cursor-pointer hover:border-primary transition-all"
                  onClick={() => {
                    // Trouver la matière de l'exercice
                    const subject = availableSubjects.find(s =>
                      getExercisesByLevelAndSubject(level, s).some(ex => ex.id === exercise.id)
                    )
                    if (subject) {
                      setSelectedSubject(subject)
                    }
                  }}
                >
                  <CardContent className="py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{exercise.title}</p>
                        <p className="text-xs text-muted-foreground">{exercise.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          {DIFFICULTY_LABELS[exercise.difficulty]}
                        </span>
                        <Button size="sm">Essayer</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableSubjects.map(subject => (
            <Card
              key={subject}
              className="cursor-pointer hover:border-primary transition-all hover:scale-105"
              onClick={() => handleSubjectSelect(subject)}
            >
              <CardHeader>
                <CardTitle className="text-xl">{SUBJECT_LABELS[subject]}</CardTitle>
                <CardDescription>
                  {exerciseCounts[subject]} exercice{exerciseCounts[subject] > 1 ? 's' : ''} disponible{exerciseCounts[subject] > 1 ? 's' : ''}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Commencer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {availableSubjects.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">
                Aucun exercice disponible pour le niveau {level} pour le moment.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                D'autres exercices seront ajoutés bientôt !
              </p>
            </CardContent>
          </Card>
        )}
        </div>
      </div>
    )
  }

  // Vue : Liste des exercices d'une matière
  if (selectedSubject && !selectedExercise) {
    const exercises = getExercisesByLevelAndSubject(level, selectedSubject)

    return (
      <div className="h-full overflow-y-auto">
        <div className="p-8 pt-24 space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSelectedSubject(null)}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{SUBJECT_LABELS[selectedSubject]}</h1>
            <p className="text-muted-foreground">Choisis un exercice</p>
          </div>
        </div>

        <div className="space-y-4">
          {exercises.map(exercise => (
            <Card key={exercise.id} className="hover:border-primary transition-all">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{exercise.title}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {DIFFICULTY_LABELS[exercise.difficulty]}
                  </span>
                </CardTitle>
                <CardDescription>{exercise.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{exercise.estimatedTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    <span>{exercise.questions.length} question{exercise.questions.length > 1 ? 's' : ''}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exercise.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => handleExerciseStart(exercise, false)}
                  >
                    <Book className="w-4 h-4 mr-2" />
                    Exercice normal
                  </Button>
                  <Button
                    className="flex-1 bg-orange-500 hover:bg-orange-600"
                    onClick={() => handleExerciseStart(exercise, true)}
                  >
                    <Swords className="w-4 h-4 mr-2" />
                    VS Cap'taine
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </div>
    )
  }

  // Vue : Mode VS Cap'taine
  if (selectedExercise && vsMode) {
    return (
      <VSCaptainMode
        exercise={selectedExercise}
        onExit={() => {
          setSelectedExercise(null)
          setVsMode(false)
        }}
      />
    )
  }

  // Vue : Question active
  if (selectedExercise) {
    const currentQuestion = selectedExercise.questions[currentQuestionIndex]
    const progress = ((currentQuestionIndex + 1) / selectedExercise.questions.length) * 100

    return (
      <div className="h-full overflow-y-auto">
        <div className="p-8 pt-24 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowQuitConfirm(true)}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">{selectedExercise.title}</h1>
              <p className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} / {selectedExercise.questions.length}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-bold">{score} / {selectedExercise.questions.length}</span>
            </div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-slate-800 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>

              {/* Multiple choice - Options mélangées aléatoirement */}
              {currentQuestion.type === 'multiple-choice' && shuffledOptions.length > 0 && (
                <div className="space-y-2">
                  {shuffledOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => setUserAnswer(option)}
                      disabled={showFeedback}
                      className={cn(
                        'w-full text-left p-4 rounded-lg border-2 transition-all',
                        userAnswer === option
                          ? 'border-primary bg-primary/10'
                          : 'border-slate-700 hover:border-slate-600',
                        showFeedback && 'cursor-not-allowed opacity-50'
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {/* Open ended / Fill blank */}
              {(currentQuestion.type === 'open-ended' || currentQuestion.type === 'fill-blank') && (
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={showFeedback}
                  placeholder="Tape ta réponse ici..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !showFeedback) {
                      handleAnswerSubmit()
                    }
                  }}
                />
              )}

              {/* True/False */}
              {currentQuestion.type === 'true-false' && (
                <div className="flex gap-4">
                  <button
                    onClick={() => setUserAnswer('Vrai')}
                    disabled={showFeedback}
                    className={cn(
                      'flex-1 p-4 rounded-lg border-2 transition-all',
                      userAnswer === 'Vrai'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-slate-700 hover:border-slate-600',
                      showFeedback && 'cursor-not-allowed opacity-50'
                    )}
                  >
                    ✓ Vrai
                  </button>
                  <button
                    onClick={() => setUserAnswer('Faux')}
                    disabled={showFeedback}
                    className={cn(
                      'flex-1 p-4 rounded-lg border-2 transition-all',
                      userAnswer === 'Faux'
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-slate-700 hover:border-slate-600',
                      showFeedback && 'cursor-not-allowed opacity-50'
                    )}
                  >
                    ✗ Faux
                  </button>
                </div>
              )}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={cn(
                'p-4 rounded-lg border-2',
                isCorrect
                  ? 'bg-green-500/10 border-green-500'
                  : 'bg-red-500/10 border-red-500'
              )}>
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold mb-2">
                      {isCorrect ? '✅ Bravo !' : '❌ Pas tout à fait...'}
                    </p>
                    <p className="text-sm">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Hints - Système à 3 niveaux */}
            {!showFeedback && currentQuestion.hints && currentQuestion.hints.length > 0 && (
              <div className="space-y-2">
                {currentQuestion.hints.map((hint, index) => {
                  const isHint3 = index === 2 // L'indice 3 donne la réponse
                  const hintLabel = index === 0 ? '💡 Indice 1 - Comprendre'
                                  : index === 1 ? '🧠 Indice 2 - Se souvenir'
                                  : '🎁 Indice 3 - La réponse'

                  return (
                    <div key={index}>
                      {hintsUsed.includes(index) ? (
                        <div className={cn(
                          'p-3 rounded-lg text-sm flex items-start gap-2',
                          isHint3
                            ? 'bg-red-500/10 border border-red-500/30'
                            : 'bg-yellow-500/10 border border-yellow-500/30'
                        )}>
                          <Lightbulb className={cn(
                            'w-4 h-4 flex-shrink-0 mt-0.5',
                            isHint3 ? 'text-red-500' : 'text-yellow-500'
                          )} />
                          <div>
                            <span>{hint}</span>
                            {isHint3 && (
                              <p className="text-red-400 text-xs mt-2 italic">
                                C'est pas grave {activeProfile?.name || 'champion'}, tu ne gagneras pas de point cette fois mais tu as appris quelque chose ! La prochaine fois, tu y arriveras sans aide ! 💪
                              </p>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              showHint(index)
                              if (isHint3) setUsedHint3(true) // Marquer que l'indice 3 a été utilisé
                            }}
                            className={cn(
                              isHint3
                                ? 'text-red-500 border-red-500/30 hover:bg-red-500/10'
                                : 'text-yellow-500 border-yellow-500/30 hover:bg-yellow-500/10'
                            )}
                          >
                            <Lightbulb className="w-4 h-4 mr-2" />
                            {hintLabel}
                            {isHint3 && <span className="ml-2 text-xs">(0 point)</span>}
                          </Button>
                          {isHint3 && !hintsUsed.includes(index) && (
                            <p className="text-red-400 text-xs mt-2 ml-1 max-w-md">
                              ⚠️ Attends {activeProfile?.name || 'champion'} ! Si tu utilises cet indice, tu ne gagneras pas de point...
                              Prends ton temps, relis les choix, pose-toi les bonnes questions. Tu vas y arriver ! 🌟
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4">
              {!showFeedback ? (
                <Button
                  onClick={handleAnswerSubmit}
                  disabled={!userAnswer.trim()}
                  className="flex-1"
                >
                  Valider
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  className="flex-1"
                >
                  {currentQuestionIndex < selectedExercise.questions.length - 1
                    ? 'Question suivante'
                    : 'Terminer l\'exercice'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
        {/* Modal de résultat */}
        <ResultModal
          isOpen={showResultModal}
          onClose={handleCloseResultModal}
          score={score}
          total={selectedExercise.questions.length}
          percentage={Math.round((score / selectedExercise.questions.length) * 100)}
        />

        {/* Modal de confirmation pour quitter */}
        <ConfirmModal
          isOpen={showQuitConfirm}
          onClose={() => setShowQuitConfirm(false)}
          onConfirm={() => setSelectedExercise(null)}
          title="Abandonner l'exercice ?"
          message="Tu perdras ta progression sur cet exercice. Tu es sûr(e) de vouloir quitter ?"
          confirmText="Oui, quitter"
          cancelText="Non, continuer"
          variant="warning"
        />
        </div>
      </div>
    )
  }

  return null
}
