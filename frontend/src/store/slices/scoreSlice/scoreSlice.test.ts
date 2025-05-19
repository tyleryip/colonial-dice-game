import { test, expect } from 'vitest'
import reducer, { addScore, addToPendingScore, resetScore, scoreState } from './scoreSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert
    expect(result).toEqual(getInitialState())
})

test('should add positive pending score', () => {
    // Arrange
    const previousState: scoreState = {
        scores: new Array(15).fill(null),
        pendingScore: 4
    }

    // Act
    const result = reducer(previousState, addScore())

    // Assert
    expect(result.scores[0]).toEqual(4)
    expect(result.scores.slice(1, 16).every(score => score == null))
    expect(result.pendingScore).toEqual(null)
})

test('should add zero pending score', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, addScore())

    // Assert
    expect(result.scores[0]).toEqual(-2)
    expect(result.scores.slice(1, 16).every(score => score == null))
    expect(result.pendingScore).toEqual(null)
})

test('should add to pending score', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, addToPendingScore(1))

    // Assert
    expect(result.pendingScore).toEqual(1)
})

test('should reset score', () => {
    // Arrange
    const previousState: scoreState = {
        scores: new Array(15).fill(5),
        pendingScore: null
    }

    // Act
    const result = reducer(previousState, resetScore())

    // Assert
    expect(result.scores.every(score => score == null))
    expect(result.pendingScore).toEqual(null)
})

// Helper functions

const getInitialState = (): scoreState => {
    return {
        scores: new Array(15).fill(null),
        pendingScore: null
    }
}