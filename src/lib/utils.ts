/**
 * Utilitaires généraux
 * Fonctions d'assistance pour la gestion des classes CSS, dates, et niveaux scolaires
 *
 * @module lib/utils
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Fusionne les classes CSS avec Tailwind CSS
 * Permet de combiner plusieurs classes tout en gérant les conflits Tailwind
 *
 * @param inputs - Liste de classes CSS à fusionner
 * @returns Classes CSS fusionnées et dédupliquées
 *
 * @example
 * ```ts
 * cn('px-2 py-1', 'px-4') // Returns: 'py-1 px-4'
 * cn('text-red-500', condition && 'text-blue-500') // Conditional classes
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formate une date en français
 *
 * @param date - Date à formater
 * @returns Date formatée (ex: "24 novembre 2025")
 *
 * @example
 * ```ts
 * formatDate(new Date()) // Returns: "24 novembre 2025"
 * ```
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

/**
 * Formate une heure en français
 *
 * @param date - Date dont on veut extraire l'heure
 * @returns Heure formatée (ex: "14:30")
 *
 * @example
 * ```ts
 * formatTime(new Date()) // Returns: "14:30"
 * ```
 */
export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

/**
 * Retourne un message de salutation adapté à l'heure
 *
 * @returns Salutation appropriée selon l'heure de la journée
 *
 * @example
 * ```ts
 * getGreeting() // Returns: "Bonjour" (le matin)
 * getGreeting() // Returns: "Bon après-midi" (l'après-midi)
 * getGreeting() // Returns: "Bonsoir" (le soir)
 * ```
 */
export function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Bonjour'
  if (hour < 18) return 'Bon après-midi'
  return 'Bonsoir'
}

/**
 * Détermine le niveau scolaire en fonction de l'âge de l'élève
 *
 * @param age - Âge de l'élève
 * @returns Niveau scolaire correspondant (CP, CE1, CE2, CM1, CM2, 6ème, 5ème, 4ème, 3ème, ou Lycée)
 *
 * @example
 * ```ts
 * getStudentLevel(6)  // Returns: "CP"
 * getStudentLevel(11) // Returns: "6ème"
 * getStudentLevel(15) // Returns: "Lycée"
 * ```
 */
export function getStudentLevel(age: number): string {
  if (age <= 6) return 'CP'
  if (age === 7) return 'CE1'
  if (age === 8) return 'CE2'
  if (age === 9) return 'CM1'
  if (age === 10) return 'CM2'
  if (age === 11) return '6ème'
  if (age === 12) return '5ème'
  if (age === 13) return '4ème'
  if (age === 14) return '3ème'
  return 'Lycée'
}
