import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface resourceJokerState {
    isBuilt: boolean[],
    isSpent: boolean[]
}

const initialState: resourceJokerState = {
    isBuilt: new Array(6).fill(false),
    isSpent: new Array(6).fill(false)
}

export const resourceJokerSlice = createSlice({
    name: 'resourceJoker',
    initialState: initialState,
    reducers: {
        /**
         * When the user builds a resource joker
         * @param state 
         * @param action 
         */
        buildResourceJoker: (state, action: PayloadAction<number>) => {
            const resourceJokerId = action.payload
            validateResourceJokerId(resourceJokerId)
            state.isBuilt[resourceJokerId] = true
        },
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
        */
        resetResourceJokers: (state) => {
            state.isBuilt = initialState.isBuilt
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

export const { buildResourceJoker, resetResourceJokers, spendResourceJoker } = resourceJokerSlice.actions;

// Selectors

export const selectIsResourceJokerBuilt = (state: RootState) => state.resourceJoker.isBuilt;
export const selectIsResourceJokerSpent = (state: RootState) => state.resourceJoker.isSpent;

// Helper functions

function validateResourceJokerId(resourceJokerId: number) {
    if (resourceJokerId < 0 || resourceJokerId > 5) {
        throw new Error(`Resource joker with id=${resourceJokerId} not found`)
    }
}