/**
 * Mini-Jeux Éducatifs
 * Collection de jeux ludiques pour apprendre en s'amusant
 */

import { useState, useEffect } from 'react'
import { Gamepad2, Trophy, Star, ArrowLeft, Check, X, Zap } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { useAuthStore } from '@/store/useAuthStore'
import { useGuestProfileStore } from '@/store/useGuestProfileStore'
import { useGamificationStore } from '@/store/useGamificationStore'
import { useAdaptiveLearning } from '@/services/adaptiveLearning'
import { Button } from './ui/Button'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/Card'
import { cn } from '@/lib/cn'
import { motion, AnimatePresence } from 'framer-motion'

type GameCategory = 'maths' | 'français' | 'sciences' | 'logique'

// ========== SYSTÈME DE STATISTIQUES DES MINI-JEUX ==========
interface MiniGameStats {
  gameId: string
  level: string
  bestScore: number
  bestTime?: number // en secondes (pour les jeux chronométrés)
  gamesPlayed: number
  lastPlayed: string // ISO date
  history: { score: number; date: string; time?: number }[]
}

// Récupérer les stats d'un jeu depuis localStorage
function getGameStats(gameId: string, level: string): MiniGameStats | null {
  const key = `minigame_stats_${gameId}_${level}`
  const stored = localStorage.getItem(key)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return null
    }
  }
  return null
}

// Sauvegarder les stats d'un jeu
function saveGameStats(gameId: string, level: string, score: number, time?: number): MiniGameStats {
  const key = `minigame_stats_${gameId}_${level}`
  const existing = getGameStats(gameId, level)
  const now = new Date().toISOString()

  const newStats: MiniGameStats = {
    gameId,
    level,
    bestScore: existing ? Math.max(existing.bestScore, score) : score,
    bestTime: time !== undefined
      ? (existing?.bestTime ? Math.min(existing.bestTime, time) : time)
      : existing?.bestTime,
    gamesPlayed: (existing?.gamesPlayed || 0) + 1,
    lastPlayed: now,
    history: [
      ...(existing?.history || []).slice(-9), // Garder les 10 derniers
      { score, date: now, time }
    ]
  }

  localStorage.setItem(key, JSON.stringify(newStats))
  return newStats
}

// Récupérer le meilleur score global d'un jeu (tous niveaux confondus)
function getBestScoreForGame(gameId: string): number {
  let best = 0
  const levels = ['CP', 'CE1', 'CE2', 'CM1', 'CM2', '6ème', '5ème', '4ème', '3ème']
  for (const level of levels) {
    const stats = getGameStats(gameId, level)
    if (stats && stats.bestScore > best) {
      best = stats.bestScore
    }
  }
  return best
}

// Calculer la progression (comparaison des 3 dernières parties)
function getProgression(gameId: string, level: string): 'up' | 'down' | 'stable' | null {
  const stats = getGameStats(gameId, level)
  if (!stats || stats.history.length < 2) return null

  const recent = stats.history.slice(-3)
  if (recent.length < 2) return null

  const lastScore = recent[recent.length - 1].score
  const avgPrevious = recent.slice(0, -1).reduce((a, b) => a + b.score, 0) / (recent.length - 1)

  if (lastScore > avgPrevious + 5) return 'up'
  if (lastScore < avgPrevious - 5) return 'down'
  return 'stable'
}

// Composant pour afficher les stats à l'écran de fin
interface GameEndStatsProps {
  gameId: string
  level: string
  score: number
  maxScore?: number // Par défaut 100
}

function GameEndStats({ gameId, level, score, maxScore = 100 }: GameEndStatsProps) {
  const [stats, setStats] = useState<MiniGameStats | null>(null)
  const [previousBest, setPreviousBest] = useState<number>(0)
  const [progression, setProgression] = useState<'up' | 'down' | 'stable' | null>(null)
  const [isNewRecord, setIsNewRecord] = useState(false)

  useEffect(() => {
    // Récupérer l'ancien meilleur score AVANT de sauvegarder
    const oldStats = getGameStats(gameId, level)
    const oldBest = oldStats?.bestScore || 0
    setPreviousBest(oldBest)

    // Sauvegarder les nouvelles stats
    const newStats = saveGameStats(gameId, level, score)
    setStats(newStats)

    // Vérifier si nouveau record
    setIsNewRecord(score > oldBest)

    // Calculer la progression
    setProgression(getProgression(gameId, level))
  }, [gameId, level, score])

  if (!stats) return null

  return (
    <div className="space-y-3 mt-4 p-4 bg-slate-800/50 rounded-lg">
      {/* Nouveau record */}
      {isNewRecord && score > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <span className="text-2xl">🏆</span>
          <p className="text-yellow-400 font-bold animate-pulse">Nouveau record !</p>
        </motion.div>
      )}

      {/* Comparaison avec le précédent record */}
      {previousBest > 0 && !isNewRecord && (
        <div className="text-center text-sm text-muted-foreground">
          <Trophy className="w-4 h-4 inline mr-1 text-yellow-500" />
          Ton record : {previousBest}/{maxScore}
          {score === previousBest && <span className="ml-2">= Égalité !</span>}
        </div>
      )}

      {/* Progression */}
      {progression && stats.gamesPlayed > 1 && (
        <div className="text-center text-sm">
          {progression === 'up' && (
            <span className="text-green-400">📈 Tu progresses ! Continue comme ça !</span>
          )}
          {progression === 'down' && (
            <span className="text-orange-400">📉 Un peu moins bien cette fois, mais tu vas y arriver !</span>
          )}
          {progression === 'stable' && (
            <span className="text-blue-400">📊 Score stable - essaie de battre ton record !</span>
          )}
        </div>
      )}

      {/* Nombre de parties jouées */}
      <div className="text-center text-xs text-muted-foreground">
        {stats.gamesPlayed === 1
          ? "C'est ta première partie à ce niveau !"
          : `${stats.gamesPlayed} parties jouées à ce niveau`}
      </div>
    </div>
  )
}

interface MiniGame {
  id: string
  title: string
  description: string
  category: GameCategory
  minLevel: string
  icon: string
}

const MINI_GAMES: MiniGame[] = [
  {
    id: 'math-race',
    title: 'Course de Calcul',
    description: 'Résous des opérations le plus vite possible !',
    category: 'maths',
    minLevel: 'CP',
    icon: '🏎️'
  },
  {
    id: 'fraction-pizza',
    title: 'Pizza des Fractions',
    description: 'Apprends les fractions en partageant des pizzas',
    category: 'maths',
    minLevel: 'CE2',
    icon: '🍕'
  },
  {
    id: 'multiplication-battle',
    title: 'Bataille des Tables',
    description: 'Affronte Cap\'taine dans un duel de tables de multiplication !',
    category: 'maths',
    minLevel: 'CE1',
    icon: '⚔️'
  },
  {
    id: 'word-explorer',
    title: 'Explorateur de Mots',
    description: 'Trouve des mots cachés et enrichis ton vocabulaire',
    category: 'français',
    minLevel: 'CP',
    icon: '🔍'
  },
  {
    id: 'grammar-quest',
    title: 'Quête Grammaticale',
    description: 'Aide Cap\'taine à corriger les phrases !',
    category: 'français',
    minLevel: 'CE1',
    icon: '📝'
  },
  {
    id: 'planet-explorer',
    title: 'Explorateur des Planètes',
    description: 'Découvre le système solaire en t\'amusant',
    category: 'sciences',
    minLevel: 'CM1',
    icon: '🪐'
  },
  {
    id: 'animal-quiz',
    title: 'Quiz des Animaux',
    description: 'Teste tes connaissances sur les animaux !',
    category: 'sciences',
    minLevel: 'CP',
    icon: '🦁'
  },
  // ===== NOUVEAUX JEUX =====
  {
    id: 'memory-calcul',
    title: 'Memory des Calculs',
    description: 'Retourne les cartes et associe calculs et résultats !',
    category: 'maths',
    minLevel: 'CP',
    icon: '🃏'
  },
  {
    id: 'simon-says',
    title: 'Simon Says',
    description: 'Mémorise et reproduis la séquence de couleurs !',
    category: 'logique',
    minLevel: 'CP',
    icon: '🎵'
  },
  {
    id: 'falling-words',
    title: 'Attrape-Mots',
    description: 'Clique sur les bons mots avant qu\'ils ne tombent !',
    category: 'français',
    minLevel: 'CE1',
    icon: '🎯'
  },
  {
    id: 'clock-master',
    title: 'L\'Horloge Magique',
    description: 'Apprends à lire l\'heure en plaçant les aiguilles !',
    category: 'maths',
    minLevel: 'CP',
    icon: '🕐'
  },
  {
    id: 'balance-equation',
    title: 'Balance des Équations',
    description: 'Équilibre la balance en trouvant le bon nombre !',
    category: 'maths',
    minLevel: 'CE2',
    icon: '⚖️'
  },
  {
    id: 'france-map',
    title: 'Carte de France',
    description: 'Découvre les régions et villes de France !',
    category: 'sciences',
    minLevel: 'CE2',
    icon: '🗺️'
  },
  {
    id: 'recycle-sort',
    title: 'Tri Sélectif',
    description: 'Apprends à trier les déchets correctement !',
    category: 'sciences',
    minLevel: 'CP',
    icon: '♻️'
  },
  {
    id: 'sentence-puzzle',
    title: 'Puzzle de Phrases',
    description: 'Remets les mots dans le bon ordre !',
    category: 'français',
    minLevel: 'CP',
    icon: '🧩'
  },
  {
    id: 'hangman',
    title: 'Pendu',
    description: 'Devine le mot lettre par lettre !',
    category: 'français',
    minLevel: 'CE1',
    icon: '🔤'
  },
  {
    id: 'rhythm-game',
    title: 'Rythme Musical',
    description: 'Tape en rythme sur les touches qui s\'allument !',
    category: 'logique',
    minLevel: 'CP',
    icon: '🎹'
  }
]

const CATEGORY_LABELS: Record<GameCategory, string> = {
  'maths': '🔢 Mathématiques',
  'français': '📝 Français',
  'sciences': '🔬 Sciences',
  'logique': '🧠 Logique & Mémoire'
}

export function MiniGames() {
  const { currentStudent } = useAppStore()
  const { session } = useAuthStore()
  const { currentProfile } = useGuestProfileStore()
  const { addExperience } = useGamificationStore()
  const { currentSession, startSession, recordAnswer } = useAdaptiveLearning()

  const activeProfile = session?.role === 'guest' && currentProfile
    ? currentProfile
    : currentStudent

  const profileId = activeProfile?.name || 'unknown'

  const [selectedCategory, setSelectedCategory] = useState<GameCategory | null>(null)
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  // Démarrer une session ML quand un jeu est lancé
  useEffect(() => {
    if (selectedGame && !currentSession) {
      startSession(profileId, 3) // Difficulté moyenne par défaut pour les jeux
      console.log('[MiniGames] 📊 Session ML démarrée pour les mini-jeux')
    }
  }, [selectedGame])

  const categories: GameCategory[] = ['maths', 'français', 'sciences', 'logique']

  const filteredGames = selectedCategory
    ? MINI_GAMES.filter(g => g.category === selectedCategory)
    : MINI_GAMES

  // Vue : Sélection de jeu
  if (!selectedGame) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="p-8 pt-24 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-primary" />
            Mini-Jeux Éducatifs
          </h1>
          <p className="text-muted-foreground">
            Apprends en t'amusant avec Cap'taine !
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(null)}
            size="sm"
          >
            Tous
          </Button>
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat)}
              size="sm"
            >
              {CATEGORY_LABELS[cat]}
            </Button>
          ))}
        </div>

        {/* Liste des jeux */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGames.map(game => {
            const bestScore = getBestScoreForGame(game.id)
            return (
              <Card
                key={game.id}
                className="cursor-pointer hover:border-primary transition-all hover:scale-105"
                onClick={() => setSelectedGame(game.id)}
              >
                <CardHeader>
                  <div className="text-5xl mb-3 text-center">{game.icon}</div>
                  <CardTitle className="text-lg text-center">{game.title}</CardTitle>
                  <CardDescription className="text-center">{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>{CATEGORY_LABELS[game.category]}</span>
                    <span>À partir de {game.minLevel}</span>
                  </div>
                  {bestScore > 0 && (
                    <div className="flex items-center justify-center gap-2 mb-3 text-sm">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-yellow-500 font-semibold">Record : {bestScore}/100</span>
                    </div>
                  )}
                  <Button className="w-full">
                    {bestScore > 0 ? 'Rejouer' : 'Jouer'}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        </div>
      </div>
    )
  }

  // Vue : Jeu actif
  const game = MINI_GAMES.find(g => g.id === selectedGame)
  if (!game) return null

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8 pt-24 space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSelectedGame(null)}
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">{game.icon}</span>
            {game.title}
          </h1>
          <p className="text-sm text-muted-foreground">{game.description}</p>
        </div>
      </div>

      {/* Rendu du jeu selon son ID */}
      {game.id === 'math-race' && <MathRaceGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'multiplication-battle' && <MultiplicationBattleGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'word-explorer' && <WordExplorerGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'animal-quiz' && <AnimalQuizGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'fraction-pizza' && <FractionPizzaGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'grammar-quest' && <GrammarQuestGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'planet-explorer' && <PlanetExplorerGame onExit={() => setSelectedGame(null)} />}
      {/* Nouveaux jeux */}
      {game.id === 'memory-calcul' && <MemoryCalculGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'simon-says' && <SimonSaysGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'falling-words' && <FallingWordsGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'clock-master' && <ClockMasterGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'balance-equation' && <BalanceEquationGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'france-map' && <FranceMapGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'recycle-sort' && <RecycleSortGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'sentence-puzzle' && <SentencePuzzleGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'hangman' && <HangmanGame onExit={() => setSelectedGame(null)} />}
      {game.id === 'rhythm-game' && <RhythmGame onExit={() => setSelectedGame(null)} />}
      </div>
    </div>
  )
}

// ========== JEU 1 : Course de Calcul ==========
function MathRaceGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [level, setLevel] = useState<'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2' | '6ème'>('CP')
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [currentQuestion, setCurrentQuestion] = useState<{ question: string; answer: number } | null>(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [streak, setStreak] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  function generateMathQuestion(lvl: string): { question: string; answer: number } {
    let a: number, b: number, c: number, answer: number
    let question: string

    switch (lvl) {
      case 'CP':
        // Additions et soustractions simples (1-10)
        a = Math.floor(Math.random() * 10) + 1
        b = Math.floor(Math.random() * 10) + 1
        if (Math.random() > 0.5) {
          answer = a + b
          question = `${a} + ${b}`
        } else {
          if (a < b) [a, b] = [b, a]
          answer = a - b
          question = `${a} - ${b}`
        }
        break

      case 'CE1':
        // Additions, soustractions (1-20), tables 2,3,4,5
        a = Math.floor(Math.random() * 20) + 1
        b = Math.floor(Math.random() * 20) + 1
        const opCE1 = Math.random()
        if (opCE1 < 0.4) {
          answer = a + b
          question = `${a} + ${b}`
        } else if (opCE1 < 0.7) {
          if (a < b) [a, b] = [b, a]
          answer = a - b
          question = `${a} - ${b}`
        } else {
          a = [2, 3, 4, 5][Math.floor(Math.random() * 4)]
          b = Math.floor(Math.random() * 10) + 1
          answer = a * b
          question = `${a} × ${b}`
        }
        break

      case 'CE2':
        // Opérations plus complexes, toutes les tables
        a = Math.floor(Math.random() * 10) + 1
        b = Math.floor(Math.random() * 10) + 1
        const opCE2 = Math.random()
        if (opCE2 < 0.3) {
          a = Math.floor(Math.random() * 50) + 10
          b = Math.floor(Math.random() * 50) + 10
          answer = a + b
          question = `${a} + ${b}`
        } else if (opCE2 < 0.5) {
          a = Math.floor(Math.random() * 50) + 20
          b = Math.floor(Math.random() * 20) + 1
          answer = a - b
          question = `${a} - ${b}`
        } else {
          answer = a * b
          question = `${a} × ${b}`
        }
        break

      case 'CM1':
        // Divisions simples, multiplications à deux chiffres
        const opCM1 = Math.random()
        if (opCM1 < 0.25) {
          a = Math.floor(Math.random() * 100) + 50
          b = Math.floor(Math.random() * 100) + 50
          answer = a + b
          question = `${a} + ${b}`
        } else if (opCM1 < 0.5) {
          a = Math.floor(Math.random() * 12) + 1
          b = Math.floor(Math.random() * 12) + 1
          answer = a * b
          question = `${a} × ${b}`
        } else if (opCM1 < 0.75) {
          b = Math.floor(Math.random() * 10) + 2
          answer = Math.floor(Math.random() * 10) + 1
          a = b * answer
          question = `${a} ÷ ${b}`
        } else {
          a = Math.floor(Math.random() * 200) + 100
          b = Math.floor(Math.random() * 100) + 1
          answer = a - b
          question = `${a} - ${b}`
        }
        break

      case 'CM2':
        // Opérations avec décimaux simples, grands nombres
        const opCM2 = Math.random()
        if (opCM2 < 0.3) {
          a = Math.floor(Math.random() * 100) + 10
          b = Math.floor(Math.random() * 100) + 10
          answer = a * b
          question = `${a} × ${b}`
        } else if (opCM2 < 0.5) {
          b = Math.floor(Math.random() * 12) + 2
          answer = Math.floor(Math.random() * 20) + 5
          a = b * answer
          question = `${a} ÷ ${b}`
        } else if (opCM2 < 0.75) {
          a = Math.floor(Math.random() * 1000) + 100
          b = Math.floor(Math.random() * 1000) + 100
          answer = a + b
          question = `${a} + ${b}`
        } else {
          // Puissances simples
          a = Math.floor(Math.random() * 10) + 2
          answer = a * a
          question = `${a}²`
        }
        break

      case '6ème':
      default:
        // Fractions simples, priorités opératoires
        const op6eme = Math.random()
        if (op6eme < 0.3) {
          a = Math.floor(Math.random() * 50) + 10
          b = Math.floor(Math.random() * 50) + 10
          c = Math.floor(Math.random() * 10) + 1
          answer = a + b * c
          question = `${a} + ${b} × ${c}`
        } else if (op6eme < 0.5) {
          a = Math.floor(Math.random() * 15) + 2
          answer = a * a
          question = `${a}²`
        } else if (op6eme < 0.7) {
          a = Math.floor(Math.random() * 20) + 5
          b = Math.floor(Math.random() * 20) + 5
          c = Math.floor(Math.random() * 10) + 2
          answer = (a + b) * c
          question = `(${a} + ${b}) × ${c}`
        } else {
          // Division avec reste nul
          b = Math.floor(Math.random() * 15) + 2
          answer = Math.floor(Math.random() * 25) + 5
          a = b * answer
          question = `${a} ÷ ${b}`
        }
        break
    }

    return { question, answer }
  }

  // Timer countdown
  useEffect(() => {
    if (!gameStarted || gameOver || timeLeft <= 0) return

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [gameStarted, gameOver, timeLeft])

  // Donner XP à la fin du jeu
  useEffect(() => {
    if (gameOver && score > 0) {
      // XP basé sur le score (comme 1 exercice = 15-30 XP)
      const xpGained = Math.min(30, Math.floor(score / 10) + 15)
      addExperience(xpGained)
    }
  }, [gameOver])

  const handleSubmit = () => {
    if (!currentQuestion) return

    if (parseInt(userAnswer) === currentQuestion.answer) {
      const points = 10 + streak * 2
      setScore(score + points)
      setStreak(streak + 1)
    } else {
      setStreak(0)
    }
    setCurrentQuestion(generateMathQuestion(level))
    setUserAnswer('')
  }

  // Sélection du niveau
  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-xl font-bold text-center">🏎️ Choisis ton niveau !</h3>
          <div className="grid grid-cols-3 gap-2">
            {(['CP', 'CE1', 'CE2', 'CM1', 'CM2', '6ème'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl)
                  setCurrentQuestion(generateMathQuestion(lvl))
                  setShowLevelSelect(false)
                  setGameStarted(true)
                }}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {lvl === 'CP' && '+/- jusqu\'à 10'}
                  {lvl === 'CE1' && '+/-, tables 2-5'}
                  {lvl === 'CE2' && 'Toutes les tables'}
                  {lvl === 'CM1' && 'Divisions simples'}
                  {lvl === 'CM2' && 'Grands nombres'}
                  {lvl === '6ème' && 'Priorités, carrés'}
                </p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  // Jeu terminé
  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🏎️</p>
          <p className="text-2xl font-bold">Temps écoulé ! Score : {score}</p>
          <p className="text-muted-foreground">
            {score >= 200 ? '🌟 Champion de vitesse !' :
             score >= 100 ? '👍 Très bonne course !' :
             score >= 50 ? '💪 Continue à t\'entraîner !' :
             '🏁 Tu peux faire mieux !'}
          </p>
          <p className="text-sm text-yellow-500">Meilleure série : {streak} 🔥</p>

          {/* Stats et progression */}
          <GameEndStats gameId="math-race" level={level} score={score} maxScore={300} />

          <div className="flex gap-4 justify-center">
            <Button onClick={() => {
              setScore(0)
              setStreak(0)
              setTimeLeft(60)
              setGameOver(false)
              setCurrentQuestion(generateMathQuestion(level))
            }}>
              Rejouer
            </Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!currentQuestion) return null

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Score</p>
              <p className="text-2xl font-bold text-primary">{score}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Série</p>
              <p className="text-2xl font-bold text-yellow-500">{streak} 🔥</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Niveau {level}</p>
            <p className={cn(
              "text-2xl font-bold",
              timeLeft <= 10 ? "text-red-500 animate-pulse" : ""
            )}>{timeLeft}s</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <p className="text-4xl font-bold mb-6">{currentQuestion.question} = ?</p>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Ta réponse"
            className="w-48 text-center text-2xl bg-slate-700 border-2 border-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            autoFocus
          />
        </div>

        <Button onClick={handleSubmit} className="w-full" size="lg">
          Valider
        </Button>
      </CardContent>
    </Card>
  )
}

// ========== JEU 2 : Bataille des Tables ==========
function MultiplicationBattleGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [level, setLevel] = useState<'CE1' | 'CE2' | 'CM1' | 'CM2'>('CE1')
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [round, setRound] = useState(1)
  const [playerScore, setPlayerScore] = useState(0)
  const [captainScore, setCaptainScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<{ question: string; answer: number } | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [choices, setChoices] = useState<number[]>([])

  function generateTableQuestion(lvl: string): { question: string; answer: number } {
    let a: number, b: number

    switch (lvl) {
      case 'CE1':
        // Tables de 2, 3, 4, 5
        a = [2, 3, 4, 5][Math.floor(Math.random() * 4)]
        b = Math.floor(Math.random() * 10) + 1
        break
      case 'CE2':
        // Tables de 2 à 9
        a = Math.floor(Math.random() * 8) + 2
        b = Math.floor(Math.random() * 10) + 1
        break
      case 'CM1':
        // Tables de 1 à 12
        a = Math.floor(Math.random() * 12) + 1
        b = Math.floor(Math.random() * 12) + 1
        break
      case 'CM2':
      default:
        // Tables difficiles et carrés
        if (Math.random() > 0.3) {
          a = Math.floor(Math.random() * 15) + 6
          b = Math.floor(Math.random() * 15) + 6
        } else {
          // Carrés parfaits
          a = Math.floor(Math.random() * 15) + 2
          b = a
        }
        break
    }

    return { question: `${a} × ${b}`, answer: a * b }
  }

  function generateChoices(correctAnswer: number, lvl: string): number[] {
    const allChoices = new Set<number>([correctAnswer])

    // Générer des distracteurs plausibles
    while (allChoices.size < 4) {
      let distractor: number
      const variation = lvl === 'CE1' ? 10 : lvl === 'CE2' ? 15 : lvl === 'CM1' ? 20 : 30

      if (Math.random() > 0.5) {
        distractor = correctAnswer + Math.floor(Math.random() * variation) - Math.floor(variation / 2)
      } else {
        // Erreurs typiques (ex: oublier une retenue)
        distractor = correctAnswer + (Math.random() > 0.5 ? 10 : -10)
      }

      if (distractor > 0 && distractor !== correctAnswer) {
        allChoices.add(distractor)
      }
    }

    return Array.from(allChoices).sort(() => Math.random() - 0.5)
  }

  const startNewQuestion = (lvl: string) => {
    const question = generateTableQuestion(lvl)
    setCurrentQuestion(question)
    setChoices(generateChoices(question.answer, lvl))
  }

  const handleAnswer = (userAnswer: number) => {
    if (!currentQuestion) return

    const correct = userAnswer === currentQuestion.answer

    if (correct) {
      setPlayerScore(playerScore + 1)
      setFeedback('correct')
    } else {
      setCaptainScore(captainScore + 1)
      setFeedback('incorrect')
    }

    setTimeout(() => {
      setFeedback(null)
      const nextRound = round + 1
      setRound(nextRound)

      // Donner XP à la fin du jeu (10 rounds)
      if (nextRound > 10) {
        const xpGained = Math.min(30, 15 + playerScore * 1.5)
        addExperience(xpGained)
      } else {
        startNewQuestion(level)
      }
    }, 1500)
  }

  // Sélection du niveau
  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-xl font-bold text-center">⚔️ Choisis ton niveau !</h3>
          <div className="grid grid-cols-2 gap-4">
            {(['CE1', 'CE2', 'CM1', 'CM2'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl)
                  startNewQuestion(lvl)
                  setShowLevelSelect(false)
                }}
                className="p-6 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="text-2xl mb-2">⚔️</p>
                <p className="font-bold text-lg">{lvl}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {lvl === 'CE1' && 'Tables 2, 3, 4, 5'}
                  {lvl === 'CE2' && 'Tables 2 à 9'}
                  {lvl === 'CM1' && 'Tables 1 à 12'}
                  {lvl === 'CM2' && 'Tables 6 à 20'}
                </p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  // Jeu terminé
  if (round > 10) {
    const winner = playerScore > captainScore ? 'player' : playerScore < captainScore ? 'captain' : 'tie'

    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">
            {winner === 'player' ? '🏆' : winner === 'tie' ? '🤝' : '💪'}
          </p>
          <p className="text-2xl font-bold">
            {winner === 'player'
              ? 'Victoire ! Tu es un champion !'
              : winner === 'tie'
              ? 'Match nul ! Bien joué !'
              : 'Cap\'taine gagne ! Réessaie !'}
          </p>
          <p className="text-lg">
            <span className="text-green-500">{playerScore}</span>
            {' - '}
            <span className="text-red-500">{captainScore}</span>
          </p>

          {/* Stats et progression */}
          <GameEndStats gameId="multiplication-battle" level={level} score={playerScore * 10} />

          <div className="flex gap-4 justify-center">
            <Button onClick={() => {
              setRound(1)
              setPlayerScore(0)
              setCaptainScore(0)
              startNewQuestion(level)
            }}>
              Revanche
            </Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!currentQuestion) return null

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Toi</p>
            <p className="text-3xl font-bold text-green-500">{playerScore}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Manche {level}</p>
            <p className="text-xl font-bold">{round}/10</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Cap'taine</p>
            <p className="text-3xl font-bold text-red-500">{captainScore}</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <p className="text-4xl font-bold mb-8">{currentQuestion.question} = ?</p>

          <div className="grid grid-cols-2 gap-4">
            {choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(choice)}
                disabled={feedback !== null}
                className={cn(
                  'p-6 text-2xl font-bold rounded-lg border-2 transition-all',
                  'hover:scale-105 hover:border-primary disabled:cursor-not-allowed',
                  feedback === 'correct' && choice === currentQuestion.answer && 'bg-green-500/20 border-green-500',
                  feedback === 'incorrect' && choice === currentQuestion.answer && 'bg-green-500/20 border-green-500',
                  feedback === 'incorrect' && choice !== currentQuestion.answer && 'opacity-50',
                  feedback === null && 'border-slate-700'
                )}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>

        {feedback && (
          <div className={cn(
            'p-4 rounded-lg text-center text-xl font-bold',
            feedback === 'correct' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
          )}>
            {feedback === 'correct' ? '✅ Bien joué !' : `❌ C'était ${currentQuestion.answer}`}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ========== JEU 3 : Explorateur de Mots ==========
function WordExplorerGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [level, setLevel] = useState<'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2'>('CP')
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [currentWord, setCurrentWord] = useState('')
  const [scrambledWord, setScrambledWord] = useState('')
  const [userInput, setUserInput] = useState('')
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [hint, setHint] = useState('')
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [usedWords, setUsedWords] = useState<string[]>([]) // Éviter les doublons !

  // Banque de mots par niveau (minimum 12 mots par niveau pour éviter les doublons sur 10 rounds)
  const wordBank: Record<string, { word: string; hint: string }[]> = {
    'CP': [
      { word: 'CHAT', hint: 'Animal qui miaule' },
      { word: 'LUNE', hint: 'Elle brille la nuit' },
      { word: 'MAIN', hint: 'On a cinq doigts' },
      { word: 'PIED', hint: 'On marche avec' },
      { word: 'BRAS', hint: 'Partie du corps' },
      { word: 'NUIT', hint: 'Quand le soleil se couche' },
      { word: 'JOUR', hint: 'Quand le soleil brille' },
      { word: 'PAIN', hint: 'On le mange au petit-déjeuner' },
      { word: 'LAIT', hint: 'Boisson blanche de la vache' },
      { word: 'VENT', hint: 'Il fait bouger les feuilles' },
      { word: 'DENT', hint: 'On en a plein dans la bouche' },
      { word: 'OURS', hint: 'Gros animal de la forêt' },
      { word: 'BOIS', hint: 'Matière des arbres' },
      { word: 'PONT', hint: 'Pour traverser la rivière' },
    ],
    'CE1': [
      { word: 'FLEUR', hint: 'Elle pousse dans le jardin' },
      { word: 'LIVRE', hint: 'On le lit' },
      { word: 'TABLE', hint: 'Meuble pour manger' },
      { word: 'ARBRE', hint: 'Grand végétal avec des branches' },
      { word: 'NEIGE', hint: 'Elle tombe en hiver' },
      { word: 'SOLEIL', hint: 'Étoile du jour' },
      { word: 'CHIEN', hint: 'Animal fidèle' },
      { word: 'MAISON', hint: 'On y habite' },
      { word: 'NUAGE', hint: 'Il flotte dans le ciel' },
      { word: 'PLUME', hint: 'Elle couvre les oiseaux' },
      { word: 'TERRE', hint: 'Notre planète' },
      { word: 'ETOILE', hint: 'Elle brille dans le ciel' },
      { word: 'ORANGE', hint: 'Fruit rond et coloré' },
      { word: 'PIERRE', hint: 'Petit caillou' },
    ],
    'CE2': [
      { word: 'BALEINE', hint: 'Grand mammifère marin' },
      { word: 'CHOCOLAT', hint: 'Friandise marron' },
      { word: 'PAPILLON', hint: 'Insecte aux belles ailes' },
      { word: 'GUITARE', hint: 'Instrument à cordes' },
      { word: 'MONTAGNE', hint: 'Relief très élevé' },
      { word: 'CHAMPION', hint: 'Celui qui gagne' },
      { word: 'KANGOUROU', hint: 'Animal australien qui saute' },
      { word: 'TORTUE', hint: 'Animal avec une carapace' },
      { word: 'ELEPHANT', hint: 'Grand animal avec une trompe' },
      { word: 'PRINCESSE', hint: 'Fille du roi' },
      { word: 'AVENTURE', hint: 'Voyage plein de surprises' },
      { word: 'TOMATE', hint: 'Légume rouge' },
      { word: 'ESCARGOT', hint: 'Il porte sa maison' },
      { word: 'MUSIQUE', hint: 'Art des sons' },
    ],
    'CM1': [
      { word: 'ASTRONOMIE', hint: 'Science des étoiles' },
      { word: 'BIBLIOTHEQUE', hint: 'Lieu où l\'on emprunte des livres' },
      { word: 'EXPERIENCE', hint: 'Test scientifique' },
      { word: 'DINOSAURE', hint: 'Animal préhistorique' },
      { word: 'TEMPERATURE', hint: 'Mesure de la chaleur' },
      { word: 'ORDINATEUR', hint: 'Machine électronique' },
      { word: 'RHINOCEROS', hint: 'Animal avec une corne' },
      { word: 'PARACHUTE', hint: 'Pour descendre du ciel' },
      { word: 'CONTINENT', hint: 'Grande terre entourée d\'océans' },
      { word: 'MICROSCOPE', hint: 'Pour voir les choses minuscules' },
      { word: 'PYRAMIDE', hint: 'Monument d\'Égypte' },
      { word: 'ATMOSPHERE', hint: 'Couche d\'air autour de la Terre' },
      { word: 'REVOLUTION', hint: 'Grand changement' },
      { word: 'VEGETATION', hint: 'Ensemble des plantes' },
    ],
    'CM2': [
      { word: 'ARCHEOLOGIE', hint: 'Science qui étudie le passé' },
      { word: 'PHOTOSYNTHESE', hint: 'Comment les plantes mangent' },
      { word: 'ENCYCLOPEDIE', hint: 'Livre avec plein de savoirs' },
      { word: 'ARCHITECTURE', hint: 'Art de construire' },
      { word: 'CONSTITUTION', hint: 'Loi fondamentale d\'un pays' },
      { word: 'METEOROLOGIE', hint: 'Science de la météo' },
      { word: 'DEMOCRATIE', hint: 'Pouvoir du peuple' },
      { word: 'CIVILISATION', hint: 'Ensemble de peuples' },
      { word: 'HYPOTHESE', hint: 'Supposition à vérifier' },
      { word: 'MATHEMATIQUES', hint: 'Science des nombres' },
      { word: 'PHILOSOPHIE', hint: 'Réflexion sur la vie' },
      { word: 'ENVIRONNEMENT', hint: 'Tout ce qui nous entoure' },
      { word: 'BIODIVERSITE', hint: 'Variété des êtres vivants' },
      { word: 'HEMISPHERE', hint: 'Moitié de la Terre' },
    ]
  }

  function scrambleWord(word: string): string {
    const arr = word.split('')
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    // S'assurer que le mot mélangé n'est pas identique
    if (arr.join('') === word) return scrambleWord(word)
    return arr.join('')
  }

  function pickNewWord(lvl: string, alreadyUsed: string[] = []) {
    const words = wordBank[lvl]
    // Filtrer les mots déjà utilisés
    const availableWords = words.filter(w => !alreadyUsed.includes(w.word))

    // Si tous les mots ont été utilisés, réinitialiser (ne devrait pas arriver avec 14+ mots)
    const wordsToChooseFrom = availableWords.length > 0 ? availableWords : words

    const choice = wordsToChooseFrom[Math.floor(Math.random() * wordsToChooseFrom.length)]
    setCurrentWord(choice.word)
    setScrambledWord(scrambleWord(choice.word))
    setHint(choice.hint)
    setUserInput('')
    setFeedback(null)

    // Retourner le mot choisi pour tracking
    return choice.word
  }

  const handleValidate = () => {
    if (userInput.toUpperCase() === currentWord) {
      setScore(score + 10)
      setFeedback('correct')
    } else {
      setFeedback('incorrect')
    }

    // Ajouter le mot actuel à la liste AVANT de choisir le prochain
    const updatedUsedWords = [...usedWords, currentWord]
    setUsedWords(updatedUsedWords)

    setTimeout(() => {
      const nextRound = round + 1
      if (nextRound <= 10) {
        setRound(nextRound)
        const newWord = pickNewWord(level, updatedUsedWords)
        // Mettre à jour avec le nouveau mot aussi
        setUsedWords([...updatedUsedWords, newWord])
      } else {
        // Jeu terminé, donner XP basé sur le score
        setRound(nextRound)
        const xpGained = Math.min(30, 15 + Math.floor(score / 10))
        addExperience(xpGained)
      }
    }, 1500)
  }

  // Sélection du niveau
  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-xl font-bold text-center">🔍 Choisis ton niveau !</h3>
          <div className="grid grid-cols-5 gap-2">
            {(['CP', 'CE1', 'CE2', 'CM1', 'CM2'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl)
                  const firstWord = pickNewWord(lvl, [])
                  setUsedWords([firstWord]) // Commencer avec le premier mot
                  setShowLevelSelect(false)
                }}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  // Jeu terminé
  if (round > 10) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🔍</p>
          <p className="text-2xl font-bold">Bravo ! Score : {score}/100</p>
          <p className="text-muted-foreground">
            {score >= 80 ? '🌟 Tu es un vrai explorateur de mots !' :
             score >= 50 ? '👍 Bien joué ! Continue à enrichir ton vocabulaire !' :
             '💪 Continue à t\'entraîner !'}
          </p>

          {/* Stats et progression */}
          <GameEndStats gameId="word-explorer" level={level} score={score} />

          <div className="flex gap-4 justify-center">
            <Button onClick={() => {
              setRound(1)
              setScore(0)
              const firstWord = pickNewWord(level, [])
              setUsedWords([firstWord]) // Recommencer avec le premier mot
            }}>
              Rejouer
            </Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Score</p>
            <p className="text-2xl font-bold text-primary">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Niveau</p>
            <p className="text-lg font-bold">{level}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Question</p>
            <p className="text-2xl font-bold">{round}/10</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <p className="text-muted-foreground mb-4">Remets les lettres dans l'ordre !</p>

          {/* Lettres mélangées */}
          <div className="flex justify-center gap-2 mb-6">
            {scrambledWord.split('').map((letter, i) => (
              <span
                key={i}
                className="w-12 h-12 flex items-center justify-center text-2xl font-bold bg-primary/20 border-2 border-primary rounded-lg"
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Indice */}
          <p className="text-sm text-muted-foreground mb-4">
            💡 Indice : {hint}
          </p>

          {/* Input */}
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value.toUpperCase())}
            onKeyDown={(e) => e.key === 'Enter' && userInput.length === currentWord.length && handleValidate()}
            placeholder="Tape le mot..."
            className="w-full max-w-xs text-center text-2xl bg-slate-700 border-2 border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary uppercase"
            maxLength={currentWord.length}
            autoFocus
          />

          <p className="mt-4 text-muted-foreground text-sm">
            {userInput.length}/{currentWord.length} lettres
          </p>
        </div>

        {feedback && (
          <div className={cn(
            'p-4 rounded-lg text-center text-xl font-bold',
            feedback === 'correct' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
          )}>
            {feedback === 'correct' ? '✅ Bravo !' : `❌ C'était : ${currentWord}`}
          </div>
        )}

        <Button
          onClick={handleValidate}
          className="w-full"
          size="lg"
          disabled={userInput.length !== currentWord.length || feedback !== null}
        >
          Valider
        </Button>
      </CardContent>
    </Card>
  )
}

// ========== JEU 4 : Quiz des Animaux ==========
function AnimalQuizGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [level, setLevel] = useState<'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2' | '6ème'>('CP')
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [question, setQuestion] = useState<{ question: string; options: string[]; correct: number; fact: string } | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]) // Éviter les doublons !

  // Banque de questions sur les animaux par niveau
  const questionBank: Record<string, { question: string; options: string[]; correct: number; fact: string }[]> = {
    'CP': [
      { question: 'Le chat est un animal...', options: ['Domestique', 'Sauvage', 'Marin'], correct: 0, fact: 'Le chat est domestiqué depuis 10 000 ans !' },
      { question: 'Que mange le lapin ?', options: ['Des carottes', 'De la viande', 'Du poisson'], correct: 0, fact: 'Les lapins adorent aussi le foin et les légumes verts.' },
      { question: 'Le chien a...', options: ['4 pattes', '2 pattes', '6 pattes'], correct: 0, fact: 'Le chien est le meilleur ami de l\'homme !' },
      { question: 'La vache donne...', options: ['Du lait', 'Des œufs', 'Du miel'], correct: 0, fact: 'Une vache peut produire 30 litres de lait par jour !' },
      { question: 'L\'oiseau a...', options: ['Des plumes', 'Des poils', 'Des écailles'], correct: 0, fact: 'Les plumes permettent aux oiseaux de voler.' },
      { question: 'Le poisson vit dans...', options: ['L\'eau', 'L\'air', 'La terre'], correct: 0, fact: 'Les poissons respirent grâce à leurs branchies.' },
    ],
    'CE1': [
      { question: 'Quel animal pond des œufs ?', options: ['La poule', 'Le chat', 'Le chien'], correct: 0, fact: 'Les poules peuvent pondre un œuf par jour !' },
      { question: 'L\'éléphant est un...', options: ['Mammifère', 'Reptile', 'Oiseau'], correct: 0, fact: 'L\'éléphant est le plus grand animal terrestre.' },
      { question: 'Le papillon était avant une...', options: ['Chenille', 'Mouche', 'Abeille'], correct: 0, fact: 'La métamorphose du papillon dure environ 2 semaines.' },
      { question: 'Quel animal hiberne ?', options: ['L\'ours', 'Le lion', 'Le cheval'], correct: 0, fact: 'Les ours peuvent dormir jusqu\'à 7 mois !' },
      { question: 'La grenouille est un...', options: ['Amphibien', 'Reptile', 'Mammifère'], correct: 0, fact: 'Les grenouilles peuvent respirer par la peau !' },
      { question: 'Le serpent est un...', options: ['Reptile', 'Amphibien', 'Mammifère'], correct: 0, fact: 'Les serpents changent de peau plusieurs fois par an.' },
    ],
    'CE2': [
      { question: 'Combien de pattes a l\'araignée ?', options: ['8', '6', '4'], correct: 0, fact: 'L\'araignée n\'est pas un insecte mais un arachnide !' },
      { question: 'Le dauphin respire...', options: ['Par des poumons', 'Par des branchies', 'Par la peau'], correct: 0, fact: 'Le dauphin doit remonter à la surface pour respirer.' },
      { question: 'Quel animal peut changer de couleur ?', options: ['Le caméléon', 'Le tigre', 'L\'éléphant'], correct: 0, fact: 'Le caméléon change de couleur selon son humeur !' },
      { question: 'Le kangourou vit en...', options: ['Australie', 'Afrique', 'Europe'], correct: 0, fact: 'Le bébé kangourou reste 8 mois dans la poche !' },
      { question: 'L\'abeille produit...', options: ['Du miel', 'Du lait', 'De la soie'], correct: 0, fact: 'Une abeille visite 1500 fleurs pour faire 1g de miel !' },
      { question: 'Le guépard est l\'animal terrestre le plus...', options: ['Rapide', 'Lent', 'Lourd'], correct: 0, fact: 'Le guépard peut atteindre 120 km/h !' },
    ],
    'CM1': [
      { question: 'Quel mammifère peut voler ?', options: ['La chauve-souris', 'L\'écureuil', 'Le chat'], correct: 0, fact: 'La chauve-souris utilise l\'écholocation pour se repérer.' },
      { question: 'Le cœur de la baleine bleue pèse...', options: ['Comme une voiture', 'Comme un chat', 'Comme un ballon'], correct: 0, fact: 'Son cœur pèse environ 600 kg !' },
      { question: 'Les pieuvres ont...', options: ['3 cœurs', '1 cœur', '2 cœurs'], correct: 0, fact: 'Deux cœurs pompent vers les branchies, un vers le corps.' },
      { question: 'Quel animal a le plus long cou ?', options: ['La girafe', 'L\'autruche', 'Le cygne'], correct: 0, fact: 'La girafe n\'a que 7 vertèbres cervicales, comme nous !' },
      { question: 'Le caméléon peut voir...', options: ['Dans 2 directions à la fois', 'Dans le noir', 'Sous l\'eau'], correct: 0, fact: 'Chaque œil bouge indépendamment !' },
      { question: 'L\'escargot a combien de dents ?', options: ['Des milliers', 'Aucune', 'Une dizaine'], correct: 0, fact: 'L\'escargot a environ 20 000 dents microscopiques !' },
    ],
    'CM2': [
      { question: 'Quel sens le requin utilise pour chasser ?', options: ['L\'électroréception', 'La vue uniquement', 'Le goût'], correct: 0, fact: 'Les requins détectent les champs électriques des proies !' },
      { question: 'Le tardigrade peut survivre...', options: ['Dans l\'espace', 'Sous la lave', 'Dans le feu'], correct: 0, fact: 'Les tardigrades résistent au vide spatial et aux radiations !' },
      { question: 'Le colibri bat des ailes...', options: ['80 fois/seconde', '10 fois/seconde', '5 fois/seconde'], correct: 0, fact: 'Le colibri peut voler en arrière grâce à cette vitesse !' },
      { question: 'L\'animal le plus venimeux est...', options: ['La méduse-boîte', 'Le cobra', 'Le scorpion'], correct: 0, fact: 'Son venin peut tuer en quelques minutes !' },
      { question: 'Le plus grand œil du règne animal appartient au...', options: ['Calmar géant', 'Baleine', 'Éléphant'], correct: 0, fact: 'Son œil peut mesurer 30 cm de diamètre !' },
      { question: 'Combien d\'années peut vivre une tortue géante ?', options: ['Plus de 150 ans', '50 ans', '20 ans'], correct: 0, fact: 'Harriet, une tortue, a vécu 176 ans !' },
    ],
    '6ème': [
      { question: 'Qu\'est-ce que la bioluminescence ?', options: ['Produire de la lumière', 'Changer de couleur', 'Être invisible'], correct: 0, fact: '90% des animaux des grands fonds sont bioluminescents !' },
      { question: 'L\'axolotl peut régénérer...', options: ['Ses membres et organes', 'Seulement sa peau', 'Rien'], correct: 0, fact: 'Il peut même régénérer des parties de son cerveau !' },
      { question: 'Les orques sont de la famille des...', options: ['Dauphins', 'Requins', 'Baleines à fanons'], correct: 0, fact: 'L\'orque est le plus grand des dauphins !' },
      { question: 'Le blob (Physarum) est...', options: ['Un organisme unicellulaire', 'Un animal', 'Une plante'], correct: 0, fact: 'Le blob peut "apprendre" sans avoir de cerveau !' },
      { question: 'La symbiose est...', options: ['Une association bénéfique', 'Un combat', 'Une maladie'], correct: 0, fact: 'Le poisson-clown et l\'anémone en sont un exemple !' },
      { question: 'Le phénomène de migration est dû à...', options: ['Les saisons et la nourriture', 'L\'ennui', 'Le hasard'], correct: 0, fact: 'La sterne arctique parcourt 71 000 km par an !' },
    ]
  }

  // Fonction pour mélanger un tableau et retourner le nouvel index de la bonne réponse
  function shuffleOptions(options: string[], correctIndex: number): { shuffledOptions: string[]; newCorrectIndex: number } {
    const correctAnswer = options[correctIndex]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    const newCorrectIndex = shuffled.indexOf(correctAnswer)
    return { shuffledOptions: shuffled, newCorrectIndex }
  }

  function pickQuestion(lvl: string, alreadyUsed: string[] = []) {
    const questions = questionBank[lvl]
    // Filtrer les questions déjà utilisées
    const availableQuestions = questions.filter(q => !alreadyUsed.includes(q.question))
    const questionsToChooseFrom = availableQuestions.length > 0 ? availableQuestions : questions

    const choice = questionsToChooseFrom[Math.floor(Math.random() * questionsToChooseFrom.length)]

    // Mélanger les options pour que la bonne réponse ne soit pas toujours en premier
    const { shuffledOptions, newCorrectIndex } = shuffleOptions(choice.options, choice.correct)

    setQuestion({
      ...choice,
      options: shuffledOptions,
      correct: newCorrectIndex
    })
    setSelectedAnswer(null)
    setFeedback(null)

    // Retourner l'identifiant de la question pour tracking
    return choice.question
  }

  const handleAnswer = (index: number) => {
    if (feedback !== null || !question) return

    setSelectedAnswer(index)
    const correct = index === question.correct

    if (correct) {
      setScore(score + 10)
      setFeedback('correct')
    } else {
      setFeedback('incorrect')
    }

    // Ajouter la question actuelle AVANT de passer à la suivante
    const currentQuestionText = question.question
    const updatedUsedQuestions = [...usedQuestions, currentQuestionText]
    setUsedQuestions(updatedUsedQuestions)

    setTimeout(() => {
      const nextRound = round + 1
      if (nextRound <= 10) {
        setRound(nextRound)
        const newQ = pickQuestion(level, updatedUsedQuestions)
        setUsedQuestions([...updatedUsedQuestions, newQ])
      } else {
        // Jeu terminé, donner XP
        setRound(nextRound)
        const xpGained = Math.min(30, 15 + Math.floor(score / 10))
        addExperience(xpGained)
      }
    }, 2500)
  }

  // Sélection du niveau
  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-xl font-bold text-center">🦁 Choisis ton niveau !</h3>
          <div className="grid grid-cols-3 gap-2">
            {(['CP', 'CE1', 'CE2', 'CM1', 'CM2', '6ème'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl)
                  const firstQ = pickQuestion(lvl, [])
                  setUsedQuestions([firstQ])
                  setShowLevelSelect(false)
                }}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="text-2xl mb-1">
                  {lvl === 'CP' && '🐱'}
                  {lvl === 'CE1' && '🐘'}
                  {lvl === 'CE2' && '🦋'}
                  {lvl === 'CM1' && '🦇'}
                  {lvl === 'CM2' && '🦑'}
                  {lvl === '6ème' && '🧬'}
                </p>
                <p className="font-bold">{lvl}</p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  // Jeu terminé
  if (round > 10) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🦁</p>
          <p className="text-2xl font-bold">Bravo ! Score : {score}/100</p>
          <p className="text-muted-foreground">
            {score >= 80 ? '🌟 Tu es un expert des animaux !' :
             score >= 50 ? '👍 Bien joué ! Tu connais bien la nature !' :
             '💪 Continue à découvrir le monde animal !'}
          </p>

          {/* Stats et progression */}
          <GameEndStats gameId="animal-quiz" level={level} score={score} />

          <div className="flex gap-4 justify-center">
            <Button onClick={() => {
              setRound(1)
              setScore(0)
              const firstQ = pickQuestion(level, [])
              setUsedQuestions([firstQ])
            }}>
              Rejouer
            </Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!question) return null

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Score</p>
            <p className="text-2xl font-bold text-primary">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Niveau</p>
            <p className="text-lg font-bold">{level}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Question</p>
            <p className="text-2xl font-bold">{round}/10</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <p className="text-2xl font-bold mb-6">{question.question}</p>

          <div className="flex flex-col gap-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={feedback !== null}
                className={cn(
                  'p-4 rounded-lg border-2 text-lg font-semibold transition-all',
                  selectedAnswer === i && feedback === 'correct' && 'bg-green-500/20 border-green-500',
                  selectedAnswer === i && feedback === 'incorrect' && 'bg-red-500/20 border-red-500',
                  feedback !== null && i === question.correct && 'bg-green-500/20 border-green-500',
                  feedback === null && 'border-slate-700 hover:border-primary hover:scale-102',
                  feedback !== null && 'cursor-not-allowed'
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {feedback && (
          <div className={cn(
            'p-4 rounded-lg text-center',
            feedback === 'correct' ? 'bg-green-500/20' : 'bg-red-500/20'
          )}>
            <p className={cn(
              'text-xl font-bold mb-2',
              feedback === 'correct' ? 'text-green-500' : 'text-red-500'
            )}>
              {feedback === 'correct' ? '✅ Bonne réponse !' : '❌ Pas cette fois...'}
            </p>
            <p className="text-sm text-muted-foreground">💡 {question.fact}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ========== JEU 5 : Pizza des Fractions ==========
function FractionPizzaGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [level, setLevel] = useState<'CE2' | 'CM1' | 'CM2'>('CE2')
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [question, setQuestion] = useState(generateFractionQuestion('CE2'))
  const [selectedSlices, setSelectedSlices] = useState<number[]>([])
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [showLevelSelect, setShowLevelSelect] = useState(true)

  function generateFractionQuestion(lvl: 'CE2' | 'CM1' | 'CM2') {
    // Niveaux de difficulté
    const fractions: Record<string, { numerator: number; denominator: number }[]> = {
      'CE2': [
        { numerator: 1, denominator: 2 },
        { numerator: 1, denominator: 4 },
        { numerator: 3, denominator: 4 },
        { numerator: 1, denominator: 3 },
        { numerator: 2, denominator: 3 },
        { numerator: 1, denominator: 6 },
      ],
      'CM1': [
        { numerator: 1, denominator: 6 },
        { numerator: 5, denominator: 6 },
        { numerator: 1, denominator: 8 },
        { numerator: 3, denominator: 8 },
        { numerator: 5, denominator: 8 },
        { numerator: 7, denominator: 8 },
        { numerator: 1, denominator: 5 },
        { numerator: 2, denominator: 5 },
      ],
      'CM2': [
        { numerator: 2, denominator: 5 },
        { numerator: 3, denominator: 5 },
        { numerator: 4, denominator: 5 },
        { numerator: 3, denominator: 10 },
        { numerator: 7, denominator: 10 },
        { numerator: 5, denominator: 12 },
        { numerator: 7, denominator: 12 },
      ]
    }

    const available = fractions[lvl]
    const choice = available[Math.floor(Math.random() * available.length)]
    return choice
  }

  const handleSliceClick = (sliceIndex: number) => {
    if (feedback !== null) return

    if (selectedSlices.includes(sliceIndex)) {
      setSelectedSlices(selectedSlices.filter(s => s !== sliceIndex))
    } else {
      setSelectedSlices([...selectedSlices, sliceIndex])
    }
  }

  const handleValidate = () => {
    const correct = selectedSlices.length === question.numerator

    if (correct) {
      setScore(score + 10)
      setFeedback('correct')
    } else {
      setFeedback('incorrect')
    }

    setTimeout(() => {
      const nextRound = round + 1
      if (nextRound <= 10) {
        setRound(nextRound)
        setQuestion(generateFractionQuestion(level))
        setSelectedSlices([])
        setFeedback(null)
      } else {
        // Jeu terminé, donner XP
        setRound(nextRound)
        const xpGained = Math.min(30, 15 + Math.floor(score / 10))
        addExperience(xpGained)
      }
    }, 1500)
  }

  // Sélection du niveau
  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-xl font-bold text-center">🍕 Choisis ton niveau !</h3>
          <div className="grid grid-cols-3 gap-4">
            {(['CE2', 'CM1', 'CM2'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl)
                  setQuestion(generateFractionQuestion(lvl))
                  setShowLevelSelect(false)
                }}
                className="p-6 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="text-2xl mb-2">🍕</p>
                <p className="font-bold">{lvl}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {lvl === 'CE2' && 'Halves, thirds, quarters'}
                  {lvl === 'CM1' && 'Sixths, eighths'}
                  {lvl === 'CM2' && 'Fifths, tenths, twelfths'}
                </p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  // Jeu terminé
  if (round > 10) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🍕</p>
          <p className="text-2xl font-bold">Bravo ! Score : {score}/100</p>
          <p className="text-muted-foreground">
            {score >= 80 ? '🌟 Tu es un chef pizzaiolo des fractions !' :
             score >= 50 ? '👍 Bien joué ! Continue à t\'entraîner !' :
             '💪 Encore un peu d\'entraînement !'}
          </p>

          {/* Stats et progression */}
          <GameEndStats gameId="fraction-pizza" level={level} score={score} />

          <div className="flex gap-4">
            <Button onClick={() => {
              setRound(1)
              setScore(0)
              setSelectedSlices([])
              setQuestion(generateFractionQuestion(level))
              setFeedback(null)
            }}>
              Rejouer
            </Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Générer les parts de pizza
  const slices = Array.from({ length: question.denominator }, (_, i) => i)
  const anglePerSlice = 360 / question.denominator

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Score</p>
            <p className="text-2xl font-bold text-primary">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Niveau</p>
            <p className="text-lg font-bold">{level}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Question</p>
            <p className="text-2xl font-bold">{round}/10</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <p className="text-2xl font-bold mb-6">
            Clique sur <span className="text-primary">{question.numerator}/{question.denominator}</span> de la pizza !
          </p>

          {/* Pizza SVG */}
          <div className="relative w-64 h-64 mx-auto">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Base de la pizza */}
              <circle cx="100" cy="100" r="95" fill="#F4A460" stroke="#8B4513" strokeWidth="3" />

              {/* Parts de pizza */}
              {slices.map((slice) => {
                const startAngle = slice * anglePerSlice - 90
                const endAngle = startAngle + anglePerSlice
                const startRad = (startAngle * Math.PI) / 180
                const endRad = (endAngle * Math.PI) / 180
                const x1 = 100 + 90 * Math.cos(startRad)
                const y1 = 100 + 90 * Math.sin(startRad)
                const x2 = 100 + 90 * Math.cos(endRad)
                const y2 = 100 + 90 * Math.sin(endRad)
                const largeArc = anglePerSlice > 180 ? 1 : 0

                return (
                  <g key={slice}>
                    <path
                      d={`M 100 100 L ${x1} ${y1} A 90 90 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={selectedSlices.includes(slice) ? '#FF6347' : '#FFD700'}
                      stroke="#8B4513"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleSliceClick(slice)}
                    />
                    {/* Pepperoni */}
                    <circle
                      cx={100 + 50 * Math.cos((startRad + endRad) / 2)}
                      cy={100 + 50 * Math.sin((startRad + endRad) / 2)}
                      r="8"
                      fill="#8B0000"
                      className="pointer-events-none"
                    />
                  </g>
                )
              })}
            </svg>
          </div>

          <p className="mt-4 text-muted-foreground">
            Parts sélectionnées : {selectedSlices.length} / {question.denominator}
          </p>
        </div>

        {feedback && (
          <div className={cn(
            'p-4 rounded-lg text-center text-xl font-bold',
            feedback === 'correct' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
          )}>
            {feedback === 'correct' ? '✅ Correct ! Bien joué !' : `❌ La bonne réponse était ${question.numerator} parts`}
          </div>
        )}

        <Button
          onClick={handleValidate}
          className="w-full"
          size="lg"
          disabled={feedback !== null}
        >
          Valider
        </Button>
      </CardContent>
    </Card>
  )
}

// ========== JEU 6 : Quête Grammaticale ==========
function GrammarQuestGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [level, setLevel] = useState<'CE1' | 'CE2' | 'CM1' | 'CM2' | '6ème'>('CE1')
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [question, setQuestion] = useState<{ sentence: string; options: string[]; correct: number; explanation: string } | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]) // Éviter les doublons !

  // Banque de questions grammaticales par niveau
  const questionBank: Record<string, { sentence: string; options: string[]; correct: number; explanation: string }[]> = {
    'CE1': [
      { sentence: 'Les enfants ___ dans la cour.', options: ['joue', 'jouent', 'joues'], correct: 1, explanation: 'Avec "Les enfants" (pluriel), on utilise "jouent".' },
      { sentence: 'Marie ___ une pomme.', options: ['mange', 'mangent', 'manges'], correct: 0, explanation: 'Avec "Marie" (singulier), on utilise "mange".' },
      { sentence: 'Je ___ à l\'école.', options: ['va', 'vais', 'vas'], correct: 1, explanation: 'Avec "Je", on utilise "vais".' },
      { sentence: 'Tu ___ gentil.', options: ['est', 'es', 'êtes'], correct: 1, explanation: 'Avec "Tu", on utilise "es".' },
      { sentence: 'Nous ___ contents.', options: ['sommes', 'êtes', 'sont'], correct: 0, explanation: 'Avec "Nous", on utilise "sommes".' },
      { sentence: 'Le chat ___ sur le canapé.', options: ['dort', 'dorment', 'dors'], correct: 0, explanation: 'Avec "Le chat" (singulier), on utilise "dort".' },
    ],
    'CE2': [
      { sentence: 'Les oiseaux ___ très haut.', options: ['vole', 'voles', 'volent'], correct: 2, explanation: 'Avec "Les oiseaux" (pluriel), on utilise "volent".' },
      { sentence: 'Elle ___ partie hier soir.', options: ['est', 'a', 'ai'], correct: 0, explanation: '"Partir" utilise l\'auxiliaire "être" au passé composé.' },
      { sentence: 'Ils ___ mangé tous les gâteaux.', options: ['on', 'ont', 'à'], correct: 1, explanation: '"Ont" est le verbe avoir conjugué avec "Ils".' },
      { sentence: 'Mon père ___ corrigé mes devoirs.', options: ['a', 'à', 'as'], correct: 0, explanation: '"A" est l\'auxiliaire avoir conjugué avec "il/elle", pas la préposition "à" ni "as" (tu).' },
      { sentence: 'Les fleurs ___ belles.', options: ['son', 'sont', 'sons'], correct: 1, explanation: '"Sont" est le verbe être conjugué avec "Les fleurs".' },
      { sentence: 'Nous avons ___ au parc.', options: ['joué', 'jouer', 'jouée'], correct: 0, explanation: 'Après "avoir", le participe passé ne s\'accorde pas (ici).' },
    ],
    'CM1': [
      { sentence: 'Les pommes que j\'ai ___ étaient délicieuses.', options: ['mangé', 'mangée', 'mangées'], correct: 2, explanation: 'Le COD "pommes" est placé avant, accord féminin pluriel.' },
      { sentence: 'Elle s\'est ___ les mains.', options: ['lavé', 'lavée', 'lavés'], correct: 0, explanation: '"Les mains" est COD placé après, pas d\'accord.' },
      { sentence: 'Les enfants ___ sont amusés.', options: ['se', 's\'', 'ces'], correct: 1, explanation: '"S\'" est le pronom réfléchi élidé devant voyelle.' },
      { sentence: 'C\'est la maison ___ j\'habite.', options: ['ou', 'où', 'tous'], correct: 1, explanation: '"Où" indique le lieu (avec accent).' },
      { sentence: 'Il ___ très fort hier soir.', options: ['a plu', 'à plu', 'as plu'], correct: 0, explanation: '"A plu" = auxiliaire avoir + participe passé de pleuvoir.' },
      { sentence: '___ vas-tu ce soir ?', options: ['Ou', 'Où', 'Tous'], correct: 1, explanation: '"Où" avec accent pour le lieu.' },
    ],
    'CM2': [
      { sentence: 'Les lettres que nous avons ___ sont importantes.', options: ['écrit', 'écrite', 'écrites'], correct: 2, explanation: 'COD "lettres" avant = accord féminin pluriel.' },
      { sentence: 'Elles se sont ___ dans le miroir.', options: ['regardé', 'regardée', 'regardées'], correct: 2, explanation: 'Pronom réfléchi COD = accord avec le sujet.' },
      { sentence: '___ il pleut, je reste à la maison.', options: ['Quand', 'Quant', 'Qu\'en'], correct: 0, explanation: '"Quand" = lorsque (conjonction de temps).' },
      { sentence: 'Je ne sais pas ___ faire.', options: ['quel', 'quelle', 'qu\'elle'], correct: 2, explanation: '"Qu\'elle" = que + elle.' },
      { sentence: 'Ils ont ___ leur travail.', options: ['fini', 'finis', 'finit'], correct: 0, explanation: 'Pas d\'accord avec COD placé après "avoir".' },
      { sentence: 'Les devoirs ___ tu as faits sont corrects.', options: ['que', 'qu\'il', 'quel'], correct: 0, explanation: '"Que" est le pronom relatif COD.' },
    ],
    '6ème': [
      { sentence: 'Quoiqu\'il ___ fatigué, il a terminé.', options: ['soit', 'sois', 'est'], correct: 0, explanation: 'Subjonctif après "quoique".' },
      { sentence: 'Je souhaite qu\'elle ___ heureuse.', options: ['est', 'soit', 'sois'], correct: 1, explanation: 'Subjonctif après "souhaiter que".' },
      { sentence: 'Il faut que tu ___ tes devoirs.', options: ['fais', 'fasses', 'fait'], correct: 1, explanation: 'Subjonctif après "il faut que".' },
      { sentence: 'Bien qu\'il ___ tard, nous sommes sortis.', options: ['est', 'était', 'fût'], correct: 2, explanation: 'Subjonctif imparfait après "bien que" (littéraire).' },
      { sentence: 'C\'est le meilleur film que j\'___ vu.', options: ['ai', 'aie', 'avais'], correct: 1, explanation: 'Subjonctif après superlatif relatif.' },
      { sentence: 'À moins qu\'il ne ___ trop tard...', options: ['soit', 'est', 'sois'], correct: 0, explanation: 'Subjonctif après "à moins que".' },
    ]
  }

  // Fonction pour mélanger un tableau et retourner le nouvel index de la bonne réponse
  function shuffleGrammarOptions(options: string[], correctIndex: number): { shuffledOptions: string[]; newCorrectIndex: number } {
    const correctAnswer = options[correctIndex]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    const newCorrectIndex = shuffled.indexOf(correctAnswer)
    return { shuffledOptions: shuffled, newCorrectIndex }
  }

  function pickQuestion(lvl: string, alreadyUsed: string[] = []) {
    const questions = questionBank[lvl]
    // Filtrer les questions déjà utilisées
    const availableQuestions = questions.filter(q => !alreadyUsed.includes(q.sentence))
    const questionsToChooseFrom = availableQuestions.length > 0 ? availableQuestions : questions

    const choice = questionsToChooseFrom[Math.floor(Math.random() * questionsToChooseFrom.length)]

    // Mélanger les options pour que la bonne réponse ne soit pas toujours en premier
    const { shuffledOptions, newCorrectIndex } = shuffleGrammarOptions(choice.options, choice.correct)

    setQuestion({
      ...choice,
      options: shuffledOptions,
      correct: newCorrectIndex
    })
    setSelectedAnswer(null)
    setFeedback(null)

    // Retourner l'identifiant pour tracking
    return choice.sentence
  }

  const handleAnswer = (index: number) => {
    if (feedback !== null || !question) return

    setSelectedAnswer(index)
    const correct = index === question.correct

    if (correct) {
      setScore(score + 10)
      setFeedback('correct')
    } else {
      setFeedback('incorrect')
    }

    // Ajouter la question actuelle AVANT de passer à la suivante
    const currentQ = question.sentence
    const updatedUsedQuestions = [...usedQuestions, currentQ]
    setUsedQuestions(updatedUsedQuestions)

    setTimeout(() => {
      const nextRound = round + 1
      if (nextRound <= 10) {
        setRound(nextRound)
        const newQ = pickQuestion(level, updatedUsedQuestions)
        setUsedQuestions([...updatedUsedQuestions, newQ])
      } else {
        // Jeu terminé, donner XP
        setRound(nextRound)
        const xpGained = Math.min(30, 15 + Math.floor(score / 10))
        addExperience(xpGained)
      }
    }, 2000)
  }

  // Sélection du niveau
  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-xl font-bold text-center">📝 Choisis ton niveau !</h3>
          <div className="grid grid-cols-5 gap-2">
            {(['CE1', 'CE2', 'CM1', 'CM2', '6ème'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl)
                  const firstQ = pickQuestion(lvl, [])
                  setUsedQuestions([firstQ])
                  setShowLevelSelect(false)
                }}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
                <p className="text-xs text-muted-foreground">
                  {lvl === 'CE1' && 'Conjugaison simple'}
                  {lvl === 'CE2' && 'Accords de base'}
                  {lvl === 'CM1' && 'Participes passés'}
                  {lvl === 'CM2' && 'Accords complexes'}
                  {lvl === '6ème' && 'Subjonctif'}
                </p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  // Jeu terminé
  if (round > 10) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">📝</p>
          <p className="text-2xl font-bold">Bravo ! Score : {score}/100</p>
          <p className="text-muted-foreground">
            {score >= 80 ? '🌟 Tu es un as de la grammaire !' :
             score >= 50 ? '👍 Bien joué ! Continue à progresser !' :
             '💪 La grammaire demande de la pratique !'}
          </p>

          {/* Stats et progression */}
          <GameEndStats gameId="grammar-quest" level={level} score={score} />

          <div className="flex gap-4 justify-center">
            <Button onClick={() => {
              setRound(1)
              setScore(0)
              const firstQ = pickQuestion(level, [])
              setUsedQuestions([firstQ])
            }}>
              Rejouer
            </Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!question) return null

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Score</p>
            <p className="text-2xl font-bold text-primary">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Niveau</p>
            <p className="text-lg font-bold">{level}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Question</p>
            <p className="text-2xl font-bold">{round}/10</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <p className="text-muted-foreground mb-4">Complète la phrase correctement :</p>
          <p className="text-2xl font-bold mb-6">{question.sentence}</p>

          <div className="flex flex-col gap-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={feedback !== null}
                className={cn(
                  'p-4 rounded-lg border-2 text-lg font-semibold transition-all',
                  selectedAnswer === i && feedback === 'correct' && 'bg-green-500/20 border-green-500',
                  selectedAnswer === i && feedback === 'incorrect' && 'bg-red-500/20 border-red-500',
                  feedback !== null && i === question.correct && 'bg-green-500/20 border-green-500',
                  feedback === null && 'border-slate-700 hover:border-primary hover:scale-102',
                  feedback !== null && 'cursor-not-allowed'
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {feedback && (
          <div className={cn(
            'p-4 rounded-lg text-center',
            feedback === 'correct' ? 'bg-green-500/20' : 'bg-red-500/20'
          )}>
            <p className={cn(
              'text-xl font-bold mb-2',
              feedback === 'correct' ? 'text-green-500' : 'text-red-500'
            )}>
              {feedback === 'correct' ? '✅ Bravo !' : '❌ Pas tout à fait...'}
            </p>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ========== JEU 7 : Explorateur des Planètes ==========
function PlanetExplorerGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [level, setLevel] = useState<'CM1' | 'CM2' | '6ème' | '5ème' | '4ème' | '3ème'>('CM1')
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [question, setQuestion] = useState<{ question: string; options: string[]; correct: number; fact: string; planet?: string } | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]) // Éviter les doublons !

  // Émojis des planètes
  const planetEmojis: Record<string, string> = {
    'Mercure': '☿️', 'Vénus': '♀️', 'Terre': '🌍', 'Mars': '🔴',
    'Jupiter': '🪐', 'Saturne': '💫', 'Uranus': '🔵', 'Neptune': '💙',
    'Soleil': '☀️', 'Lune': '🌙', 'Espace': '🚀'
  }

  // Banque de questions par niveau
  const questionBank: Record<string, { question: string; options: string[]; correct: number; fact: string; planet?: string }[]> = {
    'CM1': [
      { question: 'Quelle planète est la plus proche du Soleil ?', options: ['Mercure', 'Vénus', 'Mars'], correct: 0, fact: 'Mercure met 88 jours à faire le tour du Soleil !', planet: 'Mercure' },
      { question: 'La Terre est la ___ planète du système solaire.', options: ['3ème', '4ème', '2ème'], correct: 0, fact: 'La Terre est aussi appelée la "planète bleue".', planet: 'Terre' },
      { question: 'Quelle planète est surnommée la planète rouge ?', options: ['Mars', 'Jupiter', 'Saturne'], correct: 0, fact: 'Mars doit sa couleur à l\'oxyde de fer (rouille) !', planet: 'Mars' },
      { question: 'Quelle est l\'étoile de notre système solaire ?', options: ['Le Soleil', 'La Lune', 'Sirius'], correct: 0, fact: 'Le Soleil est 109 fois plus large en diamètre que la Terre !', planet: 'Soleil' },
      { question: 'Combien de planètes compte notre système solaire ?', options: ['8', '9', '7'], correct: 0, fact: 'Pluton n\'est plus considérée comme une planète depuis 2006.', planet: 'Espace' },
      { question: 'La Lune tourne autour de...', options: ['La Terre', 'Le Soleil', 'Mars'], correct: 0, fact: 'La Lune met 27 jours pour faire le tour de la Terre.', planet: 'Lune' },
    ],
    'CM2': [
      { question: 'Quelle planète a les anneaux les plus visibles ?', options: ['Saturne', 'Jupiter', 'Uranus'], correct: 0, fact: 'Les anneaux de Saturne sont faits de glace et de roches !', planet: 'Saturne' },
      { question: 'Quelle est la plus grande planète ?', options: ['Jupiter', 'Saturne', 'Neptune'], correct: 0, fact: 'Jupiter pourrait contenir 1300 fois la Terre !', planet: 'Jupiter' },
      { question: 'Quelle planète tourne "sur le côté" ?', options: ['Uranus', 'Neptune', 'Saturne'], correct: 0, fact: 'L\'axe d\'Uranus est incliné à 98° !', planet: 'Uranus' },
      { question: 'Vénus est la planète la plus...', options: ['Chaude', 'Froide', 'Grande'], correct: 0, fact: 'Vénus atteint 465°C à cause de l\'effet de serre !', planet: 'Vénus' },
      { question: 'Neptune a été découverte grâce aux...', options: ['Calculs mathématiques', 'Télescopes', 'Sondes spatiales'], correct: 0, fact: 'Neptune a été "calculée" avant d\'être observée en 1846 !', planet: 'Neptune' },
      { question: 'Un jour sur Mercure dure environ...', options: ['176 jours terrestres', '24 heures', '10 heures'], correct: 0, fact: 'Mercure tourne très lentement sur elle-même !', planet: 'Mercure' },
    ],
    '6ème': [
      { question: 'La lumière du Soleil met combien de temps à atteindre la Terre ?', options: ['8 minutes', '8 secondes', '8 heures'], correct: 0, fact: 'La lumière voyage à 300 000 km/s !', planet: 'Soleil' },
      { question: 'Qu\'est-ce qu\'une année-lumière ?', options: ['Une distance', 'Un temps', 'Une masse'], correct: 0, fact: 'C\'est la distance parcourue par la lumière en 1 an ≈ 9 461 milliards de km !', planet: 'Espace' },
      { question: 'La Grande Tache Rouge de Jupiter est...', options: ['Une tempête', 'Un continent', 'Un océan'], correct: 0, fact: 'Cette tempête dure depuis plus de 350 ans !', planet: 'Jupiter' },
      { question: 'Quel gaz compose principalement le Soleil ?', options: ['Hydrogène', 'Oxygène', 'Hélium'], correct: 0, fact: 'Le Soleil est composé d\'environ 73% d\'hydrogène et 25% d\'hélium.', planet: 'Soleil' },
      { question: 'Titan est un satellite de...', options: ['Saturne', 'Jupiter', 'Mars'], correct: 0, fact: 'Titan a une atmosphère plus épaisse que celle de la Terre !', planet: 'Saturne' },
      { question: 'Mars possède le plus grand volcan du système solaire, il s\'appelle...', options: ['Olympus Mons', 'Everest', 'Mauna Kea'], correct: 0, fact: 'Olympus Mons fait 22 km de haut, 3 fois l\'Everest !', planet: 'Mars' },
    ],
    '5ème': [
      { question: 'Qu\'est-ce qu\'une nébuleuse ?', options: ['Un nuage de gaz', 'Une étoile', 'Une planète'], correct: 0, fact: 'Les nébuleuses sont des "pouponnières d\'étoiles" !', planet: 'Espace' },
      { question: 'La ceinture d\'astéroïdes se situe entre...', options: ['Mars et Jupiter', 'Terre et Mars', 'Jupiter et Saturne'], correct: 0, fact: 'Elle contient des millions de roches spatiales !', planet: 'Espace' },
      { question: 'Ganymède, le plus grand satellite du système solaire, orbite autour de...', options: ['Jupiter', 'Saturne', 'Neptune'], correct: 0, fact: 'Ganymède est plus grand que Mercure !', planet: 'Jupiter' },
      { question: 'Qu\'est-ce qu\'une comète ?', options: ['Boule de glace et poussière', 'Étoile filante', 'Petit astéroïde'], correct: 0, fact: 'La queue d\'une comète peut mesurer des millions de km !', planet: 'Espace' },
      { question: 'Le terme "apogée" désigne...', options: ['Le point le plus éloigné dans l\'orbite', 'Le point le plus proche', 'Le centre de la Terre'], correct: 0, fact: 'L\'apogée est le point le plus éloigné de la Terre dans l\'orbite d\'un satellite.', planet: 'Terre' },
      { question: 'Triton, satellite de Neptune, est remarquable car...', options: ['Il orbite à l\'envers', 'Il est le plus chaud', 'Il a des anneaux'], correct: 0, fact: 'Triton a une orbite rétrograde !', planet: 'Neptune' },
    ],
    '4ème': [
      { question: 'Qu\'est-ce qu\'un trou noir ?', options: ['Zone de gravité extrême', 'Étoile éteinte', 'Planète sombre'], correct: 0, fact: 'Même la lumière ne peut s\'en échapper !', planet: 'Espace' },
      { question: 'La fusion nucléaire dans le Soleil transforme...', options: ['L\'hydrogène en hélium', 'L\'hélium en hydrogène', 'L\'oxygène en carbone'], correct: 0, fact: 'Cette réaction libère l\'énergie qui nous éclaire !', planet: 'Soleil' },
      { question: 'Europa, satellite de Jupiter, est intéressant car...', options: ['Il pourrait avoir un océan sous la glace', 'Il a une atmosphère', 'Il est le plus grand'], correct: 0, fact: 'Europa pourrait abriter la vie extraterrestre !', planet: 'Jupiter' },
      { question: 'Qu\'est-ce que l\'effet Doppler permet de mesurer ?', options: ['La vitesse des étoiles', 'La température', 'La taille'], correct: 0, fact: 'Le décalage vers le rouge montre que les galaxies s\'éloignent !', planet: 'Espace' },
      { question: 'La magnitude apparente mesure...', options: ['La luminosité vue de la Terre', 'La taille réelle', 'La distance'], correct: 0, fact: 'Plus la magnitude est basse, plus l\'étoile est brillante !', planet: 'Espace' },
      { question: 'Les marées sont principalement causées par...', options: ['La Lune', 'Le Soleil', 'Jupiter'], correct: 0, fact: 'Le Soleil contribue aussi, mais moins que la Lune.', planet: 'Lune' },
    ],
    '3ème': [
      { question: 'Qu\'est-ce qu\'une supernova ?', options: ['L\'explosion d\'une étoile', 'Une nouvelle étoile', 'Un trou noir'], correct: 0, fact: 'Une supernova peut briller plus que sa galaxie entière !', planet: 'Espace' },
      { question: 'Le diagramme de Hertzsprung-Russell classe les étoiles selon...', options: ['Température et luminosité', 'Taille et masse', 'Âge et distance'], correct: 0, fact: 'Il permet de comprendre l\'évolution stellaire.', planet: 'Espace' },
      { question: 'Qu\'est-ce que la matière noire ?', options: ['Matière invisible détectée par gravité', 'Antimatière', 'Poussière cosmique'], correct: 0, fact: 'Elle représente 27% de l\'univers !', planet: 'Espace' },
      { question: 'Le télescope spatial James Webb observe principalement en...', options: ['Infrarouge', 'Ultraviolet', 'Rayons X'], correct: 0, fact: 'Cela permet de voir les premières galaxies de l\'univers !', planet: 'Espace' },
      { question: 'Qu\'est-ce qu\'une exoplanète ?', options: ['Planète hors du système solaire', 'Planète naine', 'Satellite naturel'], correct: 0, fact: 'On en a découvert plus de 5600 depuis 1995 !', planet: 'Espace' },
      { question: 'La zone habitable d\'un système stellaire est appelée...', options: ['Zone Goldilocks', 'Zone rouge', 'Zone morte'], correct: 0, fact: 'C\'est là où l\'eau liquide peut exister !', planet: 'Espace' },
    ]
  }

  // Fonction pour mélanger un tableau et retourner le nouvel index de la bonne réponse
  function shufflePlanetOptions(options: string[], correctIndex: number): { shuffledOptions: string[]; newCorrectIndex: number } {
    const correctAnswer = options[correctIndex]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    const newCorrectIndex = shuffled.indexOf(correctAnswer)
    return { shuffledOptions: shuffled, newCorrectIndex }
  }

  function pickQuestion(lvl: string, alreadyUsed: string[] = []) {
    const questions = questionBank[lvl]
    // Filtrer les questions déjà utilisées
    const availableQuestions = questions.filter(q => !alreadyUsed.includes(q.question))
    const questionsToChooseFrom = availableQuestions.length > 0 ? availableQuestions : questions

    const choice = questionsToChooseFrom[Math.floor(Math.random() * questionsToChooseFrom.length)]

    // Mélanger les options pour que la bonne réponse ne soit pas toujours en premier
    const { shuffledOptions, newCorrectIndex } = shufflePlanetOptions(choice.options, choice.correct)

    setQuestion({
      ...choice,
      options: shuffledOptions,
      correct: newCorrectIndex
    })
    setSelectedAnswer(null)
    setFeedback(null)

    // Retourner l'identifiant pour tracking
    return choice.question
  }

  const handleAnswer = (index: number) => {
    if (feedback !== null || !question) return

    setSelectedAnswer(index)
    const correct = index === question.correct

    if (correct) {
      setScore(score + 10)
      setFeedback('correct')
    } else {
      setFeedback('incorrect')
    }

    // Ajouter la question actuelle AVANT de passer à la suivante
    const currentQ = question.question
    const updatedUsedQuestions = [...usedQuestions, currentQ]
    setUsedQuestions(updatedUsedQuestions)

    setTimeout(() => {
      const nextRound = round + 1
      if (nextRound <= 10) {
        setRound(nextRound)
        const newQ = pickQuestion(level, updatedUsedQuestions)
        setUsedQuestions([...updatedUsedQuestions, newQ])
      } else {
        // Jeu terminé, donner XP
        setRound(nextRound)
        const xpGained = Math.min(30, 15 + Math.floor(score / 10))
        addExperience(xpGained)
      }
    }, 2500)
  }

  // Sélection du niveau
  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-xl font-bold text-center">🪐 Choisis ton niveau !</h3>
          <div className="grid grid-cols-3 gap-2">
            {(['CM1', 'CM2', '6ème', '5ème', '4ème', '3ème'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl)
                  const firstQ = pickQuestion(lvl, [])
                  setUsedQuestions([firstQ])
                  setShowLevelSelect(false)
                }}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="text-2xl mb-1">
                  {lvl === 'CM1' && '🌍'}
                  {lvl === 'CM2' && '🪐'}
                  {lvl === '6ème' && '☀️'}
                  {lvl === '5ème' && '☄️'}
                  {lvl === '4ème' && '🌌'}
                  {lvl === '3ème' && '🔭'}
                </p>
                <p className="font-bold">{lvl}</p>
                <p className="text-xs text-muted-foreground">
                  {lvl === 'CM1' && 'Les planètes'}
                  {lvl === 'CM2' && 'Le système solaire'}
                  {lvl === '6ème' && 'Astronomie'}
                  {lvl === '5ème' && 'L\'univers'}
                  {lvl === '4ème' && 'Astrophysique'}
                  {lvl === '3ème' && 'Cosmologie'}
                </p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  // Jeu terminé
  if (round > 10) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🚀</p>
          <p className="text-2xl font-bold">Mission accomplie ! Score : {score}/100</p>
          <p className="text-muted-foreground">
            {score >= 80 ? '🌟 Tu es un vrai astronome !' :
             score >= 50 ? '👍 Belle exploration spatiale !' :
             '💪 Continue à explorer l\'univers !'}
          </p>

          {/* Stats et progression */}
          <GameEndStats gameId="planet-explorer" level={level} score={score} />

          <div className="flex gap-4 justify-center">
            <Button onClick={() => {
              setRound(1)
              setScore(0)
              const firstQ = pickQuestion(level, [])
              setUsedQuestions([firstQ])
            }}>
              Nouvelle mission
            </Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!question) return null

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Score</p>
            <p className="text-2xl font-bold text-primary">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Mission</p>
            <p className="text-lg font-bold">{level}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Question</p>
            <p className="text-2xl font-bold">{round}/10</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg p-8 text-center border border-slate-700">
          {/* Planète animée */}
          {question.planet && (
            <div className="text-6xl mb-4 animate-bounce">
              {planetEmojis[question.planet] || '🌟'}
            </div>
          )}

          <p className="text-xl font-bold mb-6">{question.question}</p>

          <div className="flex flex-col gap-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={feedback !== null}
                className={cn(
                  'p-4 rounded-lg border-2 text-lg font-semibold transition-all',
                  selectedAnswer === i && feedback === 'correct' && 'bg-green-500/20 border-green-500',
                  selectedAnswer === i && feedback === 'incorrect' && 'bg-red-500/20 border-red-500',
                  feedback !== null && i === question.correct && 'bg-green-500/20 border-green-500',
                  feedback === null && 'border-slate-600 hover:border-blue-500 hover:bg-blue-500/10',
                  feedback !== null && 'cursor-not-allowed'
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {feedback && (
          <div className={cn(
            'p-4 rounded-lg text-center',
            feedback === 'correct' ? 'bg-green-500/20' : 'bg-red-500/20'
          )}>
            <p className={cn(
              'text-xl font-bold mb-2',
              feedback === 'correct' ? 'text-green-500' : 'text-red-500'
            )}>
              {feedback === 'correct' ? '✅ Bonne réponse !' : '❌ Pas cette fois...'}
            </p>
            <p className="text-sm text-muted-foreground">🔭 {question.fact}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ========== JEU 8 : MEMORY DES CALCULS ==========
function MemoryCalculGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [level, setLevel] = useState<'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2'>('CP')
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [cards, setCards] = useState<{ id: number; value: string; isFlipped: boolean; isMatched: boolean }[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)
  const [isChecking, setIsChecking] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  const generatePairs = (lvl: string) => {
    const pairs: { calc: string; result: string }[] = []

    if (lvl === 'CP') {
      // Additions simples
      for (let i = 0; i < 6; i++) {
        const a = Math.floor(Math.random() * 5) + 1
        const b = Math.floor(Math.random() * 5) + 1
        pairs.push({ calc: `${a} + ${b}`, result: `${a + b}` })
      }
    } else if (lvl === 'CE1') {
      // Tables de multiplication 2-5
      for (let i = 0; i < 6; i++) {
        const table = Math.floor(Math.random() * 4) + 2
        const mult = Math.floor(Math.random() * 5) + 2
        pairs.push({ calc: `${table} × ${mult}`, result: `${table * mult}` })
      }
    } else if (lvl === 'CE2') {
      // Toutes les tables
      for (let i = 0; i < 6; i++) {
        const table = Math.floor(Math.random() * 8) + 2
        const mult = Math.floor(Math.random() * 8) + 2
        pairs.push({ calc: `${table} × ${mult}`, result: `${table * mult}` })
      }
    } else if (lvl === 'CM1') {
      // Divisions
      for (let i = 0; i < 6; i++) {
        const divisor = Math.floor(Math.random() * 5) + 2
        const quotient = Math.floor(Math.random() * 8) + 2
        const dividend = divisor * quotient
        pairs.push({ calc: `${dividend} ÷ ${divisor}`, result: `${quotient}` })
      }
    } else {
      // Opérations mixtes
      for (let i = 0; i < 6; i++) {
        const type = Math.floor(Math.random() * 3)
        if (type === 0) {
          const a = Math.floor(Math.random() * 50) + 10
          const b = Math.floor(Math.random() * 30) + 5
          pairs.push({ calc: `${a} + ${b}`, result: `${a + b}` })
        } else if (type === 1) {
          const a = Math.floor(Math.random() * 12) + 2
          const b = Math.floor(Math.random() * 12) + 2
          pairs.push({ calc: `${a} × ${b}`, result: `${a * b}` })
        } else {
          const divisor = Math.floor(Math.random() * 9) + 2
          const quotient = Math.floor(Math.random() * 10) + 2
          pairs.push({ calc: `${divisor * quotient} ÷ ${divisor}`, result: `${quotient}` })
        }
      }
    }

    // Créer les cartes (calcul et résultat séparés)
    const allCards: { id: number; value: string; pairId: number; isFlipped: boolean; isMatched: boolean }[] = []
    pairs.forEach((pair, idx) => {
      allCards.push({ id: idx * 2, value: pair.calc, pairId: idx, isFlipped: false, isMatched: false })
      allCards.push({ id: idx * 2 + 1, value: pair.result, pairId: idx, isFlipped: false, isMatched: false })
    })

    // Mélanger
    return allCards.sort(() => Math.random() - 0.5)
  }

  const handleCardClick = (cardId: number) => {
    if (isChecking) return
    if (flippedCards.length === 2) return
    if (cards.find(c => c.id === cardId)?.isMatched) return
    if (flippedCards.includes(cardId)) return

    const newFlipped = [...flippedCards, cardId]
    setFlippedCards(newFlipped)
    setCards(cards.map(c => c.id === cardId ? { ...c, isFlipped: true } : c))

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      setIsChecking(true)

      const [first, second] = newFlipped
      const card1 = cards.find(c => c.id === first)!
      const card2 = cards.find(c => c.id === second)!

      setTimeout(() => {
        if ((card1 as any).pairId === (card2 as any).pairId) {
          // Match !
          setCards(prev => prev.map(c =>
            c.id === first || c.id === second ? { ...c, isMatched: true } : c
          ))
          setMatches(prev => {
            const newMatches = prev + 1
            if (newMatches === 6) {
              setGameComplete(true)
              // Donner XP uniquement à la fin du jeu (pas par paire)
              const xpGained = Math.min(30, 20 + Math.floor((60 - time) / 5))
              addExperience(xpGained)
            }
            return newMatches
          })
        } else {
          // Pas de match - retourner les cartes
          setCards(prev => prev.map(c =>
            c.id === first || c.id === second ? { ...c, isFlipped: false } : c
          ))
        }
        setFlippedCards([])
        setIsChecking(false)
      }, 1000)
    }
  }

  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-xl font-bold text-center">🃏 Memory des Calculs - Choisis ton niveau !</h3>
          <div className="grid grid-cols-5 gap-2">
            {(['CP', 'CE1', 'CE2', 'CM1', 'CM2'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl)
                  setCards(generatePairs(lvl))
                  setShowLevelSelect(false)
                }}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
                <p className="text-xs text-muted-foreground">
                  {lvl === 'CP' && 'Additions'}
                  {lvl === 'CE1' && 'Tables 2-5'}
                  {lvl === 'CE2' && 'Toutes tables'}
                  {lvl === 'CM1' && 'Divisions'}
                  {lvl === 'CM2' && 'Mixte'}
                </p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  if (gameComplete) {
    const score = Math.max(0, 100 - (moves - 6) * 5)
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🎉</p>
          <p className="text-2xl font-bold">Bravo ! Toutes les paires trouvées !</p>
          <p className="text-lg">En {moves} coups</p>
          <p className="text-muted-foreground">
            {moves <= 8 ? '🌟 Mémoire exceptionnelle !' :
             moves <= 12 ? '👍 Très bien joué !' :
             '💪 Continue à t\'entraîner !'}
          </p>
          <GameEndStats gameId="memory-calcul" level={level} score={score} />
          <div className="flex gap-4 justify-center">
            <Button onClick={() => {
              setCards(generatePairs(level))
              setMoves(0)
              setMatches(0)
              setFlippedCards([])
              setGameComplete(false)
            }}>
              Rejouer
            </Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Niveau {level}</p>
          <p className="text-muted-foreground">Coups : {moves} | Paires : {matches}/6</p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {cards.map(card => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={cn(
                'aspect-square rounded-lg text-lg font-bold transition-all',
                card.isMatched ? 'bg-green-500/30 border-2 border-green-500' :
                card.isFlipped ? 'bg-primary/20 border-2 border-primary' :
                'bg-slate-700 border-2 border-slate-600 hover:border-primary'
              )}
              whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {(card.isFlipped || card.isMatched) ? card.value : '?'}
            </motion.button>
          ))}
        </div>

        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}

// ========== JEU 9 : SIMON SAYS ==========
function SimonSaysGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [sequence, setSequence] = useState<number[]>([])
  const [playerSequence, setPlayerSequence] = useState<number[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayerTurn, setIsPlayerTurn] = useState(false)
  const [activeButton, setActiveButton] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('simon_highscore')
    return saved ? parseInt(saved) : 0
  })

  const colors = [
    { id: 0, color: 'bg-red-500', activeColor: 'bg-red-300', name: 'Rouge' },
    { id: 1, color: 'bg-blue-500', activeColor: 'bg-blue-300', name: 'Bleu' },
    { id: 2, color: 'bg-green-500', activeColor: 'bg-green-300', name: 'Vert' },
    { id: 3, color: 'bg-yellow-500', activeColor: 'bg-yellow-300', name: 'Jaune' }
  ]

  // Donner XP à la fin du jeu
  useEffect(() => {
    if (gameOver && score > 0) {
      const xpGained = Math.min(30, 15 + score)
      addExperience(xpGained)
    }
  }, [gameOver])

  const playSequence = async (seq: number[]) => {
    setIsPlaying(true)
    setIsPlayerTurn(false)

    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300))
      setActiveButton(seq[i])
      await new Promise(resolve => setTimeout(resolve, 500))
      setActiveButton(null)
    }

    setIsPlaying(false)
    setIsPlayerTurn(true)
  }

  const startGame = () => {
    const firstColor = Math.floor(Math.random() * 4)
    setSequence([firstColor])
    setPlayerSequence([])
    setScore(0)
    setGameOver(false)
    setTimeout(() => playSequence([firstColor]), 500)
  }

  const handleButtonClick = (colorId: number) => {
    if (!isPlayerTurn || isPlaying) return

    setActiveButton(colorId)
    setTimeout(() => setActiveButton(null), 200)

    const newPlayerSequence = [...playerSequence, colorId]
    setPlayerSequence(newPlayerSequence)

    // Vérifier si correct
    const currentIndex = newPlayerSequence.length - 1
    if (newPlayerSequence[currentIndex] !== sequence[currentIndex]) {
      // Erreur !
      setGameOver(true)
      setIsPlayerTurn(false)
      if (score > highScore) {
        setHighScore(score)
        localStorage.setItem('simon_highscore', score.toString())
      }
      return
    }

    // Séquence complète ?
    if (newPlayerSequence.length === sequence.length) {
      setScore(score + 1)
      setPlayerSequence([])
      setIsPlayerTurn(false)

      // Ajouter une couleur
      const newColor = Math.floor(Math.random() * 4)
      const newSequence = [...sequence, newColor]
      setSequence(newSequence)
      setTimeout(() => playSequence(newSequence), 1000)
    }
  }

  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🎵</p>
          <p className="text-2xl font-bold">Game Over !</p>
          <p className="text-4xl font-bold text-primary">{score} points</p>
          <p className="text-muted-foreground">
            {score >= 15 ? '🌟 Mémoire de champion !' :
             score >= 10 ? '👍 Excellent !' :
             score >= 5 ? '💪 Pas mal !' :
             '🎯 Continue à t\'entraîner !'}
          </p>
          {score > highScore - 1 && score > 0 && (
            <p className="text-yellow-500 font-bold">🏆 Nouveau record !</p>
          )}
          <p className="text-sm text-muted-foreground">Meilleur score : {Math.max(highScore, score)}</p>
          <GameEndStats gameId="simon-says" level="all" score={Math.min(score * 10, 100)} />
          <div className="flex gap-4 justify-center">
            <Button onClick={startGame}>Rejouer</Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="text-center">
          <p className="text-lg font-bold">Score : {score}</p>
          <p className="text-sm text-muted-foreground">
            {!isPlaying && !isPlayerTurn && sequence.length === 0
              ? 'Clique sur Commencer !'
              : isPlaying
                ? 'Regarde bien la séquence...'
                : `À toi ! ${playerSequence.length}/${sequence.length}`}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          {colors.map(c => (
            <motion.button
              key={c.id}
              onClick={() => handleButtonClick(c.id)}
              disabled={!isPlayerTurn || isPlaying}
              className={cn(
                'aspect-square rounded-2xl transition-all',
                activeButton === c.id ? c.activeColor : c.color,
                isPlayerTurn && !isPlaying ? 'cursor-pointer hover:opacity-80' : 'cursor-not-allowed'
              )}
              whileHover={isPlayerTurn ? { scale: 1.05 } : {}}
              whileTap={isPlayerTurn ? { scale: 0.95 } : {}}
              animate={activeButton === c.id ? { scale: 1.1 } : { scale: 1 }}
            />
          ))}
        </div>

        {sequence.length === 0 && (
          <Button onClick={startGame} className="w-full" size="lg">
            Commencer !
          </Button>
        )}

        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}

// ========== JEU 10 : ATTRAPE-MOTS ==========
function FallingWordsGame({ onExit }: { onExit: () => void }) {
  const { addExperience } = useGamificationStore()
  const [level, setLevel] = useState<'CE1' | 'CE2' | 'CM1' | 'CM2'>('CE1')
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [words, setWords] = useState<{ id: number; word: string; isCorrect: boolean; y: number; x: number }[]>([])
  const [currentRule, setCurrentRule] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [round, setRound] = useState(0)

  const rules: Record<string, { rule: string; correct: string[]; incorrect: string[] }[]> = {
    CE1: [
      { rule: 'Clique sur les verbes !', correct: ['manger', 'courir', 'dormir', 'jouer', 'lire'], incorrect: ['table', 'maison', 'chat', 'bleu', 'grand'] },
      { rule: 'Clique sur les noms !', correct: ['chien', 'école', 'livre', 'arbre', 'pomme'], incorrect: ['petit', 'mange', 'court', 'beau', 'vite'] },
    ],
    CE2: [
      { rule: 'Clique sur les adjectifs !', correct: ['grand', 'petit', 'rouge', 'beau', 'gentil'], incorrect: ['table', 'manger', 'vite', 'chat', 'école'] },
      { rule: 'Clique sur les mots avec "eau" !', correct: ['bateau', 'gâteau', 'chapeau', 'oiseau', 'beau'], incorrect: ['maison', 'papa', 'lire', 'petit', 'chat'] },
    ],
    CM1: [
      { rule: 'Clique sur les mots au pluriel !', correct: ['chats', 'maisons', 'arbres', 'livres', 'enfants'], incorrect: ['chat', 'maison', 'arbre', 'livre', 'enfant'] },
      { rule: 'Clique sur les verbes conjugués !', correct: ['mange', 'courons', 'lisez', 'dorment', 'joue'], incorrect: ['manger', 'courir', 'lire', 'dormir', 'jouer'] },
    ],
    CM2: [
      { rule: 'Clique sur les participes passés !', correct: ['mangé', 'couru', 'fini', 'pris', 'lu'], incorrect: ['manger', 'courir', 'finir', 'prendre', 'lire'] },
      { rule: 'Clique sur les adverbes !', correct: ['vite', 'lentement', 'bien', 'mal', 'beaucoup'], incorrect: ['grand', 'petit', 'manger', 'table', 'bleu'] },
    ]
  }

  const startRound = (lvl: string) => {
    const levelRules = rules[lvl]
    const ruleSet = levelRules[round % levelRules.length]
    setCurrentRule(ruleSet.rule)

    // Générer des mots qui tombent
    const newWords: typeof words = []
    let id = 0

    // 5 mots corrects, 5 incorrects
    const shuffledCorrect = [...ruleSet.correct].sort(() => Math.random() - 0.5).slice(0, 3)
    const shuffledIncorrect = [...ruleSet.incorrect].sort(() => Math.random() - 0.5).slice(0, 3)

    shuffledCorrect.forEach(w => {
      newWords.push({ id: id++, word: w, isCorrect: true, y: -Math.random() * 100, x: Math.random() * 80 + 10 })
    })
    shuffledIncorrect.forEach(w => {
      newWords.push({ id: id++, word: w, isCorrect: false, y: -Math.random() * 100 - 50, x: Math.random() * 80 + 10 })
    })

    setWords(newWords.sort(() => Math.random() - 0.5))
  }

  useEffect(() => {
    if (showLevelSelect || gameOver || lives <= 0) return

    const interval = setInterval(() => {
      setWords(prev => {
        const updated = prev.map(w => ({ ...w, y: w.y + 2 }))

        // Vérifier les mots qui sortent en bas
        updated.forEach(w => {
          if (w.y > 100 && w.isCorrect) {
            setLives(l => l - 1)
          }
        })

        return updated.filter(w => w.y <= 100 || !w.isCorrect)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [showLevelSelect, gameOver, lives])

  useEffect(() => {
    if (lives <= 0) {
      setGameOver(true)
    }
  }, [lives])

  // Donner XP à la fin du jeu
  useEffect(() => {
    if (gameOver && score > 0) {
      const xpGained = Math.min(30, 15 + Math.floor(score / 20))
      addExperience(xpGained)
    }
  }, [gameOver])

  const handleWordClick = (wordId: number, isCorrect: boolean) => {
    if (isCorrect) {
      setScore(s => s + 10)
    } else {
      setLives(l => l - 1)
    }
    setWords(prev => prev.filter(w => w.id !== wordId))

    // Vérifier si tous les mots corrects ont été attrapés
    const remainingCorrect = words.filter(w => w.id !== wordId && w.isCorrect)
    if (remainingCorrect.length === 0 && isCorrect) {
      setRound(r => r + 1)
      setTimeout(() => startRound(level), 1000)
    }
  }

  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-xl font-bold text-center">🎯 Attrape-Mots - Choisis ton niveau !</h3>
          <div className="grid grid-cols-4 gap-2">
            {(['CE1', 'CE2', 'CM1', 'CM2'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl)
                  startRound(lvl)
                  setShowLevelSelect(false)
                }}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🎯</p>
          <p className="text-2xl font-bold">Partie terminée !</p>
          <p className="text-4xl font-bold text-primary">{score} points</p>
          <GameEndStats gameId="falling-words" level={level} score={Math.min(score, 100)} />
          <div className="flex gap-4 justify-center">
            <Button onClick={() => {
              setScore(0)
              setLives(3)
              setRound(0)
              setGameOver(false)
              startRound(level)
            }}>
              Rejouer
            </Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">{currentRule}</p>
          <div className="flex gap-4">
            <span>Score: {score}</span>
            <span>❤️ {lives}</span>
          </div>
        </div>

        <div className="relative h-80 bg-slate-800 rounded-lg overflow-hidden">
          {words.map(w => (
            <motion.button
              key={w.id}
              onClick={() => handleWordClick(w.id, w.isCorrect)}
              className="absolute px-3 py-1 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/80"
              style={{ left: `${w.x}%`, top: `${w.y}%` }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {w.word}
            </motion.button>
          ))}
        </div>

        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}

// ========================
// L'HORLOGE MAGIQUE
// ========================
function ClockMasterGame({ onExit }: { onExit: () => void }) {
  const [level, setLevel] = useState<GameLevel | null>(null)
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [targetTime, setTargetTime] = useState({ hours: 0, minutes: 0 })
  const [selectedHours, setSelectedHours] = useState(12)
  const [selectedMinutes, setSelectedMinutes] = useState(0)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [gameOver, setGameOver] = useState(false)

  const generateTime = (lvl: GameLevel) => {
    let hours: number, minutes: number
    if (lvl === 'CP') {
      hours = Math.floor(Math.random() * 12) + 1
      minutes = 0
    } else if (lvl === 'CE1') {
      hours = Math.floor(Math.random() * 12) + 1
      minutes = Math.random() > 0.5 ? 30 : 0
    } else if (lvl === 'CE2') {
      hours = Math.floor(Math.random() * 12) + 1
      minutes = Math.floor(Math.random() * 4) * 15
    } else {
      hours = Math.floor(Math.random() * 12) + 1
      minutes = Math.floor(Math.random() * 12) * 5
    }
    return { hours, minutes }
  }

  const startGame = (lvl: GameLevel) => {
    setLevel(lvl)
    setTargetTime(generateTime(lvl))
    setSelectedHours(12)
    setSelectedMinutes(0)
    setScore(0)
    setRound(1)
    setGameOver(false)
    setShowLevelSelect(false)
  }

  const formatTime = (h: number, m: number) => {
    return `${h}h${m.toString().padStart(2, '0')}`
  }

  const handleValidate = () => {
    const isCorrect = selectedHours === targetTime.hours && selectedMinutes === targetTime.minutes
    setFeedback(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setScore(score + 10)

    setTimeout(() => {
      setFeedback(null)
      if (round < 10) {
        setRound(round + 1)
        setTargetTime(generateTime(level!))
        setSelectedHours(12)
        setSelectedMinutes(0)
      } else {
        setGameOver(true)
      }
    }, 1500)
  }

  const hourAngle = (selectedHours % 12) * 30 + selectedMinutes * 0.5
  const minuteAngle = selectedMinutes * 6

  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p className="text-xl font-bold text-center">L'Horloge Magique</p>
          <p className="text-center text-muted-foreground">Place les aiguilles sur la bonne heure !</p>
          <div className="grid grid-cols-2 gap-4">
            {(['CP', 'CE1', 'CE2', 'CM1'] as GameLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => startGame(lvl)}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
                <p className="text-xs text-muted-foreground">
                  {lvl === 'CP' && 'Heures pleines'}
                  {lvl === 'CE1' && 'Heures et demies'}
                  {lvl === 'CE2' && 'Quarts d\'heure'}
                  {lvl === 'CM1' && '5 en 5 minutes'}
                </p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">⏰</p>
          <p className="text-2xl font-bold">Bravo, maître du temps !</p>
          <p className="text-4xl font-bold text-primary">{score}/100</p>
          <GameEndStats gameId="clock-master" level={level!} score={score} />
          <div className="flex gap-4 justify-center">
            <Button onClick={() => startGame(level!)}>Rejouer</Button>
            <Button variant="outline" onClick={() => setShowLevelSelect(true)}>Changer niveau</Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Question {round}/10</span>
          <span className="font-bold">Score: {score}</span>
        </div>

        <div className={`text-center p-4 rounded-lg ${
          feedback === 'correct' ? 'bg-green-500/20' :
          feedback === 'wrong' ? 'bg-red-500/20' : 'bg-slate-800'
        }`}>
          <p className="text-xl font-bold mb-4">Place les aiguilles sur :</p>
          <p className="text-3xl font-bold text-primary">{formatTime(targetTime.hours, targetTime.minutes)}</p>
        </div>

        {/* Horloge interactive */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 rounded-full bg-white border-4 border-slate-700">
            {/* Chiffres */}
            {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => {
              const angle = (i * 30 - 90) * Math.PI / 180
              const x = 50 + 38 * Math.cos(angle)
              const y = 50 + 38 * Math.sin(angle)
              return (
                <span
                  key={num}
                  className="absolute text-slate-800 font-bold text-sm"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {num}
                </span>
              )
            })}
            {/* Aiguille des heures */}
            <div
              className="absolute w-1.5 bg-slate-800 rounded-full origin-bottom"
              style={{
                height: '25%',
                left: '50%',
                bottom: '50%',
                transform: `translateX(-50%) rotate(${hourAngle}deg)`
              }}
            />
            {/* Aiguille des minutes */}
            <div
              className="absolute w-1 bg-primary rounded-full origin-bottom"
              style={{
                height: '35%',
                left: '50%',
                bottom: '50%',
                transform: `translateX(-50%) rotate(${minuteAngle}deg)`
              }}
            />
            {/* Centre */}
            <div className="absolute w-3 h-3 bg-slate-800 rounded-full" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
          </div>
        </div>

        {/* Contrôles */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-sm font-bold mb-2">Heures</p>
            <div className="flex items-center justify-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedHours(selectedHours === 1 ? 12 : selectedHours - 1)}
              >
                -
              </Button>
              <span className="text-xl font-bold w-8">{selectedHours}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedHours(selectedHours === 12 ? 1 : selectedHours + 1)}
              >
                +
              </Button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-bold mb-2">Minutes</p>
            <div className="flex items-center justify-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedMinutes(selectedMinutes === 0 ? 55 : selectedMinutes - 5)}
              >
                -
              </Button>
              <span className="text-xl font-bold w-8">{selectedMinutes.toString().padStart(2, '0')}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedMinutes(selectedMinutes === 55 ? 0 : selectedMinutes + 5)}
              >
                +
              </Button>
            </div>
          </div>
        </div>

        {feedback && (
          <p className={`text-center font-bold ${feedback === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
            {feedback === 'correct' ? '✅ Parfait !' : `❌ C'était ${formatTime(targetTime.hours, targetTime.minutes)}`}
          </p>
        )}

        <Button onClick={handleValidate} className="w-full" disabled={feedback !== null}>
          Valider
        </Button>
        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}

// ========================
// BALANCE DES ÉQUATIONS
// ========================
function BalanceEquationGame({ onExit }: { onExit: () => void }) {
  const [level, setLevel] = useState<GameLevel | null>(null)
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [equation, setEquation] = useState({ left: 0, right: 0, missing: 0, position: 'left' as 'left' | 'right' })
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [gameOver, setGameOver] = useState(false)

  const generateEquation = (lvl: GameLevel) => {
    let max: number
    if (lvl === 'CP') max = 10
    else if (lvl === 'CE1') max = 20
    else if (lvl === 'CE2') max = 50
    else max = 100

    const left = Math.floor(Math.random() * (max - 5)) + 5
    const right = Math.floor(Math.random() * left)
    const missing = left - right
    const position = Math.random() > 0.5 ? 'left' : 'right'
    return { left, right, missing, position }
  }

  const startGame = (lvl: GameLevel) => {
    setLevel(lvl)
    setEquation(generateEquation(lvl))
    setAnswer('')
    setScore(0)
    setRound(1)
    setGameOver(false)
    setShowLevelSelect(false)
  }

  const handleValidate = () => {
    const isCorrect = parseInt(answer) === equation.missing
    setFeedback(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setScore(score + 10)

    setTimeout(() => {
      setFeedback(null)
      setAnswer('')
      if (round < 10) {
        setRound(round + 1)
        setEquation(generateEquation(level!))
      } else {
        setGameOver(true)
      }
    }, 1500)
  }

  const balanceTilt = () => {
    const userAnswer = parseInt(answer) || 0
    const diff = equation.position === 'left'
      ? (userAnswer + equation.right) - equation.left
      : (equation.right) - (equation.left - equation.missing + userAnswer)
    if (diff > 2) return 15
    if (diff < -2) return -15
    if (diff > 0) return 5
    if (diff < 0) return -5
    return 0
  }

  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p className="text-xl font-bold text-center">Balance des Équations</p>
          <p className="text-center text-muted-foreground">Trouve le nombre manquant pour équilibrer !</p>
          <div className="grid grid-cols-2 gap-4">
            {(['CP', 'CE1', 'CE2', 'CM1'] as GameLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => startGame(lvl)}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">⚖️</p>
          <p className="text-2xl font-bold">Super équilibriste !</p>
          <p className="text-4xl font-bold text-primary">{score}/100</p>
          <GameEndStats gameId="balance-equation" level={level!} score={score} />
          <div className="flex gap-4 justify-center">
            <Button onClick={() => startGame(level!)}>Rejouer</Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Question {round}/10</span>
          <span className="font-bold">Score: {score}</span>
        </div>

        <p className="text-center text-lg font-bold">Équilibre la balance !</p>

        {/* Balance visuelle */}
        <div className="flex justify-center">
          <div className="relative w-64 h-32">
            {/* Support */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-16 bg-amber-800" />
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-6 h-6 bg-amber-600 rounded-full" />

            {/* Barre */}
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 w-56 h-2 bg-amber-700 rounded origin-center"
              animate={{ rotate: balanceTilt() }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              {/* Plateau gauche */}
              <div className="absolute -left-2 -top-8 w-20 h-6 bg-amber-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {equation.position === 'left' ? '?' : equation.right}
                </span>
              </div>
              {/* Plateau droit */}
              <div className="absolute -right-2 -top-8 w-20 h-6 bg-amber-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {equation.position === 'right' ? '?' : equation.left}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Équation */}
        <div className="text-center text-2xl font-bold">
          {equation.position === 'left' ? (
            <span>? + {equation.right} = {equation.left}</span>
          ) : (
            <span>{equation.right} + ? = {equation.left}</span>
          )}
        </div>

        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Ta réponse..."
          className="w-full p-3 text-center text-xl rounded-lg bg-slate-800 border border-slate-700"
        />

        {feedback && (
          <p className={`text-center font-bold ${feedback === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
            {feedback === 'correct' ? '✅ Équilibré !' : `❌ C'était ${equation.missing}`}
          </p>
        )}

        <Button onClick={handleValidate} className="w-full" disabled={!answer || feedback !== null}>
          Valider
        </Button>
        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}

// ========================
// CARTE DE FRANCE
// ========================
function FranceMapGame({ onExit }: { onExit: () => void }) {
  const [level, setLevel] = useState<GameLevel | null>(null)
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [targetRegion, setTargetRegion] = useState('')
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [feedback, setFeedback] = useState<{ correct: boolean; clicked: string } | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [usedRegions, setUsedRegions] = useState<string[]>([])

  const regions = {
    CP: [
      { name: 'Paris', x: 48, y: 28, emoji: '🗼' },
      { name: 'Marseille', x: 55, y: 82, emoji: '⛵' },
      { name: 'Lyon', x: 58, y: 58, emoji: '🦁' },
      { name: 'Bordeaux', x: 25, y: 65, emoji: '🍷' },
      { name: 'Lille', x: 50, y: 8, emoji: '🏭' },
    ],
    CE1: [
      { name: 'Bretagne', x: 12, y: 35, emoji: '🥞' },
      { name: 'Normandie', x: 28, y: 22, emoji: '🧀' },
      { name: 'Provence', x: 60, y: 80, emoji: '💜' },
      { name: 'Alsace', x: 78, y: 32, emoji: '🥨' },
      { name: 'Aquitaine', x: 25, y: 70, emoji: '🏄' },
      { name: 'Corse', x: 82, y: 90, emoji: '🏝️' },
    ],
    CE2: [
      { name: 'Île-de-France', x: 48, y: 28, emoji: '🗼' },
      { name: 'Auvergne', x: 50, y: 58, emoji: '🌋' },
      { name: 'Occitanie', x: 42, y: 78, emoji: '🏰' },
      { name: 'Pays de la Loire', x: 22, y: 42, emoji: '🏰' },
      { name: 'Centre', x: 40, y: 40, emoji: '🏯' },
      { name: 'Bourgogne', x: 58, y: 42, emoji: '🍇' },
      { name: 'Lorraine', x: 70, y: 28, emoji: '🥐' },
    ],
    CM1: [
      { name: 'Hauts-de-France', x: 50, y: 12, emoji: '⛏️' },
      { name: 'Grand Est', x: 72, y: 30, emoji: '🥨' },
      { name: 'Nouvelle-Aquitaine', x: 28, y: 62, emoji: '🦪' },
      { name: 'Occitanie', x: 42, y: 78, emoji: '☀️' },
      { name: 'PACA', x: 62, y: 80, emoji: '🌊' },
      { name: 'Auvergne-Rhône-Alpes', x: 58, y: 55, emoji: '⛷️' },
      { name: 'Bretagne', x: 10, y: 35, emoji: '⚓' },
      { name: 'Normandie', x: 25, y: 22, emoji: '🍎' },
    ]
  }

  const getRegions = (lvl: GameLevel) => regions[lvl] || regions.CP

  const pickNewRegion = (lvl: GameLevel, used: string[]) => {
    const available = getRegions(lvl).filter(r => !used.includes(r.name))
    if (available.length === 0) return getRegions(lvl)[0].name
    return available[Math.floor(Math.random() * available.length)].name
  }

  const startGame = (lvl: GameLevel) => {
    setLevel(lvl)
    setUsedRegions([])
    const first = pickNewRegion(lvl, [])
    setTargetRegion(first)
    setUsedRegions([first])
    setScore(0)
    setRound(1)
    setGameOver(false)
    setShowLevelSelect(false)
  }

  const handleRegionClick = (regionName: string) => {
    if (feedback) return
    const isCorrect = regionName === targetRegion
    setFeedback({ correct: isCorrect, clicked: regionName })
    if (isCorrect) setScore(score + 10)

    setTimeout(() => {
      setFeedback(null)
      if (round < 10) {
        setRound(round + 1)
        const updatedUsed = [...usedRegions, targetRegion]
        setUsedRegions(updatedUsed)
        setTargetRegion(pickNewRegion(level!, updatedUsed))
      } else {
        setGameOver(true)
      }
    }, 1500)
  }

  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p className="text-xl font-bold text-center">Carte de France</p>
          <p className="text-center text-muted-foreground">Clique sur la bonne ville ou région !</p>
          <div className="grid grid-cols-2 gap-4">
            {(['CP', 'CE1', 'CE2', 'CM1'] as GameLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => startGame(lvl)}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
                <p className="text-xs text-muted-foreground">
                  {lvl === 'CP' && 'Grandes villes'}
                  {lvl === 'CE1' && 'Régions célèbres'}
                  {lvl === 'CE2' && 'Plus de régions'}
                  {lvl === 'CM1' && 'Nouvelles régions'}
                </p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🗺️</p>
          <p className="text-2xl font-bold">Super géographe !</p>
          <p className="text-4xl font-bold text-primary">{score}/100</p>
          <GameEndStats gameId="france-map" level={level!} score={score} />
          <div className="flex gap-4 justify-center">
            <Button onClick={() => startGame(level!)}>Rejouer</Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Question {round}/10</span>
          <span className="font-bold">Score: {score}</span>
        </div>

        <div className={`text-center p-3 rounded-lg ${
          feedback?.correct ? 'bg-green-500/20' :
          feedback && !feedback.correct ? 'bg-red-500/20' : 'bg-slate-800'
        }`}>
          <p className="text-lg">Où se trouve</p>
          <p className="text-2xl font-bold text-primary">{targetRegion} ?</p>
        </div>

        {/* Carte de France simplifiée */}
        <div className="relative mx-auto" style={{ width: '250px', height: '280px' }}>
          {/* Forme de la France */}
          <svg viewBox="0 0 100 110" className="w-full h-full">
            <path
              d="M50 5 L75 10 L85 25 L90 45 L85 60 L75 75 L65 95 L50 105 L35 95 L20 80 L10 60 L15 40 L25 20 L40 8 Z"
              fill="#1e3a5f"
              stroke="#3b82f6"
              strokeWidth="1"
            />
          </svg>

          {/* Points des régions/villes */}
          {getRegions(level!).map(region => (
            <motion.button
              key={region.name}
              onClick={() => handleRegionClick(region.name)}
              className={`absolute w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center text-xl
                ${feedback?.clicked === region.name
                  ? feedback.correct ? 'bg-green-500' : 'bg-red-500'
                  : region.name === targetRegion && feedback
                    ? 'bg-green-500 ring-2 ring-white'
                    : 'bg-primary/80 hover:bg-primary'
                }`}
              style={{ left: `${region.x}%`, top: `${region.y}%` }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              disabled={feedback !== null}
            >
              {region.emoji}
            </motion.button>
          ))}
        </div>

        {feedback && (
          <p className={`text-center font-bold ${feedback.correct ? 'text-green-500' : 'text-red-500'}`}>
            {feedback.correct ? '✅ Bravo !' : `❌ C'était ailleurs !`}
          </p>
        )}

        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}

// ========================
// TRI SÉLECTIF
// ========================
function RecycleSortGame({ onExit }: { onExit: () => void }) {
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [level, setLevel] = useState<GameLevel | null>(null)
  const [currentItem, setCurrentItem] = useState({ name: '', emoji: '', bin: '' })
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [feedback, setFeedback] = useState<{ correct: boolean; correctBin: string } | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [usedItems, setUsedItems] = useState<string[]>([])

  const bins = [
    { name: 'Jaune', emoji: '♻️', color: 'bg-yellow-500', items: ['bouteille plastique', 'canette', 'carton', 'journal', 'boîte céréales', 'brique lait'] },
    { name: 'Vert', emoji: '🍾', color: 'bg-green-600', items: ['bouteille verre', 'pot confiture', 'bocal'] },
    { name: 'Gris', emoji: '🗑️', color: 'bg-gray-500', items: ['mouchoir', 'couche', 'vaisselle cassée', 'éponge'] },
    { name: 'Compost', emoji: '🌱', color: 'bg-amber-700', items: ['épluchure', 'coquille oeuf', 'marc café', 'feuilles mortes'] },
  ]

  const allItems = [
    { name: 'bouteille plastique', emoji: '🧴', bin: 'Jaune' },
    { name: 'canette', emoji: '🥫', bin: 'Jaune' },
    { name: 'journal', emoji: '📰', bin: 'Jaune' },
    { name: 'carton', emoji: '📦', bin: 'Jaune' },
    { name: 'boîte céréales', emoji: '🥣', bin: 'Jaune' },
    { name: 'bouteille verre', emoji: '🍾', bin: 'Vert' },
    { name: 'pot confiture', emoji: '🫙', bin: 'Vert' },
    { name: 'bocal', emoji: '🏺', bin: 'Vert' },
    { name: 'mouchoir', emoji: '🤧', bin: 'Gris' },
    { name: 'éponge', emoji: '🧽', bin: 'Gris' },
    { name: 'épluchure', emoji: '🍌', bin: 'Compost' },
    { name: 'coquille oeuf', emoji: '🥚', bin: 'Compost' },
    { name: 'marc café', emoji: '☕', bin: 'Compost' },
    { name: 'feuilles mortes', emoji: '🍂', bin: 'Compost' },
  ]

  const pickNewItem = (used: string[]) => {
    const available = allItems.filter(i => !used.includes(i.name))
    if (available.length === 0) return allItems[0]
    return available[Math.floor(Math.random() * available.length)]
  }

  const startGame = (lvl: GameLevel) => {
    setLevel(lvl)
    const first = pickNewItem([])
    setCurrentItem(first)
    setUsedItems([first.name])
    setScore(0)
    setRound(1)
    setGameOver(false)
    setShowLevelSelect(false)
  }

  const handleBinClick = (binName: string) => {
    if (feedback) return
    const isCorrect = binName === currentItem.bin
    setFeedback({ correct: isCorrect, correctBin: currentItem.bin })
    if (isCorrect) setScore(score + 10)

    setTimeout(() => {
      setFeedback(null)
      if (round < 10) {
        setRound(round + 1)
        const updatedUsed = [...usedItems, currentItem.name]
        setUsedItems(updatedUsed)
        setCurrentItem(pickNewItem(updatedUsed))
      } else {
        setGameOver(true)
      }
    }, 1500)
  }

  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p className="text-xl font-bold text-center">Tri Sélectif</p>
          <p className="text-center text-muted-foreground">Mets les déchets dans la bonne poubelle !</p>
          <div className="grid grid-cols-2 gap-4">
            {(['CP', 'CE1', 'CE2', 'CM1'] as GameLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => startGame(lvl)}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🌍</p>
          <p className="text-2xl font-bold">Super écolo !</p>
          <p className="text-4xl font-bold text-primary">{score}/100</p>
          <GameEndStats gameId="recycle-sort" level={level!} score={score} />
          <div className="flex gap-4 justify-center">
            <Button onClick={() => startGame(level!)}>Rejouer</Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Question {round}/10</span>
          <span className="font-bold">Score: {score}</span>
        </div>

        {/* Item à trier */}
        <motion.div
          key={round}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-center p-6 rounded-lg ${
            feedback?.correct ? 'bg-green-500/20' :
            feedback && !feedback.correct ? 'bg-red-500/20' : 'bg-slate-800'
          }`}
        >
          <p className="text-6xl mb-2">{currentItem.emoji}</p>
          <p className="text-xl font-bold">{currentItem.name}</p>
        </motion.div>

        {/* Poubelles */}
        <div className="grid grid-cols-4 gap-2">
          {bins.map(bin => (
            <motion.button
              key={bin.name}
              onClick={() => handleBinClick(bin.name)}
              className={`p-3 rounded-lg ${bin.color} text-white flex flex-col items-center
                ${feedback?.correctBin === bin.name ? 'ring-4 ring-white' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={feedback !== null}
            >
              <span className="text-2xl">{bin.emoji}</span>
              <span className="text-xs font-bold">{bin.name}</span>
            </motion.button>
          ))}
        </div>

        {feedback && (
          <p className={`text-center font-bold ${feedback.correct ? 'text-green-500' : 'text-red-500'}`}>
            {feedback.correct ? '✅ Bien trié !' : `❌ C'était poubelle ${feedback.correctBin}`}
          </p>
        )}

        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}

// ========================
// PUZZLE DE PHRASES
// ========================
function SentencePuzzleGame({ onExit }: { onExit: () => void }) {
  const [level, setLevel] = useState<GameLevel | null>(null)
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [words, setWords] = useState<string[]>([])
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [correctSentence, setCorrectSentence] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [usedSentences, setUsedSentences] = useState<number[]>([])

  const sentences = {
    CP: [
      ['Le', 'chat', 'dort'],
      ['Je', 'mange', 'une', 'pomme'],
      ['Il', 'fait', 'beau'],
      ['Papa', 'lit', 'un', 'livre'],
      ['Le', 'chien', 'court'],
      ['Maman', 'fait', 'un', 'gâteau'],
      ['Je', 'joue', 'dehors'],
      ['Le', 'soleil', 'brille'],
      ['Elle', 'chante', 'bien'],
      ['Nous', 'sommes', 'contents'],
    ],
    CE1: [
      ['Le', 'petit', 'chat', 'noir', 'dort'],
      ['Je', 'mange', 'une', 'belle', 'pomme', 'rouge'],
      ['Mon', 'frère', 'joue', 'au', 'ballon'],
      ['La', 'maîtresse', 'écrit', 'au', 'tableau'],
      ['Les', 'oiseaux', 'chantent', 'dans', 'les', 'arbres'],
      ['Ma', 'soeur', 'lit', 'une', 'histoire'],
      ['Le', 'bébé', 'pleure', 'très', 'fort'],
      ['Nous', 'allons', 'à', 'la', 'plage'],
    ],
    CE2: [
      ['Le', 'gentil', 'chat', 'noir', 'dort', 'sur', 'le', 'canapé'],
      ['Ma', 'grand-mère', 'prépare', 'un', 'délicieux', 'gâteau', 'au', 'chocolat'],
      ['Les', 'enfants', 'jouent', 'joyeusement', 'dans', 'la', 'cour'],
      ['Mon', 'père', 'travaille', 'beaucoup', 'cette', 'semaine'],
      ['La', 'petite', 'fille', 'dessine', 'une', 'jolie', 'fleur'],
    ],
    CM1: [
      ['Pendant', 'les', 'vacances', 'nous', 'irons', 'visiter', 'Paris'],
      ['Le', 'scientifique', 'observe', 'attentivement', 'les', 'étoiles', 'chaque', 'nuit'],
      ['Les', 'élèves', 'travaillent', 'sérieusement', 'pour', 'réussir', 'leur', 'examen'],
      ['Ma', 'meilleure', 'amie', 'habite', 'dans', 'une', 'grande', 'maison', 'bleue'],
    ]
  }

  const getSentences = (lvl: GameLevel) => sentences[lvl] || sentences.CP

  const pickNewSentence = (lvl: GameLevel, used: number[]) => {
    const available = getSentences(lvl).map((s, i) => ({ sentence: s, index: i })).filter(s => !used.includes(s.index))
    if (available.length === 0) {
      return { sentence: getSentences(lvl)[0], index: 0 }
    }
    return available[Math.floor(Math.random() * available.length)]
  }

  const shuffleArray = <T,>(arr: T[]): T[] => {
    const shuffled = [...arr]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const startGame = (lvl: GameLevel) => {
    setLevel(lvl)
    const { sentence, index } = pickNewSentence(lvl, [])
    setCorrectSentence(sentence)
    setWords(shuffleArray(sentence))
    setSelectedWords([])
    setUsedSentences([index])
    setScore(0)
    setRound(1)
    setGameOver(false)
    setShowLevelSelect(false)
  }

  const handleWordClick = (word: string, index: number) => {
    if (feedback) return
    const newSelected = [...selectedWords, word]
    setSelectedWords(newSelected)
    setWords(words.filter((_, i) => i !== index))
  }

  const handleSelectedClick = (index: number) => {
    if (feedback) return
    const word = selectedWords[index]
    setWords([...words, word])
    setSelectedWords(selectedWords.filter((_, i) => i !== index))
  }

  const handleValidate = () => {
    const isCorrect = selectedWords.join(' ') === correctSentence.join(' ')
    setFeedback(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setScore(score + 10)

    setTimeout(() => {
      setFeedback(null)
      if (round < 10) {
        setRound(round + 1)
        const updatedUsed = [...usedSentences]
        const { sentence, index } = pickNewSentence(level!, updatedUsed)
        setCorrectSentence(sentence)
        setWords(shuffleArray(sentence))
        setSelectedWords([])
        setUsedSentences([...updatedUsed, index])
      } else {
        setGameOver(true)
      }
    }, 2000)
  }

  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p className="text-xl font-bold text-center">Puzzle de Phrases</p>
          <p className="text-center text-muted-foreground">Remets les mots dans le bon ordre !</p>
          <div className="grid grid-cols-2 gap-4">
            {(['CP', 'CE1', 'CE2', 'CM1'] as GameLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => startGame(lvl)}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">📝</p>
          <p className="text-2xl font-bold">Super écrivain !</p>
          <p className="text-4xl font-bold text-primary">{score}/100</p>
          <GameEndStats gameId="sentence-puzzle" level={level!} score={score} />
          <div className="flex gap-4 justify-center">
            <Button onClick={() => startGame(level!)}>Rejouer</Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Question {round}/10</span>
          <span className="font-bold">Score: {score}</span>
        </div>

        <p className="text-center text-lg font-bold">Forme une phrase correcte !</p>

        {/* Zone de réponse */}
        <div className={`min-h-16 p-3 rounded-lg border-2 border-dashed flex flex-wrap gap-2 ${
          feedback === 'correct' ? 'border-green-500 bg-green-500/20' :
          feedback === 'wrong' ? 'border-red-500 bg-red-500/20' : 'border-slate-600'
        }`}>
          {selectedWords.length === 0 ? (
            <p className="text-muted-foreground text-sm">Clique sur les mots pour former la phrase...</p>
          ) : (
            selectedWords.map((word, i) => (
              <motion.button
                key={i}
                onClick={() => handleSelectedClick(i)}
                className="px-3 py-1 bg-primary text-primary-foreground rounded-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                {word}
              </motion.button>
            ))
          )}
        </div>

        {/* Mots disponibles */}
        <div className="flex flex-wrap gap-2 justify-center min-h-12">
          {words.map((word, i) => (
            <motion.button
              key={`${word}-${i}`}
              onClick={() => handleWordClick(word, i)}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {word}
            </motion.button>
          ))}
        </div>

        {feedback && (
          <p className={`text-center font-bold ${feedback === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
            {feedback === 'correct' ? '✅ Parfait !' : `❌ C'était : ${correctSentence.join(' ')}`}
          </p>
        )}

        <Button
          onClick={handleValidate}
          className="w-full"
          disabled={words.length > 0 || feedback !== null}
        >
          Valider
        </Button>
        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}

// ========================
// PENDU INTERACTIF
// ========================
function HangmanGame({ onExit }: { onExit: () => void }) {
  const [level, setLevel] = useState<GameLevel | null>(null)
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [word, setWord] = useState('')
  const [hint, setHint] = useState('')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongGuesses, setWrongGuesses] = useState(0)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing')
  const [gameOver, setGameOver] = useState(false)
  const [usedWords, setUsedWords] = useState<string[]>([])

  const maxWrong = 6

  const words = {
    CP: [
      { word: 'CHAT', hint: 'Animal qui miaule' },
      { word: 'LUNE', hint: 'Brille la nuit' },
      { word: 'PAPA', hint: 'Parent masculin' },
      { word: 'BEBE', hint: 'Tout petit enfant' },
      { word: 'MAIN', hint: 'Au bout du bras' },
      { word: 'PIED', hint: 'En bas de la jambe' },
      { word: 'DENT', hint: 'Dans la bouche' },
      { word: 'NUIT', hint: 'Quand il fait noir' },
      { word: 'JOUR', hint: 'Quand il fait clair' },
      { word: 'LAIT', hint: 'Boisson blanche' },
    ],
    CE1: [
      { word: 'MAISON', hint: 'Où l\'on habite' },
      { word: 'SOLEIL', hint: 'Étoile du jour' },
      { word: 'NUAGE', hint: 'Dans le ciel' },
      { word: 'FLEUR', hint: 'Pousse au jardin' },
      { word: 'ARBRE', hint: 'Grand végétal' },
      { word: 'CHIEN', hint: 'Meilleur ami de l\'homme' },
      { word: 'ECOLE', hint: 'Lieu d\'apprentissage' },
      { word: 'LIVRE', hint: 'On le lit' },
    ],
    CE2: [
      { word: 'KANGOUROU', hint: 'Animal australien' },
      { word: 'CHOCOLAT', hint: 'Douceur sucrée' },
      { word: 'ALPHABET', hint: 'A B C D...' },
      { word: 'PYRAMIDE', hint: 'Monument égyptien' },
      { word: 'PRINTEMPS', hint: 'Saison des fleurs' },
      { word: 'HISTOIRE', hint: 'Récit du passé' },
    ],
    CM1: [
      { word: 'PHILOSOPHIE', hint: 'Amour de la sagesse' },
      { word: 'ELECTRICITE', hint: 'Énergie des prises' },
      { word: 'GEOGRAPHIE', hint: 'Étude de la Terre' },
      { word: 'ATMOSPHERE', hint: 'Entoure la Terre' },
      { word: 'DICTIONNAIRE', hint: 'Définit les mots' },
    ]
  }

  const getWords = (lvl: GameLevel) => words[lvl] || words.CP

  const pickNewWord = (lvl: GameLevel, used: string[]) => {
    const available = getWords(lvl).filter(w => !used.includes(w.word))
    if (available.length === 0) return getWords(lvl)[0]
    return available[Math.floor(Math.random() * available.length)]
  }

  const startGame = (lvl: GameLevel) => {
    setLevel(lvl)
    const { word: newWord, hint: newHint } = pickNewWord(lvl, [])
    setWord(newWord)
    setHint(newHint)
    setUsedWords([newWord])
    setGuessedLetters([])
    setWrongGuesses(0)
    setGameStatus('playing')
    setScore(0)
    setRound(1)
    setGameOver(false)
    setShowLevelSelect(false)
  }

  const nextWord = () => {
    if (round >= 10) {
      setGameOver(true)
      return
    }
    const updatedUsed = [...usedWords]
    const { word: newWord, hint: newHint } = pickNewWord(level!, updatedUsed)
    setWord(newWord)
    setHint(newHint)
    setUsedWords([...updatedUsed, newWord])
    setGuessedLetters([])
    setWrongGuesses(0)
    setGameStatus('playing')
    setRound(round + 1)
  }

  const handleLetterClick = (letter: string) => {
    if (gameStatus !== 'playing' || guessedLetters.includes(letter)) return

    const newGuessed = [...guessedLetters, letter]
    setGuessedLetters(newGuessed)

    if (!word.includes(letter)) {
      const newWrong = wrongGuesses + 1
      setWrongGuesses(newWrong)
      if (newWrong >= maxWrong) {
        setGameStatus('lost')
      }
    } else {
      const allGuessed = word.split('').every(l => newGuessed.includes(l))
      if (allGuessed) {
        setGameStatus('won')
        setScore(score + 10)
      }
    }
  }

  const displayWord = word.split('').map(letter =>
    guessedLetters.includes(letter) ? letter : '_'
  ).join(' ')

  const keyboard = 'AZERTYUIOPQSDFGHJKLMWXCVBN'.split('')

  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p className="text-xl font-bold text-center">Le Pendu</p>
          <p className="text-center text-muted-foreground">Devine le mot lettre par lettre !</p>
          <div className="grid grid-cols-2 gap-4">
            {(['CP', 'CE1', 'CE2', 'CM1'] as GameLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => startGame(lvl)}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🎭</p>
          <p className="text-2xl font-bold">Partie terminée !</p>
          <p className="text-4xl font-bold text-primary">{score}/100</p>
          <GameEndStats gameId="hangman" level={level!} score={score} />
          <div className="flex gap-4 justify-center">
            <Button onClick={() => startGame(level!)}>Rejouer</Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Mot {round}/10</span>
          <span className="font-bold">Score: {score}</span>
        </div>

        {/* Dessin du pendu */}
        <div className="flex justify-center">
          <svg viewBox="0 0 100 100" className="w-32 h-32">
            {/* Potence */}
            <line x1="20" y1="90" x2="80" y2="90" stroke="currentColor" strokeWidth="3" />
            <line x1="30" y1="90" x2="30" y2="10" stroke="currentColor" strokeWidth="3" />
            <line x1="30" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="3" />
            <line x1="60" y1="10" x2="60" y2="20" stroke="currentColor" strokeWidth="3" />
            {/* Tête */}
            {wrongGuesses >= 1 && <circle cx="60" cy="28" r="8" stroke="currentColor" fill="none" strokeWidth="2" />}
            {/* Corps */}
            {wrongGuesses >= 2 && <line x1="60" y1="36" x2="60" y2="55" stroke="currentColor" strokeWidth="2" />}
            {/* Bras gauche */}
            {wrongGuesses >= 3 && <line x1="60" y1="40" x2="48" y2="50" stroke="currentColor" strokeWidth="2" />}
            {/* Bras droit */}
            {wrongGuesses >= 4 && <line x1="60" y1="40" x2="72" y2="50" stroke="currentColor" strokeWidth="2" />}
            {/* Jambe gauche */}
            {wrongGuesses >= 5 && <line x1="60" y1="55" x2="48" y2="70" stroke="currentColor" strokeWidth="2" />}
            {/* Jambe droite */}
            {wrongGuesses >= 6 && <line x1="60" y1="55" x2="72" y2="70" stroke="currentColor" strokeWidth="2" />}
          </svg>
        </div>

        {/* Indice */}
        <p className="text-center text-sm text-muted-foreground">💡 {hint}</p>

        {/* Mot à deviner */}
        <p className="text-center text-3xl font-mono font-bold tracking-widest">{displayWord}</p>

        {/* Status */}
        {gameStatus === 'won' && (
          <div className="text-center">
            <p className="text-green-500 font-bold text-xl">✅ Bravo !</p>
            <Button onClick={nextWord} className="mt-2">Mot suivant</Button>
          </div>
        )}
        {gameStatus === 'lost' && (
          <div className="text-center">
            <p className="text-red-500 font-bold text-xl">❌ Perdu ! C'était : {word}</p>
            <Button onClick={nextWord} className="mt-2">Mot suivant</Button>
          </div>
        )}

        {/* Clavier */}
        {gameStatus === 'playing' && (
          <div className="flex flex-wrap gap-1 justify-center">
            {keyboard.map(letter => (
              <button
                key={letter}
                onClick={() => handleLetterClick(letter)}
                disabled={guessedLetters.includes(letter)}
                className={`w-8 h-8 rounded font-bold text-sm
                  ${guessedLetters.includes(letter)
                    ? word.includes(letter)
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500/50 text-white/50'
                    : 'bg-slate-700 hover:bg-slate-600'
                  }`}
              >
                {letter}
              </button>
            ))}
          </div>
        )}

        <p className="text-center text-sm">Erreurs : {wrongGuesses}/{maxWrong}</p>
        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}

// ========================
// RYTHME MUSICAL
// ========================
function RhythmGame({ onExit }: { onExit: () => void }) {
  const [level, setLevel] = useState<GameLevel | null>(null)
  const [showLevelSelect, setShowLevelSelect] = useState(true)
  const [sequence, setSequence] = useState<number[]>([])
  const [playerSequence, setPlayerSequence] = useState<number[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentBeat, setCurrentBeat] = useState(-1)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [gameStatus, setGameStatus] = useState<'waiting' | 'showing' | 'playing' | 'success' | 'fail'>('waiting')
  const [gameOver, setGameOver] = useState(false)

  const drums = [
    { name: 'Grosse caisse', emoji: '🥁', color: 'bg-red-500' },
    { name: 'Caisse claire', emoji: '🪘', color: 'bg-blue-500' },
    { name: 'Cymbale', emoji: '🔔', color: 'bg-yellow-500' },
    { name: 'Tom', emoji: '🎵', color: 'bg-green-500' },
  ]

  const getSequenceLength = (lvl: GameLevel, r: number) => {
    const base = lvl === 'CP' ? 3 : lvl === 'CE1' ? 4 : lvl === 'CE2' ? 5 : 6
    return Math.min(base + Math.floor(r / 3), 10)
  }

  const generateSequence = (length: number) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 4))
  }

  const startGame = (lvl: GameLevel) => {
    setLevel(lvl)
    setScore(0)
    setRound(1)
    setGameOver(false)
    setShowLevelSelect(false)
    startRound(lvl, 1)
  }

  const startRound = (lvl: GameLevel, r: number) => {
    const length = getSequenceLength(lvl, r)
    const newSequence = generateSequence(length)
    setSequence(newSequence)
    setPlayerSequence([])
    setGameStatus('showing')
    playSequence(newSequence)
  }

  const playSequence = async (seq: number[]) => {
    setIsPlaying(true)
    for (let i = 0; i < seq.length; i++) {
      setCurrentBeat(seq[i])
      await new Promise(resolve => setTimeout(resolve, 500))
      setCurrentBeat(-1)
      await new Promise(resolve => setTimeout(resolve, 200))
    }
    setIsPlaying(false)
    setGameStatus('playing')
  }

  const handleDrumClick = (index: number) => {
    if (gameStatus !== 'playing') return

    const newPlayerSequence = [...playerSequence, index]
    setPlayerSequence(newPlayerSequence)
    setCurrentBeat(index)
    setTimeout(() => setCurrentBeat(-1), 150)

    // Vérifier si la séquence est correcte jusqu'ici
    const isCorrectSoFar = newPlayerSequence.every((beat, i) => beat === sequence[i])

    if (!isCorrectSoFar) {
      setGameStatus('fail')
      setTimeout(() => {
        if (round >= 10) {
          setGameOver(true)
        } else {
          setRound(round + 1)
          startRound(level!, round + 1)
        }
      }, 1500)
    } else if (newPlayerSequence.length === sequence.length) {
      setScore(score + 10)
      setGameStatus('success')
      setTimeout(() => {
        if (round >= 10) {
          setGameOver(true)
        } else {
          setRound(round + 1)
          startRound(level!, round + 1)
        }
      }, 1500)
    }
  }

  if (showLevelSelect) {
    return (
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p className="text-xl font-bold text-center">Rythme Musical</p>
          <p className="text-center text-muted-foreground">Reproduis la séquence de rythme !</p>
          <div className="grid grid-cols-2 gap-4">
            {(['CP', 'CE1', 'CE2', 'CM1'] as GameLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => startGame(lvl)}
                className="p-4 rounded-lg border-2 border-slate-700 hover:border-primary hover:scale-105 transition-all"
              >
                <p className="font-bold">{lvl}</p>
                <p className="text-xs text-muted-foreground">
                  {lvl === 'CP' && '3-4 notes'}
                  {lvl === 'CE1' && '4-5 notes'}
                  {lvl === 'CE2' && '5-6 notes'}
                  {lvl === 'CM1' && '6-8 notes'}
                </p>
              </button>
            ))}
          </div>
          <Button variant="outline" onClick={onExit} className="w-full">Retour</Button>
        </CardContent>
      </Card>
    )
  }

  if (gameOver) {
    return (
      <Card>
        <CardContent className="pt-6 text-center space-y-4">
          <p className="text-5xl">🎶</p>
          <p className="text-2xl font-bold">Super musicien !</p>
          <p className="text-4xl font-bold text-primary">{score}/100</p>
          <GameEndStats gameId="rhythm-game" level={level!} score={score} />
          <div className="flex gap-4 justify-center">
            <Button onClick={() => startGame(level!)}>Rejouer</Button>
            <Button variant="outline" onClick={onExit}>Retour</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Niveau {round}/10</span>
          <span className="font-bold">Score: {score}</span>
        </div>

        <div className={`text-center p-3 rounded-lg ${
          gameStatus === 'success' ? 'bg-green-500/20' :
          gameStatus === 'fail' ? 'bg-red-500/20' : 'bg-slate-800'
        }`}>
          <p className="text-lg font-bold">
            {gameStatus === 'showing' && '👀 Regarde bien...'}
            {gameStatus === 'playing' && '🎵 À ton tour !'}
            {gameStatus === 'success' && '✅ Parfait !'}
            {gameStatus === 'fail' && '❌ Pas tout à fait...'}
            {gameStatus === 'waiting' && 'Prêt ?'}
          </p>
          <p className="text-sm text-muted-foreground">
            {playerSequence.length}/{sequence.length} notes
          </p>
        </div>

        {/* Instruments */}
        <div className="grid grid-cols-2 gap-4">
          {drums.map((drum, index) => (
            <motion.button
              key={drum.name}
              onClick={() => handleDrumClick(index)}
              className={`p-6 rounded-xl ${drum.color} text-white flex flex-col items-center justify-center
                ${currentBeat === index ? 'ring-4 ring-white scale-110' : ''}
                ${gameStatus !== 'playing' ? 'opacity-60' : ''}`}
              animate={{ scale: currentBeat === index ? 1.1 : 1 }}
              whileTap={gameStatus === 'playing' ? { scale: 0.95 } : {}}
              disabled={gameStatus !== 'playing'}
            >
              <span className="text-4xl">{drum.emoji}</span>
              <span className="text-sm font-bold mt-1">{drum.name}</span>
            </motion.button>
          ))}
        </div>

        {gameStatus === 'playing' && (
          <Button
            variant="outline"
            onClick={() => playSequence(sequence)}
            className="w-full"
          >
            🔄 Réécouter
          </Button>
        )}

        <Button variant="outline" onClick={onExit} className="w-full">Quitter</Button>
      </CardContent>
    </Card>
  )
}
