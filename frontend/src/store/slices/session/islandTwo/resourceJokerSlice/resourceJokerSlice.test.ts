import { test, expect } from 'vitest'
import reducer, { islandTwoResetResourceJokers, islandTwoSpendResourceJoker } from './resourceJokerSlice'
import { ResourceJokerState } from '../../shared/resourceJokerSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert

    expect(result).toEqual(getInitialState())
})

test('should reset resource jokers', () => {
    // Arrange
    const previousState: ResourceJokerState = {
        isSpent: [true, false, true, false, true, false]
    }

    // Act
    const result = reducer(previousState, islandTwoResetResourceJokers())

    // Assert
    expect(result.isSpent.every(spent => spent == false))

})

test('should spend resource joker', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, islandTwoSpendResourceJoker(0))

    // Assert
    expect(result.isSpent[0]).toEqual(true)
})

// Helper functions

const getInitialState = (): ResourceJokerState => {
    return {
        isSpent: new Array(9).fill(false)
    }
}