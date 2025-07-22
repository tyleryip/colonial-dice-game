import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"
import { ResourceJokerState } from "../../shared/resourceJokerSlice"

const initialState: ResourceJokerState = {
    activeResourceJoker: null
}

export const islandOneResourceJokerSlice = createSlice({
    name: 'islandOneResourceJoker',
    initialState: initialState,
    reducers: {
        /**
         * When the user clicks on a resource joker to use it
         * @param state 
         * @param action 
         */
        islandOneSetActiveResourceJoker: (state, action: PayloadAction<number>) => {
            const resourceJokerId = action.payload
            validateResourceJokerId(resourceJokerId)
            state.activeResourceJoker = action.payload
        },
        /**
         * When the user cancels or spends the resource joker
         * @param state 
         */
        islandOneResetActiveResourceJoker: (state) => {
            state.activeResourceJoker = null
        }
    }
})

export default islandOneResourceJokerSlice.reducer;

// Action 

export const {
    islandOneResetActiveResourceJoker,
    islandOneSetActiveResourceJoker
} = islandOneResourceJokerSlice.actions;

// Selectors

export const selectIslandOneActiveResourceJoker = (state: RootState) => {
    return state.session.islandOne.resourceJoker.activeResourceJoker;
}

// Helper functions

function validateResourceJokerId(resourceJokerId: number) {
    if (resourceJokerId < 0 || resourceJokerId > 5) {
        throw new Error(`Resource joker with id=${resourceJokerId} not found`)
    }
}