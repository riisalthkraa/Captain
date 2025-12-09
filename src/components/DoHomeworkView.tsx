// @ts-nocheck
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Lightbulb, Send, CheckCircle2, AlertCircle, Trophy } from 'lucide-react'
import { useAuthStore } from '@/store/useAuthStore'
import { dbV2 } from '@/services/databaseV2'
import type { Homework, Exercise, HomeworkSubmission } from '@/services/databaseV2'
import { updateStudentAnalytics } from '@/services/weaknessAnalyzer'
import { cn } from '@/lib/cn'

interface DoHomeworkViewProps {
  homework: Homework
  onClose: () => void
  onSubmit: () => void
}

export function DoHomeworkView({ homework, onClose, onSubmit }: DoHomeworkViewProps) {
  const { session } = useAuthStore()
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [showHint, setShowHint] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)
  const [usedHint3PerExercise, setUsedHint3PerExercise] = useState<Record<string, boolean>>({}) // Tracker l'indice 3 par exercice
  const [hintsUsedPerExercise, setHintsUsedPerExercise] = useState<Record<string, number[]>>({}) // Tracker tous les indices utilisés par exercice
  const [loading, setLoading] = useState(true)
  const [submission, setSubmission] = useState<HomeworkSubmission | null>(null)
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false)

  useEffect(() => {
    loadExercisesAndSubmission()
  }, [])

  async function loadExercisesAndSubmission() {
    setLoading(true)
    try {
      // Charger les exercices
      const exerciseIds = homework.exerciseIds || []
      const loadedExercises = await Promise.all(
        exerciseIds.map(id => dbV2.exercises.get(id))
      )
      setExercises(loadedExercises.filter(Boolean) as Exercise[])

      // Charger la soumission existante si elle existe
      if (session?.userId) {
        const existingSubmission = await dbV2.homeworkSubmissions
          .where('[studentId+homeworkId]')
          .equals([session.userId, homework.id])
          .first()

        if (existingSubmission) {
          setSubmission(existingSubmission)
          setAnswers(existingSubmission.answers || {})
        } else {
          // Créer une nouvelle soumission
          const newSubmission: HomeworkSubmission = {
            id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            homeworkId: homework.id,
            studentId: session.userId,
            answers: {},
            startedAt: new Date(),
          }
          await dbV2.homeworkSubmissions.add(newSubmission)
          setSubmission(newSubmission)
        }
      }
    } catch (error) {
      console.error('[DoHomeworkView] Error loading:', error)
    } finally {
      setLoading(false)
    }
  }

  async function saveAnswer(exerciseId: string, answer: string | string[]) {
    const newAnswers = { ...answers, [exerciseId]: answer }
    setAnswers(newAnswers)

    // Sauvegarder dans la base
    if (submission) {
      await dbV2.homeworkSubmissions.update(submission.id, {
        answers: newAnswers,
        lastSavedAt: new Date()
      })
    }
  }

  async function handleSubmit() {
    if (!submission) return

    try {
      // Calculer le score
      const { score, maxScore } = calculateScore()

      // XP basé sur le score
      const xpEarned = Math.round((score / maxScore) * homework.xpReward)

      // Soumettre
      await dbV2.homeworkSubmissions.update(submission.id, {
        submittedAt: new Date(),
        score: (score / maxScore) * 20, // Note sur 20
        xpEarned
      })

      // Mettre à jour les XP de l'élève
      if (session?.userId) {
        const student = await dbV2.students.get(session.userId)
        if (student) {
          await dbV2.students.update(session.userId, {
            xp: (student.xp || 0) + xpEarned
          })
        }

        // Analyser les faiblesses de l'élève
        await updateStudentAnalytics(session.userId)
      }

      onSubmit()
    } catch (error) {
      console.error('[DoHomeworkView] Error submitting:', error)
    }
  }

  function calculateScore() {
    let score = 0
    let maxScore = 0

    exercises.forEach(ex => {
      maxScore += ex.difficulty * 20
      const answer = answers[ex.id]

      if (!answer) return

      // Si l'indice 3 a été utilisé pour cet exercice, pas de point
      if (usedHint3PerExercise[ex.id]) {
        console.log('[DoHomeworkView] Indice 3 utilisé pour cet exercice - pas de point')
        return
      }

      // Fonction de normalisation avancée
      const normalizeAdvanced = (str: string): string => {
        // Convertir en minuscules et supprimer espaces
        let normalized = str.toLowerCase().trim()
        // Supprimer les accents
        normalized = normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        // Supprimer la ponctuation
        normalized = normalized.replace(/[.,;:!?'"()]/g, '')
        // Normaliser les espaces multiples
        normalized = normalized.replace(/\s+/g, ' ')
        return normalized
      }

      // Détermine si on doit enlever les pronoms/articles selon la matière du devoir
      const subjectLower = (homework.subject || currentExercise.subject || '').toLowerCase()
      const shouldRemoveLeadingWords =
        subjectLower.includes('français') ||
        subjectLower.includes('francais') ||
        subjectLower.includes('conjugaison') ||
        subjectLower.includes('grammaire')

      // Fonction pour enlever pronoms/articles UNIQUEMENT pour le français
      const removeLeadingWords = (str: string): string => {
        if (!shouldRemoveLeadingWords) {
          return str // Ne rien enlever pour arabe, anglais, histoire, géo, etc.
        }
        const frenchLeadingWords = [
          'je', 'j', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles',
          'le', 'la', 'les', 'l', 'un', 'une', 'des', 'du', 'de', 'd'
        ]
        const words = str.split(' ').filter(w => w.length > 0)
        if (words.length > 1 && frenchLeadingWords.includes(words[0])) {
          return words.slice(1).join(' ')
        }
        return str
      }

      if (ex.type === 'QCM') {
        const userNorm = normalizeAdvanced(answer as string)
        const correctNorm = normalizeAdvanced(ex.correctAnswer as string)
        if (userNorm === correctNorm || removeLeadingWords(userNorm) === removeLeadingWords(correctNorm)) {
          score += ex.difficulty * 20
        }
      } else if (ex.type === 'TRUE_FALSE') {
        const userNorm = normalizeAdvanced(answer as string)
        const correctNorm = normalizeAdvanced(ex.correctAnswer as string)
        if (userNorm === correctNorm) {
          score += ex.difficulty * 20
        }
      } else if (ex.type === 'FILL_BLANK' || ex.type === 'OPEN') {
        const correctAnswers = Array.isArray(ex.correctAnswer)
          ? ex.correctAnswer
          : [ex.correctAnswer]

        const userNorm = removeLeadingWords(normalizeAdvanced(answer as string))

        const isCorrect = correctAnswers.some(correct => {
          const correctNorm = removeLeadingWords(normalizeAdvanced(correct))
          // Comparaison exacte après normalisation
          if (userNorm === correctNorm) return true
          // Comparaison flexible (contient)
          if (userNorm.includes(correctNorm) && correctNorm.length >= 3) return true
          if (correctNorm.includes(userNorm) && userNorm.length >= 3) return true
          return false
        })

        if (isCorrect) {
          score += ex.difficulty * 20
        }
      }
    })

    return { score, maxScore }
  }

  function getProgress() {
    const answered = Object.keys(answers).length
    const total = exercises.length
    return total > 0 ? Math.round((answered / total) * 100) : 0
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement du devoir...</p>
        </div>
      </div>
    )
  }

  if (exercises.length === 0) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Erreur</h3>
          <p className="text-muted-foreground mb-4">Aucun exercice trouvé pour ce devoir.</p>
          <button onClick={onClose} className="px-4 py-2 bg-primary text-white rounded-lg">
            Retour
          </button>
        </div>
      </div>
    )
  }

  const currentExercise = exercises[currentIndex]
  const currentAnswer = answers[currentExercise.id]
  const progress = getProgress()
  const hintsUsed = hintsUsedPerExercise[currentExercise.id] || [] // Récupérer les indices utilisés pour cet exercice

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-slate-900/50 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              title="Fermer (sauvegarde automatique)"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold">{homework.title}</h1>
              <p className="text-sm text-muted-foreground">
                Exercice {currentIndex + 1} sur {exercises.length}
              </p>
            </div>
          </div>

          {/* Bouton soumettre */}
          {progress === 100 && !submission?.submittedAt && (
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <Send className="w-5 h-5" />
              Rendre le devoir
            </button>
          )}
        </div>

        {/* Barre de progression */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
      </div>

      {/* Contenu de l'exercice */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Question */}
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-8 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-2">
                      {currentExercise.subject} - Difficulté {currentExercise.difficulty}/5
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{currentExercise.question}</h2>
                  </div>
                  {currentAnswer && (
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  )}
                </div>

                {/* Réponse selon le type */}
                {currentExercise.type === 'QCM' && (
                  <div className="space-y-3">
                    {currentExercise.choices?.map((choice, idx) => (
                      <button
                        key={idx}
                        onClick={() => saveAnswer(currentExercise.id, choice)}
                        className={cn(
                          'w-full text-left px-6 py-4 rounded-lg border-2 transition-all',
                          currentAnswer === choice
                            ? 'border-primary bg-primary/10 text-primary font-medium'
                            : 'border-slate-700 hover:border-slate-600 bg-slate-800/50'
                        )}
                      >
                        <span className="font-mono text-sm mr-3 opacity-50">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        {choice}
                      </button>
                    ))}
                  </div>
                )}

                {currentExercise.type === 'TRUE_FALSE' && (
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => saveAnswer(currentExercise.id, 'Vrai')}
                      className={cn(
                        'px-6 py-4 rounded-lg border-2 font-medium transition-all',
                        currentAnswer === 'Vrai'
                          ? 'border-green-500 bg-green-500/10 text-green-400'
                          : 'border-slate-700 hover:border-slate-600 bg-slate-800/50'
                      )}
                    >
                      ✓ Vrai
                    </button>
                    <button
                      onClick={() => saveAnswer(currentExercise.id, 'Faux')}
                      className={cn(
                        'px-6 py-4 rounded-lg border-2 font-medium transition-all',
                        currentAnswer === 'Faux'
                          ? 'border-red-500 bg-red-500/10 text-red-400'
                          : 'border-slate-700 hover:border-slate-600 bg-slate-800/50'
                      )}
                    >
                      ✗ Faux
                    </button>
                  </div>
                )}

                {(currentExercise.type === 'FILL_BLANK' || currentExercise.type === 'OPEN') && (
                  <div>
                    <textarea
                      value={(currentAnswer as string) || ''}
                      onChange={(e) => saveAnswer(currentExercise.id, e.target.value)}
                      placeholder="Tape ta réponse ici..."
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border-2 bg-slate-800/50 transition-colors resize-none',
                        currentAnswer
                          ? 'border-primary'
                          : 'border-slate-700 focus:border-slate-600'
                      )}
                      rows={currentExercise.type === 'OPEN' ? 6 : 2}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      La réponse est sauvegardée automatiquement
                    </p>
                  </div>
                )}
              </div>

              {/* Indices - Système à 3 niveaux */}
              {homework.allowHints && currentExercise.hints && currentExercise.hints.length > 0 && (
                <div className="mb-6 space-y-2">
                  {currentExercise.hints.map((hint, index) => {
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
                                  C'est pas grave, tu ne gagneras pas de point cette fois mais tu as appris quelque chose ! La prochaine fois, tu y arriveras sans aide ! 💪
                                </p>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div>
                            <button
                              onClick={() => {
                                // Ajouter l'indice à la liste des indices utilisés pour cet exercice
                                setHintsUsedPerExercise({
                                  ...hintsUsedPerExercise,
                                  [currentExercise.id]: [...hintsUsed, index]
                                })
                                if (isHint3) {
                                  // Marquer que l'indice 3 a été utilisé pour cet exercice
                                  setUsedHint3PerExercise({
                                    ...usedHint3PerExercise,
                                    [currentExercise.id]: true
                                  })
                                }
                              }}
                              className={cn(
                                'flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors',
                                isHint3
                                  ? 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/30'
                                  : 'bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                              )}
                            >
                              <Lightbulb className="w-5 h-5" />
                              {hintLabel}
                              {isHint3 && <span className="ml-2 text-xs">(0 point)</span>}
                            </button>
                            {isHint3 && !hintsUsed.includes(index) && (
                              <p className="text-red-400 text-xs mt-2 ml-1 max-w-md">
                                ⚠️ Attention ! Si tu utilises cet indice, tu ne gagneras pas de point pour cette question...
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border bg-slate-900/50 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={() => {
              setCurrentIndex(Math.max(0, currentIndex - 1))
              setShowHint(false)
              setHintLevel(0)
            }}
            disabled={currentIndex === 0}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors',
              currentIndex === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-slate-800'
            )}
          >
            <ChevronLeft className="w-5 h-5" />
            Précédent
          </button>

          <div className="flex items-center gap-2">
            {exercises.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setShowHint(false)
                  setHintLevel(0)
                }}
                className={cn(
                  'w-8 h-8 rounded-full transition-all',
                  idx === currentIndex
                    ? 'bg-primary text-white'
                    : answers[exercises[idx].id]
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-slate-800 hover:bg-slate-700'
                )}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setCurrentIndex(Math.min(exercises.length - 1, currentIndex + 1))
              setShowHint(false)
              setHintLevel(0)
            }}
            disabled={currentIndex === exercises.length - 1}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors',
              currentIndex === exercises.length - 1
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-slate-800'
            )}
          >
            Suivant
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal de confirmation de soumission */}
      <AnimatePresence>
        {showSubmitConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSubmitConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-xl border border-slate-800 p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Rendre le devoir ?</h3>
                <p className="text-muted-foreground">
                  Tu as répondu à tous les exercices. Une fois rendu, tu ne pourras plus modifier tes réponses.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Exercices complétés</span>
                  <span className="font-medium">{Object.keys(answers).length}/{exercises.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">XP possible</span>
                  <span className="font-medium text-yellow-500">Jusqu'à {homework.xpReward} XP</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={() => {
                    setShowSubmitConfirm(false)
                    handleSubmit()
                  }}
                  className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                >
                  Confirmer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
