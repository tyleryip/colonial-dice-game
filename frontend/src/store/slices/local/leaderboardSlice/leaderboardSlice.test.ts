import { expect, test } from 'vitest'
import reducer, { addLeaderboardEntry, AddLeaderboardEntryPayload, LeaderboardState, resetLeaderboard } from './leaderboardSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert

    expect(result).toEqual(getInitialState())
})

test('should add leaderboard entry', () => {
    // Act
    const previousState = getInitialState()

    const addLeaderboardEntryPayload: AddLeaderboardEntryPayload = {
        name: "John Smith",
        score: 69
    }

    // Assert
    const result = reducer(previousState, addLeaderboardEntry(addLeaderboardEntryPayload))

    // Assert
    expect(result.entries).toHaveLength(1)

    const deserializedEntry = JSON.parse(result.entries[0])
    expect(deserializedEntry.name).toEqual(addLeaderboardEntryPayload.name)
    expect(deserializedEntry.score).toEqual(addLeaderboardEntryPayload.score)
})

test('should reset leaderboard', () => {
    // Arrange
    const previousState = getInitialState()

    previousState.entries = [
        JSON.stringify(
            {
                name: "John Smith",
                score: 69,
                date: new Date()
            }),
        JSON.stringify(
            {
                name: "Alice Brown",
                score: 59,
                date: new Date()
            }),
        JSON.stringify(
            {
                name: "Brown John",
                score: 49,
                date: new Date()
            })
    ]

    // Act
    const result = reducer(previousState, resetLeaderboard())

    // Assert
    expect(result.entries).toHaveLength(0)
})

// Helper functions

const getInitialState = (): LeaderboardState => {
    return {
        entries: new Array<string>(0)
    }
}