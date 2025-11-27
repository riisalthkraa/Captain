/**
 * Composant pour visualiser et sélectionner des exercices dans un document
 */

import { useState } from 'react'
import { AnalyzedDocument, DetectedExercise, DocumentPage } from '@/services/documentProcessor'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { X, FileText, BookOpen, Target, Brain } from 'lucide-react'
import { cn } from '@/lib/cn'
import { motion } from 'framer-motion'

interface DocumentViewerProps {
  document: AnalyzedDocument
  onExerciseSelect: (exercise: DetectedExercise) => void
  onPageSelect: (page: DocumentPage) => void
  onClose: () => void
}

export function DocumentViewer({
  document,
  onExerciseSelect,
  onPageSelect,
  onClose
}: DocumentViewerProps) {
  const [selectedTab, setSelectedTab] = useState<'exercises' | 'pages'>('exercises')
  const [selectedExercises, setSelectedExercises] = useState<Set<string>>(new Set())
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set())

  const toggleExerciseSelection = (exerciseId: string) => {
    const newSelection = new Set(selectedExercises)
    if (newSelection.has(exerciseId)) {
      newSelection.delete(exerciseId)
    } else {
      newSelection.add(exerciseId)
    }
    setSelectedExercises(newSelection)
  }

  const togglePageSelection = (pageNumber: number) => {
    const newSelection = new Set(selectedPages)
    if (newSelection.has(pageNumber)) {
      newSelection.delete(pageNumber)
    } else {
      newSelection.add(pageNumber)
    }
    setSelectedPages(newSelection)
  }

  const handleConfirmSelection = () => {
    if (selectedTab === 'exercises') {
      // Envoyer tous les exercices sélectionnés
      document.detectedExercises
        .filter(ex => selectedExercises.has(ex.id))
        .forEach(ex => onExerciseSelect(ex))
    } else {
      // Envoyer toutes les pages sélectionnées
      document.pages
        .filter(page => selectedPages.has(page.pageNumber))
        .forEach(page => onPageSelect(page))
    }
    onClose()
  }

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return 'text-green-500'
    if (difficulty <= 3) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getDifficultyLabel = (difficulty: number) => {
    if (difficulty <= 2) return 'Facile'
    if (difficulty <= 3) return 'Moyen'
    if (difficulty <= 4) return 'Difficile'
    return 'Très difficile'
  }

  const getSubjectIcon = (subject?: string) => {
    switch (subject) {
      case 'maths':
        return '🔢'
      case 'français':
        return '📝'
      case 'sciences':
        return '🔬'
      case 'histoire':
        return '📜'
      case 'géographie':
        return '🌍'
      case 'anglais':
        return '🇬🇧'
      default:
        return '📚'
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              {document.fileName}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {document.totalPages} page{document.totalPages > 1 ? 's' : ''} • {document.detectedExercises.length} exercice{document.detectedExercises.length > 1 ? 's' : ''} détecté{document.detectedExercises.length > 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-4 border-b border-slate-800">
          <button
            onClick={() => setSelectedTab('exercises')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors',
              selectedTab === 'exercises'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-slate-800'
            )}
          >
            <Target className="w-4 h-4" />
            Exercices détectés
            <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full">
              {document.detectedExercises.length}
            </span>
          </button>
          <button
            onClick={() => setSelectedTab('pages')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors',
              selectedTab === 'pages'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-slate-800'
            )}
          >
            <BookOpen className="w-4 h-4" />
            Pages
            <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full">
              {document.totalPages}
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {selectedTab === 'exercises' ? (
            <div className="space-y-4">
              {document.detectedExercises.length === 0 ? (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-medium">Aucun exercice détecté automatiquement</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Tu peux sélectionner des pages entières à la place
                  </p>
                </div>
              ) : (
                document.detectedExercises.map((exercise, index) => (
                  <motion.div
                    key={exercise.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      className={cn(
                        'p-4 cursor-pointer transition-all hover:scale-[1.02]',
                        selectedExercises.has(exercise.id)
                          ? 'ring-2 ring-primary bg-primary/10'
                          : 'hover:bg-slate-800/50'
                      )}
                      onClick={() => toggleExerciseSelection(exercise.id)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{getSubjectIcon(exercise.subject)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium text-muted-foreground">
                              Page {exercise.pageNumber}
                            </span>
                            {exercise.subject && (
                              <span className="text-xs bg-slate-800 px-2 py-0.5 rounded-full">
                                {exercise.subject}
                              </span>
                            )}
                            <span className={cn('text-xs font-medium', getDifficultyColor(exercise.estimatedDifficulty))}>
                              {getDifficultyLabel(exercise.estimatedDifficulty)}
                            </span>
                          </div>
                          <p className="text-sm line-clamp-3">
                            {exercise.content}
                          </p>
                          {exercise.keywords.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {exercise.keywords.slice(0, 5).map(keyword => (
                                <span
                                  key={keyword}
                                  className="text-xs bg-slate-800 px-2 py-0.5 rounded-full text-muted-foreground"
                                >
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {document.pages.map((page, index) => (
                <motion.div
                  key={page.pageNumber}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Card
                    className={cn(
                      'p-4 cursor-pointer transition-all hover:scale-[1.02]',
                      selectedPages.has(page.pageNumber)
                        ? 'ring-2 ring-primary bg-primary/10'
                        : 'hover:bg-slate-800/50'
                    )}
                    onClick={() => togglePageSelection(page.pageNumber)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium">Page {page.pageNumber}</h3>
                      {page.estimatedExercises > 0 && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                          {page.estimatedExercises} ex.
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {page.wordCount} mots
                    </p>
                    <p className="text-sm line-clamp-4 text-muted-foreground">
                      {page.content.substring(0, 200)}...
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-slate-800">
          <p className="text-sm text-muted-foreground">
            {selectedTab === 'exercises'
              ? `${selectedExercises.size} exercice(s) sélectionné(s)`
              : `${selectedPages.size} page(s) sélectionnée(s)`}
          </p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button
              onClick={handleConfirmSelection}
              disabled={
                (selectedTab === 'exercises' && selectedExercises.size === 0) ||
                (selectedTab === 'pages' && selectedPages.size === 0)
              }
            >
              Travailler dessus
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
