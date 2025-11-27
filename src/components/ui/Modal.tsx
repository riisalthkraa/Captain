/**
 * MODAL COMPONENT
 * Modal élégant et réutilisable pour remplacer les alerts natives
 */

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from './Button'
import { cn } from '@/lib/cn'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showCloseButton?: boolean
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  size = 'md',
  showCloseButton = true
}: ModalProps) {
  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Bloquer le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className={cn(
                'bg-slate-900 rounded-xl shadow-2xl border border-slate-800 w-full pointer-events-auto',
                sizeClasses[size],
                className
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              {(title || showCloseButton) && (
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                  {title && (
                    <h2 className="text-2xl font-bold">{title}</h2>
                  )}
                  {showCloseButton && (
                    <button
                      onClick={onClose}
                      className="ml-auto text-muted-foreground hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

// Composant spécialisé pour les résultats d'exercices
interface ResultModalProps {
  isOpen: boolean
  onClose: () => void
  score: number
  total: number
  percentage: number
  onRetry?: () => void
  onContinue?: () => void
}

export function ResultModal({
  isOpen,
  onClose,
  score,
  total,
  percentage,
  onRetry,
  onContinue
}: ResultModalProps) {
  const getEmoji = () => {
    if (percentage >= 90) return '🎉'
    if (percentage >= 80) return '✨'
    if (percentage >= 60) return '👍'
    if (percentage >= 40) return '💪'
    return '📚'
  }

  const getMessage = () => {
    if (percentage >= 90) return 'EXCELLENT ! Tu es un champion !'
    if (percentage >= 80) return 'Très bien ! Continue comme ça !'
    if (percentage >= 60) return 'Bien joué ! Tu progresses !'
    if (percentage >= 40) return 'C\'est un bon début, continue à t\'entraîner !'
    return 'N\'abandonne pas ! La pratique rend meilleur !'
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" showCloseButton={false}>
      <div className="text-center space-y-6">
        {/* Emoji animé */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="text-8xl"
        >
          {getEmoji()}
        </motion.div>

        {/* Titre */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Exercice terminé !</h2>
          <p className="text-xl text-muted-foreground">{getMessage()}</p>
        </div>

        {/* Score */}
        <div className="bg-slate-800 rounded-xl p-6 space-y-4">
          <div className="text-6xl font-bold text-primary">
            {score}/{total}
          </div>
          <div className="text-2xl font-semibold">
            {percentage}%
          </div>

          {/* Barre de progression */}
          <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className={cn(
                'h-full rounded-full',
                percentage >= 80 ? 'bg-green-500' :
                percentage >= 60 ? 'bg-blue-500' :
                percentage >= 40 ? 'bg-orange-500' :
                'bg-red-500'
              )}
            />
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-3">
          {onRetry && (
            <Button
              variant="outline"
              onClick={onRetry}
              className="flex-1"
            >
              Recommencer
            </Button>
          )}
          <Button
            onClick={onContinue || onClose}
            className="flex-1"
          >
            {onContinue ? 'Continuer' : 'Fermer'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

// Composant spécialisé pour les résultats VS Cap'taine
interface VSResultModalProps {
  isOpen: boolean
  onClose: () => void
  playerScore: number
  captainScore: number
  total: number
  playerTime: number
  captainTime: number
  xpGained?: number
}

export function VSResultModal({
  isOpen,
  onClose,
  playerScore,
  captainScore,
  total,
  playerTime,
  captainTime,
  xpGained
}: VSResultModalProps) {
  const winner = playerScore > captainScore ? 'player' :
                 captainScore > playerScore ? 'captain' :
                 playerTime < captainTime ? 'player' : 'captain'

  const isPlayerWinner = winner === 'player'
  const isTie = playerScore === captainScore && playerTime === captainTime

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" showCloseButton={false}>
      <div className="space-y-6">
        {/* Titre avec animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="text-center"
        >
          <div className="text-8xl mb-4">
            {isTie ? '🤝' : isPlayerWinner ? '🎉' : '🤖'}
          </div>
          <h2 className="text-4xl font-bold mb-2">
            {isTie ? 'ÉGALITÉ !' : isPlayerWinner ? 'VICTOIRE !' : 'Cap\'taine gagne !'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {isTie ? 'Match nul ! Vous êtes de force égale !' :
             isPlayerWinner ? 'Félicitations ! Tu as battu Cap\'taine !' :
             'Cap\'taine était plus fort cette fois !'}
          </p>
        </motion.div>

        {/* Scores comparatifs */}
        <div className="grid grid-cols-2 gap-4">
          {/* Score joueur */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={cn(
              'p-6 rounded-xl border-2',
              isPlayerWinner
                ? 'bg-green-500/20 border-green-500'
                : 'bg-slate-800 border-slate-700'
            )}
          >
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Toi</div>
              <div className="text-5xl font-bold mb-2">{playerScore}</div>
              <div className="text-sm text-muted-foreground">
                sur {total}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Temps: {playerTime}s
              </div>
            </div>
          </motion.div>

          {/* Score Cap'taine */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={cn(
              'p-6 rounded-xl border-2',
              !isPlayerWinner && !isTie
                ? 'bg-orange-500/20 border-orange-500'
                : 'bg-slate-800 border-slate-700'
            )}
          >
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Cap'taine</div>
              <div className="text-5xl font-bold mb-2">{captainScore}</div>
              <div className="text-sm text-muted-foreground">
                sur {total}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Temps: {captainTime}s
              </div>
            </div>
          </motion.div>
        </div>

        {/* XP Gagné */}
        {xpGained && xpGained > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-4 text-center"
          >
            <div className="text-2xl font-bold text-blue-400">
              +{xpGained} XP
            </div>
            <div className="text-sm text-muted-foreground">
              Bonus de victoire !
            </div>
          </motion.div>
        )}

        {/* Bouton de fermeture */}
        <Button onClick={onClose} className="w-full">
          Terminer
        </Button>
      </div>
    </Modal>
  )
}
