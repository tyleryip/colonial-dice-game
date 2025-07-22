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

export const islandTwoScoreSlice = createSlice({
    name: 'islandTwoScore',
    initialState: initialState,
    reducers: {
        /**
         * When the pending score should be published to the scoreboard at the end of the build phase
         * @param state 
         * @param action 
         */
        islandTwoAddScore: (state) => {
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
        islandTwoAddToPendingScore: (state, action: PayloadAction<number>) => {
            state.pendingScore = state.pendingScore == null || state.pendingScore == 0
                ? action.payload
                : state.pendingScore + action.payload
        },
        /**
         * When the game is reset
         * @param state 
         */
        islandTwoResetScore: (state) => {
            state.scores = new Array(15).fill(null)
            state.pendingScore = null
        }
    }
})

export default islandTwoScoreSlice.reducer;

// Actions

export const {
    islandTwoResetScore,
    islandTwoAddScore,
    islandTwoAddToPendingScore
} = islandTwoScoreSlice.actions

// Selectors

export const selectIslandTwoScoreValues = (state: RootState) => state.session.islandTwo.score.scores
export const selectIslandTwoPendingScore = (state: RootState) => state.session.islandTwo.score.pendingScore

export const selectIslandTwoTotalScore = (state: RootState) => state.session.islandTwo.score.scores
    .reduce((accumulator: number, currentValue: ScoreValue) => {
        return accumulator + (currentValue ?? 0);
    }, 0)

export const selectIslandTwoAllScoresFilled = (state: RootState) => state.session.islandTwo.score.scores.every(score => typeof score === 'number')

// Helper functions

function findFirstEmptyScoreIndex(scores: ScoreValue[]): number {
    return scores.findIndex(score => score == null)
}