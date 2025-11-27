import { MessageSquare, BarChart3, Settings, BookOpen, Trophy, Menu, LogOut, ClipboardList, Dumbbell } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { useAuthStore } from '@/store/useAuthStore'
import { useGamificationStore } from '@/store/useGamificationStore'
import { cn } from '@/lib/cn'
import { motion } from 'framer-motion'

export function Sidebar() {
  const { currentView, setCurrentView, isSidebarOpen, toggleSidebar, teacherMode, setTeacherMode } = useAppStore()
  const { session, logout, isTeacher } = useAuthStore()
  const { treeProgress, badges, favoriteBadges } = useGamificationStore()

  // Navigation différente selon le rôle
  const navigation = isTeacher()
    ? [
        { id: 'chat', name: 'Dashboard', icon: BarChart3 },
        { id: 'settings', name: 'Réglages', icon: Settings },
      ]
    : session?.role === 'guest'
    ? [
        { id: 'chat', name: 'Chat', icon: MessageSquare },
        { id: 'exercises', name: 'Exercices', icon: Dumbbell },
        { id: 'games', name: 'Mini-Jeux', icon: Trophy },
        { id: 'dashboard', name: 'Progression', icon: BarChart3 },
        { id: 'settings', name: 'Réglages', icon: Settings },
      ]
    : [
        { id: 'chat', name: 'Chat', icon: MessageSquare },
        { id: 'homeworks', name: 'Mes Devoirs', icon: ClipboardList },
        { id: 'exercises', name: 'Exercices', icon: Dumbbell },
        { id: 'games', name: 'Mini-Jeux', icon: Trophy },
        { id: 'dashboard', name: 'Progression', icon: BarChart3 },
        { id: 'settings', name: 'Réglages', icon: Settings },
      ]

  const unlockedBadgesCount = badges.filter((b) => b.unlockedAt).length

  if (!isSidebarOpen) {
    return (
      <div className="w-16 h-screen bg-slate-900 border-r border-slate-800 flex flex-col items-center py-4 gap-4">
        <button onClick={toggleSidebar} className="p-2 hover:bg-slate-800 rounded-lg">
          <Menu className="w-6 h-6" />
        </button>
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id as any)}
            className={cn(
              'p-3 rounded-lg transition-colors relative',
              currentView === item.id
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-slate-800'
            )}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 280 }}
      className="w-[280px] h-screen bg-slate-900 border-r border-slate-800 flex flex-col overflow-hidden"
    >
      {/* Header - Fixe en haut avec espace pour la barre de titre */}
      <div className="px-3 pt-12 pb-2 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="text-2xl">⛵</div>
          <div>
            <h2 className="font-bold text-sm">Cap'taine</h2>
            <p className="text-[10px] text-muted-foreground">Ton prof IA</p>
          </div>
        </div>
        <button onClick={toggleSidebar} className="p-1.5 hover:bg-slate-800 rounded-lg">
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Zone scrollable */}
      <div className="flex-1 overflow-y-auto">
        {/* Progress overview - Seulement pour les élèves */}
        {!isTeacher() && (
          <>
            <div className="p-4 border-b border-slate-800">
              <div className="bg-slate-800 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Niveau {treeProgress.level}</span>
                  <Trophy className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(treeProgress.experience / treeProgress.maxExperience) * 100}%` }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{treeProgress.experience} XP</span>
                  <span>{treeProgress.maxExperience} XP</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Badges:</span>
                  <span className="font-medium">{unlockedBadgesCount}/{badges.length}</span>
                </div>

                {/* Badges favoris */}
                {favoriteBadges.length > 0 && (
                  <div className="pt-2 border-t border-slate-700">
                    <p className="text-[10px] text-muted-foreground mb-2">Mes favoris</p>
                    <div className="flex gap-2 justify-center">
                      {badges
                        .filter(b => favoriteBadges.includes(b.id) && b.unlockedAt)
                        .map((badge) => (
                          <div
                            key={badge.id}
                            className="text-center"
                            title={`${badge.name}: ${badge.description}`}
                          >
                            <span className="text-2xl">{badge.icon}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Teacher Mode - Seulement pour les élèves */}
            <div className="p-4 border-b border-slate-800">
              <p className="text-xs font-medium text-muted-foreground mb-2">Mode professeur</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTeacherMode('gentil')}
                  className={cn(
                    'p-3 rounded-lg text-sm font-medium transition-all',
                    teacherMode === 'gentil'
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                      : 'bg-slate-800 hover:bg-slate-700'
                  )}
                >
                  💙 Gentil
                </button>
                <button
                  onClick={() => setTeacherMode('exigeant')}
                  className={cn(
                    'p-3 rounded-lg text-sm font-medium transition-all',
                    teacherMode === 'exigeant'
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                      : 'bg-slate-800 hover:bg-slate-700'
                  )}
                >
                  💪 Exigeant
                </button>
              </div>
            </div>
          </>
        )}

        {/* Navigation */}
        <div className="p-4 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as any)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all',
                currentView === item.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'hover:bg-slate-800'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* User info & Logout - Fixe en bas */}
      <div className="p-4 border-t border-slate-800 space-y-3 flex-shrink-0">
        {/* User info */}
        <div className="flex items-center gap-3 px-3 py-2 bg-slate-800/50 rounded-lg">
          <div className="flex-1">
            <p className="text-sm font-medium">{session?.displayName}</p>
            <p className="text-xs text-muted-foreground">
              {session?.role === 'teacher' ? '👨‍🏫 Professeur' : '👤 Élève'}
            </p>
          </div>
        </div>

        {/* Logout button */}
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Déconnexion</span>
        </button>

        {/* Quick tip */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium text-blue-400 mb-1">Astuce du jour</p>
              <p className="text-xs text-muted-foreground">
                Prends ton temps pour réfléchir avant de répondre. L'important est de comprendre ! 🌟
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
