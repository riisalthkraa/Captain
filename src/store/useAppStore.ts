import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type AIProvider = 'ollama' | 'openai' | 'anthropic' | 'google'
export type TeacherMode = 'gentil' | 'exigeant'
export type StudentLevel = 'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2' | '6ème' | '5ème' | '4ème' | '3ème'

interface Student {
  id: string
  name: string
  age: number
  level: StudentLevel
  avatarUrl?: string
}

interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  attachments?: {
    type: 'image' | 'pdf' | 'document'
    name: string
    url: string
  }[]
}

interface Exercise {
  id: string
  subject: string
  difficulty: number
  completed: boolean
  score?: number
  date: Date
}

interface AppState {
  // Student
  currentStudent: Student | null
  setCurrentStudent: (student: Student) => void

  // AI settings
  aiProvider: AIProvider
  setAIProvider: (provider: AIProvider) => void
  teacherMode: TeacherMode
  setTeacherMode: (mode: TeacherMode) => void

  // Conversation
  messages: Message[]
  addMessage: (message: Message) => void
  clearMessages: () => void

  // Files
  uploadedFiles: File[]
  addFile: (file: File) => void
  removeFile: (fileName: string) => void
  clearFiles: () => void

  // Progress
  exercises: Exercise[]
  addExercise: (exercise: Exercise) => void

  // UI
  isSidebarOpen: boolean
  toggleSidebar: () => void
  currentView: 'chat' | 'dashboard' | 'settings' | 'homeworks' | 'exercises' | 'games'
  setCurrentView: (view: 'chat' | 'dashboard' | 'settings' | 'homeworks' | 'exercises' | 'games') => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Student
      currentStudent: null,
      setCurrentStudent: (student) => set({ currentStudent: student }),

      // AI settings
      aiProvider: 'ollama',
      setAIProvider: (provider) => set({ aiProvider: provider }),
      teacherMode: 'gentil',
      setTeacherMode: (mode) => set({ teacherMode: mode }),

      // Conversation
      messages: [],
      addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
      clearMessages: () => set({ messages: [] }),

      // Files
      uploadedFiles: [],
      addFile: (file) => set((state) => ({ uploadedFiles: [...state.uploadedFiles, file] })),
      removeFile: (fileName) => set((state) => ({
        uploadedFiles: state.uploadedFiles.filter((f) => f.name !== fileName)
      })),
      clearFiles: () => set({ uploadedFiles: [] }),

      // Progress
      exercises: [],
      addExercise: (exercise) => set((state) => ({ exercises: [...state.exercises, exercise] })),

      // UI
      isSidebarOpen: true,
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      currentView: 'chat',
      setCurrentView: (view) => set({ currentView: view }),
    }),
    {
      name: 'captaine-app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        currentStudent: state.currentStudent,
        aiProvider: state.aiProvider,
        teacherMode: state.teacherMode,
        exercises: state.exercises,
        // Ne pas persister: messages, uploadedFiles, isSidebarOpen, currentView
      }),
    }
  )
)
