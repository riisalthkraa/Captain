/**
 * Composant Button réutilisable
 * Bouton stylisé avec plusieurs variantes et tailles
 *
 * @module components/ui/Button
 */

import { cn } from '@/lib/cn'
import { ButtonHTMLAttributes, forwardRef } from 'react'

/**
 * Props du composant Button
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Style visuel du bouton */
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  /** Taille du bouton */
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

/**
 * Composant Button avec variantes et tailles personnalisables
 *
 * @example
 * ```tsx
 * <Button variant="default" size="lg">Cliquez-moi</Button>
 * <Button variant="destructive">Supprimer</Button>
 * <Button variant="outline" size="sm">Petit bouton</Button>
 * ```
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    // Styles de base communs à tous les boutons
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    // Variantes de couleur
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    }

    // Variantes de taille
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
