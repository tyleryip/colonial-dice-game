import { test, expect } from 'vitest'
import reducer, { islandTwoResetActiveResourceJoker, islandTwoSetActiveResourceJoker } from './islandTwoResourceJokerSlice'
import { ResourceJokerState } from '../../shared/resourceJokerSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert

    expect(result).toEqual(getInitialState())
})

test('should reset active resource joker', () => {
    // Arrange
    const previousState: ResourceJokerState = {
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

const getInitialState = (): ResourceJokerState => {
    return {
        activeResourceJoker: null
    }
}