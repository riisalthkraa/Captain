import { useState } from 'react'
import { Trophy, Target, Flame, Star, Award, Heart, Filter } from 'lucide-react'
import { useGamificationStore } from '@/store/useGamificationStore'
import { useAppStore } from '@/store/useAppStore'
import { useAuthStore } from '@/store/useAuthStore'
import { useGuestProfileStore } from '@/store/useGuestProfileStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { SkillsAnalysis } from './SkillsAnalysis'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'

// Couleurs par rareté
const RARITY_COLORS = {
  common: 'border-slate-500 bg-slate-500/10',
  rare: 'border-blue-500 bg-blue-500/10',
  epic: 'border-purple-500 bg-purple-500/10',
  legendary: 'border-yellow-500 bg-yellow-500/10 shadow-lg shadow-yellow-500/20',
}

const RARITY_LABELS = {
  common: 'Commun',
  rare: 'Rare',
  epic: 'Épique',
  legendary: 'Légendaire',
}

// Couleurs par catégorie
const CATEGORY_LABELS = {
  progression: 'Progression',
  matiere: 'Matières',
  defi: 'Défis',
  social: 'Social',
  fun: 'Fun',
  special: 'Spécial',
}

// Fonction pour calculer la progression des badges
type BadgeProgress = { current: number; target: number; percent: number } | null

function getBadgeProgress(
  badgeId: string,
  stats: { level: number; totalExercises: number; correctAnswers: number; streak: number }
): BadgeProgress {
  const { level, totalExercises, correctAnswers, streak } = stats

  // Map des badges avec leurs conditions trackables
  const progressMap: Record<string, { current: number; target: number }> = {
    // Progression (niveaux)
    '1': { current: totalExercises, target: 1 },
    '9': { current: level, target: 10 },
    '15': { current: level, target: 25 },
    '16': { current: level, target: 50 },
    '17': { current: level, target: 100 },

    // Série & régularité
    '3': { current: correctAnswers, target: 7 },
    '18': { current: correctAnswers, target: 15 },
    '19': { current: correctAnswers, target: 25 },
    '20': { current: correctAnswers, target: 50 },
    '5': { current: streak, target: 5 },
    '13': { current: streak, target: 30 },
    '21': { current: streak, target: 100 },

    // Exploration
    '10': { current: 0, target: 50 }, // Questions à Cap'taine (pas encore tracké)
    '47': { current: totalExercises, target: 1000 },

    // Fun
    '33': { current: totalExercises, target: 500 },
    '36': { current: 0, target: 5 }, // Refaire même exercice (pas encore tracké)

    // Défis
    '12': { current: Math.min(totalExercises, 10), target: 10 }, // Approximation
    '27': { current: correctAnswers, target: 50 },
  }

  const progress = progressMap[badgeId]
  if (!progress) return null

  const percent = Math.min(100, Math.round((progress.current / progress.target) * 100))
  return { ...progress, percent }
}

export function Dashboard() {
  const { currentStudent } = useAppStore()
  const { session } = useAuthStore()
  const { currentProfile } = useGuestProfileStore()
  const {
    badges,
    totalExercises,
    correctAnswers,
    streak,
    treeProgress,
    favoriteBadges,
    toggleFavoriteBadge
  } = useGamificationStore()

  // Filtres pour les badges
  const [badgeFilter, setBadgeFilter] = useState<'all' | 'unlocked' | 'locked'>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  const activeProfile = session?.role === 'guest' && currentProfile
    ? currentProfile
    : currentStudent

  const profileId = activeProfile?.name || 'unknown'

  const stats = [
    {
      name: 'Exercices terminés',
      value: totalExercises,
      icon: Target,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      name: 'Bonnes réponses',
      value: correctAnswers,
      icon: Star,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      name: 'Jours de suite',
      value: streak,
      icon: Flame,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ]

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8 pt-24 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Tableau de bord de {activeProfile?.name || 'l\'élève'}
        </h1>
        <p className="text-muted-foreground">
          Voici ta progression et tes réussites ! Continue comme ça ! 🎉
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.name}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={cn('p-3 rounded-lg', stat.bgColor)}>
                    <stat.icon className={cn('w-6 h-6', stat.color)} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tree progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Ton arbre de progression
          </CardTitle>
          <CardDescription>
            Plus tu travailles, plus ton arbre grandit !
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Niveau {treeProgress.level}</span>
              <span className="text-sm text-muted-foreground">
                {treeProgress.experience} / {treeProgress.maxExperience} XP
              </span>
            </div>
            <div className="relative h-4 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(treeProgress.experience / treeProgress.maxExperience) * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"
              />
            </div>
            <div className="flex items-center justify-center py-8">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-8xl"
              >
                {/* L'arbre évolue avec le niveau */}
                {treeProgress.level < 5 && '🌱'} {/* Pousse */}
                {treeProgress.level >= 5 && treeProgress.level < 10 && '🌿'} {/* Jeune plante */}
                {treeProgress.level >= 10 && treeProgress.level < 15 && '🌳'} {/* Arbre */}
                {treeProgress.level >= 15 && treeProgress.level < 20 && '🌲'} {/* Grand arbre */}
                {treeProgress.level >= 20 && '🌴'} {/* Arbre majestueux */}
              </motion.div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              {treeProgress.level < 5 && 'Ta graine commence à pousser ! 🌱'}
              {treeProgress.level >= 5 && treeProgress.level < 10 && 'Ta plante grandit bien ! 🌿'}
              {treeProgress.level >= 10 && treeProgress.level < 15 && 'Ton arbre est magnifique ! 🌳'}
              {treeProgress.level >= 15 && treeProgress.level < 20 && 'Ton arbre est grand et fort ! 🌲'}
              {treeProgress.level >= 20 && 'Ton arbre est majestueux ! 🌴'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Analyse des compétences (ML) */}
      <SkillsAnalysis profileId={profileId} />

      {/* Badges */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-500" />
                Mes badges
                <span className="text-sm font-normal text-muted-foreground">
                  ({badges.filter(b => b.unlockedAt).length}/{badges.length})
                </span>
              </CardTitle>
              <CardDescription>
                Clique sur le coeur pour choisir tes 3 badges favoris !
              </CardDescription>
            </div>
            {/* Filtres */}
            <div className="flex gap-2">
              <select
                value={badgeFilter}
                onChange={(e) => setBadgeFilter(e.target.value as any)}
                className="text-xs bg-slate-800 border border-slate-700 rounded px-2 py-1"
              >
                <option value="all">Tous</option>
                <option value="unlocked">Débloqués</option>
                <option value="locked">Verrouillés</option>
              </select>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="text-xs bg-slate-800 border border-slate-700 rounded px-2 py-1"
              >
                <option value="all">Toutes catégories</option>
                {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Badges favoris en vedette */}
          {favoriteBadges.length > 0 && (
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                Mes badges favoris
              </h4>
              <div className="flex gap-4 justify-center">
                {badges.filter(b => favoriteBadges.includes(b.id) && b.unlockedAt).map((badge) => (
                  <div key={badge.id} className="text-center">
                    <div className="text-4xl mb-1">{badge.icon}</div>
                    <span className="text-xs font-medium">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grille de tous les badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {badges
              .filter(badge => {
                if (badgeFilter === 'unlocked' && !badge.unlockedAt) return false
                if (badgeFilter === 'locked' && badge.unlockedAt) return false
                if (categoryFilter !== 'all' && badge.category !== categoryFilter) return false
                return true
              })
              .map((badge, index) => {
                const isFavorite = favoriteBadges.includes(badge.id)
                const canAddFavorite = favoriteBadges.length < 3 || isFavorite
                const progress = !badge.unlockedAt ? getBadgeProgress(badge.id, {
                  level: treeProgress.level,
                  totalExercises,
                  correctAnswers,
                  streak
                }) : null

                return (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: Math.min(index * 0.02, 0.5) }}
                    className={cn(
                      'relative p-4 rounded-lg border-2 text-center transition-all cursor-pointer group',
                      badge.unlockedAt
                        ? RARITY_COLORS[badge.rarity || 'common']
                        : 'border-slate-700 bg-slate-800/50 opacity-60'
                    )}
                  >
                    {/* Bouton favori */}
                    {badge.unlockedAt && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          if (canAddFavorite) toggleFavoriteBadge(badge.id)
                        }}
                        className={cn(
                          'absolute top-1 right-1 p-1 rounded-full transition-all',
                          isFavorite
                            ? 'text-pink-500'
                            : 'text-slate-500 opacity-0 group-hover:opacity-100 hover:text-pink-400'
                        )}
                        title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                      >
                        <Heart className={cn('w-4 h-4', isFavorite && 'fill-current')} />
                      </button>
                    )}

                    {/* Badge rareté */}
                    <div className={cn(
                      'absolute top-1 left-1 text-[8px] px-1.5 py-0.5 rounded font-medium',
                      badge.rarity === 'legendary' && 'bg-yellow-500/30 text-yellow-400',
                      badge.rarity === 'epic' && 'bg-purple-500/30 text-purple-400',
                      badge.rarity === 'rare' && 'bg-blue-500/30 text-blue-400',
                      badge.rarity === 'common' && 'bg-slate-500/30 text-slate-400',
                    )}>
                      {RARITY_LABELS[badge.rarity || 'common']}
                    </div>

                    <div className={cn("text-3xl mb-1 mt-3", !badge.unlockedAt && "grayscale")}>{badge.icon}</div>
                    <h3 className="font-semibold text-xs mb-0.5">{badge.name}</h3>
                    <p className="text-[10px] text-muted-foreground line-clamp-2">{badge.description}</p>

                    {/* Barre de progression pour badges verrouillés */}
                    {!badge.unlockedAt && progress && (
                      <div className="mt-2">
                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all",
                              progress.percent >= 75 ? "bg-green-500" :
                              progress.percent >= 50 ? "bg-yellow-500" :
                              progress.percent >= 25 ? "bg-orange-500" : "bg-slate-500"
                            )}
                            style={{ width: `${progress.percent}%` }}
                          />
                        </div>
                        <p className="text-[9px] text-muted-foreground mt-0.5">
                          {progress.current}/{progress.target}
                        </p>
                      </div>
                    )}

                    {/* Checkmark si débloqué */}
                    {badge.unlockedAt && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px]"
                      >
                        ✓
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}
