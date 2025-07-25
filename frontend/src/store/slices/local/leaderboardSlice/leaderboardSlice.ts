import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../store"
import { GameMode } from "../../../../constants/enumerations"

export interface LeaderboardEntry {
    name: string
    mode: GameMode
    score: number
    date: Date
}

export interface LeaderboardState {
    entries: string[]
}

const initialState: LeaderboardState = {
    entries: new Array<string>(0)
}

export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState: initialState,
    reducers: {
        /**
         * When the user adds their score to the leaderboard
         * @param state 
         * @param action 
         */
        addLeaderboardEntry: (state, action: PayloadAction<AddLeaderboardEntryPayload>) => {
            const serializedLeaderboardEntry = JSON.stringify(
                {
                    name: action.payload.name,
                    mode: action.payload.mode,
                    score: action.payload.score,
                    date: new Date()
                })
            state.entries.push(serializedLeaderboardEntry)
        },
        /**
         * When the leaderboard is reset
         * @param state 
         */
        resetLeaderboard: (state) => {
            state.entries = initialState.entries
        }
    }
})

export default leaderboardSlice.reducer;

// Actions 
export interface AddLeaderboardEntryPayload {
    name: string
    mode: GameMode
    score: number
}

export const {
    addLeaderboardEntry,
    resetLeaderboard
} = leaderboardSlice.actions

// Selectors

const selectLeaderboardEntries = (state: RootState) => state.local.leaderboard.entries

export const selectOrderedIslandOneLeaderboardEntries = createSelector([selectLeaderboardEntries], (serializedEntries) => {
    const leaderboardEntries = serializedEntries
        .map((serializedEntry) => JSON.parse(serializedEntry))
        .filter(entry => entry.mode === GameMode.IslandOne)
    return leaderboardEntries.sort((a, b) => b.score - a.score)
})

export const selectOrderedIslandTwoLeaderboardEntries = createSelector([selectLeaderboardEntries], (serializedEntries) => {
    const leaderboardEntries = serializedEntries
        .map((serializedEntry) => JSON.parse(serializedEntry))
        .filter(entry => entry.mode === GameMode.IslandTwo)
    return leaderboardEntries.sort((a, b) => a.score - b.score)
})

// Helper functions
