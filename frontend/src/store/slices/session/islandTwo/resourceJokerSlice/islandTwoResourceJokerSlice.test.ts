import { test, expect } from 'vitest'
import reducer, { islandTwoResetActiveResourceJoker, IslandTwoResourceJokerState, islandTwoSetActiveResourceJoker } from './islandTwoResourceJokerSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert

    expect(result).toEqual(getInitialState())
})

test('should reset active resource joker', () => {
    // Arrange
    const previousState: IslandTwoResourceJokerState = {
        activeResourceJoker: 0
    }

    // Act
    const result = reducer(previousState, islandTwoResetActiveResourceJoker())

    // Assert
    expect(result.activeResourceJoker).toBe(null)

})

test('should set active resource joker', () => {
    // Act
    const result = reducer(getInitialState(), islandTwoSetActiveResourceJoker(0))

    // Assert
    expect(result.activeResourceJoker).toBe(0)

})

// Helper functions

const getInitialState = (): IslandTwoResourceJokerState => {
    return {
        activeResourceJoker: null
    }
}