import { test, expect } from 'vitest'
import reducer, { islandTwoBuildKnight, KnightState, islandTwoResetKnights } from './islandTwoKnightSlice'

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
    const previousState: KnightState = {
        isBuilt: [false, false, true, true, false, false]
    }

    // Act
    const result = reducer(previousState, islandTwoResetKnights())

    // Assert
    expect(result.isBuilt.every(built => built == false))
})


// Helper functions

const getInitialState = (): KnightState => {
    return {
        isBuilt: new Array(6).fill(false)
    }
}