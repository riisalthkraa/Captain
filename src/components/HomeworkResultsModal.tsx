import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, CheckCircle2, XCircle, Trophy, Star, Lightbulb } from 'lucide-react'
import { dbV2 } from '@/services/databaseV2'
import type { Homework, Exercise, HomeworkSubmission } from '@/services/databaseV2'
import { cn } from '@/lib/cn'

interface HomeworkResultsModalProps {
  homework: Homework
  submission: HomeworkSubmission
  onClose: () => void
}

export function HomeworkResultsModal({ homework, submission, onClose }: HomeworkResultsModalProps) {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedExercise, setSelectedExercise] = useState<number>(0)

  useEffect(() => {
    loadExercises()
  }, [])

  async function loadExercises() {
    setLoading(true)
    try {
      const exerciseIds = homework.exerciseIds || []
      const loadedExercises = await Promise.all(
        exerciseIds.map(id => dbV2.exercises.get(id))
      )
      setExercises(loadedExercises.filter(Boolean) as Exercise[])
    } catch (error) {
      console.error('[HomeworkResultsModal] Error loading exercises:', error)
    } finally {
      setLoading(false)
    }
  }

  function checkAnswer(exercise: Exercise, answer: string | string[] | undefined): boolean {
    if (!answer) return false

    // Fonction de normalisation avancée
    const normalizeAdvanced = (str: string): string => {
      let normalized = str.toLowerCase().trim()
      normalized = normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Supprime accents
      normalized = normalized.replace(/[.,;:!?'"()]/g, '') // Supprime ponctuation
      normalized = normalized.replace(/\s+/g, ' ') // Normalise espaces
      return normalized
    }

    // Détermine si on doit enlever les pronoms/articles selon la matière du devoir
    const subjectLower = (homework.subject || exercise.subject || '').toLowerCase()
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

    if (exercise.type === 'QCM') {
      const userNorm = normalizeAdvanced(answer as string)
      const correctNorm = normalizeAdvanced(exercise.correctAnswer as string)
      return userNorm === correctNorm || removeLeadingWords(userNorm) === removeLeadingWords(correctNorm)
    }

    if (exercise.type === 'TRUE_FALSE') {
      const userNorm = normalizeAdvanced(answer as string)
      const correctNorm = normalizeAdvanced(exercise.correctAnswer as string)
      return userNorm === correctNorm
    }

    if (exercise.type === 'FILL_BLANK' || exercise.type === 'OPEN') {
      const correctAnswers = Array.isArray(exercise.correctAnswer)
        ? exercise.correctAnswer
        : [exercise.correctAnswer]

      const userNorm = removeLeadingWords(normalizeAdvanced(answer as string))

      return correctAnswers.some(correct => {
        const correctNorm = removeLeadingWords(normalizeAdvanced(correct))
        // Comparaison exacte
        if (userNorm === correctNorm) return true
        // Comparaison flexible
        if (userNorm.includes(correctNorm) && correctNorm.length >= 3) return true
        if (correctNorm.includes(userNorm) && userNorm.length >= 3) return true
        return false
      })
    }

    return false
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement des résultats...</p>
        </div>
      </div>
    )
  }

  const score = submission.score || 0
  const correctCount = exercises.filter(ex => checkAnswer(ex, submission.answers?.[ex.id])).length
  const totalCount = exercises.length

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 rounded-xl border border-slate-800 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-slate-800 p-6 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{homework.title}</h2>
              <p className="text-sm text-muted-foreground">
                Devoir rendu le {submission.submittedAt ? new Date(submission.submittedAt).toLocaleDateString('fr-FR') : '-'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Score */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {score.toFixed(1)}<span className="text-lg text-muted-foreground">/20</span>
              </div>
              <p className="text-xs text-muted-foreground">Note finale</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-500 mb-1">
                {correctCount}<span className="text-lg text-muted-foreground">/{totalCount}</span>
              </div>
              <p className="text-xs text-muted-foreground">Bonnes réponses</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-1">
                +{submission.xpEarned || 0}
              </div>
              <p className="text-xs text-muted-foreground">XP gagnés</p>
            </div>
          </div>

          {/* Message de félicitations */}
          {score >= 16 && (
            <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-yellow-400">Excellent travail !</p>
                <p className="text-sm text-muted-foreground">Tu as très bien réussi ce devoir. Continue comme ça !</p>
              </div>
            </div>
          )}

          {score >= 10 && score < 16 && (
            <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex items-center gap-3">
              <Star className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-400">Bon travail !</p>
                <p className="text-sm text-muted-foreground">Tu progresses bien. Regarde les corrections pour t'améliorer.</p>
              </div>
            </div>
          )}

          {score < 10 && (
            <div className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-orange-400 flex-shrink-0" />
              <div>
                <p className="font-medium text-orange-400">Continue tes efforts !</p>
                <p className="text-sm text-muted-foreground">Relis les corrections et n'hésite pas à demander de l'aide.</p>
              </div>
            </div>
          )}
        </div>

        {/* Liste des exercices */}
        <div className="flex-1 overflow-y-auto p-6">
          <h3 className="text-lg font-bold mb-4">Détail des réponses</h3>

          <div className="space-y-4">
            {exercises.map((exercise, idx) => {
              const studentAnswer = submission.answers?.[exercise.id]
              const isCorrect = checkAnswer(exercise, studentAnswer)

              return (
                <div
                  key={exercise.id}
                  className={cn(
                    'bg-slate-800/50 rounded-lg border-2 p-6 transition-all',
                    isCorrect ? 'border-green-500/30' : 'border-red-500/30'
                  )}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-muted-foreground">#{idx + 1}</span>
                        <h4 className="font-medium">{exercise.question}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {exercise.subject} • Difficulté {exercise.difficulty}/5
                      </p>
                    </div>
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    )}
                  </div>

                  {/* Réponse de l'élève */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Ta réponse :</p>
                    <div className={cn(
                      'px-4 py-3 rounded-lg',
                      isCorrect ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'
                    )}>
                      {studentAnswer || <em className="text-muted-foreground">Pas de réponse</em>}
                    </div>
                  </div>

                  {/* Bonne réponse si faux */}
                  {!isCorrect && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Bonne réponse :</p>
                      <div className="px-4 py-3 rounded-lg bg-green-500/10 text-green-300">
                        {Array.isArray(exercise.correctAnswer)
                          ? exercise.correctAnswer.join(', ')
                          : exercise.correctAnswer}
                      </div>
                    </div>
                  )}

                  {/* Explication */}
                  {homework.showCorrection !== 'manual' && exercise.explanation && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                      <p className="text-sm font-medium text-blue-400 mb-2">💡 Explication :</p>
                      <p className="text-sm text-muted-foreground">{exercise.explanation}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 p-4 bg-slate-900/50">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </div>
  )
}
