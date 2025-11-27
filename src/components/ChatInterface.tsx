import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Camera, Mic, MicOff, FileUp, Volume2, VolumeX, BarChart3, Zap, Brain, Coffee, RotateCcw, HelpCircle, Trophy, BookOpen, Trash2, X } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { useAuthStore } from '@/store/useAuthStore'
import { useGuestProfileStore } from '@/store/useGuestProfileStore'
import { Button } from './ui/Button'
import { ConfirmModal } from './ui/ConfirmModal'
import { cn } from '@/lib/cn'
import { motion, AnimatePresence } from 'framer-motion'
import { CaptainMascot } from './CaptainMascot'
import { chat, AIMessage, EnrichedContext, StudentProfile } from '@/services/ai'
import { extractTextFromFile } from '@/services/ocr'
import { FileUpload } from './FileUpload'
import { ttsService, sttService } from '@/services/speech'
import { useAdaptiveLearning, EMOTION_LABELS, EMOTION_EMOJIS, detectEmotionFromText, detectModeRequest } from '@/services/adaptiveLearning'
import { useErrorPatterns } from '@/services/errorPatternDetector'
import { useSRS } from '@/services/spacedRepetition'
import { useExerciseTracking } from '@/services/exerciseTracking'

export function ChatInterface() {
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showFileUpload, setShowFileUpload] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null)
  const [autoRead, setAutoRead] = useState(false)
  const [showSessionInfo, setShowSessionInfo] = useState(false)
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([])
  const [currentVoiceName, setCurrentVoiceName] = useState<string>('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { messages, addMessage, clearMessages, teacherMode, currentStudent, uploadedFiles, addFile, clearFiles } = useAppStore()
  const { session } = useAuthStore()
  const { currentProfile } = useGuestProfileStore()

  // Services d'apprentissage adaptatif
  const { currentSession, startSession, updateEmotionalState, activateChallengeMode, activateEasyMode, recordAnswer, acknowledgeAlert } = useAdaptiveLearning()
  const errorPatterns = useErrorPatterns()
  const srs = useSRS()
  const exerciseTracking = useExerciseTracking()

  // Récupérer le profil actuel (invité ou élève)
  const activeProfile = session?.role === 'guest' && currentProfile
    ? { name: currentProfile.name, age: currentProfile.age, level: currentProfile.level }
    : currentStudent

  // ID du profil pour les services
  const profileId = currentProfile?.id || currentStudent?.id || 'default'

  // Alertes de session
  const sessionAlerts = currentSession?.alerts?.filter(a => !a.acknowledged) || []

  // Stats rapides
  const srsStats = srs.getStats(profileId)
  const topPatterns = errorPatterns.getTopPatterns(profileId, 3)
  const profileAnalysis = exerciseTracking.analyzeProfile(profileId)

  // Timestamp de l'envoi du message (pour calculer le temps de réponse)
  const [messageSentTime, setMessageSentTime] = useState<number | null>(null)

  // Modal d'aide avec les commandes
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [showClearConfirm, setShowClearConfirm] = useState(false)

  // Auto-dismiss des alertes ML après 5 secondes
  useEffect(() => {
    if (sessionAlerts.length > 0) {
      const timer = setTimeout(() => {
        // Acknowledge tous les alerts non-acknowledged
        sessionAlerts.forEach((_, index) => {
          acknowledgeAlert(index)
        })
      }, 5000) // 5 secondes

      return () => clearTimeout(timer)
    }
  }, [sessionAlerts, acknowledgeAlert])

  /**
   * Détecte si la réponse de l'IA indique une bonne ou mauvaise réponse
   * Retourne: 'correct' | 'incorrect' | null
   */
  const detectAnswerFeedback = (aiResponse: string): 'correct' | 'incorrect' | null => {
    const lowerResponse = aiResponse.toLowerCase()

    // Patterns de réponse correcte
    const correctPatterns = [
      'bravo', 'excellent', 'parfait', 'super', 'génial', 'très bien',
      'bonne réponse', 'c\'est correct', 'c\'est exact', 'bien joué',
      'tu as raison', 'exactement', 'tout à fait', 'correct !',
      '✓', '✅', '👏', '🎉', '⭐', 'félicitations'
    ]

    // Patterns de réponse incorrecte
    const incorrectPatterns = [
      'pas tout à fait', 'ce n\'est pas', 'la bonne réponse était',
      'la réponse correcte', 'essaie encore', 'pas exactement',
      'attention', 'erreur', 'incorrect', 'faux', 'non,',
      'malheureusement', 'pas correct', 'ce n\'est pas ça',
      '❌', '✗', 'réessaie', 'presque'
    ]

    // Vérifier les patterns de réponse correcte
    for (const pattern of correctPatterns) {
      if (lowerResponse.includes(pattern)) {
        return 'correct'
      }
    }

    // Vérifier les patterns de réponse incorrecte
    for (const pattern of incorrectPatterns) {
      if (lowerResponse.includes(pattern)) {
        return 'incorrect'
      }
    }

    return null
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Charger les voix TTS disponibles
  useEffect(() => {
    const loadVoices = () => {
      const voices = ttsService.getFrenchVoices()
      setAvailableVoices(voices)
      const current = ttsService.getCurrentVoice()
      if (current) {
        setCurrentVoiceName(current.name)
      }
    }

    // Charger immédiatement
    loadVoices()

    // Recharger quand les voix changent (async loading)
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices
    }

    return () => {
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [])

  // Auto-lecture du dernier message de Cap'taine (optionnel)
  useEffect(() => {
    // Ne déclencher que quand isTyping passe à false
    if (!isTyping && autoRead && messages.length > 0) {
      const lastMessage = messages[messages.length - 1]
      if (lastMessage.role === 'assistant' && lastMessage.content) {
        // Délai pour que l'animation de typing se termine
        setTimeout(() => {
          handleSpeak(lastMessage.id, lastMessage.content)
        }, 500)
      }
    }
  }, [isTyping, autoRead])

  /**
   * Lit un message à voix haute
   */
  const handleSpeak = (messageId: string, text: string) => {
    if (speakingMessageId === messageId) {
      // Arrêter si déjà en cours
      ttsService.stop()
      setIsSpeaking(false)
      setSpeakingMessageId(null)
    } else {
      // Arrêter toute lecture précédente
      ttsService.stop()

      // Démarrer nouvelle lecture
      setIsSpeaking(true)
      setSpeakingMessageId(messageId)

      ttsService.speak(text, {
        rate: activeProfile?.age && activeProfile.age <= 8 ? 0.8 : 0.85,
        onEnd: () => {
          setIsSpeaking(false)
          setSpeakingMessageId(null)
        },
        onError: (error) => {
          console.error('[ChatInterface] TTS error:', error)
          setIsSpeaking(false)
          setSpeakingMessageId(null)
        }
      })
    }
  }

  // État pour les erreurs micro
  const [micError, setMicError] = useState<string | null>(null)

  /**
   * Démarre/arrête la reconnaissance vocale
   */
  const toggleVoiceInput = async () => {
    if (isListening) {
      sttService.stopListening()
      setIsListening(false)
      return
    }

    // Vérifier si le navigateur supporte la reconnaissance vocale
    // @ts-ignore
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
      setMicError("Ton navigateur ne supporte pas la reconnaissance vocale. Utilise Chrome ou Edge.")
      setTimeout(() => setMicError(null), 5000)
      return
    }

    // Demander la permission micro
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach(track => track.stop()) // Libérer le micro après test
    } catch (err: any) {
      console.error('[ChatInterface] Mic permission error:', err)
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setMicError("Autorise l'accès au micro dans ton navigateur pour parler à Cap'taine !")
      } else if (err.name === 'NotFoundError') {
        setMicError("Aucun micro détecté. Branche un micro et réessaie.")
      } else {
        setMicError("Erreur avec le micro. Vérifie qu'il est bien branché.")
      }
      setTimeout(() => setMicError(null), 5000)
      return
    }

    setMicError(null)
    setIsListening(true)
    sttService.startListening({
      onResult: (transcript, isFinal) => {
        setInput(transcript)
        if (isFinal) {
          setIsListening(false)
        }
      },
      onError: (error) => {
        console.error('[ChatInterface] STT error:', error)
        setIsListening(false)
        if (error === 'no-speech') {
          setMicError("Je n'ai rien entendu. Parle plus fort !")
        } else if (error === 'audio-capture') {
          setMicError("Problème avec le micro. Vérifie qu'il fonctionne.")
        } else if (error === 'not-allowed') {
          setMicError("Autorise le micro dans ton navigateur !")
        } else if (error === 'network') {
          // En Electron, l'API Web Speech ne fonctionne pas toujours car elle utilise les serveurs Google
          const isElectron = navigator.userAgent.toLowerCase().includes('electron')
          if (isElectron) {
            setMicError("La reconnaissance vocale n'est pas disponible dans l'application. Utilise le clavier pour écrire à Cap'taine !")
          } else {
            setMicError("Pas de connexion internet ! Le micro a besoin d'internet.")
          }
        } else if (error === 'aborted') {
          // L'utilisateur a annulé, pas d'erreur à afficher
        } else {
          setMicError("Erreur de reconnaissance vocale. Réessaie.")
        }
        if (error !== 'aborted') {
          setTimeout(() => setMicError(null), 4000)
        }
      },
      onEnd: () => {
        setIsListening(false)
      }
    })
  }

  const handleSend = async () => {
    // PROTECTION: Empêcher les envois multiples pendant qu'une requête est en cours
    if (isTyping) {
      console.warn('[ChatInterface] Requête déjà en cours, envoi ignoré')
      return
    }

    if (!input.trim() && uploadedFiles.length === 0) return

    let userMessageContent = input
    let hasValidContent = input.trim().length > 0
    let fileErrors: string[] = []

    // Process uploaded files
    if (uploadedFiles.length > 0) {
      console.log('[ChatInterface] Processing', uploadedFiles.length, 'files')

      for (const file of uploadedFiles) {
        try {
          console.log('[ChatInterface] Extracting text from:', file.name)
          const result = await extractTextFromFile(file)

          if (result.error) {
            console.warn('[ChatInterface] File error:', file.name, result.error)
            fileErrors.push(`${file.name}: ${result.error}`)
            userMessageContent += `\n\n[⚠️ Erreur fichier ${file.name}: ${result.error}]`
          } else if (result.text && result.text.trim().length > 0) {
            console.log('[ChatInterface] File text extracted successfully. Length:', result.text.length)
            userMessageContent += `\n\n[📄 Contenu de ${file.name}]:\n${result.text.substring(0, 10000)}` // Limiter à 10k caractères
            hasValidContent = true
          } else {
            console.warn('[ChatInterface] File has no extractable content:', file.name)
            fileErrors.push(`${file.name}: Aucun texte extractible`)
            userMessageContent += `\n\n[⚠️ ${file.name} ne contient pas de texte extractible]`
          }
        } catch (error: any) {
          console.error('[ChatInterface] Unexpected error processing file:', file.name, error)
          fileErrors.push(`${file.name}: Erreur inattendue`)
          userMessageContent += `\n\n[⚠️ Erreur inattendue avec ${file.name}]`
        }
      }
      clearFiles()
    }

    // Si aucun contenu valide, ne pas envoyer
    if (!hasValidContent) {
      console.warn('[ChatInterface] No valid content to send')
      addMessage({
        id: Date.now().toString(),
        role: 'assistant' as const,
        content: 'Désolé, je n\'ai pas pu extraire de contenu des fichiers. Essaie avec un autre format ou tape ta question directement.',
        timestamp: new Date(),
      })
      return
    }

    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: userMessageContent,
      timestamp: new Date(),
    }

    // Marquer le temps d'envoi pour calculer le temps de réponse
    setMessageSentTime(Date.now())

    addMessage(userMessage)
    setInput('')
    setIsTyping(true)

    try {
      // Démarrer la session adaptative si pas déjà active
      if (!currentSession) {
        startSession(profileId)
      }

      // Détecter si l'utilisateur demande un mode spécial (défi ou facile)
      const modeRequest = detectModeRequest(input)
      if (modeRequest === 'challenge') {
        console.log('[ChatInterface] 🔥 Mode défi demandé !')
        activateChallengeMode()
      } else if (modeRequest === 'easy') {
        console.log('[ChatInterface] 🌱 Mode facile demandé !')
        activateEasyMode()
      }

      // Détecter l'émotion à partir du texte du message
      const detectedEmotion = detectEmotionFromText(input)
      if (detectedEmotion) {
        console.log('[ChatInterface] Émotion détectée dans le texte:', detectedEmotion)
        updateEmotionalState(detectedEmotion)
      }

      // Construire le profil enrichi
      const studentProfile: StudentProfile = {
        name: activeProfile?.name,
        age: activeProfile?.age || 10,
        level: activeProfile?.level || 'CM2',
        strengths: profileAnalysis.topStrengths.map(s => s.skill),
        weaknesses: profileAnalysis.topWeaknesses.map(w => w.skill),
        recentErrors: topPatterns.map(p => p.description)
      }

      // Contexte enrichi
      const enrichedContext: EnrichedContext = {
        studentProfile,
        mode: 'normal',
        teacherMode
      }

      // Historique des messages
      const conversationHistory: AIMessage[] = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }))

      console.log('[ChatInterface] Calling enriched AI with context:', {
        profileId,
        mode: enrichedContext.mode,
        teacherMode,
        strengths: studentProfile.strengths.length,
        weaknesses: studentProfile.weaknesses.length
      })

      // Appeler l'IA enrichie
      const response = await chat(userMessageContent, conversationHistory, enrichedContext, profileId)

      let aiContent = ''

      if (response.error) {
        console.error('[ChatInterface] AI Error:', response.error)
        aiContent = `Désolé, j'ai rencontré un problème : ${response.error}`
      } else if (response.content && response.content.trim().length > 0) {
        aiContent = response.content
      } else {
        console.warn('[ChatInterface] AI returned empty content')
        aiContent = 'Désolé, je n\'ai pas pu générer de réponse. Peux-tu reformuler ta question ?'
      }

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: aiContent,
        timestamp: new Date(),
      }
      addMessage(aiMessage)

      // === DÉTECTION DES RÉPONSES ET MISE À JOUR DES MÉTRIQUES ===
      const answerFeedback = detectAnswerFeedback(aiContent)
      if (answerFeedback && messageSentTime) {
        const responseTime = (Date.now() - messageSentTime) / 1000 // En secondes
        const isCorrect = answerFeedback === 'correct'

        console.log(`[ChatInterface] 📊 Réponse détectée: ${answerFeedback} (temps: ${responseTime.toFixed(1)}s)`)

        // Enregistrer la réponse dans le système adaptatif
        const result = recordAnswer(isCorrect, responseTime, 0) // 0 indices utilisés pour l'instant

        console.log('[ChatInterface] État émotionnel après réponse:', result.emotionalState)
        console.log('[ChatInterface] Alertes générées:', result.alerts.length)

        // Si la réponse met à jour l'état émotionnel (ex: série de bonnes réponses = confiant)
        // L'état est déjà mis à jour par recordAnswer, pas besoin de le refaire

        // Reset le timestamp
        setMessageSentTime(null)
      }
    } catch (error: any) {
      console.error('[ChatInterface] Unexpected error during AI call:', error)
      addMessage({
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: `Une erreur inattendue s'est produite : ${error.message || 'Erreur inconnue'}. Essaie de recharger l'application.`,
        timestamp: new Date(),
      })
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Fonction pour réinitialiser la conversation
  const handleNewConversation = () => {
    clearMessages()
  }

  return (
    <div className="flex flex-col h-full">
      {/* Barre d'actions rapides - TOUJOURS VISIBLE */}
      <div className="bg-slate-900 border-b border-slate-700 px-3 py-2 flex items-center justify-between gap-2 flex-shrink-0">
        {/* Boutons d'actions rapides */}
        <div className="flex items-center gap-1 flex-wrap">
          <button
            onClick={() => { setInput('/quiz'); }}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded transition-colors"
            title="Lancer un quiz"
          >
            <Brain className="w-3 h-3" />
            Quiz
          </button>
          <button
            onClick={() => { setInput('/révise'); }}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 rounded transition-colors"
            title="Mode révision"
          >
            <BookOpen className="w-3 h-3" />
            Réviser
          </button>
          <button
            onClick={() => { setInput('/défi'); }}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded transition-colors"
            title="Lancer un défi"
          >
            <Trophy className="w-3 h-3" />
            Défi
          </button>
          <button
            onClick={() => { setInput('/stats'); }}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded transition-colors"
            title="Voir mes statistiques"
          >
            <BarChart3 className="w-3 h-3" />
            Stats
          </button>
          <button
            onClick={() => { setInput('/aide'); }}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded transition-colors"
            title="Aide et commandes"
          >
            <HelpCircle className="w-3 h-3" />
            Aide
          </button>
        </div>

        {/* Bouton nouvelle conversation */}
        {messages.length > 0 && (
          <button
            onClick={handleNewConversation}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 rounded transition-colors"
            title="Nouvelle conversation"
          >
            <RotateCcw className="w-3 h-3" />
            Nouveau
          </button>
        )}
      </div>

      {/* Session info bar - alignée avec le header sidebar */}
      {currentSession && (
        <div className="bg-slate-800/50 border-b border-slate-700 px-4 pt-[26px] pb-2 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs">
              {/* État émotionnel */}
              <div className="flex items-center gap-1" title="Comment tu te sens pendant la session">
                <span>{EMOTION_EMOJIS[currentSession.emotionalState] || '🙂'}</span>
                <span className="text-muted-foreground">{EMOTION_LABELS[currentSession.emotionalState] || 'Neutre'}</span>
                <span className="text-muted-foreground/50 text-[10px]">(humeur)</span>
              </div>

              {/* Difficulté */}
              <div className="flex items-center gap-1" title="Niveau de difficulté des exercices">
                <Zap className="w-3 h-3 text-yellow-500" />
                <span className="text-muted-foreground">Niveau {currentSession.currentDifficulty}/5</span>
                <span className="text-muted-foreground/50 text-[10px]">(difficulté)</span>
              </div>

              {/* Score session */}
              <div className="flex items-center gap-1" title="Bonnes réponses / Total questions cette session">
                <Brain className="w-3 h-3 text-purple-500" />
                <span className="text-muted-foreground">
                  {currentSession.correctAnswers}/{currentSession.totalQuestions}
                </span>
                <span className="text-muted-foreground/50 text-[10px]">(score)</span>
              </div>

              {/* Révisions du jour */}
              {srsStats.dueToday > 0 && (
                <div className="flex items-center gap-1 text-orange-400" title="Notions à réviser aujourd'hui">
                  <BarChart3 className="w-3 h-3" />
                  <span>{srsStats.dueToday} à réviser</span>
                </div>
              )}
            </div>

            {/* Bouton toggle détails */}
            <button
              onClick={() => setShowSessionInfo(!showSessionInfo)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {showSessionInfo ? 'Masquer' : 'Détails'}
            </button>
          </div>

          {/* Détails expandables */}
          <AnimatePresence>
            {showSessionInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-2 pt-2 border-t border-slate-700 overflow-hidden"
              >
                <div className="grid grid-cols-3 gap-4 text-xs">
                  {/* Points forts */}
                  <div>
                    <span className="text-green-400 font-medium">💪 Points forts</span>
                    <div className="mt-1 text-muted-foreground">
                      {profileAnalysis.topStrengths.slice(0, 2).map(s => (
                        <div key={s.skill}>{s.skill} ({s.successRate}%)</div>
                      ))}
                      {profileAnalysis.topStrengths.length === 0 && <div>Pas encore de données</div>}
                    </div>
                  </div>

                  {/* À travailler */}
                  <div>
                    <span className="text-orange-400 font-medium">📚 À travailler</span>
                    <div className="mt-1 text-muted-foreground">
                      {topPatterns.slice(0, 2).map(p => (
                        <div key={p.id}>{p.description.slice(0, 30)}...</div>
                      ))}
                      {topPatterns.length === 0 && <div>Aucun pattern détecté</div>}
                    </div>
                  </div>

                  {/* Commandes */}
                  <div>
                    <span className="text-blue-400 font-medium">⌨️ Commandes</span>
                    <div className="mt-1 text-muted-foreground">
                      <div>/quiz - Lancer un quiz</div>
                      <div>/stats - Voir tes stats</div>
                      <div>/aide - Toutes commandes</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Alertes adaptatives */}
          {sessionAlerts.length > 0 && (
            <div className="mt-2 space-y-1">
              {sessionAlerts.map((alert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "text-xs px-2 py-1 rounded flex items-center gap-2",
                    alert.type === 'break_suggested' && "bg-yellow-500/20 text-yellow-300",
                    alert.type === 'difficulty_adjusted' && "bg-blue-500/20 text-blue-300",
                    alert.type === 'encouragement' && "bg-green-500/20 text-green-300",
                    alert.type === 'challenge' && "bg-purple-500/20 text-purple-300",
                    alert.type === 'help_offered' && "bg-orange-500/20 text-orange-300"
                  )}
                >
                  {alert.type === 'break_suggested' && <Coffee className="w-3 h-3" />}
                  {alert.type === 'difficulty_adjusted' && <Zap className="w-3 h-3" />}
                  {alert.type === 'encouragement' && <Trophy className="w-3 h-3" />}
                  {alert.type === 'challenge' && <Brain className="w-3 h-3" />}
                  {alert.type === 'help_offered' && <HelpCircle className="w-3 h-3" />}
                  {alert.message}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 pt-6 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <CaptainMascot />
            <h2 className="text-2xl font-bold mt-6 mb-2">
              Ahoy {activeProfile?.name || 'matelot'} ! 👋
            </h2>
            <p className="text-muted-foreground max-w-md">
              Je suis Cap'taine, ton professeur particulier IA.
              Envoie-moi une photo de ton devoir ou pose-moi une question,
              et je t'aiderai à comprendre pas à pas !
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-2xl">
              <Button
                variant="outline"
                className="h-auto py-4 px-6 flex-col items-start"
                onClick={() => setShowFileUpload(true)}
              >
                <Camera className="w-6 h-6 mb-2" />
                <span className="font-semibold">Photo du devoir</span>
                <span className="text-xs text-muted-foreground">Prends en photo ton exercice</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 px-6 flex-col items-start"
                onClick={() => {
                  setInput('/quiz')
                  setTimeout(() => handleSend(), 100)
                }}
              >
                <Brain className="w-6 h-6 mb-2 text-purple-400" />
                <span className="font-semibold">Quiz personnalisé</span>
                <span className="text-xs text-muted-foreground">Quiz adapté à ton niveau</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 px-6 flex-col items-start"
                onClick={() => {
                  setInput('/révise')
                  setTimeout(() => handleSend(), 100)
                }}
              >
                <BarChart3 className="w-6 h-6 mb-2 text-orange-400" />
                <span className="font-semibold">Révisions</span>
                <span className="text-xs text-muted-foreground">Travaille tes points faibles</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 px-6 flex-col items-start"
                onClick={() => {
                  setInput('/stats')
                  setTimeout(() => handleSend(), 100)
                }}
              >
                <Sparkles className="w-6 h-6 mb-2 text-green-400" />
                <span className="font-semibold">Ma progression</span>
                <span className="text-xs text-muted-foreground">Voir mes statistiques</span>
              </Button>
            </div>

            {/* Démarrer une session */}
            {!currentSession && (
              <Button
                className="mt-6"
                onClick={() => startSession(profileId)}
              >
                <Zap className="w-4 h-4 mr-2" />
                Démarrer une session d'apprentissage
              </Button>
            )}
          </div>
        ) : (
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  'flex gap-3',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-2xl flex-shrink-0">
                    ⛵
                  </div>
                )}
                <div className="flex flex-col gap-2 max-w-[70%]">
                  <div
                    className={cn(
                      'rounded-2xl px-4 py-3',
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-slate-800 text-foreground'
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString('fr-FR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  {/* Bouton speaker pour les messages de Cap'taine */}
                  {message.role === 'assistant' && (
                    <button
                      onClick={() => handleSpeak(message.id, message.content)}
                      className={cn(
                        'self-start flex items-center gap-1 px-2 py-1 rounded-lg text-xs transition-colors',
                        speakingMessageId === message.id
                          ? 'bg-primary/20 text-primary'
                          : 'bg-slate-800 text-muted-foreground hover:text-foreground hover:bg-slate-700'
                      )}
                    >
                      {speakingMessageId === message.id ? (
                        <>
                          <VolumeX className="w-3 h-3" />
                          <span>Arrêter</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3 h-3" />
                          <span>Écouter</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
                {message.role === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-2xl flex-shrink-0">
                    {activeProfile?.name?.charAt(0).toUpperCase() || '👤'}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        )}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
              ⛵
            </div>
            <div className="bg-slate-800 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 rounded-full bg-foreground"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 rounded-full bg-foreground"
                />
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 rounded-full bg-foreground"
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-slate-800 p-2">
        {/* Toggle lecture automatique + boutons aide/reset */}
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAutoRead(!autoRead)}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {autoRead ? (
                <>
                  <Volume2 className="w-4 h-4 text-green-500" />
                  <span>Lecture auto</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>Lecture auto</span>
                </>
              )}
            </button>
            {/* Sélecteur de voix */}
            {availableVoices.length > 0 && (
              <select
                value={currentVoiceName}
                onChange={(e) => {
                  ttsService.setVoice(e.target.value)
                  setCurrentVoiceName(e.target.value)
                }}
                className="text-xs bg-slate-800 border border-slate-700 rounded px-2 py-1 text-muted-foreground hover:text-foreground cursor-pointer"
                title="Choisir la voix de Cap'taine"
              >
                {availableVoices.map((voice) => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name.replace('Microsoft ', '').replace(' - French (France)', '')}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="flex items-center gap-2">
            {/* Erreur micro */}
            {micError && (
              <span className="text-xs text-red-400 flex items-center gap-1 bg-red-500/20 px-2 py-1 rounded">
                <Mic className="w-3 h-3" />
                {micError}
              </span>
            )}
            {isListening && !micError && (
              <span className="text-xs text-primary flex items-center gap-1 animate-pulse">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Écoute...
              </span>
            )}
            {/* Bouton aide */}
            <button
              onClick={() => setShowHelpModal(true)}
              className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
              title="Voir les commandes disponibles"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Aide</span>
            </button>
            {/* Bouton vider le chat */}
            {messages.length > 0 && (
              <button
                onClick={() => setShowClearConfirm(true)}
                className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                title="Vider le chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Vider</span>
              </button>
            )}
          </div>
        </div>

        {showFileUpload && (
          <div className="mb-2">
            <FileUpload />
          </div>
        )}
        <div className="flex gap-2 items-end">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "flex-shrink-0",
              showFileUpload && "bg-primary/20 border-primary"
            )}
            onClick={() => setShowFileUpload(!showFileUpload)}
            title="Ajouter un fichier (PDF, image)"
          >
            <FileUp className={cn("w-5 h-5", showFileUpload && "text-primary")} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="flex-shrink-0"
            onClick={() => {
              // Trigger file input for camera/photo
              const input = document.createElement('input')
              input.type = 'file'
              input.accept = 'image/*'
              input.capture = 'environment' as any // Mobile camera
              input.onchange = async (e: any) => {
                const file = e.target?.files?.[0]
                if (file) {
                  addFile(file)
                  setShowFileUpload(true)
                }
              }
              input.click()
            }}
            title="Prendre une photo"
          >
            <Camera className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "flex-shrink-0",
              isListening && "bg-primary/20 border-primary"
            )}
            onClick={toggleVoiceInput}
            title={isListening ? "Arrêter l'écoute" : "Parler au micro"}
          >
            {isListening ? (
              <MicOff className="w-5 h-5 text-primary" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </Button>
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isListening ? "Parle maintenant..." : "Pose ta question ou décris ton problème..."}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] max-h-32"
              rows={1}
              disabled={isListening}
            />
          </div>
          <Button
            onClick={handleSend}
            disabled={isTyping || (!input.trim() && uploadedFiles.length === 0)}
            size="icon"
            className="flex-shrink-0"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Modal d'aide - Commandes disponibles */}
      <AnimatePresence>
        {showHelpModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setShowHelpModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-400" />
                  Commandes du chat
                </h2>
                <button
                  onClick={() => setShowHelpModal(false)}
                  className="p-1 hover:bg-slate-800 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div className="space-y-2">
                  <h3 className="font-semibold text-purple-400">📚 Exercices & Quiz</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p><code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/quiz</code> - Quiz personnalisé sur tes faiblesses</p>
                    <p><code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/révise [sujet]</code> - Mode révision ciblée avec Cap'taine</p>
                    <p><code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/défi</code> - Exercice difficile pour te challenger</p>
                    <p><code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/explique [notion]</code> - Explication d'un concept</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-green-400">📊 Progression</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p><code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/progrès</code> - Voir ta progression</p>
                    <p><code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/stats</code> - Statistiques détaillées</p>
                    <p><code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/faiblesses</code> - Points à améliorer</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-orange-400">⚙️ Difficulté</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p><code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/facile</code> - Mode facile (difficulté réduite)</p>
                    <p><code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/difficile</code> - Mode défi (difficulté max)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-cyan-400">💡 Astuces</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>• Prends une <strong>photo</strong> de ton devoir pour de l'aide</p>
                    <p>• Pose des questions en <strong>français naturel</strong></p>
                    <p>• Dis "je ne comprends pas" pour une explication</p>
                    <p>• 🎤 Le micro <strong>ne fonctionne pas</strong> dans l'application (limitation technique)</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-6"
                onClick={() => setShowHelpModal(false)}
              >
                C'est compris !
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de confirmation pour vider le chat */}
      <ConfirmModal
        isOpen={showClearConfirm}
        onClose={() => setShowClearConfirm(false)}
        onConfirm={clearMessages}
        title="Vider le chat ?"
        message="Tous les messages seront supprimés. Cette action est irréversible."
        confirmText="Oui, vider"
        cancelText="Non, garder"
        variant="danger"
      />
    </div>
  )
}
