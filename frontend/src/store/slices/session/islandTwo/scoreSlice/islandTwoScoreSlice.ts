import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../../store";

export interface IslandTwoScoreState {
    score: number,
    hasLongestRoad: boolean,
    hasLargestArmy: boolean
}

const initialState: IslandTwoScoreState = {
    score: 0,
    hasLongestRoad: false,
    hasLargestArmy: false
}

export const islandTwoScoreSlice = createSlice({
    name: 'islandTwoScore',
    initialState: initialState,
    reducers: {
        /**
         * When a structure is built and points should be added to the score
         * @param state 
         * @param action 
         */
        islandTwoAddScore: (state, action: PayloadAction<number>) => {
            state.score = state.score + action.payload
        },
        /**
         * Toggle whether the player has achieved or lost the longest road
         * @param state 
         */
        islandTwoToggleLongestRoad: (state) => {
            if (state.hasLongestRoad) {
                state.score = state.score - 2
            }

            if (!state.hasLongestRoad) {
                state.score = state.score + 2
            }

            state.hasLongestRoad = !state.hasLongestRoad
        },
        /**
         * Toggle whether the player has achieved or lost the largest army
         * @param state 
         */
        islandTwoToggleLargestArmy: (state) => {
            if (state.hasLargestArmy) {
                state.score = state.score - 2
            }

            if (!state.hasLargestArmy) {
                state.score = state.score + 2
            }

            state.hasLargestArmy = !state.hasLargestArmy
        },
        /**
         * When the game is reset
         * @param state 
         */
        islandTwoResetScore: (state) => {
            state.score = initialState.score
            state.hasLongestRoad = false
            state.hasLargestArmy = false
        }
    }
})

export default islandTwoScoreSlice.reducer;

// Actions

export const {
    islandTwoResetScore,
    islandTwoAddScore,
    islandTwoToggleLargestArmy,
    islandTwoToggleLongestRoad
} = islandTwoScoreSlice.actions

// Selectors

export const selectIslandTwoScore = (state: RootState) => state.session.islandTwo.score.score
export const selectIslandTwoHasLongestRoad = (state: RootState) => state.session.islandTwo.score.hasLongestRoad
export const selectIslandTwoHasLargestArmy = (state: RootState) => state.session.islandTwo.score.hasLargestArmy