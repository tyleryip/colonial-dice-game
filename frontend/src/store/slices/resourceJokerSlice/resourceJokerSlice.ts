import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export interface resourceJokerState {
    isSpent: boolean[]
}

const initialState: resourceJokerState = {
    isSpent: new Array(6).fill(false)
}

export const resourceJokerSlice = createSlice({
    name: 'resourceJoker',
    initialState: initialState,
    reducers: {
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
        */
        resetResourceJokers: (state) => {
            state.isSpent = initialState.isSpent
        },
        /**
         * When the user spends a resource joker
         * @param state 
         * @param action 
         */
        spendResourceJoker: (state, action: PayloadAction<number>) => {
            const resourceJokerId = action.payload
            validateResourceJokerId(resourceJokerId)
            state.isSpent[resourceJokerId] = true
        }
    }
})

export default resourceJokerSlice.reducer;

// Action 

export const { resetResourceJokers, spendResourceJoker } = resourceJokerSlice.actions;

// Selectors

export const selectIsResourceJokerSpent = (state: RootState, resourceJokerId: number) => {
    validateResourceJokerId(resourceJokerId)
    return state.session.resourceJoker.isSpent[resourceJokerId];
}

// Helper functions

function validateResourceJokerId(resourceJokerId: number) {
    if (resourceJokerId < 0 || resourceJokerId > 5) {
        throw new Error(`Resource joker with id=${resourceJokerId} not found`)
    }
}