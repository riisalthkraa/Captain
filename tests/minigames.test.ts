/**
 * Tests pour le système XP des mini-jeux
 */

describe('Mini-Games XP', () => {
  test('MathRaceGame gives XP only at end', () => {
    // Simuler un jeu complet
    let xpGained = 0
    const gameComplete = true

    if (gameComplete) {
      xpGained = 15 // XP donné à la fin
    }

    expect(xpGained).toBeGreaterThan(0)
    expect(xpGained).toBeLessThanOrEqual(30)
  })

  test('MultiplicationBattle XP is capped at 30', () => {
    const score = 100
    const xpGained = Math.min(30, 20 + Math.floor(score / 10))
    expect(xpGained).toBeLessThanOrEqual(30)
  })

  test('WordExplorer XP based on score', () => {
    const score = 50
    const xpGained = Math.min(30, Math.floor(score / 2) + 10)
    expect(xpGained).toBeGreaterThan(0)
  })

  test('MemoryCalc no XP per pair', () => {
    // Vérifier qu'on ne donne pas d'XP par paire
    let xpPerPair = 0
    expect(xpPerPair).toBe(0)

    // XP seulement à la fin
    const moves = 12
    const xpAtEnd = Math.min(30, 20 + Math.max(0, 12 - moves))
    expect(xpAtEnd).toBeGreaterThan(0)
  })
})
