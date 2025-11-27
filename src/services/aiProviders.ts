/**
 * AI Providers - Gestionnaire multi-API pour IA
 * Adapté de CareLink pour Cap'taine
 *
 * Support multiple providers avec priorités et fallback:
 * - OpenAI (GPT-4, GPT-3.5-turbo)
 * - Anthropic (Claude)
 * - Google (Gemini)
 * - Local (Ollama)
 *
 * @module aiProviders
 */

/**
 * Providers supportés
 */
export enum AIProvider {
  OPENAI = 'openai',
  ANTHROPIC = 'anthropic',
  GOOGLE = 'google',
  LOCAL = 'local'
}

/**
 * Configuration d'un provider
 */
export interface AIProviderConfig {
  id?: string              // Identifiant unique
  name?: string            // Nom personnalisé (ex: "Ollama Principal", "Claude Backup")
  provider: AIProvider
  apiKey?: string
  model: string
  endpoint?: string        // Pour local/custom
  priority?: number        // Priorité 1-100 (plus haut = prioritaire)
  isActive?: boolean       // Actif/Inactif
  createdAt?: Date
}

/**
 * Message de conversation
 */
export interface AIMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

/**
 * Réponse de l'IA
 */
export interface AIResponse {
  success: boolean
  content?: string
  error?: string
  usage?: {
    prompt_tokens?: number
    completion_tokens?: number
    total_tokens?: number
  }
}

/**
 * Classe AIProviderManager
 * Gère les appels à différentes APIs IA avec support multi-provider et priorités
 */
class AIProviderManager {
  private configs: AIProviderConfig[] = []

  /**
   * Ajoute une configuration multi-provider
   */
  addConfig(config: AIProviderConfig): void {
    // Générer un ID si non fourni
    if (!config.id) {
      config.id = `${config.provider}_${Date.now()}`
    }

    // Définir priorité par défaut
    if (config.priority === undefined) {
      config.priority = 50
    }

    // Actif par défaut
    if (config.isActive === undefined) {
      config.isActive = true
    }

    // Date de création
    config.createdAt = new Date()

    // Remplacer si même ID existe
    const existingIndex = this.configs.findIndex(c => c.id === config.id)
    if (existingIndex >= 0) {
      this.configs[existingIndex] = config
    } else {
      this.configs.push(config)
    }

    // Trier par priorité décroissante
    this.configs.sort((a, b) => (b.priority || 50) - (a.priority || 50))

    // SAUVEGARDER dans localStorage
    this.saveConfigs()

    console.log(`[AIManager] Config added: ${config.name || config.provider} (priority ${config.priority})`)
  }

  /**
   * Sauvegarde les configs dans localStorage
   */
  private saveConfigs(): void {
    try {
      const configsToSave = this.configs.map(c => ({
        ...c,
        createdAt: c.createdAt?.toISOString()
      }))
      localStorage.setItem('captaine_ai_configs', JSON.stringify(configsToSave))
      console.log('[AIManager] Configs saved to localStorage:', configsToSave.length, 'configs')
      console.log('[AIManager] localStorage content:', localStorage.getItem('captaine_ai_configs'))
    } catch (error) {
      console.error('[AIManager] Failed to save configs:', error)
    }
  }

  /**
   * Charge les configs depuis localStorage
   */
  loadConfigs(): void {
    try {
      const saved = localStorage.getItem('captaine_ai_configs')
      console.log('[AIManager] Loading configs from localStorage:', saved ? saved.substring(0, 100) + '...' : 'empty')
      if (saved) {
        const parsed = JSON.parse(saved)
        this.configs = parsed.map((c: any) => ({
          ...c,
          createdAt: c.createdAt ? new Date(c.createdAt) : new Date()
        }))
        console.log(`[AIManager] Loaded ${this.configs.length} configs from localStorage`)
      } else {
        console.log('[AIManager] No saved configs found in localStorage')
      }
    } catch (error) {
      console.error('[AIManager] Failed to load configs:', error)
    }
  }

  /**
   * Récupère toutes les configurations
   */
  getAllConfigs(): AIProviderConfig[] {
    return [...this.configs]
  }

  /**
   * Supprime une configuration
   */
  removeConfig(id: string): void {
    this.configs = this.configs.filter(c => c.id !== id)
    this.saveConfigs()
    console.log(`[AIManager] Config removed: ${id}`)
  }

  /**
   * Active/désactive une configuration
   */
  toggleConfig(id: string, isActive: boolean): void {
    const config = this.configs.find(c => c.id === id)
    if (config) {
      config.isActive = isActive
      this.saveConfigs()
      console.log(`[AIManager] Config ${id} ${isActive ? 'activated' : 'deactivated'}`)
    }
  }

  /**
   * Met à jour la priorité
   */
  setPriority(id: string, priority: number): void {
    const config = this.configs.find(c => c.id === id)
    if (config) {
      config.priority = priority
      // Re-trier
      this.configs.sort((a, b) => (b.priority || 50) - (a.priority || 50))
      this.saveConfigs()
      console.log(`[AIManager] Config ${id} priority set to ${priority}`)
    }
  }

  /**
   * Teste une configuration spécifique
   */
  async testConfig(config: AIProviderConfig): Promise<AIResponse> {
    const testMessages: AIMessage[] = [
      {
        role: 'user',
        content: 'Réponds simplement "OK" si tu me reçois bien.'
      }
    ]

    try {
      console.log(`[AIManager] Testing ${config.name || config.provider}...`)
      const response = await this.callProvider(config, testMessages)
      return response
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Erreur lors du test'
      }
    }
  }

  /**
   * Récupère le statut global de l'IA
   * @returns 'none' | 'local' | 'cloud'
   */
  getAIStatus(): { status: 'none' | 'local' | 'cloud', provider?: string, model?: string } {
    const activeConfigs = this.configs.filter(c => c.isActive)

    if (activeConfigs.length === 0) {
      return { status: 'none' }
    }

    // Prendre le premier actif (plus haute priorité)
    const primary = activeConfigs[0]

    if (primary.provider === AIProvider.LOCAL) {
      return {
        status: 'local',
        provider: 'Ollama',
        model: primary.model
      }
    } else {
      return {
        status: 'cloud',
        provider: primary.provider === AIProvider.OPENAI ? 'OpenAI' :
                  primary.provider === AIProvider.ANTHROPIC ? 'Anthropic' :
                  primary.provider === AIProvider.GOOGLE ? 'Google' : primary.provider,
        model: primary.model
      }
    }
  }

  /**
   * Envoie un message et reçoit une réponse
   * Avec fallback automatique sur plusieurs providers
   */
  async chat(messages: AIMessage[]): Promise<AIResponse> {
    const activeConfigs = this.configs.filter(c => c.isActive)

    if (activeConfigs.length === 0) {
      return {
        success: false,
        error: 'Aucun provider actif. Va dans Réglages pour configurer une IA.'
      }
    }

    // Essayer chaque provider par ordre de priorité
    for (let i = 0; i < activeConfigs.length; i++) {
      const config = activeConfigs[i]

      try {
        console.log(`[AIManager] Trying ${config.name || config.provider} (priority ${config.priority})`)

        const response = await this.callProvider(config, messages)

        if (response.success) {
          console.log(`[AIManager] ✅ Success with ${config.name || config.provider}`)

          // Incrémenter les stats d'utilisation
          try {
            const { incrementUsageStats } = await import('@/components/TokenUsageCounter')
            const tokens = response.content?.length || 0
            incrementUsageStats(config.name || config.provider, tokens)
          } catch (e) {
            console.warn('[AIManager] Impossible d\'incrémenter stats:', e)
          }

          return response
        }

        // Erreur mais pas critique, essayer le suivant
        console.warn(`[AIManager] Provider ${config.name || config.provider} returned error: ${response.error}`)

      } catch (error: any) {
        console.error(`[AIManager] Provider ${config.name || config.provider} failed:`, error.message)
      }

      // Si c'est pas le dernier, on continue avec le suivant
      if (i < activeConfigs.length - 1) {
        console.log(`[AIManager] Falling back to next provider...`)
      }
    }

    // Tous ont échoué
    return {
      success: false,
      error: `Tous les providers IA sont indisponibles (${activeConfigs.length} essayés). Vérifie tes configurations.`
    }
  }

  /**
   * Appelle un provider spécifique
   */
  private async callProvider(config: AIProviderConfig, messages: AIMessage[]): Promise<AIResponse> {
    switch (config.provider) {
      case AIProvider.OPENAI:
        return this.callOpenAI(config, messages)
      case AIProvider.ANTHROPIC:
        return this.callAnthropic(config, messages)
      case AIProvider.GOOGLE:
        return this.callGoogle(config, messages)
      case AIProvider.LOCAL:
        return this.callLocal(config, messages)
      default:
        return {
          success: false,
          error: `Provider non supporté: ${config.provider}`
        }
    }
  }

  /**
   * Appel OpenAI API
   */
  private async callOpenAI(config: AIProviderConfig, messages: AIMessage[]): Promise<AIResponse> {
    if (!config.apiKey) {
      return { success: false, error: 'Clé API OpenAI manquante' }
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
          model: config.model,
          messages,
          temperature: 0.7,
          max_tokens: 2000
        })
      })

      if (!response.ok) {
        const error = await response.json()
        return { success: false, error: error.error?.message || 'Erreur OpenAI API' }
      }

      const data = await response.json()

      return {
        success: true,
        content: data.choices[0]?.message?.content || '',
        usage: data.usage
      }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  /**
   * Appel Anthropic API
   */
  private async callAnthropic(config: AIProviderConfig, messages: AIMessage[]): Promise<AIResponse> {
    if (!config.apiKey) {
      return { success: false, error: 'Clé API Anthropic manquante' }
    }

    try {
      // Séparer system message des autres
      const systemMessage = messages.find(m => m.role === 'system')
      const conversationMessages = messages.filter(m => m.role !== 'system')

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': config.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: config.model,
          system: systemMessage?.content,
          messages: conversationMessages,
          max_tokens: 2000,
          temperature: 0.7
        })
      })

      if (!response.ok) {
        const error = await response.json()
        return { success: false, error: error.error?.message || 'Erreur Anthropic API' }
      }

      const data = await response.json()

      return {
        success: true,
        content: data.content[0]?.text || '',
        usage: {
          prompt_tokens: data.usage?.input_tokens,
          completion_tokens: data.usage?.output_tokens,
          total_tokens: (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0)
        }
      }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  /**
   * Appel Google Gemini API
   */
  private async callGoogle(config: AIProviderConfig, messages: AIMessage[]): Promise<AIResponse> {
    if (!config.apiKey) {
      return { success: false, error: 'Clé API Google manquante' }
    }

    try {
      // Convertir messages au format Gemini
      const contents = messages
        .filter(m => m.role !== 'system')
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))

      const systemMessage = messages.find(m => m.role === 'system')

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:generateContent?key=${config.apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            systemInstruction: systemMessage ? {
              parts: [{ text: systemMessage.content }]
            } : undefined,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2000
            }
          })
        }
      )

      if (!response.ok) {
        const error = await response.json()
        return { success: false, error: error.error?.message || 'Erreur Google API' }
      }

      const data = await response.json()

      return {
        success: true,
        content: data.candidates?.[0]?.content?.parts?.[0]?.text || ''
      }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  /**
   * Appel Local (Ollama)
   */
  private async callLocal(config: AIProviderConfig, messages: AIMessage[]): Promise<AIResponse> {
    const endpoint = config.endpoint || 'http://localhost:11434'
    const timeout = 300000 // 5 minutes timeout pour éviter les crashes

    try {
      console.log('[Ollama] Calling with:', {
        endpoint,
        model: config.model,
        messageCount: messages.length
      })

      // Créer un AbortController pour le timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      try {
        const response = await fetch(`${endpoint}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: config.model || 'llama3.1',
            messages,
            stream: false
            // Options retirées - causaient "exit status 2" sur certaines configs
          }),
          signal: controller.signal
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          const errorText = await response.text()
          console.error('[Ollama] Error response:', errorText)
          return {
            success: false,
            error: `Ollama erreur ${response.status}: ${errorText.substring(0, 200)}`
          }
        }

        const data = await response.json()
        console.log('[Ollama] Response data:', data)

        // Vérifications de sécurité pour éviter les crashs
        if (!data) {
          console.error('[Ollama] Empty response data')
          return {
            success: false,
            error: 'Ollama a retourné une réponse vide'
          }
        }

        if (!data.message) {
          console.error('[Ollama] No message in response:', data)
          return {
            success: false,
            error: 'Format de réponse Ollama invalide (pas de message)'
          }
        }

        const content = data.message.content || ''

        if (!content || content.trim().length === 0) {
          console.warn('[Ollama] Empty content in response')
          return {
            success: false,
            error: 'Ollama a retourné une réponse vide. Le modèle est peut-être surchargé.'
          }
        }

        console.log('[Ollama] Success! Response length:', content.length)

        return {
          success: true,
          content: content
        }
      } catch (fetchError: any) {
        clearTimeout(timeoutId)

        if (fetchError.name === 'AbortError') {
          console.error('[Ollama] Request timeout after', timeout, 'ms')
          return {
            success: false,
            error: `Ollama n'a pas répondu dans les ${timeout / 1000}s. Le modèle est peut-être trop lent ou surchargé. Essaie de fermer d'autres applications ou redémarre Ollama.`
          }
        }

        throw fetchError
      }
    } catch (error: any) {
      console.error('[Ollama] Exception:', error)

      // Messages d'erreur plus explicites
      let errorMessage = 'Erreur inconnue'

      if (error.message?.includes('Failed to fetch')) {
        errorMessage = 'Impossible de contacter Ollama. Vérifie qu\'Ollama est bien démarré.'
      } else if (error.name === 'NetworkError') {
        errorMessage = 'Erreur réseau lors de la connexion à Ollama'
      } else {
        errorMessage = error.message || 'Erreur inconnue'
      }

      return {
        success: false,
        error: `Impossible de contacter Ollama: ${errorMessage}`
      }
    }
  }
}

/**
 * Instance singleton
 */
export const aiManager = new AIProviderManager()

/**
 * Modèles disponibles par provider
 */
export const AVAILABLE_MODELS = {
  [AIProvider.OPENAI]: [
    { id: 'gpt-4o', name: 'GPT-4 Omni (Recommandé)', power: '⭐⭐⭐⭐⭐', cost: '$$$' },
    { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', power: '⭐⭐⭐⭐⭐', cost: '$$$' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', power: '⭐⭐⭐', cost: '$' }
  ],
  [AIProvider.ANTHROPIC]: [
    { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet (Recommandé)', power: '⭐⭐⭐⭐⭐', cost: '$$$' },
    { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus', power: '⭐⭐⭐⭐⭐', cost: '$$$$' },
    { id: 'claude-3-haiku-20240307', name: 'Claude 3 Haiku', power: '⭐⭐⭐', cost: '$' }
  ],
  [AIProvider.GOOGLE]: [
    { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash (Recommandé) ⚡', power: '⭐⭐⭐⭐⭐', cost: 'Gratuit' },
    { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', power: '⭐⭐⭐⭐⭐', cost: 'Gratuit' },
    { id: 'gemini-flash-latest', name: 'Gemini Flash (Auto-update)', power: '⭐⭐⭐⭐', cost: 'Gratuit' }
  ],
  [AIProvider.LOCAL]: [
    { id: 'llama3.1:8b', name: 'Llama 3.1 8B (Recommandé)', power: '⭐⭐⭐⭐', cost: 'Gratuit' },
    { id: 'llama3.1:70b', name: 'Llama 3.1 70B (Puissant)', power: '⭐⭐⭐⭐⭐', cost: 'Gratuit' },
    { id: 'mistral:latest', name: 'Mistral 7B', power: '⭐⭐⭐⭐', cost: 'Gratuit' },
    { id: 'deepseek-r1:8b', name: 'DeepSeek R1 8B', power: '⭐⭐⭐⭐', cost: 'Gratuit' }
  ]
}

export default aiManager
