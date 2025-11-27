import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import des utilitaires de démo (accessible dans la console)
import { createDemoData } from './utils/createDemoData'

// Exposer la fonction de démo dans la console
if (typeof window !== 'undefined') {
  (window as any).createDemoData = createDemoData
  console.log('%c🎓 Cap\'taine v2.0 - Système Multi-tenant', 'color: #3b82f6; font-size: 16px; font-weight: bold')
  console.log('%c📊 Pour créer des données de démo, exécutez:', 'color: #10b981; font-size: 12px')
  console.log('%c   await createDemoData()', 'background: #1e293b; color: #fbbf24; padding: 4px 8px; border-radius: 4px; font-family: monospace')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
