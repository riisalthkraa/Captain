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

      // Normaliser les réponses pour comparaison
      const normalize = (str: string) => str.toLowerCase().trim()

      if (ex.type === 'QCM') {
        if (normalize(answer as string) === normalize(ex.correctAnswer as string)) {
          score += ex.difficulty * 20
        }
      } else if (ex.type === 'TRUE_FALSE') {
        if (normalize(answer as string) === normalize(ex.correctAnswer as string)) {
          score += ex.difficulty * 20
        }
      } else if (ex.type === 'FILL_BLANK' || ex.type === 'OPEN') {
        const correctAnswers = Array.isArray(ex.correctAnswer)
          ? ex.correctAnswer
          : [ex.correctAnswer]

        const isCorrect = correctAnswers.some(correct =>
          normalize(answer as string).includes(normalize(correct))
        )

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

              {/* Indices */}
              {homework.allowHints && currentExercise.hints && currentExercise.hints.length > 0 && (
                <div className="mb-6">
                  {!showHint ? (
                    <button
                      onClick={() => {
                        setShowHint(true)
                        setHintLevel(0)
                      }}
                      className="flex items-center gap-2 px-4 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 transition-colors"
                    >
                      <Lightbulb className="w-5 h-5" />
                      Besoin d'aide ? Voir un indice
                    </button>
                  ) : (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-blue-400 mb-2">
                            Indice {hintLevel + 1}/{currentExercise.hints.length}
                          </p>
                          <p className="text-sm">{currentExercise.hints[hintLevel]}</p>
                          {hintLevel < currentExercise.hints.length - 1 && (
                            <button
                              onClick={() => setHintLevel(hintLevel + 1)}
                              className="text-xs text-blue-400 hover:text-blue-300 mt-2 underline"
                            >
                              Voir l'indice suivant →
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
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
