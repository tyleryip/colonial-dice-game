import { test, expect } from 'vitest'
import reducer, { islandOneResetResourceJokers, islandOneSpendResourceJoker, IslandOneResourceJokerState } from './islandOneResourceJokerSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert

    expect(result).toEqual(getInitialState())
})

test('should reset resource jokers', () => {
    // Arrange
    const previousState: IslandOneResourceJokerState = {
        isSpent: [true, false, true, false, true, false]
    }

    // Act
    const result = reducer(previousState, islandOneResetResourceJokers())

    // Assert
    expect(result.isSpent.every(spent => spent == false))

})

test('should spend resource joker', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, islandOneSpendResourceJoker(0))

    // Assert
    expect(result.isSpent[0]).toEqual(true)
})

// Helper functions

const getInitialState = (): IslandOneResourceJokerState => {
    return {
        isSpent: new Array(6).fill(false)
    }
}