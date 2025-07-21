import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"
import { GetKnightPrerequisite } from "../../../../../constants/knights"
import { KnightState } from "../../shared/knightSlice"

const initialState: KnightState = {
    isBuilt: new Array<boolean>(9).fill(false)
}

export const islandTwoKnightSlice = createSlice({
    name: 'islandTwoKnight',
    initialState: initialState,
    reducers: {
        /**
         * When the user builds a knight
         * @param state 
         * @param action 
         */
        islandTwoBuildKnight: (state, action: PayloadAction<number>) => {
            const knightId = action.payload
            validateKnightId(knightId)
            state.isBuilt[knightId] = true
        },
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
         */
        islandTwoResetKnights: (state) => {
            state.isBuilt = initialState.isBuilt
        }
    }
})

export default islandTwoKnightSlice.reducer

// Actions

export const {
    islandTwoBuildKnight,
    islandTwoResetKnights
} = islandTwoKnightSlice.actions;

// Selectors

export const selectIslandTwoIsKnightBuilt = (state: RootState, knightId: number) => {
    validateKnightId(knightId)
    return state.session.islandTwo.knight.isBuilt[knightId]
}

export const selectIslandTwoIsKnightPrerequisiteBuilt = (state: RootState, knightId: number) => {
    validateKnightId(knightId)
    const knightPrerequisiteId = GetKnightPrerequisite(knightId)
    return knightPrerequisiteId == null
        ? true
        : state.session.islandTwo.knight.isBuilt[knightPrerequisiteId];
}

// Helper functions

function validateKnightId(knightId: number) {
    if (knightId < 0 || knightId > 8) {
        throw new Error(`Knight with id=${knightId} not found`)
    }
}