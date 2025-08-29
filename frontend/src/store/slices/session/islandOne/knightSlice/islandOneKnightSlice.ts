import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"
import { GetislandOneKnightPrerequisite } from "../../../../../constants/knights"
import { KnightState } from "../../shared/knightSlice"

const initialState: KnightState = {
    isBuilt: new Array<boolean>(6).fill(false),
    isSpent: new Array<boolean>(6).fill(false)
}

export const islandOneKnightSlice = createSlice({
    name: 'islandOneKnight',
    initialState: initialState,
    reducers: {
        /**
         * When the user builds a knight
         * @param state 
         * @param action 
         */
        islandOneBuildKnight: (state, action: PayloadAction<number>) => {
            const knightId = action.payload
            validateKnightId(knightId)
            state.isBuilt[knightId] = true
        },
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
         */
        islandOneResetKnights: (state) => {
            state.isBuilt = initialState.isBuilt
            state.isSpent = initialState.isSpent
        },
        /**
         * When a user spends the resource joker associated with this knight
         * @param state 
         * @param action 
         */
        islandOneSpendKnight: (state, action: PayloadAction<number>) => {
            const knightId = action.payload
            validateKnightId(knightId)
            state.isSpent[knightId] = true
        }
    }
})

export default islandOneKnightSlice.reducer

// Actions

export const {
    islandOneBuildKnight,
    islandOneResetKnights,
    islandOneSpendKnight
} = islandOneKnightSlice.actions;

// Selectors

export const selectIslandOneIsKnightBuilt = (state: RootState, knightId: number) => {
    validateKnightId(knightId)
    return state.session.islandOne.knight.isBuilt[knightId]
}

export const selectIslandOneIsKnightSpent = (state: RootState, knightId: number) => {
    validateKnightId(knightId)
    return state.session.islandOne.knight.isSpent[knightId]
}

export const selectIslandOneIsKnightPrerequisiteBuilt = (state: RootState, knightId: number) => {
    validateKnightId(knightId)
    const knightPrerequisiteId = GetislandOneKnightPrerequisite(knightId)
    return knightPrerequisiteId == null
        ? true
        : state.session.islandOne.knight.isBuilt[knightPrerequisiteId];
}

// Helper functions

function validateKnightId(knightId: number) {
    if (knightId < 0 || knightId > 5) {
        throw new Error(`Knight with id=${knightId} not found`)
    }
}