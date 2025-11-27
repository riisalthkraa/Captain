import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface ToastProps {
  id: string
  type: 'success' | 'error'
  title: string
  message?: string
  onClose: (id: string) => void
  duration?: number
}

export function Toast({ id, type, title, message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className={cn(
        'min-w-[300px] max-w-md rounded-lg shadow-lg border-2 p-4 flex items-start gap-3',
        type === 'success'
          ? 'bg-green-500/10 border-green-500/50'
          : 'bg-red-500/10 border-red-500/50'
      )}
    >
      {type === 'success' ? (
        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
      ) : (
        <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
      )}

      <div className="flex-1">
        <h3 className={cn(
          'font-semibold text-sm',
          type === 'success' ? 'text-green-400' : 'text-red-400'
        )}>
          {title}
        </h3>
        {message && (
          <p className="text-xs text-muted-foreground mt-1">
            {message}
          </p>
        )}
      </div>

      <button
        onClick={() => onClose(id)}
        className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export interface ToastContainerProps {
  toasts: ToastProps[]
  onClose: (id: string) => void
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast {...toast} onClose={onClose} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}
