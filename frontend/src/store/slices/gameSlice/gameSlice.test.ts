import { test, expect } from 'vitest'
import reducer, { gameState, incrementTurn, resetGame, setGamePhase } from './gameSlice'
import { GamePhase } from '../../../constants/enumerations'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert

    expect(result).toEqual(getInitialState())
})

test('should increment turn', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, incrementTurn())

    // Assert
    expect(result.currentTurn).toEqual(1)
})

test('should set game phase', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, setGamePhase(GamePhase.Building))

    // Assert
    expect(result.currentGamePhase).toEqual(GamePhase.Building)
})

test('should reset game', () => {
    // Arrange
    const previousState: gameState = {
        currentGamePhase: GamePhase.Building,
        currentTurn: 14
    }

    // Act
    const result = reducer(previousState, resetGame())

    // Assert
    expect(result).toEqual(getInitialState())
})


// Helper functions

const getInitialState = (): gameState => {
    return {
        currentGamePhase: GamePhase.Rolling,
        currentTurn: 0
    }
}