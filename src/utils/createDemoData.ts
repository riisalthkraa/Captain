/**
 * Script pour créer des données de démo
 * À exécuter dans la console navigateur pour tester
 */

import { dbV2 } from '@/services/databaseV2'
import { authService } from '@/services/auth'

export async function createDemoData() {
  console.log('[Demo] Creating demo data...')

  try {
    // 1. Créer un professeur
    console.log('[Demo] Creating teacher...')
    const teacherResult = await authService.registerTeacher(
      'Marie',
      'Dupont',
      'marie.dupont@ecole.fr',
      'password123'
    )

    if (!teacherResult.success || !teacherResult.teacher) {
      console.error('[Demo] Failed to create teacher:', teacherResult.error)
      return
    }

    const teacher = teacherResult.teacher
    console.log('[Demo] Teacher created:', teacher.email)

    // 2. Créer une classe
    console.log('[Demo] Creating classroom...')
    const classroom = await dbV2.createClassroom({
      name: 'CM2-A',
      level: 'CM2',
      accessCode: 'PIRATES2024',
      teacherId: teacher.id,
      teacherName: `${teacher.firstName} ${teacher.lastName}`,
      subjects: ['Mathématiques', 'Français', 'Histoire', 'Sciences'],
      schoolYear: '2024-2025',
      isArchived: false
    })

    console.log('[Demo] Classroom created:', classroom.name, 'Code:', classroom.accessCode)

    // 3. Créer des élèves
    const students = [
      { firstName: 'Théo', age: 10, emoji: '🦁' },
      { firstName: 'Emma', age: 9, emoji: '🐱' },
      { firstName: 'Lucas', age: 10, emoji: '🐶' },
      { firstName: 'Léa', age: 9, emoji: '🐰' },
      { firstName: 'Hugo', age: 10, emoji: '🦊' },
      { firstName: 'Chloé', age: 9, emoji: '🐼' },
      { firstName: 'Nathan', age: 10, emoji: '🐨' },
      { firstName: 'Manon', age: 9, emoji: '🦄' },
      { firstName: 'Tom', age: 10, emoji: '🐯' },
      { firstName: 'Lily', age: 9, emoji: '🦋' }
    ]

    console.log('[Demo] Creating students...')
    for (const student of students) {
      await dbV2.createStudent({
        firstName: student.firstName,
        username: student.firstName.toLowerCase(),
        classroomId: classroom.id,
        age: student.age,
        level: 'CM2',
        avatarEmoji: student.emoji,
        companionType: 'chat'
      })
      console.log(`[Demo] Student created: ${student.firstName} (${student.emoji})`)
    }

    console.log('[Demo] ✅ Demo data created successfully!')
    console.log('[Demo] -----------------------------------------')
    console.log('[Demo] 👨‍🏫 PROFESSEUR:')
    console.log('[Demo]    Email: marie.dupont@ecole.fr')
    console.log('[Demo]    Mot de passe: password123')
    console.log('[Demo] -----------------------------------------')
    console.log('[Demo] 👤 ÉLÈVES:')
    console.log('[Demo]    Prénom: theo (ou emma, lucas, lea, hugo, etc.)')
    console.log('[Demo]    Code classe: PIRATES2024')
    console.log('[Demo] -----------------------------------------')

    return {
      teacher,
      classroom,
      studentsCount: students.length
    }
  } catch (error) {
    console.error('[Demo] Error creating demo data:', error)
    throw error
  }
}

// Export pour utilisation dans la console
if (typeof window !== 'undefined') {
  (window as any).createDemoData = createDemoData
}
