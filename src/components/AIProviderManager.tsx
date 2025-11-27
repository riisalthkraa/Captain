import { useState, useEffect } from 'react'
import { Plus, Trash2, Power, ChevronUp, ChevronDown, Zap } from 'lucide-react'
import { aiManager, AIProvider, AIProviderConfig, AVAILABLE_MODELS } from '@/services/aiProviders'
import { ollamaInstaller } from '@/services/ollamaInstaller'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { ToastContainer, ToastProps } from './ui/Toast'
import { cn } from '@/lib/cn'

export function AIProviderManager() {
  const [configs, setConfigs] = useState<AIProviderConfig[]>(aiManager.getAllConfigs())
  const [showAddForm, setShowAddForm] = useState(false)
  const [newProvider, setNewProvider] = useState<AIProvider>(AIProvider.LOCAL)
  const [newModel, setNewModel] = useState('')
  const [newApiKey, setNewApiKey] = useState('')
  const [newName, setNewName] = useState('')
  const [installedOllamaModels, setInstalledOllamaModels] = useState<string[]>([])
  const [customModelInput, setCustomModelInput] = useState(false)
  const [testingId, setTestingId] = useState<string | null>(null)
  const [testResults, setTestResults] = useState<Record<string, { success: boolean, message: string }>>({})
  const [toasts, setToasts] = useState<ToastProps[]>([])

  // Charger les configs sauvegardées au montage du composant
  useEffect(() => {
    // Rafraîchir pour être sûr d'avoir les configs chargées
    refreshConfigs()
  }, [])

  // Charger les modèles Ollama installés
  useEffect(() => {
    const loadOllamaModels = async () => {
      const models = await ollamaInstaller.getInstalledModels()
      setInstalledOllamaModels(models)
    }
    loadOllamaModels()
  }, [showAddForm])

  const refreshConfigs = () => {
    setConfigs(aiManager.getAllConfigs())
  }

  const handleAdd = () => {
    if (!newModel) return

    const config: AIProviderConfig = {
      name: newName || `${newProvider} - ${newModel}`,
      provider: newProvider,
      model: newModel,
      apiKey: newApiKey || undefined,
      priority: 50,
      isActive: true
    }

    aiManager.addConfig(config)
    refreshConfigs()

    // Reset form
    setNewModel('')
    setNewApiKey('')
    setNewName('')
    setCustomModelInput(false)
    setShowAddForm(false)
  }

  const handleRemove = (id: string) => {
    aiManager.removeConfig(id)
    refreshConfigs()
  }

  const handleToggle = (id: string, isActive: boolean) => {
    aiManager.toggleConfig(id, !isActive)
    refreshConfigs()
  }

  const handlePriorityChange = (id: string, delta: number) => {
    const config = configs.find(c => c.id === id)
    if (config) {
      const newPriority = Math.max(1, Math.min(100, (config.priority || 50) + delta))
      aiManager.setPriority(id, newPriority)
      refreshConfigs()
    }
  }

  const handleTest = async (config: AIProviderConfig) => {
    if (!config.id) return

    setTestingId(config.id)
    setTestResults(prev => ({ ...prev, [config.id!]: { success: false, message: 'Test en cours...' } }))

    const result = await aiManager.testConfig(config)

    if (result.success) {
      setTestResults(prev => ({ ...prev, [config.id!]: { success: true, message: '✓ Connexion réussie !' } }))
    } else {
      setTestResults(prev => ({ ...prev, [config.id!]: { success: false, message: `✗ ${result.error}` } }))
    }

    setTestingId(null)

    // Effacer le résultat après 5 secondes
    setTimeout(() => {
      setTestResults(prev => {
        const newResults = { ...prev }
        delete newResults[config.id!]
        return newResults
      })
    }, 5000)
  }

  const addToast = (type: 'success' | 'error', title: string, message?: string) => {
    const id = Date.now().toString()
    const newToast: ToastProps = {
      id,
      type,
      title,
      message,
      onClose: removeToast,
    }
    setToasts(prev => [...prev, newToast])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const handleTestBeforeAdd = async () => {
    if (!newModel) return

    const tempConfig: AIProviderConfig = {
      name: newName || `${newProvider} - ${newModel}`,
      provider: newProvider,
      model: newModel,
      apiKey: newApiKey || undefined,
      priority: 50,
      isActive: true
    }

    setTestingId('new')

    const result = await aiManager.testConfig(tempConfig)

    setTestingId(null)

    if (result.success) {
      addToast('success', 'Test réussi !', 'Configuration OK, tu peux ajouter ce provider.')
    } else {
      addToast('error', 'Test échoué', result.error || 'Vérifie ta configuration avant d\'ajouter.')
    }
  }

  const getProviderIcon = (provider: AIProvider) => {
    switch (provider) {
      case AIProvider.OPENAI: return '🤖'
      case AIProvider.ANTHROPIC: return '🧠'
      case AIProvider.GOOGLE: return '⭐'
      case AIProvider.LOCAL: return '🏠'
      default: return '🔧'
    }
  }

  return (
    <>
      <ToastContainer toasts={toasts} onClose={removeToast} />
      <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🔌</span>
          Gestionnaire Multi-IA
        </CardTitle>
        <CardDescription>
          Configure plusieurs providers IA avec priorités et fallback automatique
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Liste des configs */}
        {configs.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p className="mb-4">Aucun provider configuré</p>
            <Button onClick={() => setShowAddForm(true)} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un provider
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {configs.map((config, index) => (
              <div
                key={config.id}
                className={cn(
                  'p-4 rounded-lg border-2 transition-all',
                  config.isActive
                    ? 'border-primary bg-primary/10'
                    : 'border-slate-700 bg-slate-800/50 opacity-60'
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{getProviderIcon(config.provider)}</span>
                      <h3 className="font-semibold">{config.name || config.provider}</h3>
                      {index === 0 && config.isActive && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                          Prioritaire
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{config.model}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>Priorité: {config.priority}</span>
                      {config.provider !== AIProvider.LOCAL && (
                        <span>Clé API: {config.apiKey ? '✓ Configurée' : '✗ Manquante'}</span>
                      )}
                    </div>
                  </div>

                  {/* Test result */}
                  {testResults[config.id!] && (
                    <div className={cn(
                      'mt-2 text-xs px-2 py-1 rounded',
                      testResults[config.id!].success
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    )}>
                      {testResults[config.id!].message}
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    {/* Test button */}
                    <button
                      onClick={() => handleTest(config)}
                      disabled={testingId === config.id}
                      className={cn(
                        'p-2 rounded transition-colors',
                        testingId === config.id
                          ? 'bg-blue-500/20 text-blue-400 cursor-wait'
                          : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                      )}
                      title="Tester la connexion"
                    >
                      <Zap className="w-4 h-4" />
                    </button>

                    {/* Priority controls */}
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => handlePriorityChange(config.id!, 10)}
                        className="p-1 hover:bg-slate-700 rounded"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handlePriorityChange(config.id!, -10)}
                        className="p-1 hover:bg-slate-700 rounded"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Active toggle */}
                    <button
                      onClick={() => handleToggle(config.id!, config.isActive!)}
                      className={cn(
                        'p-2 rounded transition-colors',
                        config.isActive
                          ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                          : 'bg-slate-700 text-muted-foreground hover:bg-slate-600'
                      )}
                    >
                      <Power className="w-4 h-4" />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => handleRemove(config.id!)}
                      className="p-2 hover:bg-red-500/20 text-red-400 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add button */}
        {configs.length > 0 && !showAddForm && (
          <Button onClick={() => setShowAddForm(true)} variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Ajouter un provider
          </Button>
        )}

        {/* Add form */}
        {showAddForm && (
          <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 space-y-4">
            <h3 className="font-semibold">Nouveau provider IA</h3>

            {/* Name */}
            <div>
              <label className="text-sm font-medium mb-2 block">Nom (optionnel)</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Ex: Ollama Principal, Claude Backup..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Provider selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">Provider</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.values(AIProvider).map((provider) => (
                  <button
                    key={provider}
                    onClick={() => {
                      setNewProvider(provider)
                      setNewModel('')
                    }}
                    className={cn(
                      'p-3 rounded-lg border-2 text-left transition-all',
                      newProvider === provider
                        ? 'border-primary bg-primary/10'
                        : 'border-slate-700 hover:border-slate-600'
                    )}
                  >
                    <div className="text-2xl mb-1">{getProviderIcon(provider)}</div>
                    <div className="font-medium text-sm capitalize">{provider}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Model selection */}
            <div>
              <label className="text-sm font-medium mb-2 flex items-center justify-between">
                <span>Modèle</span>
                {newProvider === AIProvider.LOCAL && installedOllamaModels.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setCustomModelInput(!customModelInput)}
                    className="text-xs text-primary hover:underline"
                  >
                    {customModelInput ? 'Choisir dans la liste' : 'Saisir manuellement'}
                  </button>
                )}
              </label>

              {customModelInput ? (
                <input
                  type="text"
                  value={newModel}
                  onChange={(e) => setNewModel(e.target.value)}
                  placeholder="llama3.2:3b"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              ) : (
                <select
                  value={newModel}
                  onChange={(e) => setNewModel(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Sélectionne un modèle</option>

                  {/* Pour Ollama : afficher les modèles INSTALLÉS */}
                  {newProvider === AIProvider.LOCAL && installedOllamaModels.length > 0 ? (
                    <>
                      <optgroup label="Modèles installés sur ton PC">
                        {installedOllamaModels.map((model) => (
                          <option key={model} value={model}>
                            {model} ✓ Installé
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Autres modèles disponibles">
                        {AVAILABLE_MODELS[newProvider]?.map((model) => (
                          <option key={model.id} value={model.id}>
                            {model.name} - {model.size}
                          </option>
                        ))}
                      </optgroup>
                    </>
                  ) : newProvider === AIProvider.LOCAL && installedOllamaModels.length === 0 ? (
                    <optgroup label="Modèles recommandés (à installer)">
                      {AVAILABLE_MODELS[newProvider]?.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.name} - {model.size}
                        </option>
                      ))}
                    </optgroup>
                  ) : (
                    /* Pour les autres providers : modèles hardcodés */
                    AVAILABLE_MODELS[newProvider]?.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.name} - {model.power} ({model.cost})
                      </option>
                    ))
                  )}
                </select>
              )}

              {newProvider === AIProvider.LOCAL && installedOllamaModels.length === 0 && (
                <p className="text-xs text-orange-400 mt-2">
                  ⚠️ Aucun modèle Ollama détecté. Installe-en un avec: <code className="bg-slate-900 px-1 rounded">ollama pull llama3.2:3b</code>
                </p>
              )}
            </div>

            {/* API Key (if needed) */}
            {newProvider !== AIProvider.LOCAL && (
              <div>
                <label className="text-sm font-medium mb-2 block">Clé API</label>
                <input
                  type="password"
                  value={newApiKey}
                  onChange={(e) => setNewApiKey(e.target.value)}
                  placeholder="sk-..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                onClick={handleTestBeforeAdd}
                disabled={!newModel || testingId === 'new'}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                {testingId === 'new' ? 'Test...' : 'Tester'}
              </Button>
              <Button onClick={handleAdd} className="flex-1" disabled={!newModel}>
                Ajouter
              </Button>
              <Button
                onClick={() => {
                  setShowAddForm(false)
                  setNewModel('')
                  setNewApiKey('')
                  setNewName('')
                  setCustomModelInput(false)
                }}
                variant="outline"
              >
                Annuler
              </Button>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-sm">
          <p className="text-blue-400 font-medium mb-1">💡 Comment ça marche ?</p>
          <ul className="text-muted-foreground space-y-1 text-xs">
            <li>• Cap'taine essaie chaque provider par ordre de <strong>priorité</strong></li>
            <li>• Si un provider échoue, il passe automatiquement au suivant (<strong>fallback</strong>)</li>
            <li>• Désactive un provider pour l'ignorer temporairement</li>
            <li>• Ollama (local) = gratuit et privé, mais nécessite <code className="bg-slate-800 px-1 rounded">ollama serve</code></li>
          </ul>
        </div>
      </CardContent>
    </Card>
    </>
  )
}
