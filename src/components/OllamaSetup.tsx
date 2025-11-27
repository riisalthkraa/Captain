import { useState, useEffect } from 'react'
import { Download, CheckCircle, XCircle, RefreshCw, Terminal, Rocket } from 'lucide-react'
import { ollamaInstaller } from '@/services/ollamaInstaller'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { cn } from '@/lib/cn'

export function OllamaSetup() {
  const [isInstalled, setIsInstalled] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [installedModels, setInstalledModels] = useState<string[]>([])
  const [version, setVersion] = useState<string | null>(null)
  const [showInstructions, setShowInstructions] = useState(false)

  const checkOllama = async () => {
    setIsChecking(true)
    const installed = await ollamaInstaller.isInstalled()
    setIsInstalled(installed)

    if (installed) {
      const models = await ollamaInstaller.getInstalledModels()
      setInstalledModels(models)
      const ver = await ollamaInstaller.getOllamaVersion()
      setVersion(ver)
    }

    setIsChecking(false)
  }

  useEffect(() => {
    checkOllama()
  }, [])

  const recommendedModels = ollamaInstaller.getRecommendedModels()

  if (isChecking) {
    return (
      <Card>
        <CardContent className="p-6 flex items-center justify-center">
          <RefreshCw className="w-6 h-6 animate-spin mr-2" />
          <span>Vérification d'Ollama...</span>
        </CardContent>
      </Card>
    )
  }

  if (!isInstalled) {
    return (
      <Card className="border-2 border-orange-500/50 bg-orange-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-orange-500" />
            Ollama n'est pas détecté
          </CardTitle>
          <CardDescription>
            Ollama te permet d'utiliser l'IA localement, gratuitement et en privé !
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button
              onClick={() => ollamaInstaller.openDownloadPage()}
              className="flex-1"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger Ollama
            </Button>
            <Button
              onClick={() => setShowInstructions(!showInstructions)}
              variant="outline"
            >
              Instructions
            </Button>
            <Button
              onClick={checkOllama}
              variant="outline"
              size="icon"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>

          {showInstructions && (
            <div className="bg-slate-900 rounded-lg p-4 text-sm">
              <pre className="whitespace-pre-wrap text-muted-foreground">
                {ollamaInstaller.getInstallInstructions()}
              </pre>
            </div>
          )}

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-sm">
            <p className="text-blue-400 font-medium mb-1">💡 Pourquoi Ollama ?</p>
            <ul className="text-muted-foreground space-y-1 text-xs">
              <li>✓ 100% gratuit</li>
              <li>✓ Fonctionne hors ligne</li>
              <li>✓ Tes données restent sur ton PC</li>
              <li>✓ Aucun compte nécessaire</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-green-500/50 bg-green-500/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-500" />
          Ollama est actif !
        </CardTitle>
        <CardDescription>
          {version && `Version ${version} • `}
          {installedModels.length} modèle{installedModels.length > 1 ? 's' : ''} installé{installedModels.length > 1 ? 's' : ''}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Installed models */}
        {installedModels.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Modèles installés :</h4>
            <div className="grid grid-cols-2 gap-2">
              {installedModels.map((model) => (
                <div
                  key={model}
                  className="bg-slate-800 rounded-lg px-3 py-2 text-sm flex items-center gap-2"
                >
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="truncate">{model}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended models */}
        <div>
          <h4 className="text-sm font-medium mb-2">Modèles recommandés pour l'éducation :</h4>
          <div className="space-y-2">
            {recommendedModels.map((model) => {
              const isInstalled = installedModels.some(m => m.includes(model.name))

              return (
                <div
                  key={model.name}
                  className={cn(
                    'p-3 rounded-lg border transition-all',
                    isInstalled
                      ? 'border-green-500/50 bg-green-500/10'
                      : 'border-slate-700 bg-slate-800/50'
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-semibold text-sm">{model.displayName}</h5>
                        {model.recommended && (
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                            Recommandé
                          </span>
                        )}
                        {isInstalled && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {model.description} • {model.size}
                      </p>
                      <p className="text-xs text-blue-400">
                        {model.educationUse}
                      </p>
                    </div>
                  </div>

                  {!isInstalled && (
                    <div className="mt-3 bg-slate-900 rounded p-2">
                      <code className="text-xs text-green-400">{model.command}</code>
                      <p className="text-xs text-muted-foreground mt-1">
                        Copie cette commande dans ton terminal
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <Button
          onClick={checkOllama}
          variant="outline"
          size="sm"
          className="w-full"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Rafraîchir
        </Button>
      </CardContent>
    </Card>
  )
}
