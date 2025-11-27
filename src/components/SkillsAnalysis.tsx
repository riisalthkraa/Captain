/**
 * Composant d'analyse des compétences - VERSION AMÉLIORÉE
 * Affiche les forces, faiblesses et compétences en cours d'acquisition
 * Avec classement, priorité et option d'expansion
 */

import { useState } from 'react'
import { TrendingUp, TrendingDown, Target, AlertCircle, ChevronDown, ChevronUp, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'
import { useExerciseTracking, type SkillStats } from '@/services/exerciseTracking'
import { useErrorPatterns } from '@/services/errorPatternDetector'

interface SkillsAnalysisProps {
  profileId: string
}

// Nombre d'éléments à afficher par défaut (étendu = tout afficher)
const DEFAULT_DISPLAY = 5

export function SkillsAnalysis({ profileId }: SkillsAnalysisProps) {
  const { analyzeProfile, getProfileAttempts } = useExerciseTracking()
  const { getTopPatterns, getPatternStats } = useErrorPatterns()
  const analysis = analyzeProfile(profileId)
  const attempts = getProfileAttempts(profileId)

  // Récupérer les patterns d'erreurs ML
  const errorPatterns = getTopPatterns(profileId, 5)
  const patternStats = getPatternStats(profileId)

  // États pour l'expansion de chaque section
  const [expandStrengths, setExpandStrengths] = useState(false)
  const [expandWeaknesses, setExpandWeaknesses] = useState(false)
  const [expandInProgress, setExpandInProgress] = useState(false)

  if (analysis.totalAttempts === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-500" />
            Analyse de tes compétences
          </CardTitle>
          <CardDescription>
            Fais quelques exercices pour que Cap'taine puisse analyser tes forces et faiblesses !
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  // Recalculer toutes les compétences avec plus de détails
  const skillMap = new Map<string, {
    skill: string
    subject: string
    totalAttempts: number
    correctAttempts: number
    successRate: number
    lastAttempt: Date
    trend: 'improving' | 'declining' | 'stable'
  }>()

  // Analyser toutes les tentatives pour extraire les compétences
  attempts.forEach(attempt => {
    attempt.skills.forEach(skill => {
      const key = `${skill}-${attempt.subject}`
      const existing = skillMap.get(key)

      if (existing) {
        existing.totalAttempts++
        if (attempt.correct) existing.correctAttempts++
        existing.successRate = Math.round((existing.correctAttempts / existing.totalAttempts) * 100)
        if (new Date(attempt.timestamp) > existing.lastAttempt) {
          existing.lastAttempt = new Date(attempt.timestamp)
        }
      } else {
        skillMap.set(key, {
          skill,
          subject: attempt.subject,
          totalAttempts: 1,
          correctAttempts: attempt.correct ? 1 : 0,
          successRate: attempt.correct ? 100 : 0,
          lastAttempt: new Date(attempt.timestamp),
          trend: 'stable'
        })
      }
    })
  })

  // Convertir en tableau et trier
  const allSkills = Array.from(skillMap.values())
    .filter(s => s.totalAttempts >= 2) // Au moins 2 tentatives pour être significatif

  // Catégoriser les compétences
  const strengths = allSkills
    .filter(s => s.successRate >= 75)
    .sort((a, b) => b.successRate - a.successRate)

  const weaknesses = allSkills
    .filter(s => s.successRate < 50)
    .sort((a, b) => a.successRate - b.successRate) // Pire en premier = priorité

  const inProgress = allSkills
    .filter(s => s.successRate >= 50 && s.successRate < 75)
    .sort((a, b) => a.successRate - b.successRate) // Proche de 50% = priorité

  const getLevelColor = (successRate: number) => {
    if (successRate >= 90) return 'bg-green-500/20 border-green-500 text-green-400'
    if (successRate >= 75) return 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
    if (successRate >= 60) return 'bg-yellow-500/20 border-yellow-500 text-yellow-400'
    if (successRate >= 50) return 'bg-orange-500/20 border-orange-500 text-orange-400'
    if (successRate >= 30) return 'bg-red-500/20 border-red-500 text-red-400'
    return 'bg-red-600/20 border-red-600 text-red-500'
  }

  const getLevel = (successRate: number) => {
    if (successRate >= 90) return { label: 'Expert', emoji: '🏆' }
    if (successRate >= 75) return { label: 'Maîtrisé', emoji: '✨' }
    if (successRate >= 60) return { label: 'En cours', emoji: '📚' }
    if (successRate >= 50) return { label: 'À travailler', emoji: '💪' }
    if (successRate >= 30) return { label: 'Difficile', emoji: '⚠️' }
    return { label: 'Prioritaire', emoji: '🚨' }
  }

  // Composant pour une carte de compétence avec rang
  const SkillCard = ({ skill, rank, showPriority = false }: {
    skill: typeof allSkills[0],
    rank: number,
    showPriority?: boolean
  }) => {
    const level = getLevel(skill.successRate)

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: rank * 0.05 }}
        className={cn(
          'p-3 rounded-lg border-2 relative',
          getLevelColor(skill.successRate)
        )}
      >
        {/* Badge de rang/priorité */}
        <div className={cn(
          'absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold',
          showPriority ? 'bg-red-500 text-white' : 'bg-slate-700 text-white'
        )}>
          {rank}
        </div>

        <div className="flex items-start justify-between ml-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">{skill.skill}</span>
              <span className="text-xs opacity-75">({skill.subject})</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="font-medium">{skill.successRate}%</span>
              <span className="opacity-75">
                {skill.correctAttempts}/{skill.totalAttempts}
              </span>
            </div>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full bg-black/20 whitespace-nowrap">
            {level.emoji} {level.label}
          </span>
        </div>

        {/* Barre de progression */}
        <div className="mt-2 ml-4 h-1.5 bg-black/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.successRate}%` }}
            transition={{ delay: rank * 0.05 + 0.2, duration: 0.4 }}
            className="h-full bg-current"
          />
        </div>
      </motion.div>
    )
  }

  // Composant section extensible
  const ExpandableSection = ({
    title,
    description,
    icon: Icon,
    iconColor,
    skills,
    expanded,
    setExpanded,
    showPriority = false,
    emptyMessage
  }: {
    title: string
    description: string
    icon: any
    iconColor: string
    skills: typeof allSkills
    expanded: boolean
    setExpanded: (v: boolean) => void
    showPriority?: boolean
    emptyMessage: string
  }) => {
    const displayedSkills = expanded ? skills : skills.slice(0, DEFAULT_DISPLAY)
    const hasMore = skills.length > DEFAULT_DISPLAY

    if (skills.length === 0) {
      return (
        <Card className="opacity-60">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Icon className={cn('w-5 h-5', iconColor)} />
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{emptyMessage}</p>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-base">
                <Icon className={cn('w-5 h-5', iconColor)} />
                {title}
                <span className="text-xs font-normal text-muted-foreground">
                  ({skills.length} compétence{skills.length > 1 ? 's' : ''})
                </span>
              </CardTitle>
              <CardDescription className="text-xs mt-1">{description}</CardDescription>
            </div>
            {hasMore && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded transition-colors"
              >
                {expanded ? (
                  <>
                    <ChevronUp className="w-3 h-3" />
                    Réduire
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3 h-3" />
                    Voir tout ({skills.length})
                  </>
                )}
              </button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <AnimatePresence>
              {displayedSkills.map((skill, index) => (
                <SkillCard
                  key={`${skill.skill}-${skill.subject}`}
                  skill={skill}
                  rank={index + 1}
                  showPriority={showPriority}
                />
              ))}
            </AnimatePresence>
          </div>
          {hasMore && !expanded && (
            <p className="text-xs text-muted-foreground text-center mt-3">
              + {skills.length - DEFAULT_DISPLAY} autres compétences
            </p>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Vue d'ensemble */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Target className="w-5 h-5 text-blue-500" />
            Vue d'ensemble
          </CardTitle>
          <CardDescription className="text-xs">
            Basée sur {analysis.totalAttempts} exercices • {allSkills.length} compétences analysées
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-around">
            {/* Cercle de progression */}
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48" cy="48" r="40"
                  stroke="currentColor" strokeWidth="6" fill="none"
                  className="text-slate-700"
                />
                <circle
                  cx="48" cy="48" r="40"
                  stroke="currentColor" strokeWidth="6" fill="none"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - analysis.successRate / 100)}`}
                  className={cn(
                    'transition-all duration-1000',
                    analysis.successRate >= 75 ? 'text-green-500' :
                      analysis.successRate >= 50 ? 'text-yellow-500' : 'text-red-500'
                  )}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{analysis.successRate}%</span>
                <span className="text-[10px] text-muted-foreground">Réussite</span>
              </div>
            </div>

            {/* Stats rapides */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-500" />
                <span>Forces: {strengths.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-orange-500" />
                <span>En cours: {inProgress.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500" />
                <span>À travailler: {weaknesses.length}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Faiblesses EN PREMIER - Priorité de travail */}
      <ExpandableSection
        title="Priorités de travail"
        description="Compétences à travailler en priorité (classées par urgence)"
        icon={TrendingDown}
        iconColor="text-red-500"
        skills={weaknesses}
        expanded={expandWeaknesses}
        setExpanded={setExpandWeaknesses}
        showPriority={true}
        emptyMessage="Aucune faiblesse détectée ! Continue comme ça !"
      />

      {/* En cours d'acquisition - ORANGE */}
      <ExpandableSection
        title="En cours d'acquisition"
        description="Compétences en progression (50-74%) - Presque acquises !"
        icon={Zap}
        iconColor="text-orange-500"
        skills={inProgress}
        expanded={expandInProgress}
        setExpanded={setExpandInProgress}
        emptyMessage="Travaille encore un peu pour avoir des compétences ici"
      />

      {/* Forces */}
      <ExpandableSection
        title="Tes forces"
        description="Compétences maîtrisées (75%+) - Bravo !"
        icon={TrendingUp}
        iconColor="text-green-500"
        skills={strengths}
        expanded={expandStrengths}
        setExpanded={setExpandStrengths}
        emptyMessage="Continue à t'entraîner pour avoir des forces !"
      />

      {/* Recommandations intelligentes basées sur les patterns ML */}
      {(errorPatterns.length > 0 || weaknesses.length > 0) && (
        <Card className="border-2 border-primary/50 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertCircle className="w-5 h-5 text-primary" />
              Conseils de Cap'taine
              {errorPatterns.length > 0 && (
                <span className="text-xs font-normal text-muted-foreground ml-2">
                  ({patternStats.active} pattern{patternStats.active > 1 ? 's' : ''} détecté{patternStats.active > 1 ? 's' : ''})
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Patterns d'erreurs détectés par ML */}
            {errorPatterns.length > 0 && (
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Erreurs récurrentes détectées :
                </p>
                {errorPatterns.slice(0, 3).map((pattern, index) => (
                  <div key={pattern.id} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-xs flex-shrink-0">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-sm">{pattern.description}</span>
                          <span className="text-xs px-1.5 py-0.5 bg-slate-700 rounded">
                            {pattern.occurrences}x
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({pattern.subject})
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Recommandations spécifiques du pattern */}
                    <ul className="ml-7 space-y-1">
                      {pattern.recommendations.slice(0, 2).map((rec, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                    {/* Exemple concret */}
                    {pattern.examples.length > 0 && (
                      <div className="ml-7 mt-2 text-xs text-slate-500 italic">
                        Ex: "{pattern.examples[pattern.examples.length - 1].question}"
                        → tu as répondu "{pattern.examples[pattern.examples.length - 1].userAnswer}"
                        au lieu de "{pattern.examples[pattern.examples.length - 1].correctAnswer}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Fallback: conseils généraux si pas de patterns détectés */}
            {errorPatterns.length === 0 && weaknesses.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Compétences à renforcer :
                </p>
                <ul className="space-y-2 text-sm">
                  {weaknesses.slice(0, 3).map((skill, index) => (
                    <li key={skill.skill} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>
                        <strong>{skill.skill}</strong> ({skill.subject}) - {skill.successRate}% de réussite
                        <span className="text-muted-foreground">
                          {skill.successRate < 30 ? ' - Reprends les bases' :
                            skill.successRate < 40 ? ' - Revois la méthode' : ' - Continue les exercices'}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Astuce générale */}
            <div className="pt-2 border-t border-slate-700 text-xs text-muted-foreground">
              Utilise <code className="bg-slate-700 px-1 rounded">/quiz</code> dans le chat pour t'entraîner sur tes faiblesses !
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
