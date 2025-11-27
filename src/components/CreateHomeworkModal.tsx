/**
 * Modal de création de devoir (Professeur)
 * Interface complète pour créer et configurer un devoir
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'
import { useClassroomStore } from '@/store/useClassroomStore'
import { generateExercises, generateDemoExercises, saveGeneratedExercises, type ExerciseGenerationParams } from '@/services/exerciseGenerator'
import type { Exercise } from '@/services/databaseV2'
import {
  X,
  Wand2,
  Plus,
  Calendar,
  Settings,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface CreateHomeworkModalProps {
  classroomId: string
  teacherId: string
  onClose: () => void
  onCreated?: () => void
}

export function CreateHomeworkModal({ classroomId, teacherId, onClose, onCreated }: CreateHomeworkModalProps) {
  const { createHomework } = useClassroomStore()

  // Étape du wizard (1: Config, 2: Exercices, 3: Paramètres)
  const [step, setStep] = useState<1 | 2 | 3>(1)

  // Données du devoir
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('Mathématiques')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() + 7) // +7 jours par défaut
    return date.toISOString().split('T')[0]
  })

  // Exercices
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generateError, setGenerateError] = useState('')

  // Paramètres
  const [allowHints, setAllowHints] = useState(true)
  const [maxHints, setMaxHints] = useState(3)
  const [showCorrection, setShowCorrection] = useState<'immediate' | 'after_deadline' | 'manual'>('immediate')
  const [allowLateSubmission, setAllowLateSubmission] = useState(true)

  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Génère des exercices via l'IA
   */
  const handleGenerateExercises = async () => {
    setIsGenerating(true)
    setGenerateError('')

    try {
      const params: ExerciseGenerationParams = {
        subject,
        topic: title || subject,
        level: 'CM2', // TODO: récupérer depuis la classe
        difficulty: 3,
        count: 5
      }

      const result = await generateExercises(params)

      if (!result.success || !result.exercises) {
        // Fallback sur exercices de démo
        console.warn('[CreateHomework] IA failed, using demo exercises')
        const demoExercises = generateDemoExercises(params)
        const saved = await saveGeneratedExercises(demoExercises, teacherId)
        setExercises(saved)
      } else {
        // Sauvegarder les exercices générés par IA
        const saved = await saveGeneratedExercises(result.exercises, teacherId)
        setExercises(saved)
      }

      setStep(2)
    } catch (error: any) {
      console.error('[CreateHomework] Error generating exercises:', error)
      setGenerateError(error.message || 'Erreur lors de la génération')
    } finally {
      setIsGenerating(false)
    }
  }

  /**
   * Crée le devoir
   */
  const handleCreateHomework = async () => {
    setIsSubmitting(true)

    try {
      await createHomework({
        classroomId,
        teacherId,
        title,
        subject,
        description,
        lessonIds: [],
        exerciseIds: exercises.map(ex => ex.id),
        dueDate: new Date(dueDate),
        allowLateSubmission,
        showCorrection,
        allowHints,
        maxHintsPerExercise: maxHints,
        isPublished: true
      })

      onCreated?.()
      onClose()
    } catch (error) {
      console.error('[CreateHomework] Error creating homework:', error)
      alert('Erreur lors de la création du devoir')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-900 rounded-lg border border-slate-800 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Créer un devoir</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Étape {step}/3 : {step === 1 ? 'Configuration' : step === 2 ? 'Exercices' : 'Paramètres'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-6 pt-4">
          <div className="flex gap-2">
            {[1, 2, 3].map(s => (
              <div
                key={s}
                className={`flex-1 h-1 rounded-full transition-all ${
                  s <= step ? 'bg-primary' : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {/* ÉTAPE 1: Configuration */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-2">Titre du devoir *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ex: DM Les Fractions, Contrôle Conjugaison..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3"
                    required
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Matière *</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3"
                  >
                    <option value="Mathématiques">Mathématiques</option>
                    <option value="Français">Français</option>
                    <option value="Histoire">Histoire</option>
                    <option value="Géographie">Géographie</option>
                    <option value="Sciences">Sciences</option>
                    <option value="Anglais">Anglais</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description (optionnelle)</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Instructions ou consignes particulières..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Date limite *</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3"
                    required
                  />
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Wand2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-400">Génération automatique d'exercices</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        À l'étape suivante, l'IA va générer automatiquement des exercices adaptés au sujet et au niveau de la classe.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 2: Exercices */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {exercises.length === 0 ? (
                  <div className="text-center py-12">
                    <Wand2 className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-bold mb-2">Génération d'exercices par IA</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      L'IA va créer {5} exercices personnalisés sur le sujet "<strong>{title || subject}</strong>"
                    </p>

                    {generateError && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg p-4 mb-4 max-w-md mx-auto">
                        <AlertCircle className="w-5 h-5 inline mr-2" />
                        {generateError}
                      </div>
                    )}

                    <Button
                      onClick={handleGenerateExercises}
                      disabled={isGenerating}
                      size="lg"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Génération en cours...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-5 h-5 mr-2" />
                          Générer les exercices
                        </>
                      )}
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <p className="font-semibold text-green-400">
                          {exercises.length} exercices générés avec succès !
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exercises.map((ex, index) => (
                        <div key={ex.id} className="bg-slate-800/50 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm font-bold">
                                #{index + 1}
                              </span>
                              <span className="text-xs bg-slate-700 px-2 py-1 rounded">
                                {ex.type}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {'⭐'.repeat(ex.difficulty)}
                              </span>
                            </div>
                            <span className="text-xs text-primary">+{ex.xpReward} XP</span>
                          </div>

                          <p className="font-medium mb-2">{ex.question}</p>

                          {ex.type === 'QCM' && ex.choices && (
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              {ex.choices.map((choice, i) => (
                                <div
                                  key={i}
                                  className={`px-3 py-2 rounded ${
                                    choice === ex.correctAnswer
                                      ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                                      : 'bg-slate-700/50'
                                  }`}
                                >
                                  {choice}
                                </div>
                              ))}
                            </div>
                          )}

                          {ex.type !== 'QCM' && (
                            <div className="text-sm bg-green-500/10 border border-green-500/30 rounded px-3 py-2 text-green-400">
                              ✓ Réponse: {ex.correctAnswer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* ÉTAPE 3: Paramètres */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Paramètres du devoir
                  </h3>

                  <div className="space-y-4">
                    {/* Indices autorisés */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Autoriser les indices</p>
                        <p className="text-sm text-muted-foreground">Les élèves peuvent demander de l'aide</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={allowHints}
                          onChange={(e) => setAllowHints(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>

                    {allowHints && (
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nombre max d'indices par exercice
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="5"
                          value={maxHints}
                          onChange={(e) => setMaxHints(parseInt(e.target.value))}
                          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
                        />
                      </div>
                    )}

                    {/* Affichage de la correction */}
                    <div>
                      <label className="block font-medium mb-2">Afficher la correction</label>
                      <select
                        value={showCorrection}
                        onChange={(e) => setShowCorrection(e.target.value as any)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
                      >
                        <option value="immediate">Immédiatement après chaque exercice</option>
                        <option value="after_deadline">Après la date limite</option>
                        <option value="manual">Manuellement par le professeur</option>
                      </select>
                    </div>

                    {/* Rendu en retard */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Autoriser les rendus en retard</p>
                        <p className="text-sm text-muted-foreground">Les élèves peuvent rendre après la deadline</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={allowLateSubmission}
                          onChange={(e) => setAllowLateSubmission(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Récapitulatif */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="font-bold text-blue-400 mb-3">Récapitulatif</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Titre:</strong> {title}</p>
                    <p><strong>Matière:</strong> {subject}</p>
                    <p><strong>Exercices:</strong> {exercises.length}</p>
                    <p><strong>Date limite:</strong> {new Date(dueDate).toLocaleDateString('fr-FR')}</p>
                    <p><strong>Indices:</strong> {allowHints ? `Oui (max ${maxHints})` : 'Non'}</p>
                    <p><strong>Correction:</strong> {
                      showCorrection === 'immediate' ? 'Immédiate' :
                      showCorrection === 'after_deadline' ? 'Après deadline' :
                      'Manuelle'
                    }</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer avec boutons navigation */}
        <div className="p-6 border-t border-slate-800 flex items-center justify-between">
          <div>
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep((step - 1) as 1 | 2 | 3)}
                disabled={isSubmitting || isGenerating}
              >
                Précédent
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} disabled={isSubmitting || isGenerating}>
              Annuler
            </Button>

            {step < 3 ? (
              <Button
                onClick={() => {
                  if (step === 1 && !title) {
                    alert('Veuillez renseigner un titre')
                    return
                  }
                  setStep((step + 1) as 1 | 2 | 3)
                }}
                disabled={step === 2 && exercises.length === 0}
              >
                Suivant
              </Button>
            ) : (
              <Button onClick={handleCreateHomework} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Création...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Créer le devoir
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
