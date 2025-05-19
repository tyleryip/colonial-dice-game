import { test, expect } from 'vitest'
import reducer, { buildKnight, knightState, resetKnights } from './knightSlice'

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
    const result = reducer(previousState, buildKnight(0))

    // Assert
    expect(result.isBuilt[0]).toEqual(true)
})

test('should reset knights', () => {
    // Arrange
    const previousState: knightState = {
        isBuilt: [false, false, true, true, false, false]
    }

    // Act
    const result = reducer(previousState, resetKnights())

    // Assert
    expect(result.isBuilt.every(built => built == false))
})


// Helper functions

const getInitialState = (): knightState => {
    return {
        isBuilt: new Array(6).fill(false)
    }
}