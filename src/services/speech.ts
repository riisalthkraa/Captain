/**
 * Service de synthèse vocale (TTS) et reconnaissance vocale (STT)
 * Utilise les Web Speech API natives du navigateur
 *
 * @module speech
 */

/**
 * Service de Text-to-Speech (TTS)
 * Lit du texte à voix haute en français
 */
class TextToSpeechService {
  private synthesis: SpeechSynthesis
  private currentUtterance: SpeechSynthesisUtterance | null = null
  private voice: SpeechSynthesisVoice | null = null

  constructor() {
    this.synthesis = window.speechSynthesis

    // Charger les voix françaises disponibles
    this.loadVoices()

    // Les voix peuvent se charger de façon asynchrone
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this.loadVoices()
    }
  }

  /**
   * Charge les voix françaises disponibles
   * Priorisation : voix sauvegardée > Neural/Online > Google > autres
   */
  private loadVoices(): void {
    const voices = this.synthesis.getVoices()

    // Log toutes les voix françaises disponibles pour debug
    const frenchVoices = voices.filter(v => v.lang.startsWith('fr-'))
    console.log('[TTS] Voix françaises disponibles:', frenchVoices.map(v => `${v.name} (${v.lang})`))

    // 0. Vérifier si une voix est sauvegardée
    const savedVoiceName = localStorage.getItem('captaine-tts-voice')
    if (savedVoiceName) {
      const savedVoice = voices.find(v => v.name === savedVoiceName)
      if (savedVoice) {
        this.voice = savedVoice
        console.log('[TTS] Voix restaurée depuis préférences:', savedVoiceName)
        return
      }
    }

    // Priorité des voix (du meilleur au moins bon)
    // 1. Voix Microsoft Neural (Online) - qualité naturelle
    let frenchVoice = voices.find(voice =>
      voice.lang.startsWith('fr-') &&
      (voice.name.includes('Neural') || voice.name.includes('Online') || voice.name.includes('Natural'))
    )

    // 2. Voix Google (si disponible, surtout sur Chrome)
    if (!frenchVoice) {
      frenchVoice = voices.find(voice =>
        voice.lang.startsWith('fr-') && voice.name.includes('Google')
      )
    }

    // 3. Voix Microsoft Hortense ou autre voix féminine
    if (!frenchVoice) {
      frenchVoice = voices.find(voice =>
        voice.lang.startsWith('fr-') &&
        (voice.name.includes('Hortense') || voice.name.includes('Denise') || voice.name.includes('Julie'))
      )
    }

    // 4. N'importe quelle voix française
    if (!frenchVoice) {
      frenchVoice = voices.find(voice => voice.lang.startsWith('fr-'))
    }

    if (frenchVoice) {
      this.voice = frenchVoice
      console.log('[TTS] Voix française sélectionnée:', frenchVoice.name)
    } else {
      console.warn('[TTS] Aucune voix française trouvée, utilisation voix par défaut')
    }
  }

  /**
   * Lit du texte à voix haute
   * @param text Texte à lire
   * @param options Options de lecture
   */
  speak(text: string, options?: {
    rate?: number      // Vitesse (0.1 à 10, défaut: 0.85 pour enfants)
    pitch?: number     // Tonalité (0 à 2, défaut: 1)
    volume?: number    // Volume (0 à 1, défaut: 1)
    onEnd?: () => void
    onError?: (error: any) => void
  }): void {
    // Arrêter toute lecture en cours
    this.stop()

    // SÉCURITÉ: Limiter la longueur du texte pour éviter les crashs
    // Les très longs textes peuvent saturer la mémoire du TTS
    const MAX_LENGTH = 5000 // ~5000 caractères = environ 10 minutes de lecture
    if (text.length > MAX_LENGTH) {
      console.warn(`[TTS] Texte trop long (${text.length} chars), truncation à ${MAX_LENGTH} chars`)
      text = text.substring(0, MAX_LENGTH) + '... (texte tronqué)'
    }

    const utterance = new SpeechSynthesisUtterance(text)

    // Configuration
    utterance.lang = 'fr-FR'
    utterance.rate = options?.rate ?? 0.85  // Plus lent pour les enfants
    utterance.pitch = options?.pitch ?? 1
    utterance.volume = options?.volume ?? 1

    if (this.voice) {
      utterance.voice = this.voice
    }

    // Callbacks
    if (options?.onEnd) {
      utterance.onend = options.onEnd
    }

    if (options?.onError) {
      utterance.onerror = options.onError
    }

    this.currentUtterance = utterance
    this.synthesis.speak(utterance)

    console.log('[TTS] Lecture en cours:', text.substring(0, 50) + '...')
  }

  /**
   * Arrête la lecture en cours
   */
  stop(): void {
    if (this.synthesis.speaking) {
      this.synthesis.cancel()
      console.log('[TTS] Lecture arrêtée')
    }
    this.currentUtterance = null
  }

  /**
   * Met en pause la lecture
   */
  pause(): void {
    if (this.synthesis.speaking && !this.synthesis.paused) {
      this.synthesis.pause()
      console.log('[TTS] Lecture en pause')
    }
  }

  /**
   * Reprend la lecture
   */
  resume(): void {
    if (this.synthesis.paused) {
      this.synthesis.resume()
      console.log('[TTS] Lecture reprise')
    }
  }

  /**
   * Vérifie si une lecture est en cours
   */
  isSpeaking(): boolean {
    return this.synthesis.speaking
  }

  /**
   * Vérifie si TTS est supporté
   */
  static isSupported(): boolean {
    return 'speechSynthesis' in window
  }

  /**
   * Obtient les voix disponibles
   */
  getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.synthesis.getVoices()
  }

  /**
   * Obtient uniquement les voix françaises disponibles
   */
  getFrenchVoices(): SpeechSynthesisVoice[] {
    return this.synthesis.getVoices().filter(v => v.lang.startsWith('fr-'))
  }

  /**
   * Obtient la voix actuellement sélectionnée
   */
  getCurrentVoice(): SpeechSynthesisVoice | null {
    return this.voice
  }

  /**
   * Définit la voix à utiliser par son nom
   * @param voiceName Nom de la voix (ex: "Microsoft Hortense - French (France)")
   */
  setVoice(voiceName: string): boolean {
    const voices = this.synthesis.getVoices()
    const voice = voices.find(v => v.name === voiceName)

    if (voice) {
      this.voice = voice
      // Sauvegarder la préférence
      localStorage.setItem('captaine-tts-voice', voiceName)
      console.log('[TTS] Voix changée:', voiceName)
      return true
    }

    console.warn('[TTS] Voix non trouvée:', voiceName)
    return false
  }

  /**
   * Charge la voix sauvegardée depuis localStorage
   */
  loadSavedVoice(): void {
    const savedVoice = localStorage.getItem('captaine-tts-voice')
    if (savedVoice) {
      const voices = this.synthesis.getVoices()
      const voice = voices.find(v => v.name === savedVoice)
      if (voice) {
        this.voice = voice
        console.log('[TTS] Voix restaurée:', savedVoice)
      }
    }
  }
}

/**
 * Service de Speech-to-Text (STT)
 * Reconnaissance vocale pour les réponses orales
 */
class SpeechToTextService {
  private recognition: any // SpeechRecognition
  private isListening: boolean = false

  constructor() {
    // @ts-ignore - API pas toujours typé
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition()
      this.recognition.lang = 'fr-FR'
      this.recognition.continuous = false
      this.recognition.interimResults = true
      this.recognition.maxAlternatives = 1

      console.log('[STT] Service de reconnaissance vocale initialisé')
    } else {
      console.warn('[STT] Reconnaissance vocale non supportée')
    }
  }

  /**
   * Démarre l'écoute
   */
  startListening(callbacks: {
    onResult?: (transcript: string, isFinal: boolean) => void
    onError?: (error: any) => void
    onEnd?: () => void
  }): void {
    if (!this.recognition) {
      callbacks.onError?.('Reconnaissance vocale non supportée')
      return
    }

    if (this.isListening) {
      console.warn('[STT] Écoute déjà en cours')
      return
    }

    this.recognition.onresult = (event: any) => {
      const result = event.results[event.results.length - 1]
      const transcript = result[0].transcript
      const isFinal = result.isFinal

      console.log('[STT] Transcription:', transcript, isFinal ? '(final)' : '(interim)')
      callbacks.onResult?.(transcript, isFinal)
    }

    this.recognition.onerror = (event: any) => {
      console.error('[STT] Erreur:', event.error)
      callbacks.onError?.(event.error)
      this.isListening = false
    }

    this.recognition.onend = () => {
      console.log('[STT] Écoute terminée')
      this.isListening = false
      callbacks.onEnd?.()
    }

    this.recognition.start()
    this.isListening = true
    console.log('[STT] Écoute démarrée...')
  }

  /**
   * Arrête l'écoute
   */
  stopListening(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop()
      this.isListening = false
      console.log('[STT] Écoute arrêtée')
    }
  }

  /**
   * Vérifie si l'écoute est en cours
   */
  isCurrentlyListening(): boolean {
    return this.isListening
  }

  /**
   * Vérifie si STT est supporté
   */
  static isSupported(): boolean {
    // @ts-ignore
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
  }
}

// Export des instances singleton
export const ttsService = new TextToSpeechService()
export const sttService = new SpeechToTextService()

// Export des classes
export { TextToSpeechService, SpeechToTextService }
