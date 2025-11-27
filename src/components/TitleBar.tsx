import { Minus, Square, X } from 'lucide-react'
import { AIStatusBadge } from './AIStatusBadge'

export function TitleBar() {
  const handleMinimize = () => {
    if (window.electronAPI) {
      window.electronAPI.minimizeWindow()
    }
  }

  const handleMaximize = () => {
    if (window.electronAPI) {
      window.electronAPI.maximizeWindow()
    }
  }

  const handleClose = () => {
    if (window.electronAPI) {
      window.electronAPI.closeWindow()
    }
  }

  return (
    <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 titlebar-drag">
      <div className="flex items-center gap-3">
        <div className="text-2xl">⛵</div>
        <span className="text-sm font-semibold text-white">Cap'taine</span>
        <div className="titlebar-no-drag">
          <AIStatusBadge />
        </div>
      </div>

      <div className="flex items-center gap-1 titlebar-no-drag">
        <button
          onClick={handleMinimize}
          className="w-8 h-8 hover:bg-slate-800 rounded flex items-center justify-center transition-colors"
        >
          <Minus className="w-4 h-4 text-slate-400" />
        </button>
        <button
          onClick={handleMaximize}
          className="w-8 h-8 hover:bg-slate-800 rounded flex items-center justify-center transition-colors"
        >
          <Square className="w-3 h-3 text-slate-400" />
        </button>
        <button
          onClick={handleClose}
          className="w-8 h-8 hover:bg-red-600 rounded flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
  )
}
