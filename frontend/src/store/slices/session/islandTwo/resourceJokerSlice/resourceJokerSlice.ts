import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"
import { ResourceJokerState } from "../../shared/resourceJokerSlice"

const initialState: ResourceJokerState = {
    isSpent: new Array<boolean>(9).fill(false)
}

export const islandTwoResourceJokerSlice = createSlice({
    name: 'islandTwoResourceJoker',
    initialState: initialState,
    reducers: {
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
        */
        islandTwoResetResourceJokers: (state) => {
            state.isSpent = initialState.isSpent
        },
        /**
         * When the user spends a resource joker
         * @param state 
         * @param action 
         */
        islandTwoSpendResourceJoker: (state, action: PayloadAction<number>) => {
            const resourceJokerId = action.payload
            validateResourceJokerId(resourceJokerId)
            state.isSpent[resourceJokerId] = true
        }
    }
})

export default islandTwoResourceJokerSlice.reducer;

// Action 

export const {
    islandTwoResetResourceJokers,
    islandTwoSpendResourceJoker
} = islandTwoResourceJokerSlice.actions;

// Selectors

export const selectIslandTwoIsResourceJokerSpent = (state: RootState, resourceJokerId: number) => {
    validateResourceJokerId(resourceJokerId)
    return state.session.islandTwo.resourceJoker.isSpent[resourceJokerId];
}

// Helper functions

function validateResourceJokerId(resourceJokerId: number) {
    if (resourceJokerId < 0 || resourceJokerId > 8) {
        throw new Error(`Resource joker with id=${resourceJokerId} not found`)
    }
}