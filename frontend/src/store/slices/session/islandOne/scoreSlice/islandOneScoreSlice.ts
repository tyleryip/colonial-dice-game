import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../../store";
import { ScoreValue } from "../../../../../types/ScoreValue"

export interface ScoreState {
    scores: ScoreValue[]
    pendingScore: ScoreValue
}

const initialState: ScoreState = {
    scores: new Array<ScoreValue>(15).fill(null),
    pendingScore: null
}

export const islandOneScoreSlice = createSlice({
    name: 'islandOneScore',
    initialState: initialState,
    reducers: {
        /**
         * When the pending score should be published to the scoreboard at the end of the build phase
         * @param state 
         * @param action 
         */
        islandOneAddScore: (state) => {
            const index = findFirstEmptyScoreIndex(state.scores)
            state.scores[index] = state.pendingScore != null && state.pendingScore > 0
                ? state.pendingScore
                : -2
            state.pendingScore = null
        },
        /**
         * When the pending score is changing after building structures or knights
         * @param state 
         * @param action the number of points to add to the pending score
         */
        islandOneAddToPendingScore: (state, action: PayloadAction<number>) => {
            state.pendingScore = state.pendingScore == null || state.pendingScore == 0
                ? action.payload
                : state.pendingScore + action.payload
        },
        /**
         * When the game is reset
         * @param state 
         */
        islandOneResetScore: (state) => {
            state.scores = new Array(15).fill(null)
            state.pendingScore = null
        }
    }
})

export default islandOneScoreSlice.reducer;

// Actions

export const {
    islandOneResetScore,
    islandOneAddScore,
    islandOneAddToPendingScore
} = islandOneScoreSlice.actions

// Selectors

export const selectIslandOneScoreValues = (state: RootState) => state.session.islandOne.score.scores
export const selectIslandOnePendingScore = (state: RootState) => state.session.islandOne.score.pendingScore

export const selectIslandOneTotalScore = (state: RootState) => state.session.islandOne.score.scores
    .reduce((accumulator: number, currentValue: ScoreValue) => {
        return accumulator + (currentValue ?? 0);
    }, 0)

export const selectIslandOneAllScoresFilled = (state: RootState) => state.session.islandOne.score.scores.every(score => typeof score === 'number')

// Helper functions

function findFirstEmptyScoreIndex(scores: ScoreValue[]): number {
    return scores.findIndex(score => score == null)
}