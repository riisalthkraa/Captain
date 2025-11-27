import { useEffect, useState } from 'react'
import { aiManager } from '@/services/aiProviders'
import { cn } from '@/lib/cn'

export function AIStatusBadge() {
  const [status, setStatus] = useState<{ status: 'none' | 'local' | 'cloud', provider?: string, model?: string }>({ status: 'none' })

  const updateStatus = () => {
    const newStatus = aiManager.getAIStatus()
    console.log('[AIStatusBadge] Status update:', newStatus)
    setStatus(newStatus)
  }

  useEffect(() => {
    // Charger les configs au démarrage
    aiManager.loadConfigs()

    // Premier update immédiat
    updateStatus()

    // Mettre à jour toutes les secondes pour être réactif
    const interval = setInterval(updateStatus, 1000)
    return () => clearInterval(interval)
  }, [])

  const getBadgeStyle = () => {
    switch (status.status) {
      case 'cloud':
        return {
          bg: 'bg-green-500/20',
          border: 'border-green-500/50',
          text: 'text-green-400',
          dot: 'bg-green-500',
          label: 'IA Activée',
          tooltip: `${status.provider} - ${status.model}`
        }
      case 'local':
        return {
          bg: 'bg-orange-500/20',
          border: 'border-orange-500/50',
          text: 'text-orange-400',
          dot: 'bg-orange-500',
          label: 'Partiel',
          tooltip: `Ollama local - ${status.model}`
        }
      case 'none':
      default:
        return {
          bg: 'bg-red-500/20',
          border: 'border-red-500/50',
          text: 'text-red-400',
          dot: 'bg-red-500',
          label: 'Non configuré',
          tooltip: 'Aucune IA configurée - Va dans Réglages'
        }
    }
  }

  const style = getBadgeStyle()

  return (
    <div
      className={cn(
        'flex items-center gap-1.5 px-2 py-0.5 rounded border transition-all',
        style.bg,
        style.border
      )}
      title={style.tooltip}
    >
      <div className="relative">
        <div className={cn('w-1.5 h-1.5 rounded-full', style.dot)} />
        <div className={cn('absolute inset-0 w-1.5 h-1.5 rounded-full animate-ping opacity-75', style.dot)} />
      </div>
      <span className={cn('text-[10px] font-semibold', style.text)}>
        {style.label}
      </span>
    </div>
  )
}
