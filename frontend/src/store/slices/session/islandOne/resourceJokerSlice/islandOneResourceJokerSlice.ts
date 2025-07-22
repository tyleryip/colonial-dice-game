import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"

export interface IslandOneResourceJokerState {
    isSpent: boolean[]
}

const initialState: IslandOneResourceJokerState = {
    isSpent: new Array<boolean>(6).fill(false)
}

export const islandOneResourceJokerSlice = createSlice({
    name: 'islandOneResourceJoker',
    initialState: initialState,
    reducers: {
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
        */
        islandOneResetResourceJokers: (state) => {
            state.isSpent = initialState.isSpent
        },
        /**
         * When the user spends a resource joker
         * @param state 
         * @param action 
         */
        islandOneSpendResourceJoker: (state, action: PayloadAction<number>) => {
            const resourceJokerId = action.payload
            validateResourceJokerId(resourceJokerId)
            state.isSpent[resourceJokerId] = true
        }
    }
})

export default islandOneResourceJokerSlice.reducer;

// Action 

export const {
    islandOneResetResourceJokers,
    islandOneSpendResourceJoker
} = islandOneResourceJokerSlice.actions;

// Selectors

export const selectIslandOneIsResourceJokerSpent = (state: RootState, resourceJokerId: number) => {
    validateResourceJokerId(resourceJokerId)
    return state.session.islandOne.resourceJoker.isSpent[resourceJokerId];
}

// Helper functions

function validateResourceJokerId(resourceJokerId: number) {
    if (resourceJokerId < 0 || resourceJokerId > 5) {
        throw new Error(`Resource joker with id=${resourceJokerId} not found`)
    }
}