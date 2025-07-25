import { test, expect } from 'vitest'
import reducer, { islandOneBuildKnight, islandOneResetKnights, islandOneSpendKnight } from './islandOneKnightSlice'
import { KnightState } from '../../shared/knightSlice'

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
    const result = reducer(previousState, islandOneBuildKnight(0))

    // Assert
    expect(result.isBuilt[0]).toEqual(true)
})

test('should reset knights', () => {
    // Arrange
    const previousState: KnightState = {
        isBuilt: [false, false, true, true, false, false],
        isSpent: [false, true, true, false, true, false]
    }

    // Act
    const result = reducer(previousState, islandOneResetKnights())

    // Assert
    expect(result.isBuilt.every(built => built == false))
    expect(result.isSpent.every(spent => spent == false))
})

test('should spend knight', () => {
    // Arrange
    const previousState = getInitialState()
    previousState.isBuilt[0] = true

    // Act
    const result = reducer(previousState, islandOneSpendKnight(0))

    // Assert
    expect(result.isSpent[0]).toEqual(true)
})

// Helper functions

const getInitialState = (): KnightState => {
    return {
        isBuilt: new Array(6).fill(false),
        isSpent: new Array(6).fill(false)
    }
}