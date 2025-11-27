/**
 * Utilitaire de fusion de classes CSS pour Tailwind
 * Fonction simple pour combiner des classes CSS avec gestion des conflits Tailwind
 *
 * @module lib/cn
 */

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne intelligemment les classes CSS Tailwind
 * Utilise clsx pour combiner les classes et twMerge pour résoudre les conflits Tailwind
 *
 * @param inputs - Classes CSS à fusionner (chaînes, objets conditionnels, tableaux)
 * @returns Chaîne de classes CSS optimisée
 *
 * @example
 * ```tsx
 * <div className={cn('p-4 text-red-500', isActive && 'bg-blue-100')} />
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
