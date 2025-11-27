import { useState, useEffect } from 'react'
import { User, Check, Trash2, Users } from 'lucide-react'
import { useAppStore, type StudentLevel } from '@/store/useAppStore'
import { useAuthStore } from '@/store/useAuthStore'
import { useGuestProfileStore } from '@/store/useGuestProfileStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { AIProviderManager } from './AIProviderManager'
import { OllamaSetup } from './OllamaSetup'
import { TokenUsageCounter } from './TokenUsageCounter'

const LEVELS: StudentLevel[] = ['CP', 'CE1', 'CE2', 'CM1', 'CM2', '6ème', '5ème', '4ème', '3ème']

export function Settings() {
  const { currentStudent, setCurrentStudent } = useAppStore()
  const { session } = useAuthStore()
  const { currentProfile, createProfile, updateProfile, deleteProfile, getAllProfiles } = useGuestProfileStore()

  const isGuest = session?.role === 'guest'

  const [studentName, setStudentName] = useState(isGuest ? currentProfile?.name || '' : currentStudent?.name || '')
  const [studentAge, setStudentAge] = useState(isGuest ? currentProfile?.age || 10 : currentStudent?.age || 10)
  const [studentLevel, setStudentLevel] = useState<StudentLevel>(
    isGuest ? currentProfile?.level || 'CM2' : currentStudent?.level || 'CM2'
  )
  const [saved, setSaved] = useState(false)

  // Charger le profil invité au montage ET à chaque changement
  useEffect(() => {
    if (isGuest && currentProfile) {
      console.log('[Settings] Chargement du profil:', currentProfile.name, currentProfile.age, currentProfile.level)
      setStudentName(currentProfile.name)
      setStudentAge(currentProfile.age)
      setStudentLevel(currentProfile.level)
    } else if (!isGuest && currentStudent) {
      setStudentName(currentStudent.name)
      setStudentAge(currentStudent.age)
      setStudentLevel(currentStudent.level)
    }
  }, [isGuest, currentProfile, currentStudent])


  const handleSaveStudent = () => {
    if (studentName && studentAge && studentLevel) {
      if (isGuest) {
        // Sauvegarder le profil invité
        if (currentProfile && currentProfile.name === studentName) {
          // Mettre à jour le profil existant
          updateProfile(studentName, { age: studentAge, level: studentLevel })
        } else {
          // Créer un nouveau profil
          createProfile(studentName, studentAge, studentLevel)
        }
      } else {
        // Sauvegarder dans le store classique (élève connecté)
        setCurrentStudent({
          id: currentStudent?.id || '1',
          name: studentName,
          age: studentAge,
          level: studentLevel,
        })
      }

      // Feedback visuel
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    }
  }

  const allProfiles = getAllProfiles()

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8 pt-24 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Réglages</h1>
        <p className="text-muted-foreground">
          Configure Cap'taine selon tes préférences
        </p>
      </div>

      {/* Student profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-6 h-6" />
            Profil de l'élève
          </CardTitle>
          <CardDescription>
            Personnalise ton expérience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Prénom</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Entre ton prénom"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Âge</label>
            <input
              type="number"
              value={studentAge}
              onChange={(e) => setStudentAge(parseInt(e.target.value))}
              min="6"
              max="15"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Classe</label>
            <select
              value={studentLevel}
              onChange={(e) => setStudentLevel(e.target.value as StudentLevel)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {LEVELS.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <p className="text-xs text-muted-foreground mt-1">
              Sélectionne ta classe (peut différer de l'âge si redoublement)
            </p>
          </div>
          <Button
            onClick={handleSaveStudent}
            className="flex items-center gap-2"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" />
                Enregistré !
              </>
            ) : (
              'Enregistrer'
            )}
          </Button>
          {saved && (
            <p className="text-xs text-green-400 mt-2">
              ✓ Ton profil a été sauvegardé avec succès !
            </p>
          )}
        </CardContent>
      </Card>

      {/* Profils enregistrés (Invités seulement) */}
      {isGuest && allProfiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              Profils enregistrés
            </CardTitle>
            <CardDescription>
              Tous les profils de cette famille
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {allProfiles.map((profile) => (
                <div
                  key={profile.name}
                  className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700"
                >
                  <div>
                    <p className="font-medium">{profile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {profile.age} ans • {profile.level}
                      {currentProfile?.name === profile.name && (
                        <span className="ml-2 text-primary">● Actuel</span>
                      )}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (confirm(`Supprimer le profil de ${profile.name} ?`)) {
                        deleteProfile(profile.name)
                      }
                    }}
                    className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-colors"
                    title="Supprimer ce profil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              💡 Pour changer de profil, déconnecte-toi et reconnecte-toi avec un autre prénom
            </p>
          </CardContent>
        </Card>
      )}

      {/* Ollama Setup */}
      <OllamaSetup />

      {/* AI Provider Manager */}
      <AIProviderManager />

      {/* Token Usage Counter */}
      <TokenUsageCounter />

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>À propos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Version</span>
              <span className="font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Créé par</span>
              <span className="font-medium">VIEY DAVID</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Développé avec</span>
              <span className="font-medium">❤️ et Claude Sonnet 4.5</span>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}
