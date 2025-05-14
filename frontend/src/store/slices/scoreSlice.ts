import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ScoreValue } from "../../types/ScoreValue"

interface scoreState {
    scores: ScoreValue[]
    pendingScore: ScoreValue
}

const initialState: scoreState = {
    scores: new Array(15).fill(null),
    pendingScore: 0
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState: initialState,
    reducers: {
        /**
         * When the pending score should be published to the scoreboard at the end of the build phase
         * @param state 
         * @param action 
         */
        addScore: (state) => {
            const index = findFirstEmptyScoreIndex(state.scores)
            state.scores[index] = state.pendingScore != null && state.pendingScore > 0
                ? state.pendingScore
                : -2
            state.pendingScore = 0
        },
        /**
         * When the pending score is changing after building structures or knights
         * @param state 
         * @param action the number of points to add to the pending score
         */
        addToPendingScore: (state, action: PayloadAction<number>) => {
            state.pendingScore = state.pendingScore == null || state.pendingScore == 0
                ? action.payload
                : state.pendingScore + action.payload
        },
        /**
         * When the game is reset
         * @param state 
         */
        resetScore: (state) => {
            state.scores = new Array(15).fill(null)
            state.pendingScore = null
        }
    }
})

export default scoreSlice.reducer;

// Actions

export const { resetScore, addScore, addToPendingScore } = scoreSlice.actions

// Selectors

export const selectScoreValues = (state: RootState) => state.score.scores
export const selectPendingScore = (state: RootState) => state.score.pendingScore

export const selectTotalScore = (state: RootState) => state.score.scores
    .reduce((accumulator: number, currentValue: ScoreValue) => {
        return accumulator + (currentValue ?? 0);
    }, 0)

export const selectAllScoresFilled = (state: RootState) => state.score.scores.every(score => typeof score === 'number')

// Helper functions

function findFirstEmptyScoreIndex(scores: ScoreValue[]): number {
    return scores.findIndex(score => score == null)
}