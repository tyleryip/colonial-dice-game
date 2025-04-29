import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ScoreValue } from "../../types/ScoreValue"

interface scoreState {
    scores: ScoreValue[]
}

const initialState: scoreState = {
    scores: new Array(15).fill(null)
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState: initialState,
    reducers: {
        // When the game is reset
        resetScore: (state) => {
            state.scores = new Array(15).fill(null)
        },
        // When a new score should be added to the scoreboard
        addScore: (state, action: PayloadAction<number>) => {
            state.scores = findFirstEmptyScoreAndSet(state.scores, action.payload)
        }
    }
})

export default scoreSlice.reducer;

// Actions

export const { resetScore, addScore } = scoreSlice.actions

// Selectors

export const selectScoreValues = (state: RootState) => state.score.scores
export const selectTotalScore = createSelector(
    (state: RootState) => state.score.scores,
    (scores: ScoreValue[]) => calculateTotalScore(scores)
)

// Helper functions

function findFirstEmptyScoreAndSet(scores: ScoreValue[], newScore: ScoreValue) {
    const newScores = [...scores]
    const firstNullIndex = newScores.indexOf(null)
    if (firstNullIndex !== -1) {
        newScores[firstNullIndex] = newScore
    }

    return newScores
}

function calculateTotalScore(scores: ScoreValue[]) {
    return scores.reduce((accumulator: number, currentValue: ScoreValue) => {
        return accumulator + (currentValue ?? 0);
    }, 0)
}