/**
 * OllamaInstaller - Service de gestion d'Ollama pour Cap'taine
 *
 * Gère la détection, l'installation et la configuration d'Ollama
 * pour utiliser des modèles IA locaux (gratuits et privés).
 *
 * @module OllamaInstaller
 */

export class OllamaInstaller {
  /**
   * Vérifie si Ollama est installé et actif
   */
  async isInstalled(): Promise<boolean> {
    try {
      const response = await fetch('http://localhost:11434/api/tags', {
        method: 'GET',
        signal: AbortSignal.timeout(2000)
      })
      return response.ok
    } catch {
      return false
    }
  }

  /**
   * Récupère les modèles installés
   */
  async getInstalledModels(): Promise<string[]> {
    try {
      const response = await fetch('http://localhost:11434/api/tags')
      if (!response.ok) return []

      const data = await response.json()
      return data.models?.map((m: any) => m.name) || []
    } catch {
      return []
    }
  }

  /**
   * Vérifie si un modèle spécifique est installé
   */
  async hasModel(modelName: string): Promise<boolean> {
    const models = await this.getInstalledModels()
    return models.some(m => m.includes(modelName))
  }

  /**
   * Ouvre la page de téléchargement d'Ollama
   */
  openDownloadPage(): void {
    const platform = this.detectPlatform()
    let url = 'https://ollama.com/download'

    if (platform === 'windows') {
      url = 'https://ollama.com/download/OllamaSetup.exe'
    } else if (platform === 'darwin') {
      url = 'https://ollama.com/download/Ollama-darwin.zip'
    }

    window.open(url, '_blank')
  }

  /**
   * Détecte la plateforme
   */
  private detectPlatform(): 'windows' | 'darwin' | 'linux' {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('win')) return 'windows'
    if (ua.includes('mac')) return 'darwin'
    return 'linux'
  }

  /**
   * Donne des instructions d'installation selon la plateforme
   */
  getInstallInstructions(): string {
    const platform = this.detectPlatform()

    if (platform === 'windows') {
      return `1. Télécharge OllamaSetup.exe
2. Exécute l'installeur
3. Ollama se lancera automatiquement
4. Reviens ici pour continuer`
    }

    if (platform === 'darwin') {
      return `1. Télécharge Ollama pour macOS
2. Ouvre le fichier .zip
3. Glisse Ollama dans Applications
4. Lance Ollama depuis Applications
5. Reviens ici pour continuer`
    }

    return `1. Exécute dans le terminal:
   curl -fsSL https://ollama.com/install.sh | sh
2. Lance Ollama:
   ollama serve
3. Reviens ici pour continuer`
  }

  /**
   * Vérifie la connexion toutes les X secondes
   */
  async waitForOllama(maxRetries = 30, intervalMs = 1000): Promise<boolean> {
    for (let i = 0; i < maxRetries; i++) {
      if (await this.isInstalled()) {
        return true
      }
      await new Promise(resolve => setTimeout(resolve, intervalMs))
    }
    return false
  }

  /**
   * Instructions pour télécharger un modèle
   */
  getModelDownloadInstructions(modelName: string = 'llama3.1:8b'): string {
    return `Pour télécharger le modèle ${modelName}:

1. Ouvre un terminal/invite de commandes
2. Exécute: ollama pull ${modelName}
3. Attends la fin du téléchargement
4. Le modèle sera prêt dans Cap'taine !`
  }

  /**
   * Modèles recommandés pour l'éducation
   */
  getRecommendedModels(): Array<{
    name: string
    displayName: string
    size: string
    description: string
    command: string
    educationUse: string
    recommended?: boolean
  }> {
    return [
      {
        name: 'llama3.1:8b',
        displayName: 'Llama 3.1 (8B)',
        size: '4.7 GB',
        description: 'Recommandé - Excellent pour l\'éducation',
        command: 'ollama pull llama3.1:8b',
        educationUse: 'Explications claires, méthode socratique, adapté CP-3ème',
        recommended: true
      },
      {
        name: 'llama3.2:3b',
        displayName: 'Llama 3.2 (3B)',
        size: '2 GB',
        description: 'Rapide et léger',
        command: 'ollama pull llama3.2:3b',
        educationUse: 'Questions rapides, devoirs simples'
      },
      {
        name: 'mistral:latest',
        displayName: 'Mistral 7B',
        size: '4 GB',
        description: 'Excellente qualité',
        command: 'ollama pull mistral:latest',
        educationUse: 'Explications approfondies, maths/sciences'
      },
      {
        name: 'deepseek-r1:8b',
        displayName: 'DeepSeek R1 (8B)',
        size: '4.9 GB',
        description: 'Spécialisé raisonnement',
        command: 'ollama pull deepseek-r1:8b',
        educationUse: 'Problèmes de logique, énigmes, maths avancées'
      },
      {
        name: 'gemma2:2b',
        displayName: 'Gemma 2 (2B)',
        size: '1.6 GB',
        description: 'Compact de Google',
        command: 'ollama pull gemma2:2b',
        educationUse: 'Exercices de base, révisions'
      }
    ]
  }

  /**
   * Vérifie la version d'Ollama
   */
  async getOllamaVersion(): Promise<string | null> {
    try {
      const response = await fetch('http://localhost:11434/api/version')
      if (!response.ok) return null

      const data = await response.json()
      return data.version || null
    } catch {
      return null
    }
  }

  /**
   * Test un modèle avec une requête simple
   */
  async testModel(modelName: string): Promise<{
    success: boolean
    response?: string
    error?: string
  }> {
    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: modelName,
          prompt: 'Bonjour, peux-tu m\'aider avec mes devoirs ?',
          stream: false
        })
      })

      if (!response.ok) {
        return {
          success: false,
          error: `Erreur HTTP ${response.status}`
        }
      }

      const data = await response.json()
      return {
        success: true,
        response: data.response || 'OK'
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Erreur de connexion'
      }
    }
  }
}

// Export singleton
export const ollamaInstaller = new OllamaInstaller()
