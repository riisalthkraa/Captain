/**
 * Service IA pour Cap'taine - Version enrichie
 *
 * Intègre :
 * - Profil élève (forces, faiblesses)
 * - Patterns d'erreurs détectés
 * - État émotionnel de la session
 * - Modes spéciaux (Quiz, Révision, Défi)
 * - Commandes spéciales (/quiz, /révise, etc.)
 *
 * @module AI
 */

import { aiManager, AIMessage as AIMsg } from './aiProviders'
import { useExerciseTracking } from './exerciseTracking'
import { generatePatternSummaryForAI } from './errorPatternDetector'
import { generateAdaptiveContextForAI } from './adaptiveLearning'
import { generateReviewReport } from './spacedRepetition'
import { generateExercisePromptContext, getExerciseRecommendations } from './targetedExerciseGenerator'
import { useReports, generateReportContextForAI, formatSessionReportText, formatWeeklyReportText } from './progressReports'

export interface AIMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface AIResponse {
  content: string
  error?: string
}

/**
 * Profil de l'élève pour enrichir le prompt
 */
export interface StudentProfile {
  name?: string
  age: number
  level: string              // "CE2", "CM1", etc.
  strengths: string[]        // ["géométrie", "lecture"]
  weaknesses: string[]       // ["tables x7", "homophones"]
  learningStyle?: 'visual' | 'auditory' | 'kinesthetic' | 'mixed'
  recentErrors?: string[]    // Dernières erreurs
}

/**
 * Modes d'interaction de l'IA
 */
export type AIMode =
  | 'normal'      // Mode par défaut - aide socratique
  | 'quiz'        // Mode quiz - pose des questions, évalue
  | 'revision'    // Mode révision - cible les faiblesses
  | 'defi'        // Mode défi - exercices plus difficiles
  | 'explication' // Mode explication - cours sur un concept
  | 'correction'  // Mode correction - analyse un devoir

/**
 * Contexte enrichi pour l'IA
 */
export interface EnrichedContext {
  studentProfile?: StudentProfile
  mode: AIMode
  teacherMode: 'gentil' | 'exigeant'
  subject?: string           // Matière en cours
  topic?: string             // Sujet spécifique
}

/**
 * Commandes spéciales détectées dans les messages
 */
export interface ParsedCommand {
  command: string            // "quiz", "révise", "défi", etc.
  args: string[]             // Arguments de la commande
  originalMessage: string
}

/**
 * Détecte et parse les commandes spéciales
 */
export function parseCommand(message: string): ParsedCommand | null {
  const trimmed = message.trim()

  // Commandes qui commencent par /
  if (trimmed.startsWith('/')) {
    const parts = trimmed.slice(1).split(/\s+/)
    const command = parts[0].toLowerCase()
    const args = parts.slice(1)

    const validCommands = [
      'quiz', 'révise', 'revise', 'défi', 'defi',
      'explique', 'aide', 'pause', 'stats', 'rapport', 'semaine'
    ]

    if (validCommands.includes(command)) {
      return { command, args, originalMessage: message }
    }
  }

  // Détection naturelle des intentions
  const lowerMsg = trimmed.toLowerCase()

  if (lowerMsg.includes('fais-moi un quiz') || lowerMsg.includes('quiz sur')) {
    const subject = lowerMsg.match(/quiz(?:\s+sur)?\s+(.+)/)?.[1] || ''
    return { command: 'quiz', args: [subject], originalMessage: message }
  }

  if (lowerMsg.includes('je veux réviser') || lowerMsg.includes('révisons')) {
    const subject = lowerMsg.match(/révis(?:er|ons)\s+(.+)/)?.[1] || ''
    return { command: 'révise', args: [subject], originalMessage: message }
  }

  if (lowerMsg.includes('un défi') || lowerMsg.includes('challenge')) {
    return { command: 'défi', args: [], originalMessage: message }
  }

  if (lowerMsg.includes('explique-moi') || lowerMsg.includes('c\'est quoi')) {
    const concept = lowerMsg.match(/(?:explique-moi|c'est quoi)\s+(.+)/)?.[1] || ''
    return { command: 'explique', args: [concept], originalMessage: message }
  }

  return null
}

/**
 * Génère le prompt pour un mode spécifique
 */
function getModePrompt(mode: AIMode, args: string[]): string {
  switch (mode) {
    case 'quiz':
      return `
🎯 MODE QUIZ ACTIVÉ
Tu dois poser des questions à l'élève et évaluer ses réponses.
${args[0] ? `Sujet du quiz: ${args[0]}` : 'Quiz général sur ses faiblesses'}

COMPORTEMENT:
1. Pose UNE question à la fois
2. Attends la réponse avant de passer à la suivante
3. Donne un feedback court après chaque réponse (✅ ou ❌ + explication)
4. Compte les points (ex: "3/5 bonnes réponses")
5. Adapte la difficulté selon les réponses
6. À la fin, donne un résumé avec les points à retravailler

Commence par annoncer le quiz et poser la première question.
`

    case 'revision':
      return `
📚 MODE RÉVISION ACTIVÉ
Tu dois aider l'élève à réviser ses points faibles.
${args[0] ? `Focus sur: ${args[0]}` : 'Focus sur les faiblesses détectées'}

COMPORTEMENT:
1. Commence par un mini-rappel du concept (2-3 phrases max)
2. Propose un exercice d'application simple
3. Si l'élève réussit, augmente légèrement la difficulté
4. Si l'élève échoue, réexplique différemment
5. Utilise des moyens mnémotechniques et astuces
6. Félicite les progrès, même minimes

Commence par identifier ce qu'on va réviser ensemble.
`

    case 'defi':
      return `
🏆 MODE DÉFI ACTIVÉ
Tu dois proposer des exercices plus difficiles que d'habitude.

COMPORTEMENT:
1. Préviens l'élève que c'est un défi (pour qu'il ne se décourage pas)
2. Propose des problèmes qui combinent plusieurs notions
3. Laisse plus de temps de réflexion avant d'aider
4. Valorise ÉNORMÉMENT la persévérance
5. Même si l'élève échoue, félicite l'effort d'avoir essayé
6. Donne des indices progressifs seulement si vraiment bloqué

Annonce le défi avec enthousiasme et propose le premier exercice.
`

    case 'explication':
      return `
📖 MODE EXPLICATION ACTIVÉ
Tu dois faire un mini-cours sur le concept demandé.
${args[0] ? `Concept à expliquer: ${args[0]}` : ''}

COMPORTEMENT:
1. Explique le concept en termes TRÈS simples
2. Utilise des analogies du quotidien
3. Donne 2-3 exemples concrets
4. Propose une règle ou un moyen mnémotechnique
5. Termine par "Tu as compris ?" ou une question de vérification
6. NE FAIS PAS d'exercice complet, juste l'explication

Commence l'explication de manière engageante.
`

    case 'correction':
      return `
✏️ MODE CORRECTION ACTIVÉ
Tu dois analyser le travail de l'élève et l'aider à comprendre ses erreurs.

COMPORTEMENT:
1. Identifie les erreurs sans donner directement la correction
2. Demande à l'élève d'expliquer son raisonnement sur chaque erreur
3. Guide-le vers la bonne réponse avec des questions
4. Souligne aussi ce qui est BIEN fait
5. À la fin, résume les points à revoir

Demande à l'élève de te montrer son travail.
`

    default:
      return ''
  }
}

/**
 * Génère le system prompt enrichi avec toutes les données
 */
export function getEnrichedSystemPrompt(
  context: EnrichedContext,
  profileId?: string
): string {
  const { studentProfile, mode, teacherMode } = context
  const age = studentProfile?.age || 10
  const complexity = age <= 8 ? 'très simple' : age <= 12 ? 'simple' : 'normale'

  // === PROMPT DE BASE ===
  let prompt = `Tu es Cap'taine, un professeur particulier IA pour ${studentProfile?.name || 'un élève'} de ${age} ans${studentProfile?.level ? ` en ${studentProfile.level}` : ''}.

⚠️ RÈGLES ABSOLUES - INTERDICTION STRICTE:
1. 🚫 NE DONNE JAMAIS LA RÉPONSE FINALE OU COMPLÈTE
2. 🚫 NE RÉSOUS JAMAIS L'EXERCICE À LA PLACE DE L'ÉLÈVE
3. 🚫 NE DONNE PAS DE CALCULS COMPLETS, SEULEMENT DES INDICES
4. 🚫 NE DONNE PAS LA TRADUCTION COMPLÈTE, SEULEMENT DES AIDES
5. 🚫 NE CORRIGE PAS DIRECTEMENT, AMÈNE L'ÉLÈVE À TROUVER SON ERREUR

✅ CE QUE TU DOIS FAIRE:
1. Pose des questions qui guident vers la solution (méthode socratique)
2. Découpe le problème en petites étapes faciles
3. Demande à l'élève de réfléchir et de proposer ses idées AVANT de l'aider
4. Si l'élève se trompe, demande-lui d'EXPLIQUER son raisonnement
5. Utilise des exemples DIFFÉRENTS pour expliquer un concept
6. Félicite les efforts, le raisonnement, la persévérance

🎯 LANGAGE: Utilise un vocabulaire ${complexity} adapté à l'âge (${age} ans)
`

  // === PROFIL DE L'ÉLÈVE ===
  if (studentProfile) {
    prompt += `
📊 PROFIL DE L'ÉLÈVE:
`
    if (studentProfile.strengths.length > 0) {
      prompt += `✅ Points forts: ${studentProfile.strengths.join(', ')}\n`
    }
    if (studentProfile.weaknesses.length > 0) {
      prompt += `⚠️ Points faibles: ${studentProfile.weaknesses.join(', ')}\n`
      prompt += `   → ADAPTE tes explications en conséquence sur ces sujets\n`
    }
    if (studentProfile.learningStyle) {
      const styleAdvice = {
        visual: "utilise des schémas, dessins, couleurs",
        auditory: "lis à voix haute, utilise des rimes",
        kinesthetic: "propose des manipulations, des gestes",
        mixed: "varie les approches"
      }
      prompt += `📖 Style d'apprentissage: ${studentProfile.learningStyle} (${styleAdvice[studentProfile.learningStyle]})\n`
    }
  }

  // === PATTERNS D'ERREURS ===
  if (profileId) {
    const patternSummary = generatePatternSummaryForAI(profileId)
    if (patternSummary && !patternSummary.includes('Aucun pattern')) {
      prompt += `\n${patternSummary}`
      prompt += `\n→ UTILISE ces informations pour anticiper et prévenir les erreurs récurrentes\n`
    }
  }

  // === ÉTAT DE SESSION ===
  if (profileId) {
    const sessionContext = generateAdaptiveContextForAI(profileId)
    if (sessionContext) {
      prompt += sessionContext
    }
  }

  // === COMPÉTENCES À RÉVISER (SRS) ===
  if (profileId) {
    const reviewReport = generateReviewReport(profileId)
    if (reviewReport.dueToday.length > 0) {
      prompt += `\n📅 RÉVISIONS DU JOUR (système SRS):\n`
      prompt += `À réviser: ${reviewReport.dueToday.slice(0, 5).join(', ')}\n`
      prompt += `→ Si l'occasion se présente, oriente vers ces notions\n`
    }
    if (reviewReport.needsWork.length > 0) {
      prompt += `⚡ Compétences en difficulté: ${reviewReport.needsWork.join(', ')}\n`
    }
  }

  // === EXERCICES RECOMMANDÉS ===
  if (profileId) {
    const exerciseContext = generateExercisePromptContext(profileId)
    if (exerciseContext) {
      prompt += exerciseContext
    }
  }

  // === HISTORIQUE DE PROGRESSION ===
  if (profileId) {
    const progressContext = generateReportContextForAI(profileId)
    if (progressContext) {
      prompt += progressContext
    }
  }

  // === MODE PROFESSEUR ===
  if (teacherMode === 'gentil') {
    prompt += `
🌟 MODE GENTIL:
- Sois ULTRA-patient et bienveillant
- Utilise BEAUCOUP d'encouragements positifs
- Trouve TOUJOURS quelque chose de bien dans les erreurs
- Utilise des emojis pour rendre ça fun 😊🎯⭐🚀
- Valorise même les petits progrès
`
  } else {
    prompt += `
💪 MODE EXIGEANT:
- Sois encourageant mais pousse l'élève à se DÉPASSER
- Demande TOUJOURS de justifier les réponses
- Félicite UNIQUEMENT quand c'est vraiment mérité
- Laisse l'élève chercher plus longtemps avant d'aider
- Moins d'emojis, plus de rigueur intellectuelle
`
  }

  // === MODE SPÉCIAL ===
  if (mode !== 'normal') {
    const modePrompt = getModePrompt(mode, context.topic ? [context.topic] : [])
    prompt += modePrompt
  }

  return prompt
}

/**
 * Version simple du prompt (rétrocompatibilité)
 */
export function getSystemPrompt(teacherMode: 'gentil' | 'exigeant', studentAge: number): string {
  return getEnrichedSystemPrompt({
    mode: 'normal',
    teacherMode,
    studentProfile: { age: studentAge, level: '', strengths: [], weaknesses: [] }
  })
}

/**
 * Traite une commande spéciale et retourne la réponse appropriée
 */
export async function handleCommand(
  command: ParsedCommand,
  context: EnrichedContext,
  profileId?: string
): Promise<AIResponse> {
  const { command: cmd, args } = command

  switch (cmd) {
    case 'stats':
    case 'rapport': {
      // Générer un rapport de progression complet
      if (!profileId) {
        return { content: "Je n'ai pas assez de données sur toi pour faire un rapport. Continue à travailler et reviens me voir !" }
      }

      const tracking = useExerciseTracking.getState()
      const analysis = tracking.analyzeProfile(profileId)
      const reviewReport = generateReviewReport(profileId)
      const reports = useReports.getState()
      const stats = reports.getProfileStats(profileId)
      const lastSession = reports.getLastSessionReport(profileId)
      const comparison = reports.compareWithPrevious(profileId)
      const recommendations = getExerciseRecommendations(profileId)

      let report = "📊 **TON RAPPORT DE PROGRESSION**\n"
      report += `${'─'.repeat(35)}\n\n`

      // Stats globales
      report += `📈 **Statistiques globales:**\n`
      report += `   • ${stats.totalSessions} sessions effectuées\n`
      report += `   • ${stats.totalExercises} exercices faits\n`
      report += `   • ${Math.round(stats.averageSuccessRate)}% de réussite moyenne\n`
      report += `   • Niveau estimé: ${stats.estimatedLevel}\n\n`

      // Dernière session
      if (lastSession) {
        report += `📅 **Dernière session:**\n`
        report += `   • ${lastSession.successRate}% de réussite\n`
        report += `   • ${comparison.message}\n\n`
      }

      // Points forts
      if (analysis.topStrengths.length > 0) {
        report += `💪 **Tes points forts:**\n`
        analysis.topStrengths.slice(0, 3).forEach(s => {
          report += `   • ${s.skill} (${s.successRate}%)\n`
        })
        report += '\n'
      }

      // À travailler
      if (analysis.topWeaknesses.length > 0) {
        report += `📚 **À travailler:**\n`
        analysis.topWeaknesses.slice(0, 3).forEach(w => {
          report += `   • ${w.skill} (${w.successRate}%)\n`
        })
        report += '\n'
      }

      // Révisions SRS
      if (reviewReport.dueToday.length > 0) {
        report += `⏰ **Révisions du jour:**\n`
        report += `   ${reviewReport.dueToday.slice(0, 5).join(', ')}\n\n`
      }

      // Recommandations
      if (recommendations.immediate.length > 0) {
        report += `🎯 **Recommandations:**\n`
        recommendations.immediate.slice(0, 3).forEach(r => {
          report += `   • ${r}\n`
        })
        report += '\n'
      }

      report += `\n${reviewReport.summary}`

      return { content: report }
    }

    case 'semaine': {
      // Générer un rapport hebdomadaire
      if (!profileId) {
        return { content: "Je n'ai pas assez de données pour générer un rapport hebdomadaire." }
      }

      const reports = useReports.getState()
      const weeklyReport = reports.generateWeeklyReport(profileId)
      return { content: formatWeeklyReportText(weeklyReport) }
    }

    case 'pause': {
      const messages = [
        "🛋️ Bonne idée de faire une pause ! Le cerveau a besoin de repos pour bien mémoriser. Reviens dans 5-10 minutes !",
        "☕ Pause bien méritée ! Étire-toi, bois un verre d'eau, et on se retrouve tout à l'heure !",
        "🌟 Super de savoir écouter ton corps ! Une pause de 5 minutes et on repart de plus belle !"
      ]
      return { content: messages[Math.floor(Math.random() * messages.length)] }
    }

    case 'aide': {
      return {
        content: `🆘 **Commandes disponibles:**

**/quiz [sujet]** - Lance un quiz (ex: /quiz tables de multiplication)
**/révise [sujet]** - Mode révision ciblée (ex: /révise homophones)
**/défi** - Propose un exercice difficile pour te challenger
**/explique [concept]** - Explication d'une notion (ex: /explique les fractions)
**/stats** - Affiche ton rapport de progression complet
**/semaine** - Affiche ton rapport hebdomadaire
**/pause** - Prends une pause bien méritée

Tu peux aussi me parler normalement, je comprendrai ! 😊`
      }
    }

    default: {
      // Pour quiz, révise, défi, explique → modifier le mode et laisser l'IA répondre
      const modeMap: Record<string, AIMode> = {
        'quiz': 'quiz',
        'révise': 'revision',
        'revise': 'revision',
        'défi': 'defi',
        'defi': 'defi',
        'explique': 'explication'
      }

      const newMode = modeMap[cmd]
      if (newMode) {
        const newContext: EnrichedContext = {
          ...context,
          mode: newMode,
          topic: args.join(' ')
        }

        // Appeler l'IA avec le nouveau mode
        const systemPrompt = getEnrichedSystemPrompt(newContext, profileId)
        const response = await callAIWithContext(
          [{ role: 'user', content: `Lance le mode ${cmd}${args.length > 0 ? ` sur: ${args.join(' ')}` : ''}` }],
          systemPrompt
        )
        return response
      }

      return { content: "Commande non reconnue. Tape /aide pour voir les commandes disponibles." }
    }
  }
}

/**
 * Appelle l'IA avec un contexte enrichi
 */
export async function callAIWithContext(
  messages: AIMessage[],
  systemPrompt: string
): Promise<AIResponse> {
  try {
    const aiMessages: AIMsg[] = [
      { role: 'system', content: systemPrompt },
      ...messages.map(m => ({ role: m.role, content: m.content }))
    ]

    const response = await aiManager.chat(aiMessages)

    if (!response.success) {
      return {
        content: '',
        error: response.error || 'Erreur IA inconnue'
      }
    }

    return {
      content: response.content || ''
    }

  } catch (error: any) {
    console.error('[AI Service] Error:', error)
    return {
      content: '',
      error: error.message || 'Erreur lors de l\'appel IA'
    }
  }
}

/**
 * Appelle l'IA (version simple - rétrocompatibilité)
 */
export async function callAI(messages: AIMessage[]): Promise<AIResponse> {
  try {
    const aiMessages: AIMsg[] = messages.map(m => ({
      role: m.role,
      content: m.content
    }))

    const response = await aiManager.chat(aiMessages)

    if (!response.success) {
      return {
        content: '',
        error: response.error || 'Erreur IA inconnue'
      }
    }

    return {
      content: response.content || ''
    }

  } catch (error: any) {
    console.error('[AI Service] Error:', error)
    return {
      content: '',
      error: error.message || 'Erreur lors de l\'appel IA'
    }
  }
}

/**
 * Point d'entrée principal enrichi
 */
export async function chat(
  userMessage: string,
  conversationHistory: AIMessage[],
  context: EnrichedContext,
  profileId?: string
): Promise<AIResponse> {
  // 1. Détecter les commandes spéciales
  const command = parseCommand(userMessage)

  if (command) {
    console.log('[AI] Command detected:', command.command, command.args)
    return handleCommand(command, context, profileId)
  }

  // 2. Générer le prompt enrichi
  const systemPrompt = getEnrichedSystemPrompt(context, profileId)

  // 3. Appeler l'IA
  const messages: AIMessage[] = [
    ...conversationHistory,
    { role: 'user', content: userMessage }
  ]

  return callAIWithContext(messages, systemPrompt)
}
