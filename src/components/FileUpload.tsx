import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, FileText, Image as ImageIcon, X, Loader2 } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { cn } from '@/lib/cn'
import { motion, AnimatePresence } from 'framer-motion'
import { parsePDFDocument, AnalyzedDocument, DetectedExercise, DocumentPage } from '@/services/documentProcessor'
import { db } from '@/services/database'
import { DocumentViewer } from './DocumentViewer'

export function FileUpload() {
  const { uploadedFiles, addFile, removeFile, addMessage } = useAppStore()
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analyzedDocument, setAnalyzedDocument] = useState<AnalyzedDocument | null>(null)
  const [analysisError, setAnalysisError] = useState<string | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    for (const file of acceptedFiles) {
      // Si c'est un PDF, on lance l'analyse intelligente
      if (file.type === 'application/pdf') {
        setIsAnalyzing(true)
        setAnalysisError(null)

        const result = await parsePDFDocument(file)

        setIsAnalyzing(false)

        if (result.success && result.document) {
          // Sauvegarder dans la base de données
          await db.saveDocument(result.document)

          // Afficher le sélecteur d'exercices
          setAnalyzedDocument(result.document)
        } else {
          setAnalysisError(result.error || 'Erreur lors de l\'analyse du PDF')
          // Fallback: ajouter le fichier normalement
          addFile(file)
        }
      } else {
        // Pour les autres types de fichiers, comportement normal
        addFile(file)
      }
    }
  }, [addFile])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
  })

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <ImageIcon className="w-5 h-5" />
    }
    return <FileText className="w-5 h-5" />
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const handleExerciseSelect = (exercise: DetectedExercise) => {
    // Ajouter l'exercice sélectionné au chat
    addMessage({
      id: Date.now().toString(),
      role: 'user',
      content: `Je voudrais travailler sur cet exercice (Page ${exercise.pageNumber}, ${exercise.subject || 'exercice'}):\n\n${exercise.content}`,
      timestamp: new Date()
    })
  }

  const handlePageSelect = (page: DocumentPage) => {
    // Ajouter le contenu de la page au chat
    addMessage({
      id: Date.now().toString(),
      role: 'user',
      content: `Je voudrais travailler sur la page ${page.pageNumber}:\n\n${page.content.substring(0, 2000)}${page.content.length > 2000 ? '...' : ''}`,
      timestamp: new Date()
    })
  }

  const handleCloseDocumentViewer = () => {
    setAnalyzedDocument(null)
    setAnalysisError(null)
  }

  return (
    <div className="space-y-4">
      {/* Document Viewer Modal */}
      {analyzedDocument && (
        <DocumentViewer
          document={analyzedDocument}
          onExerciseSelect={handleExerciseSelect}
          onPageSelect={handlePageSelect}
          onClose={handleCloseDocumentViewer}
        />
      )}

      {/* Analysis Status */}
      {isAnalyzing && (
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-center gap-3">
          <Loader2 className="w-5 h-5 animate-spin text-primary" />
          <div>
            <p className="font-medium">Analyse du PDF en cours...</p>
            <p className="text-sm text-muted-foreground">Détection des exercices et structuration du contenu</p>
          </div>
        </div>
      )}

      {/* Analysis Error */}
      {analysisError && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <p className="text-sm text-red-500">{analysisError}</p>
        </div>
      )}
      <div
        {...getRootProps()}
        className={cn(
          'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all',
          isDragActive
            ? 'border-primary bg-primary/10 scale-105'
            : 'border-slate-700 hover:border-primary/50 hover:bg-slate-800/50'
        )}
      >
        <input {...getInputProps()} />
        <Upload className={cn(
          'w-12 h-12 mx-auto mb-4 transition-transform',
          isDragActive && 'scale-110 text-primary'
        )} />
        {isDragActive ? (
          <p className="text-lg font-medium text-primary">Dépose tes fichiers ici !</p>
        ) : (
          <div>
            <p className="text-lg font-medium mb-2">Glisse tes fichiers ici</p>
            <p className="text-sm text-muted-foreground">
              ou clique pour sélectionner
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              PDF, images, documents Word
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {uploadedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-2"
          >
            {uploadedFiles.map((file, index) => (
              <motion.div
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-slate-800 rounded-lg p-3 group"
              >
                <div className="text-primary">{getFileIcon(file)}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                <button
                  onClick={() => removeFile(file.name)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-700 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
