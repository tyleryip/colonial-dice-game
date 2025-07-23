import { test, expect } from 'vitest'
import reducer, { islandTwoAddScore, islandTwoResetScore, IslandTwoScoreState, islandTwoToggleLargestArmy, islandTwoToggleLongestRoad } from './islandTwoScoreSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert
    expect(result).toEqual(getInitialState())
})

test('should add score', () => {
    // Act
    const result = reducer(getInitialState(), islandTwoAddScore(1))

    // Assert
    expect(result.score).toBe(1)
})

test.each([
    [false, 0, true, 2],
    [true, 2, false, 0],
])('when largest army is $0 and score is $1 should toggle largest army to $2 and set score to $3 ', (initialArmy, initialScore, resultArmy, resultScore) => {
    // Arrange
    const previousState = getInitialState()
    previousState.hasLargestArmy = initialArmy
    previousState.score = initialScore

    // Act
    const result = reducer(previousState, islandTwoToggleLargestArmy())

    // Assert
    expect(result.score).toBe(resultScore)
    expect(result.hasLargestArmy).toBe(resultArmy)
})

test.each([
    [false, 0, true, 2],
    [true, 2, false, 0],
])('when longest road is $0 and score is $1 should toggle longest road to $2 and set score to $3 ', (initialRoad, initialScore, resultRoad, resultScore) => {
    // Arrange
    const previousState = getInitialState()
    previousState.hasLongestRoad = initialRoad
    previousState.score = initialScore

    // Act
    const result = reducer(previousState, islandTwoToggleLongestRoad())

    // Assert
    expect(result.score).toBe(resultScore)
    expect(result.hasLongestRoad).toBe(resultRoad)
})

test('should reset score', () => {
    // Arrange
    const previousState: IslandTwoScoreState = {
        score: 10,
        hasLargestArmy: true,
        hasLongestRoad: true
    }

    // Act
    const result = reducer(previousState, islandTwoResetScore())

    // Assert
    expect(result.score).toBe(0)
    expect(result.hasLargestArmy).toBe(false)
    expect(result.hasLongestRoad).toBe(false)
})

// Helper functions

const getInitialState = (): IslandTwoScoreState => {
    return {
        score: 0,
        hasLargestArmy: false,
        hasLongestRoad: false
    }
}