import { test, expect } from 'vitest'
import reducer, { islandTwoBuildKnight, islandTwoResetKnights, islandTwoSpendKnight, IslandTwoKnightState } from './islandTwoKnightSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert

    expect(result).toEqual(getInitialState())
})

test('should build knight', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, islandTwoBuildKnight(0))

    // Assert
    expect(result.isBuilt[0]).toEqual(true)
})

test('should reset knights', () => {
    // Arrange
    const previousState: IslandTwoKnightState = {
        isBuilt: [false, false, true, true, false, false],
        isSpent: [true, true, true, true, false, true]
    }

    // Act
    const result = reducer(previousState, islandTwoResetKnights())

    // Assert
    expect(result.isBuilt.every(built => built == false))
    expect(result.isSpent.every(spent => spent == false))
})

test('should spend knight', () => {
    // Arrange
    const previousState = getInitialState()
    previousState.isBuilt[0] = true

    // Act
    const result = reducer(previousState, islandTwoSpendKnight([0]))

    // Assert
    expect(result.isSpent[0]).toEqual(true)
})

test('should spend first unspent knight', () => {
    // Arrange
    const previousState = getInitialState()
    previousState.isBuilt[0] = true
    previousState.isSpent[0] = true

    previousState.isBuilt[1] = false

    // Should be the knight that is spent
    previousState.isBuilt[2] = true

    // Act
    const result = reducer(previousState, islandTwoSpendKnight([0, 1, 2]))

    // Assert
    expect(result.isSpent[1]).toEqual(false)
    expect(result.isSpent[2]).toEqual(true)
})

// Helper functions

const getInitialState = (): IslandTwoKnightState => {
    return {
        isBuilt: new Array(9).fill(false),
        isSpent: new Array(9).fill(false)
    }
}