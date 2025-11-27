/**
 * Écran de login unifié (Élève & Professeur)
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'
import { useAuthStore } from '@/store/useAuthStore'
import { useGuestProfileStore } from '@/store/useGuestProfileStore'
import { useGamificationStore } from '@/store/useGamificationStore'
import { CaptainMascot } from './CaptainMascot'

type LoginMode = 'student' | 'teacher' | 'register' | 'guest'

export function LoginScreen() {
  const [mode, setMode] = useState<LoginMode>('guest')

  // Student form
  const [studentUsername, setStudentUsername] = useState('')
  const [classroomCode, setClassroomCode] = useState('')

  // Teacher form
  const [teacherEmail, setTeacherEmail] = useState('')
  const [teacherPassword, setTeacherPassword] = useState('')

  // Register form
  const [registerFirstName, setRegisterFirstName] = useState('')
  const [registerLastName, setRegisterLastName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  // Guest form
  const [guestName, setGuestName] = useState('')

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { loginStudent, loginTeacher, registerTeacher, loginGuest } = useAuthStore()
  const { selectProfile } = useGuestProfileStore()
  const { loadProgressionFromProfile } = useGamificationStore()

  const handleStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await loginStudent(studentUsername, classroomCode)

      if (!result.success) {
        setError(result.error || 'Erreur de connexion')
      }
    } catch (err: any) {
      setError(err.message || 'Erreur inattendue')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTeacherLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await loginTeacher(teacherEmail, teacherPassword)

      if (!result.success) {
        setError(result.error || 'Erreur de connexion')
      }
    } catch (err: any) {
      setError(err.message || 'Erreur inattendue')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGuestLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await loginGuest(guestName)

      if (!result.success) {
        setError(result.error || 'Erreur de connexion')
      } else {
        // Charger le profil correspondant si il existe
        const profile = selectProfile(guestName.trim())

        if (profile) {
          console.log('[Login] Profil invité chargé:', profile.name)
          // Charger la progression du profil dans le store de gamification
          if (profile.progression) {
            loadProgressionFromProfile(profile.progression)
          }
        } else {
          console.log('[Login] Nouveau profil invité, configure-le dans les paramètres')
        }
      }
    } catch (err: any) {
      setError(err.message || 'Erreur inattendue')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await registerTeacher(
        registerFirstName,
        registerLastName,
        registerEmail,
        registerPassword
      )

      if (!result.success) {
        setError(result.error || 'Erreur d\'inscription')
      }
    } catch (err: any) {
      setError(err.message || 'Erreur inattendue')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Left side - Branding */}
        <div className="flex flex-col justify-center items-center text-center p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CaptainMascot />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mt-6 mb-4"
          >
            Cap'taine ⛵
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-md"
          >
            Ton professeur particulier IA ultra-doux
            <br />
            <span className="text-primary">CP à 3ème</span>
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 space-y-2 text-sm text-muted-foreground"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Détection automatique des faiblesses</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Exercices adaptatifs personnalisés</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Gamification & progression visible</span>
            </div>
          </motion.div>
        </div>

        {/* Right side - Login forms */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-800"
        >
          {/* Mode selector */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setMode('guest')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                mode === 'guest'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800 text-muted-foreground hover:bg-slate-700'
              }`}
            >
              🏠 Invité
            </button>
            <button
              onClick={() => setMode('student')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                mode === 'student'
                  ? 'bg-primary text-white'
                  : 'bg-slate-800 text-muted-foreground hover:bg-slate-700'
              }`}
            >
              👤 Élève
            </button>
            <button
              onClick={() => setMode('teacher')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                mode === 'teacher'
                  ? 'bg-primary text-white'
                  : 'bg-slate-800 text-muted-foreground hover:bg-slate-700'
              }`}
            >
              👨‍🏫 Prof
            </button>
          </div>

          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-4 text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Forms */}
          <AnimatePresence mode="wait">
            {/* Guest login form */}
            {mode === 'guest' && (
              <motion.form
                key="guest-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleGuestLogin}
                className="space-y-4"
              >
                <div className="mb-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <h3 className="font-semibold text-purple-300 mb-2">🏠 Mode Invité</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilise Cap'taine à la maison sans compte école. Toutes les fonctionnalités sont disponibles !
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Comment tu t'appelles ?
                  </label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Ton prénom"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                    disabled={isLoading}
                    autoFocus
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Juste pour te connaître 😊
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Chargement...' : '🚀 Commencer'}
                </Button>

                <div className="mt-4 text-center text-xs text-muted-foreground">
                  <p>✨ Chat IA • 📄 Analyse PDF • 🎯 Exercices • 🏆 Badges</p>
                </div>
              </motion.form>
            )}

            {/* Student login form */}
            {mode === 'student' && (
              <motion.form
                key="student-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleStudentLogin}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ton prénom
                  </label>
                  <input
                    type="text"
                    value={studentUsername}
                    onChange={(e) => setStudentUsername(e.target.value)}
                    placeholder="theo"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    disabled={isLoading}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Juste ton prénom (donné par ton prof)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Code de ta classe
                  </label>
                  <input
                    type="text"
                    value={classroomCode}
                    onChange={(e) => setClassroomCode(e.target.value.toUpperCase())}
                    placeholder="PIRATES2024"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 uppercase focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    disabled={isLoading}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Demande-le à ton professeur
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Connexion...' : '🚀 Se connecter'}
                </Button>
              </motion.form>
            )}

            {/* Teacher login form */}
            {mode === 'teacher' && (
              <motion.form
                key="teacher-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleTeacherLogin}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={teacherEmail}
                    onChange={(e) => setTeacherEmail(e.target.value)}
                    placeholder="prof@ecole.fr"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    value={teacherPassword}
                    onChange={(e) => setTeacherPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Connexion...' : '🔐 Se connecter'}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setMode('register')}
                    className="text-sm text-primary hover:underline"
                  >
                    Pas encore de compte ? Inscrivez-vous
                  </button>
                </div>
              </motion.form>
            )}

            {/* Teacher register form */}
            {mode === 'register' && (
              <motion.form
                key="register-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleRegister}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={registerFirstName}
                      onChange={(e) => setRegisterFirstName(e.target.value)}
                      placeholder="Marie"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={registerLastName}
                      onChange={(e) => setRegisterLastName(e.target.value)}
                      placeholder="Dupont"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    placeholder="prof@ecole.fr"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    minLength={6}
                    disabled={isLoading}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Minimum 6 caractères
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Inscription...' : '✨ Créer mon compte'}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setMode('teacher')}
                    className="text-sm text-primary hover:underline"
                  >
                    Déjà un compte ? Connectez-vous
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
