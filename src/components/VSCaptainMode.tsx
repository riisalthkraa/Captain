/**
 * MODE VS CAP'TAINE
 * Défi en temps réel contre l'IA Cap'taine
 * Avec timer, score, et réponses de l'IA
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swords, Timer, Trophy, Zap, ArrowLeft } from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent } from './ui/Card'
import { VSResultModal } from './ui/Modal'
import { ConfirmModal } from './ui/ConfirmModal'
import { cn } from '@/lib/cn'
import { aiManager } from '@/services/aiProviders'
import type { Exercise, ExerciseQuestion } from '@/services/exerciseLibrary'
import { useGamificationStore } from '@/store/useGamificationStore'
import { useExerciseTracking } from '@/services/exerciseTracking'
import { useAppStore } from '@/store/useAppStore'
import { useAuthStore } from '@/store/useAuthStore'
import { useGuestProfileStore } from '@/store/useGuestProfileStore'

interface VSCaptainModeProps {
  exercise: Exercise
  onExit: () => void
}

interface PlayerScore {
  correct: number
  wrong: number
  totalTime: number
}

export function VSCaptainMode({ exercise, onExit }: VSCaptainModeProps) {
  const { addExperience, incrementExercises, incrementCorrectAnswers } = useGamificationStore()
  const { currentStudent } = useAppStore()
  const { session } = useAuthStore()
  const { currentProfile } = useGuestProfileStore()

  const activeProfile = session?.role === 'guest' && currentProfile
    ? { name: currentProfile.name, age: currentProfile.age, level: currentProfile.level }
    : currentStudent

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [aiAnswer, setAiAnswer] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30) // 30 secondes par question
  const [isProcessing, setIsProcessing] = useState(false)
  const [showFinalModal, setShowFinalModal] = useState(false)
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]) // Options mélangées
  const [showQuitConfirm, setShowQuitConfirm] = useState(false) // Modal confirmation quitter

  const [playerScore, setPlayerScore] = useState<PlayerScore>({
    correct: 0,
    wrong: 0,
    totalTime: 0
  })

  const [captainScore, setCaptainScore] = useState<PlayerScore>({
    correct: 0,
    wrong: 0,
    totalTime: 0
  })

  const currentQuestion = exercise.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === exercise.questions.length - 1

  // Mélanger les options à chaque nouvelle question
  useEffect(() => {
    if (currentQuestion?.options && currentQuestion.options.length > 0) {
      const shuffled = [...currentQuestion.options].sort(() => Math.random() - 0.5)
      setShuffledOptions(shuffled)
    } else {
      setShuffledOptions([])
    }
  }, [currentQuestionIndex, currentQuestion])

  // Timer countdown
  useEffect(() => {
    if (showResults || timeLeft <= 0) return

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [showResults, timeLeft])

  // Temps écoulé en secondes
  const timeElapsed = 30 - timeLeft

  const handleTimeUp = async () => {
    if (showResults) return
    await handleSubmit(true)
  }

  const handleSubmit = async (timeUp = false) => {
    if (isProcessing) return

    setIsProcessing(true)
    setShowResults(true)

    // Générer la réponse de Cap'taine via IA
    const aiResponse = await generateAIAnswer(currentQuestion)

    // Évaluer les réponses
    const userCorrect = checkUserAnswer(currentQuestion, userAnswer)
    const aiCorrect = aiResponse.correct

    // Mettre à jour les scores
    setPlayerScore(prev => ({
      correct: prev.correct + (userCorrect ? 1 : 0),
      wrong: prev.wrong + (userCorrect ? 0 : 1),
      totalTime: prev.totalTime + timeElapsed
    }))

    setCaptainScore(prev => ({
      correct: prev.correct + (aiCorrect ? 1 : 0),
      wrong: prev.wrong + (aiCorrect ? 0 : 1),
      totalTime: prev.totalTime + aiResponse.timeUsed
    }))

    setAiAnswer(aiResponse.answer)
    setIsProcessing(false)
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      handleGameOver()
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setUserAnswer('')
      setAiAnswer('')
      setShowResults(false)
      setTimeLeft(30)
    }
  }

  const handleGameOver = () => {
    // Calculer le gagnant
    let winner: 'player' | 'captain' | 'tie'

    if (playerScore.correct > captainScore.correct) {
      winner = 'player'
    } else if (captainScore.correct > playerScore.correct) {
      winner = 'captain'
    } else {
      // En cas d'égalité, le plus rapide gagne
      winner = playerScore.totalTime < captainScore.totalTime ? 'player' : 'captain'
    }

    // ✅ Compter UN exercice terminé (mode VS compte aussi)
    incrementExercises()

    // ✅ Compter les bonnes réponses
    for (let i = 0; i < playerScore.correct; i++) {
      incrementCorrectAnswers()
    }

    // ✅ XP basé sur le résultat
    const percentage = Math.round((playerScore.correct / exercise.questions.length) * 100)
    let xpGained = 20 // XP de base

    if (percentage >= 90) {
      xpGained += 30
    } else if (percentage >= 70) {
      xpGained += 20
    } else if (percentage >= 50) {
      xpGained += 10
    }

    // Bonus si victoire contre Cap'taine
    if (winner === 'player') {
      xpGained += 25 // Bonus victoire
    }

    // Multiplicateur difficulté
    xpGained = Math.round(xpGained * (1 + (exercise.difficulty - 1) * 0.2))

    addExperience(xpGained)
    console.log(`[VSCaptainMode] Défi terminé ! Score: ${percentage}%, Victoire: ${winner}, XP gagné: ${xpGained}`)

    // Afficher le modal de résultats
    setShowFinalModal(true)
  }

  const handleCloseFinalModal = () => {
    setShowFinalModal(false)
    onExit()
  }

  const checkUserAnswer = (question: ExerciseQuestion, answer: string): boolean => {
    const correctAnswers = Array.isArray(question.correctAnswer)
      ? question.correctAnswer
      : [question.correctAnswer]

    // Fonction de normalisation avancée
    const normalizeAdvanced = (str: string): string => {
      let normalized = str.toLowerCase().trim()
      normalized = normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Supprime accents
      normalized = normalized.replace(/[.,;:!?'"()]/g, '') // Supprime ponctuation
      normalized = normalized.replace(/\s+/g, ' ') // Normalise espaces
      return normalized
    }

    // Détermine si on doit enlever les pronoms/articles selon la matière
    const subjectLower = (exercise.subject || '').toLowerCase()
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

    const userNorm = removeLeadingWords(normalizeAdvanced(answer))

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

  const generateAIAnswer = async (question: ExerciseQuestion): Promise<{
    answer: string
    correct: boolean
    timeUsed: number
  }> => {
    // Simuler un temps de réponse de l'IA (entre 5 et 15 secondes pour laisser une chance à l'enfant)
    const baseTime = 5 + Math.floor(Math.random() * 10)
    // Ajuster selon la difficulté : plus c'est difficile, plus l'IA met du temps
    const aiTime = baseTime + (exercise.difficulty * 2)

    // Demander à l'IA de répondre (avec possibilité d'erreur pour le rendre challengeant)
    try {
      const prompt = `Tu es Cap'taine, un assistant éducatif qui participe à un défi contre un élève.

Question : ${question.question}
${question.options ? `Options : ${question.options.join(', ')}` : ''}

Réponds UNIQUEMENT avec ta réponse (rien d'autre).

IMPORTANT : Tu as ${70 - exercise.difficulty * 5}% de chances de répondre correctement pour rendre le jeu équitable et motiver l'enfant.
Si tu dois te tromper, donne une réponse plausible mais incorrecte (choisis une mauvaise option si c'est un QCM).`

      const response = await aiManager.chat([
        {
          role: 'user',
          content: prompt
        }
      ])

      if (!response.success || !response.content) {
        // Fallback : donner une réponse aléatoire
        if (question.options && question.options.length > 0) {
          return {
            answer: question.options[Math.floor(Math.random() * question.options.length)],
            correct: Math.random() > 0.3,
            timeUsed: aiTime
          }
        }
      }

      const aiAnswer = response.content?.trim() || ''
      const correct = checkUserAnswer(question, aiAnswer)

      return {
        answer: aiAnswer,
        correct,
        timeUsed: aiTime
      }
    } catch (error) {
      // En cas d'erreur, donner une réponse random
      if (question.options && question.options.length > 0) {
        const randomAnswer = question.options[Math.floor(Math.random() * question.options.length)]
        return {
          answer: randomAnswer,
          correct: checkUserAnswer(question, randomAnswer),
          timeUsed: aiTime
        }
      }

      return {
        answer: '???',
        correct: false,
        timeUsed: aiTime
      }
    }
  }

  return (
    <div className="p-8 space-y-6 overflow-y-auto h-full">
      {/* Header */}
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
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Swords className="w-6 h-6 text-orange-500" />
              VS Cap'taine
            </h1>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} / {exercise.questions.length}
            </p>
          </div>
        </div>

        {/* Timer */}
        <div className={cn(
          'flex items-center gap-2 text-2xl font-bold px-4 py-2 rounded-lg',
          timeLeft <= 5 ? 'bg-red-500/20 text-red-500 animate-pulse' :
          timeLeft <= 10 ? 'bg-orange-500/20 text-orange-500' :
          'bg-blue-500/20 text-blue-500'
        )}>
          <Timer className="w-6 h-6" />
          <span>{timeLeft}s</span>
        </div>
      </div>

      {/* Scores */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-blue-500/10 border-blue-500">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Toi</p>
                <p className="text-3xl font-bold">{playerScore.correct}</p>
              </div>
              <Trophy className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-500/10 border-orange-500">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cap'taine</p>
                <p className="text-3xl font-bold">{captainScore.correct}</p>
              </div>
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
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
                    disabled={showResults}
                    className={cn(
                      'w-full text-left p-4 rounded-lg border-2 transition-all',
                      userAnswer === option
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-slate-700 hover:border-slate-600',
                      showResults && 'cursor-not-allowed opacity-50'
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
                disabled={showResults}
                placeholder="Tape ta réponse ici..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !showResults && userAnswer.trim()) {
                    handleSubmit()
                  }
                }}
              />
            )}

            {/* True/False */}
            {currentQuestion.type === 'true-false' && (
              <div className="flex gap-4">
                <button
                  onClick={() => setUserAnswer('Vrai')}
                  disabled={showResults}
                  className={cn(
                    'flex-1 p-4 rounded-lg border-2 transition-all',
                    userAnswer === 'Vrai'
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-slate-700 hover:border-slate-600',
                    showResults && 'cursor-not-allowed opacity-50'
                  )}
                >
                  ✓ Vrai
                </button>
                <button
                  onClick={() => setUserAnswer('Faux')}
                  disabled={showResults}
                  className={cn(
                    'flex-1 p-4 rounded-lg border-2 transition-all',
                    userAnswer === 'Faux'
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-slate-700 hover:border-slate-600',
                    showResults && 'cursor-not-allowed opacity-50'
                  )}
                >
                  ✗ Faux
                </button>
              </div>
            )}
          </div>

          {/* Results comparison */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Votre réponse */}
                  <div className={cn(
                    'p-4 rounded-lg border-2',
                    checkUserAnswer(currentQuestion, userAnswer)
                      ? 'bg-green-500/10 border-green-500'
                      : 'bg-red-500/10 border-red-500'
                  )}>
                    <p className="text-sm text-muted-foreground mb-2">Ta réponse</p>
                    <p className="font-semibold">{userAnswer || '(pas de réponse)'}</p>
                    <p className="text-sm mt-2">
                      {checkUserAnswer(currentQuestion, userAnswer) ? '✅ Correct !' : '❌ Incorrect'}
                    </p>
                  </div>

                  {/* Réponse de Cap'taine */}
                  <div className={cn(
                    'p-4 rounded-lg border-2',
                    checkUserAnswer(currentQuestion, aiAnswer)
                      ? 'bg-green-500/10 border-green-500'
                      : 'bg-red-500/10 border-red-500'
                  )}>
                    <p className="text-sm text-muted-foreground mb-2">Réponse de Cap'taine</p>
                    <p className="font-semibold">{isProcessing ? '🤔 Réflexion...' : aiAnswer}</p>
                    {!isProcessing && (
                      <p className="text-sm mt-2">
                        {checkUserAnswer(currentQuestion, aiAnswer) ? '✅ Correct !' : '❌ Incorrect'}
                      </p>
                    )}
                  </div>
                </div>

                {/* Explication */}
                <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">💡 Explication</p>
                  <p className="text-sm">{currentQuestion.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex gap-4">
            {!showResults ? (
              <Button
                onClick={() => handleSubmit()}
                disabled={!userAnswer.trim() || isProcessing}
                className="flex-1"
              >
                Valider
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                className="flex-1"
                disabled={isProcessing}
              >
                {isLastQuestion ? 'Voir les résultats' : 'Question suivante'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Modal de résultats finaux */}
      <VSResultModal
        isOpen={showFinalModal}
        onClose={handleCloseFinalModal}
        playerScore={playerScore.correct}
        captainScore={captainScore.correct}
        total={exercise.questions.length}
        playerTime={playerScore.totalTime}
        captainTime={captainScore.totalTime}
        xpGained={playerScore.correct > captainScore.correct ? exercise.difficulty * 50 : 0}
      />

      {/* Modal de confirmation pour quitter */}
      <ConfirmModal
        isOpen={showQuitConfirm}
        onClose={() => setShowQuitConfirm(false)}
        onConfirm={onExit}
        title="Abandonner le défi ?"
        message="Tu es en plein combat contre Cap'taine ! Tu es sûr(e) de vouloir abandonner ?"
        confirmText="Oui, abandonner"
        cancelText="Non, continuer"
        variant="warning"
      />
    </div>
  )
}
