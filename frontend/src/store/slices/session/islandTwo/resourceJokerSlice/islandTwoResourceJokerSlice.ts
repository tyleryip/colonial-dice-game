import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"
import { ResourceJokerState } from "../../shared/resourceJokerSlice"

const initialState: ResourceJokerState = {
    activeResourceJoker: null
}

export const islandTwoResourceJokerSlice = createSlice({
    name: 'islandTwoResourceJoker',
    initialState: initialState,
    reducers: {
        /**
         * When the user clicks on a resource joker to use it
         * @param state 
         * @param action 
         */
        islandTwoSetActiveResourceJoker: (state, action: PayloadAction<number>) => {
            const resourceJokerId = action.payload
            validateResourceJokerId(resourceJokerId)
            state.activeResourceJoker = action.payload
        },
        /**
         * When the user cancels or spends the resource joker
         * @param state 
         */
        islandTwoResetActiveResourceJoker: (state) => {
            state.activeResourceJoker = null
        }
    }
})

export default islandTwoResourceJokerSlice.reducer;

// Action 

export const {
    islandTwoSetActiveResourceJoker,
    islandTwoResetActiveResourceJoker
} = islandTwoResourceJokerSlice.actions;

// Selectors

export const selectIslandTwoActiveResourceJoker = (state: RootState) => {
    return state.session.islandTwo.resourceJoker.activeResourceJoker;
}

// Helper functions

function validateResourceJokerId(resourceJokerId: number) {
    if (resourceJokerId < 0 || resourceJokerId > 7) {
        throw new Error(`Resource joker with id=${resourceJokerId} not found`)
    }
}