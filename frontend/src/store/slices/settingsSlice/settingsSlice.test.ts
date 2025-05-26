import { expect, test } from 'vitest'
import reducer, { settingsState, setVolume, toggleMute } from './settingsSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert
    expect(result).toEqual(getInitialState())
})

test('should set mute to true', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, toggleMute())

    // Assert
    expect(result.mute).toBe(true)
})

test('should set mute to false', () => {
    // Arrange
    const previousState = getInitialState()
    previousState.mute = true

    // Act
    const result = reducer(previousState, toggleMute())

    // Assert
    expect(result.mute).toBe(false)
})

test('should set volume', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, setVolume(1))

    // Assert
    expect(result.volume).toBe(1)
})

// Helper functions

const getInitialState = (): settingsState => {
    return {
        mute: false,
        volume: 0.5
    }
}