import { useEffect } from 'react'
import { TitleBar } from './components/TitleBar'
import { Sidebar } from './components/Sidebar'
import { ChatInterface } from './components/ChatInterface'
import { Dashboard } from './components/Dashboard'
import { Settings } from './components/Settings'
import { LoginScreen } from './components/LoginScreen'
import { TeacherDashboard } from './components/TeacherDashboard'
import { StudentHomeworks } from './components/StudentHomeworks'
import { ExerciseBrowser } from './components/ExerciseBrowser'
import { MiniGames } from './components/MiniGames'
import { useAppStore } from './store/useAppStore'
import { useAuthStore } from './store/useAuthStore'
import { motion, AnimatePresence } from 'framer-motion'
import { aiManager } from './services/aiProviders'
import { useSyncProgression } from './hooks/useSyncProgression'

function App() {
  const { currentView } = useAppStore()
  const { isAuthenticated, isTeacher, session } = useAuthStore()

  // Synchroniser automatiquement la progression avec le profil actuel
  useSyncProgression()

  useEffect(() => {
    // Load saved AI provider configurations
    console.log('[App] Loading AI configs...')
    aiManager.loadConfigs()
    console.log('[App] AI configs loaded:', aiManager.getAllConfigs())
  }, [])

  const renderView = () => {
    // Si c'est un prof, afficher le dashboard prof en vue principale
    if (isTeacher()) {
      switch (currentView) {
        case 'settings':
          return <Settings />
        case 'dashboard':
        case 'chat':
        default:
          return <TeacherDashboard />
      }
    }

    // Si c'est un élève ou invité, afficher l'interface élève/invité
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'settings':
        return <Settings />
      case 'exercises':
        return <ExerciseBrowser />
      case 'games':
        return <MiniGames />
      case 'homeworks':
        // Les invités n'ont pas accès aux devoirs (fonctionnalité école)
        if (session?.role === 'guest') {
          return (
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-hidden">
                <ChatInterface />
              </div>
            </div>
          )
        }
        return <StudentHomeworks />
      default:
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-hidden">
              <ChatInterface />
            </div>
          </div>
        )
    }
  }

  // Si pas authentifié, afficher l'écran de login
  if (!isAuthenticated()) {
    return <LoginScreen />
  }

  // Sinon, afficher l'interface principale
  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default App
