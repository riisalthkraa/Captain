/**
 * COMPTEUR D'UTILISATION DES PROVIDERS
 * Affiche le nombre de tokens/requêtes utilisés
 */

import { useState, useEffect } from 'react'
import { Activity, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { aiManager } from '@/services/aiProviders'

interface UsageStats {
  totalRequests: number
  totalTokens: number
  providerStats: Record<string, {
    requests: number
    tokens: number
  }>
}

export function TokenUsageCounter() {
  const [stats, setStats] = useState<UsageStats>({
    totalRequests: 0,
    totalTokens: 0,
    providerStats: {}
  })

  useEffect(() => {
    // Charger les stats depuis localStorage
    const loadStats = () => {
      const saved = localStorage.getItem('ai-usage-stats')
      if (saved) {
        try {
          setStats(JSON.parse(saved))
        } catch (e) {
          console.error('[TokenUsage] Erreur chargement stats:', e)
        }
      }
    }

    loadStats()

    // Rafraîchir toutes les 5 secondes
    const interval = setInterval(loadStats, 5000)
    return () => clearInterval(interval)
  }, [])

  const resetStats = () => {
    const emptyStats: UsageStats = {
      totalRequests: 0,
      totalTokens: 0,
      providerStats: {}
    }
    localStorage.setItem('ai-usage-stats', JSON.stringify(emptyStats))
    setStats(emptyStats)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-6 h-6" />
          Utilisation des IA
        </CardTitle>
        <CardDescription>
          Statistiques d'utilisation des providers
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Stats globales */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-muted-foreground">Requêtes</span>
            </div>
            <div className="text-2xl font-bold">{stats.totalRequests}</div>
          </div>

          <div className="bg-slate-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-muted-foreground">Tokens</span>
            </div>
            <div className="text-2xl font-bold">
              {stats.totalTokens > 1000
                ? `${(stats.totalTokens / 1000).toFixed(1)}K`
                : stats.totalTokens}
            </div>
          </div>
        </div>

        {/* Stats par provider */}
        {Object.keys(stats.providerStats).length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Par Provider</h3>
            {Object.entries(stats.providerStats).map(([provider, providerStats]) => (
              <div key={provider} className="flex items-center justify-between bg-slate-800 rounded-lg p-3">
                <span className="text-sm font-medium">{provider}</span>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{providerStats.requests} req.</span>
                  <span>{providerStats.tokens} tokens</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bouton reset */}
        {stats.totalRequests > 0 && (
          <button
            onClick={resetStats}
            className="w-full text-xs text-red-400 hover:text-red-300 transition-colors"
          >
            Réinitialiser les statistiques
          </button>
        )}

        {stats.totalRequests === 0 && (
          <p className="text-xs text-muted-foreground text-center">
            Aucune utilisation enregistrée
          </p>
        )}
      </CardContent>
    </Card>
  )
}

// Hook pour incrémenter les stats
export function incrementUsageStats(provider: string, tokens: number = 0) {
  const saved = localStorage.getItem('ai-usage-stats')
  let stats: UsageStats = {
    totalRequests: 0,
    totalTokens: 0,
    providerStats: {}
  }

  if (saved) {
    try {
      stats = JSON.parse(saved)
    } catch (e) {
      console.error('[TokenUsage] Erreur parsing stats:', e)
    }
  }

  // Incrémenter
  stats.totalRequests++
  stats.totalTokens += tokens

  if (!stats.providerStats[provider]) {
    stats.providerStats[provider] = { requests: 0, tokens: 0 }
  }
  stats.providerStats[provider].requests++
  stats.providerStats[provider].tokens += tokens

  localStorage.setItem('ai-usage-stats', JSON.stringify(stats))

  console.log('[TokenUsage] Stats mises à jour:', provider, tokens, 'total:', stats.totalRequests)
}
