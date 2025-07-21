import { test, expect } from 'vitest'
import reducer, { GameState, islandTwoIncrementTurn, islandTwoResetGame, islandTwoSetGamePhase } from './islandTwoGameSlice'
import { GamePhase } from '../../../../../constants/enumerations'

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
    const result = reducer(previousState, islandTwoIncrementTurn())

    // Assert
    expect(result.currentTurn).toEqual(1)
})

test('should set game phase', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, islandTwoSetGamePhase(GamePhase.Building))

    // Assert
    expect(result.currentGamePhase).toEqual(GamePhase.Building)
})

test('should reset game', () => {
    // Arrange
    const previousState: GameState = {
        currentGamePhase: GamePhase.Building,
        currentTurn: 14
    }

    // Act
    const result = reducer(previousState, islandTwoResetGame())

    // Assert
    expect(result).toEqual(getInitialState())
})


// Helper functions

const getInitialState = (): GameState => {
    return {
        currentGamePhase: GamePhase.Rolling,
        currentTurn: 0
    }
}