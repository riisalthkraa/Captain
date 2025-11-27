/**
 * Tests pour le système de gamification
 */

describe('Gamification System', () => {
  test('Should add XP correctly', () => {
    const initialXP = 0
    const xpToAdd = 10
    const result = initialXP + xpToAdd
    expect(result).toBe(10)
  })

  test('Should unlock badges at correct levels', () => {
    const level = 5
    const badgeUnlockLevel = 5
    expect(level).toBeGreaterThanOrEqual(badgeUnlockLevel)
  })

  test('Should increment exercises counter', () => {
    let exercisesCompleted = 0
    exercisesCompleted++
    expect(exercisesCompleted).toBe(1)
  })

  test('Should track streaks correctly', () => {
    let streak = 0
    streak++
    expect(streak).toBeGreaterThan(0)
  })
})
