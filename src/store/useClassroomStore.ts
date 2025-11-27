/**
 * Store Zustand pour la gestion des classes (Professeur)
 */

import { create } from 'zustand'
import { dbV2 } from '@/services/databaseV2'
import type { Classroom, Student, Homework, ClassroomAnalytics } from '@/services/databaseV2'

interface ClassroomState {
  // Données
  currentClassroom: Classroom | null
  classrooms: Classroom[]
  students: Student[]
  homeworks: Homework[]
  analytics: ClassroomAnalytics | null

  // Loading states
  isLoading: boolean

  // Actions - Classroom
  loadTeacherClassrooms: (teacherId: string) => Promise<void>
  selectClassroom: (classroomId: string) => Promise<void>
  createClassroom: (name: string, level: string, subjects: string[], teacherId: string, teacherName: string) => Promise<Classroom>

  // Actions - Students
  loadClassroomStudents: (classroomId: string) => Promise<void>
  addStudent: (classroomId: string, firstName: string, lastName: string, age: number, level: string) => Promise<Student>
  removeStudent: (studentId: string) => Promise<void>

  // Actions - Homeworks
  loadClassroomHomeworks: (classroomId: string) => Promise<void>
  createHomework: (homework: Partial<Homework>) => Promise<Homework>

  // Actions - Analytics
  refreshAnalytics: (classroomId: string) => Promise<void>
}

export const useClassroomStore = create<ClassroomState>()((set, get) => ({
  // État initial
  currentClassroom: null,
  classrooms: [],
  students: [],
  homeworks: [],
  analytics: null,
  isLoading: false,

  // Charge toutes les classes d'un prof
  loadTeacherClassrooms: async (teacherId) => {
    set({ isLoading: true })
    try {
      const classrooms = await dbV2.getTeacherClassrooms(teacherId)
      set({ classrooms, isLoading: false })
      console.log('[ClassroomStore] Loaded classrooms:', classrooms.length)
    } catch (error) {
      console.error('[ClassroomStore] Error loading classrooms:', error)
      set({ isLoading: false })
    }
  },

  // Sélectionne une classe et charge ses données
  selectClassroom: async (classroomId) => {
    set({ isLoading: true })
    try {
      const classroom = await dbV2.classrooms.get(classroomId)
      if (!classroom) {
        throw new Error('Classroom not found')
      }

      set({ currentClassroom: classroom })

      // Charger les élèves et devoirs
      await get().loadClassroomStudents(classroomId)
      await get().loadClassroomHomeworks(classroomId)
      await get().refreshAnalytics(classroomId)

      set({ isLoading: false })
      console.log('[ClassroomStore] Classroom selected:', classroom.name)
    } catch (error) {
      console.error('[ClassroomStore] Error selecting classroom:', error)
      set({ isLoading: false })
    }
  },

  // Crée une nouvelle classe
  createClassroom: async (name, level, subjects, teacherId, teacherName) => {
    try {
      // Générer un code d'accès unique (6 caractères alphanumériques)
      const accessCode = Math.random().toString(36).substring(2, 8).toUpperCase()

      const classroom = await dbV2.createClassroom({
        name,
        level: level as any,
        accessCode,
        teacherId,
        teacherName,
        subjects,
        schoolYear: '2024-2025',
        isArchived: false
      })

      // Ajouter à la liste
      set(state => ({
        classrooms: [...state.classrooms, classroom]
      }))

      console.log('[ClassroomStore] Classroom created:', classroom.name, 'Code:', classroom.accessCode)
      return classroom
    } catch (error) {
      console.error('[ClassroomStore] Error creating classroom:', error)
      throw error
    }
  },

  // Charge les élèves d'une classe
  loadClassroomStudents: async (classroomId) => {
    try {
      const students = await dbV2.getClassroomStudents(classroomId)
      set({ students })
      console.log('[ClassroomStore] Loaded students:', students.length)
    } catch (error) {
      console.error('[ClassroomStore] Error loading students:', error)
    }
  },

  // Ajoute un élève
  addStudent: async (classroomId, firstName, lastName, age, level) => {
    try {
      // Générer username (prénom en minuscule)
      const username = firstName.toLowerCase().replace(/\s+/g, '')

      const student = await dbV2.createStudent({
        firstName,
        lastName,
        username,
        classroomId,
        age,
        level: level as any,
        companionType: 'chat' // Par défaut
      })

      // Ajouter à la liste
      set(state => ({
        students: [...state.students, student]
      }))

      console.log('[ClassroomStore] Student added:', student.firstName, 'username:', student.username)
      return student
    } catch (error) {
      console.error('[ClassroomStore] Error adding student:', error)
      throw error
    }
  },

  // Supprime un élève
  removeStudent: async (studentId) => {
    try {
      await dbV2.students.delete(studentId)

      // Retirer de la liste
      set(state => ({
        students: state.students.filter(s => s.id !== studentId)
      }))

      console.log('[ClassroomStore] Student removed:', studentId)
    } catch (error) {
      console.error('[ClassroomStore] Error removing student:', error)
      throw error
    }
  },

  // Charge les devoirs d'une classe
  loadClassroomHomeworks: async (classroomId) => {
    try {
      const homeworks = await dbV2.getClassroomHomeworks(classroomId)
      set({ homeworks })
      console.log('[ClassroomStore] Loaded homeworks:', homeworks.length)
    } catch (error) {
      console.error('[ClassroomStore] Error loading homeworks:', error)
    }
  },

  // Crée un devoir
  createHomework: async (homeworkData) => {
    try {
      const homework = await dbV2.createHomework(homeworkData as any)

      // Ajouter à la liste
      set(state => ({
        homeworks: [homework, ...state.homeworks]
      }))

      console.log('[ClassroomStore] Homework created:', homework.title)
      return homework
    } catch (error) {
      console.error('[ClassroomStore] Error creating homework:', error)
      throw error
    }
  },

  // Rafraîchit les analytics
  refreshAnalytics: async (classroomId) => {
    try {
      const analytics = await dbV2.generateClassroomAnalytics(classroomId)
      set({ analytics })
      console.log('[ClassroomStore] Analytics refreshed')
    } catch (error) {
      console.error('[ClassroomStore] Error refreshing analytics:', error)
    }
  }
}))
