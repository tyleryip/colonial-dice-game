import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

export interface LeaderboardEntry {
    name: string
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
    score: number
}

export const {
    addLeaderboardEntry,
    resetLeaderboard
} = leaderboardSlice.actions

// Selectors

const selectLeaderboardEntries = (state: RootState) => state.local.leaderboard.entries

export const selectOrderedLeaderboardEntries = createSelector([selectLeaderboardEntries], (serializedEntries) => {
    const leaderboardEntries = serializedEntries.map((serializedEntry) => JSON.parse(serializedEntry))
    return leaderboardEntries.sort((a, b) => b.score - a.score)
})

// Helper functions
