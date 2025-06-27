import { test, expect } from 'vitest'
import reducer, { addScore, addToPendingScore, resetScore, ScoreState } from './scoreSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert
    expect(result).toEqual(getInitialState())
})

test('should add positive pending score', () => {
    // Arrange
    const previousState: ScoreState = {
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

test('should add null pending score', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, addScore())

    // Assert
    expect(result.scores[0]).toEqual(-2)
    expect(result.scores.slice(1, 16).every(score => score == null))
    expect(result.pendingScore).toEqual(null)
})

test('should add to empty pending score', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, addToPendingScore(1))

    // Assert
    expect(result.pendingScore).toEqual(1)
})

test('should add to exisiting pending score', () => {
    // Arrange
    const previousState = getInitialState()
    previousState.pendingScore = 1

    // Act
    const result = reducer(previousState, addToPendingScore(1))

    // Assert
    expect(result.pendingScore).toEqual(2)
})

test('should reset score', () => {
    // Arrange
    const previousState: ScoreState = {
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

const getInitialState = (): ScoreState => {
    return {
        scores: new Array(15).fill(null),
        pendingScore: null
    }
}