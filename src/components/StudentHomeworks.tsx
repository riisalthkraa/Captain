import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, CheckCircle2, Clock, AlertCircle, BookOpen, Trophy } from 'lucide-react'
import { useAuthStore } from '@/store/useAuthStore'
import { dbV2 } from '@/services/databaseV2'
import type { Homework, HomeworkSubmission } from '@/services/databaseV2'
import { DoHomeworkView } from './DoHomeworkView'
import { HomeworkResultsModal } from './HomeworkResultsModal'
import { cn } from '@/lib/cn'

interface HomeworkWithProgress extends Homework {
  submission?: HomeworkSubmission
  progress: number // 0-100
  status: 'not_started' | 'in_progress' | 'submitted' | 'graded' | 'late'
  exerciseCount: number
}

export function StudentHomeworks() {
  const { session } = useAuthStore()
  const [homeworks, setHomeworks] = useState<HomeworkWithProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'todo' | 'done'>('all')
  const [selectedHomework, setSelectedHomework] = useState<HomeworkWithProgress | null>(null)
  const [doingHomework, setDoingHomework] = useState<Homework | null>(null)

  useEffect(() => {
    if (session?.userId && session?.classroomId) {
      loadHomeworks()
    }
  }, [session])

  async function loadHomeworks() {
    if (!session?.classroomId || !session?.userId) return

    setLoading(true)
    try {
      // Charger tous les devoirs de la classe
      const allHomeworks = await dbV2.homeworks
        .where('classroomId')
        .equals(session.classroomId)
        .toArray()

      // Charger les soumissions de l'élève
      const submissions = await dbV2.homeworkSubmissions
        .where('studentId')
        .equals(session.userId)
        .toArray()

      // Enrichir les devoirs avec les infos de progression
      const enriched: HomeworkWithProgress[] = await Promise.all(
        allHomeworks.map(async (hw) => {
          const submission = submissions.find(s => s.homeworkId === hw.id)
          const exerciseCount = hw.exerciseIds?.length || 0

          let progress = 0
          let status: HomeworkWithProgress['status'] = 'not_started'

          if (submission) {
            const answeredCount = Object.keys(submission.answers || {}).length
            progress = exerciseCount > 0 ? Math.round((answeredCount / exerciseCount) * 100) : 0

            if (submission.submittedAt) {
              status = submission.score !== undefined ? 'graded' : 'submitted'
            } else if (progress > 0) {
              status = 'in_progress'
            }

            // Vérifier si en retard
            if (!submission.submittedAt && hw.dueDate && new Date() > new Date(hw.dueDate)) {
              status = 'late'
            }
          } else if (hw.dueDate && new Date() > new Date(hw.dueDate)) {
            status = 'late'
          }

          return {
            ...hw,
            submission,
            progress,
            status,
            exerciseCount
          }
        })
      )

      // Trier par date limite (plus proche en premier)
      enriched.sort((a, b) => {
        if (!a.dueDate) return 1
        if (!b.dueDate) return -1
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      })

      setHomeworks(enriched)
    } catch (error) {
      console.error('[StudentHomeworks] Error loading:', error)
    } finally {
      setLoading(false)
    }
  }

  function getFilteredHomeworks() {
    switch (filter) {
      case 'todo':
        return homeworks.filter(hw => hw.status !== 'submitted' && hw.status !== 'graded')
      case 'done':
        return homeworks.filter(hw => hw.status === 'submitted' || hw.status === 'graded')
      default:
        return homeworks
    }
  }

  function getStatusBadge(status: HomeworkWithProgress['status']) {
    switch (status) {
      case 'not_started':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-700 text-slate-300 text-xs">
            <Clock className="w-3 h-3" />
            À faire
          </span>
        )
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">
            <Clock className="w-3 h-3" />
            En cours
          </span>
        )
      case 'submitted':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">
            <CheckCircle2 className="w-3 h-3" />
            Rendu
          </span>
        )
      case 'graded':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
            <Trophy className="w-3 h-3" />
            Corrigé
          </span>
        )
      case 'late':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs">
            <AlertCircle className="w-3 h-3" />
            En retard
          </span>
        )
    }
  }

  function formatDueDate(dueDate: Date | undefined) {
    if (!dueDate) return 'Pas de date limite'

    const date = new Date(dueDate)
    const now = new Date()
    const diff = date.getTime() - now.getTime()
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))

    if (days < 0) {
      return `En retard de ${Math.abs(days)} jour${Math.abs(days) > 1 ? 's' : ''}`
    } else if (days === 0) {
      return "Aujourd'hui !"
    } else if (days === 1) {
      return 'Demain'
    } else if (days <= 7) {
      return `Dans ${days} jours`
    } else {
      return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
    }
  }

  const filteredHomeworks = getFilteredHomeworks()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement des devoirs...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border bg-slate-900/50 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Mes Devoirs
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {homeworks.length} devoir{homeworks.length > 1 ? 's' : ''} assigné{homeworks.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Filtres */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              )}
            >
              Tous ({homeworks.length})
            </button>
            <button
              onClick={() => setFilter('todo')}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                filter === 'todo'
                  ? 'bg-primary text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              )}
            >
              À faire ({homeworks.filter(hw => hw.status !== 'submitted' && hw.status !== 'graded').length})
            </button>
            <button
              onClick={() => setFilter('done')}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                filter === 'done'
                  ? 'bg-primary text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              )}
            >
              Terminés ({homeworks.filter(hw => hw.status === 'submitted' || hw.status === 'graded').length})
            </button>
          </div>
        </div>
      </div>

      {/* Liste des devoirs */}
      <div className="flex-1 overflow-y-auto p-6">
        {filteredHomeworks.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium text-muted-foreground mb-2">
              {filter === 'all' ? 'Aucun devoir' : filter === 'todo' ? 'Tous les devoirs sont faits !' : 'Aucun devoir terminé'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {filter === 'all'
                ? 'Ton professeur n\'a pas encore créé de devoir.'
                : filter === 'todo'
                ? 'Continue comme ça !'
                : 'Commence par faire tes devoirs en attente.'}
            </p>
          </div>
        ) : (
          <div className="grid gap-4 max-w-4xl mx-auto">
            {filteredHomeworks.map((hw, index) => (
              <motion.div
                key={hw.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  'bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-primary/50 transition-all cursor-pointer',
                  hw.status === 'late' && 'border-red-500/30 bg-red-500/5'
                )}
                onClick={() => {
                  // Ouvrir l'interface de soumission si pas encore rendu
                  if (hw.status !== 'graded' && hw.status !== 'submitted') {
                    setDoingHomework(hw)
                  } else if (hw.submission) {
                    // Sinon, voir les résultats
                    setSelectedHomework(hw)
                  }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{hw.title}</h3>
                      {getStatusBadge(hw.status)}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {hw.subject}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDueDate(hw.dueDate)}
                      </span>
                    </div>

                    {hw.description && (
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {hw.description}
                      </p>
                    )}
                  </div>

                  {/* Score si corrigé */}
                  {hw.status === 'graded' && hw.submission?.score !== undefined && (
                    <div className="ml-4 text-right">
                      <div className="text-3xl font-bold text-primary">
                        {hw.submission.score}
                        <span className="text-lg text-muted-foreground">/20</span>
                      </div>
                      {hw.submission.xpEarned && (
                        <div className="text-sm text-yellow-500 mt-1">
                          +{hw.submission.xpEarned} XP
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Barre de progression */}
                {hw.status !== 'graded' && hw.status !== 'submitted' && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>Progression</span>
                      <span>{hw.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${hw.progress}%` }}
                        className={cn(
                          'h-full rounded-full',
                          hw.progress === 100 ? 'bg-green-500' : 'bg-primary'
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Infos exercices */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      {hw.exerciseCount} exercice{hw.exerciseCount > 1 ? 's' : ''}
                    </span>
                    {hw.allowHints && (
                      <span className="text-blue-400">
                        💡 Indices disponibles
                      </span>
                    )}
                  </div>

                  <button
                    className={cn(
                      'px-4 py-2 rounded-lg font-medium transition-colors',
                      hw.status === 'graded' || hw.status === 'submitted'
                        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        : 'bg-primary text-white hover:bg-primary/90'
                    )}
                  >
                    {hw.status === 'graded'
                      ? 'Voir la correction'
                      : hw.status === 'submitted'
                      ? 'Voir mes réponses'
                      : hw.status === 'in_progress'
                      ? 'Continuer'
                      : 'Commencer'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de soumission de devoir */}
      <AnimatePresence>
        {doingHomework && (
          <DoHomeworkView
            homework={doingHomework}
            onClose={() => {
              setDoingHomework(null)
              loadHomeworks() // Recharger pour mettre à jour la progression
            }}
            onSubmit={() => {
              setDoingHomework(null)
              loadHomeworks() // Recharger pour voir le nouveau statut
            }}
          />
        )}
      </AnimatePresence>

      {/* Modal des résultats */}
      <AnimatePresence>
        {selectedHomework && selectedHomework.submission && (
          <HomeworkResultsModal
            homework={selectedHomework}
            submission={selectedHomework.submission}
            onClose={() => setSelectedHomework(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
