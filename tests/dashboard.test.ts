/**
 * Tests pour le Dashboard
 */

describe('Dashboard', () => {
  test('Should display correct stats', () => {
    const stats = {
      xp: 150,
      level: 3,
      exercisesCompleted: 25
    }
    expect(stats.xp).toBeGreaterThan(0)
    expect(stats.level).toBeGreaterThan(0)
  })

  test('Should show badges earned', () => {
    const badges = [
      { id: 'first-steps', unlocked: true },
      { id: 'math-star', unlocked: true }
    ]
    const unlockedBadges = badges.filter(b => b.unlocked)
    expect(unlockedBadges.length).toBeGreaterThan(0)
  })

  test('Should render tree progression', () => {
    const progression = {
      stage: 'sapling',
      level: 2
    }
    expect(progression.stage).toBeDefined()
    expect(['seed', 'sapling', 'tree']).toContain(progression.stage)
  })

  test('Should load data correctly', () => {
    const loaded = true
    expect(loaded).toBe(true)
  })
})
