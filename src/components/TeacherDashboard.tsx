/**
 * Dashboard Professeur - "Ma Classe"
 * Interface principale de gestion de classe pour les enseignants
 */

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuthStore } from '@/store/useAuthStore'
import { useClassroomStore } from '@/store/useClassroomStore'
import { Button } from './ui/Button'
import { CreateHomeworkModal } from './CreateHomeworkModal'
import {
  Users,
  BookOpen,
  FileText,
  BarChart3,
  Plus,
  Settings,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Copy,
  Eye,
  Calendar
} from 'lucide-react'
import type { Classroom } from '@/services/databaseV2'

export function TeacherDashboard() {
  const { session } = useAuthStore()
  const {
    classrooms,
    currentClassroom,
    students,
    homeworks,
    analytics,
    isLoading,
    loadTeacherClassrooms,
    selectClassroom,
    loadClassroomHomeworks
  } = useClassroomStore()

  const [showCreateClassModal, setShowCreateClassModal] = useState(false)
  const [showCreateHomeworkModal, setShowCreateHomeworkModal] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'homeworks' | 'lessons' | 'analytics'>('overview')

  // Charger les classes du prof au montage
  useEffect(() => {
    if (session?.userId) {
      loadTeacherClassrooms(session.userId)
    }
  }, [session?.userId])

  // Si aucune classe sélectionnée, sélectionner la première
  useEffect(() => {
    if (!currentClassroom && classrooms.length > 0) {
      selectClassroom(classrooms[0].id)
    }
  }, [currentClassroom, classrooms])

  // Si pas de classe, afficher l'interface de création
  if (!isLoading && classrooms.length === 0) {
    return <CreateFirstClassroom onClassCreated={() => loadTeacherClassrooms(session!.userId)} />
  }

  if (isLoading || !currentClassroom) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement de vos classes...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Header avec sélecteur de classe */}
      <div className="bg-slate-900 border-b border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">📚 Ma Classe</h1>
            <div className="flex items-center gap-4">
              {/* Sélecteur de classe */}
              <select
                value={currentClassroom.id}
                onChange={(e) => selectClassroom(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-lg font-semibold"
              >
                {classrooms.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name} - {c.level}
                  </option>
                ))}
              </select>

              {/* Code d'accès */}
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Code classe:</span>
                <span className="font-mono font-bold text-primary">{currentClassroom.accessCode}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(currentClassroom.accessCode)
                    // TODO: Toast notification
                  }}
                  className="p-1 hover:bg-primary/20 rounded"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle classe
            </Button>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Button>
          </div>
        </div>

        {/* Stats rapides */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Élèves</p>
                <p className="text-2xl font-bold">{students.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Actifs cette semaine</p>
                <p className="text-2xl font-bold">{currentClassroom.activeStudents || 0}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Devoirs en cours</p>
                <p className="text-2xl font-bold">{homeworks.filter(h => h.isPublished).length}</p>
              </div>
              <FileText className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Moyenne classe</p>
                <p className="text-2xl font-bold">--/20</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-slate-900 border-b border-slate-800 px-6">
        <div className="flex gap-1">
          {[
            { id: 'overview', label: 'Vue d\'ensemble', icon: Eye },
            { id: 'students', label: 'Élèves', icon: Users },
            { id: 'homeworks', label: 'Devoirs', icon: FileText },
            { id: 'lessons', label: 'Leçons', icon: BookOpen },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`
                flex items-center gap-2 px-4 py-3 border-b-2 transition-all
                ${activeTab === tab.id
                  ? 'border-primary text-primary font-semibold'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-slate-700'
                }
              `}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 overflow-y-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'overview' && <OverviewTab classroom={currentClassroom} students={students} homeworks={homeworks} />}
            {activeTab === 'students' && <StudentsTab students={students} classroomId={currentClassroom.id} />}
            {activeTab === 'homeworks' && <HomeworksTab homeworks={homeworks} onCreateClick={() => setShowCreateHomeworkModal(true)} />}
            {activeTab === 'lessons' && <LessonsTab classroomId={currentClassroom.id} />}
            {activeTab === 'analytics' && <AnalyticsTab analytics={analytics} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal création de devoir */}
      {showCreateHomeworkModal && currentClassroom && session && (
        <CreateHomeworkModal
          classroomId={currentClassroom.id}
          teacherId={session.userId}
          onClose={() => setShowCreateHomeworkModal(false)}
          onCreated={() => {
            // Recharger les devoirs après création
            loadClassroomHomeworks(currentClassroom.id)
          }}
        />
      )}
    </div>
  )
}

// ==========================================
// TAB: VUE D'ENSEMBLE
// ==========================================

function OverviewTab({ classroom, students, homeworks }: any) {
  return (
    <div className="space-y-6">
      {/* Alertes & Notifications */}
      <div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-yellow-400" />
          Alertes & Notifications
        </h2>

        <div className="space-y-3">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-yellow-400">Devoir non rendu</p>
              <p className="text-sm text-muted-foreground">3 élèves n'ont pas encore rendu "DM Les Fractions"</p>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-400">Progression remarquable</p>
              <p className="text-sm text-muted-foreground">Théo a progressé de +15% cette semaine !</p>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-red-400">Difficulté collective</p>
              <p className="text-sm text-muted-foreground">80% de la classe galère sur "Division de fractions"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Devoirs récents */}
      <div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Devoirs Récents
        </h2>

        {homeworks.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
            <p className="text-muted-foreground">Aucun devoir pour le moment</p>
            <Button className="mt-4" onClick={() => setShowCreateHomeworkModal(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Créer un devoir
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {homeworks.slice(0, 5).map((hw: any) => (
              <div key={hw.id} className="bg-slate-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{hw.title}</h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {hw.subject}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {new Date(hw.dueDate).toLocaleDateString('fr-FR')}
                  </span>
                  <span>
                    {/* TODO: calculer depuis submissions */}
                    --/{students.length} rendus
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="h-24 flex-col"
          onClick={() => setShowCreateHomeworkModal(true)}
        >
          <Plus className="w-6 h-6 mb-2" />
          Créer un devoir
        </Button>
        <Button variant="outline" className="h-24 flex-col">
          <Users className="w-6 h-6 mb-2" />
          Ajouter des élèves
        </Button>
        <Button variant="outline" className="h-24 flex-col">
          <BookOpen className="w-6 h-6 mb-2" />
          Nouvelle leçon
        </Button>
      </div>
    </div>
  )
}

// ==========================================
// TAB: ÉLÈVES
// ==========================================

function StudentsTab({ students, classroomId }: any) {
  const { addStudent } = useClassroomStore()
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestion des Élèves</h2>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un élève
        </Button>
      </div>

      {/* Liste des élèves */}
      <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800/50">
            <tr>
              <th className="text-left p-4">Élève</th>
              <th className="text-left p-4">Login</th>
              <th className="text-left p-4">Âge</th>
              <th className="text-left p-4">Niveau</th>
              <th className="text-left p-4">XP</th>
              <th className="text-left p-4">Dernière activité</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: any) => (
              <tr key={student.id} className="border-t border-slate-800 hover:bg-slate-800/30">
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{student.avatarEmoji || '👤'}</span>
                    <span className="font-semibold">{student.firstName}</span>
                  </div>
                </td>
                <td className="p-4">
                  <code className="bg-slate-800 px-2 py-1 rounded text-sm">{student.username}</code>
                </td>
                <td className="p-4">{student.age} ans</td>
                <td className="p-4">{student.level}</td>
                <td className="p-4">{student.xp} XP</td>
                <td className="p-4 text-sm text-muted-foreground">
                  {student.lastLoginAt
                    ? new Date(student.lastLoginAt).toLocaleDateString('fr-FR')
                    : 'Jamais'
                  }
                </td>
                <td className="p-4">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    Voir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Ajouter élève */}
      {showAddModal && (
        <AddStudentModal
          classroomId={classroomId}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  )
}

// ==========================================
// TAB: DEVOIRS
// ==========================================

function HomeworksTab({ homeworks, onCreateClick }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestion des Devoirs</h2>
        <Button onClick={onCreateClick}>
          <Plus className="w-4 h-4 mr-2" />
          Créer un devoir
        </Button>
      </div>

      {homeworks.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>Aucun devoir créé pour le moment</p>
          <Button className="mt-4" onClick={onCreateClick}>
            <Plus className="w-4 h-4 mr-2" />
            Créer votre premier devoir
          </Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {homeworks.map((hw: any) => (
            <div key={hw.id} className="bg-slate-900 rounded-lg border border-slate-800 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{hw.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded">{hw.subject}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Deadline: {new Date(hw.dueDate).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  hw.isPublished
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {hw.isPublished ? 'Publié' : 'Brouillon'}
                </span>
              </div>

              {hw.description && (
                <p className="text-sm text-muted-foreground mb-4">{hw.description}</p>
              )}

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Exercices</p>
                  <p className="text-2xl font-bold">{hw.exerciseIds?.length || 0}</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Rendus</p>
                  <p className="text-2xl font-bold">--</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Moyenne</p>
                  <p className="text-2xl font-bold">--/20</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-1" />
                  Voir détails
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-1" />
                  Modifier
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ==========================================
// TAB: LEÇONS
// ==========================================

function LessonsTab({ classroomId }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Bibliothèque de Leçons</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle leçon
        </Button>
      </div>

      <div className="text-center py-12 text-muted-foreground">
        <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>La gestion des leçons arrive bientôt...</p>
      </div>
    </div>
  )
}

// ==========================================
// TAB: ANALYTICS
// ==========================================

function AnalyticsTab({ analytics }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics de Classe</h2>

      <div className="text-center py-12 text-muted-foreground">
        <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>Les analytics détaillées arrivent bientôt...</p>
      </div>
    </div>
  )
}

// ==========================================
// MODAL: AJOUTER ÉLÈVE
// ==========================================

function AddStudentModal({ classroomId, onClose }: { classroomId: string, onClose: () => void }) {
  const { addStudent } = useClassroomStore()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(10)
  const [level, setLevel] = useState('CM2')
  const [emoji, setEmoji] = useState('🦁')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const emojis = ['🦁', '🐱', '🐶', '🐰', '🦊', '🐼', '🐨', '🦄', '🐯', '🦋', '🐸', '🐝', '🦉', '🐙', '🦖']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await addStudent(classroomId, firstName, lastName, age, level)
      onClose()
    } catch (error) {
      console.error('Error adding student:', error)
      alert('Erreur lors de l\'ajout de l\'élève')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-900 rounded-lg border border-slate-800 p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Ajouter un élève</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Prénom *</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Nom de famille</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Âge</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                min="6"
                max="16"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Niveau</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
              >
                <option value="CP">CP</option>
                <option value="CE1">CE1</option>
                <option value="CE2">CE2</option>
                <option value="CM1">CM1</option>
                <option value="CM2">CM2</option>
                <option value="6ème">6ème</option>
                <option value="5ème">5ème</option>
                <option value="4ème">4ème</option>
                <option value="3ème">3ème</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Avatar Emoji</label>
            <div className="grid grid-cols-5 gap-2">
              {emojis.map(e => (
                <button
                  key={e}
                  type="button"
                  onClick={() => setEmoji(e)}
                  className={`
                    text-3xl p-2 rounded-lg transition-all
                    ${emoji === e ? 'bg-primary/20 ring-2 ring-primary' : 'bg-slate-800 hover:bg-slate-700'}
                  `}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-sm">
            <p className="text-blue-400 font-semibold mb-1">Login généré automatiquement</p>
            <p className="text-muted-foreground">
              Username: <code className="bg-slate-800 px-2 py-0.5 rounded">{firstName.toLowerCase() || '...'}</code>
            </p>
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? 'Ajout...' : 'Ajouter l\'élève'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Annuler
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

// ==========================================
// ÉCRAN: CRÉER PREMIÈRE CLASSE
// ==========================================

function CreateFirstClassroom({ onClassCreated }: { onClassCreated: () => void }) {
  const { session } = useAuthStore()
  const { createClassroom } = useClassroomStore()

  const [name, setName] = useState('')
  const [level, setLevel] = useState('CM2')
  const [subjects, setSubjects] = useState(['Mathématiques', 'Français'])
  const [isCreating, setIsCreating] = useState(false)

  const subjectOptions = [
    'Mathématiques', 'Français', 'Histoire', 'Géographie',
    'Sciences', 'Anglais', 'Arts', 'Sport', 'Musique'
  ]

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!session) return

    setIsCreating(true)
    try {
      await createClassroom(
        name,
        level,
        subjects,
        session.userId,
        session.displayName
      )
      onClassCreated()
    } catch (error) {
      console.error('Error creating classroom:', error)
      alert('Erreur lors de la création de la classe')
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className="h-full flex items-center justify-center bg-slate-950 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">👋 Bienvenue {session?.displayName} !</h1>
          <p className="text-xl text-muted-foreground">Créez votre première classe pour commencer</p>
        </div>

        <div className="bg-slate-900 rounded-lg border border-slate-800 p-8">
          <form onSubmit={handleCreate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nom de la classe *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="CM2-A, 6ème B, etc."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Niveau *</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-lg"
              >
                <option value="CP">CP</option>
                <option value="CE1">CE1</option>
                <option value="CE2">CE2</option>
                <option value="CM1">CM1</option>
                <option value="CM2">CM2</option>
                <option value="6ème">6ème</option>
                <option value="5ème">5ème</option>
                <option value="4ème">4ème</option>
                <option value="3ème">3ème</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Matières enseignées</label>
              <div className="grid grid-cols-3 gap-2">
                {subjectOptions.map(subject => (
                  <label key={subject} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={subjects.includes(subject)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSubjects([...subjects, subject])
                        } else {
                          setSubjects(subjects.filter(s => s !== subject))
                        }
                      }}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full py-3 text-lg" disabled={isCreating}>
              {isCreating ? 'Création...' : '🚀 Créer ma classe'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-sm text-blue-400 font-semibold mb-1">📝 Après création</p>
            <p className="text-sm text-muted-foreground">
              Un code d'accès unique sera généré automatiquement. Vos élèves pourront se connecter avec leur prénom + ce code.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
