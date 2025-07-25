import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"
import { KnightState } from "../../shared/knightSlice"

const initialState: KnightState = {
    isBuilt: new Array<boolean>(9).fill(false),
    isSpent: new Array<boolean>(9).fill(false)
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
            state.isSpent = initialState.isSpent
        },
        /**
         * When a user spends the resource joker associated with this knight
         * @param state 
         * @param action 
         */
        islandTwoSpendKnight: (state, action: PayloadAction<number[]>) => {
            const knightIds = action.payload
            knightIds.forEach(knightId => validateKnightId(knightId))
            const firstUnspentBuiltIndex = findFirstUnspentBuiltKnight(state, knightIds)
            state.isSpent[firstUnspentBuiltIndex] = true
        }
    }
})

export default islandTwoKnightSlice.reducer

// Actions

export const {
    islandTwoBuildKnight,
    islandTwoResetKnights,
    islandTwoSpendKnight
} = islandTwoKnightSlice.actions;

// Selectors

export const selectIslandTwoIsKnightBuilt = (state: RootState, knightId: number) => {
    validateKnightId(knightId)
    return state.session.islandTwo.knight.isBuilt[knightId]
}

export const selectIslandTwoIsKnightSpent = (state: RootState, knightId: number) => {
    validateKnightId(knightId)
    return state.session.islandTwo.knight.isSpent[knightId]
}

/**
 * Given a list of knightIds, return the number of built knights
 * @param state 
 * @param knightIds 
 * @returns 
 */
export const selectIslandTwoKnightsBuiltCount = (state: RootState, knightIds: number[]) => {
    knightIds.forEach(knightId => validateKnightId(knightId))
    return knightIds.map(knightId => state.session.islandTwo.knight.isBuilt[knightId]).filter(isBuilt => isBuilt).length
}

/**
 * Given a list of knightIds, return the number of spent knights
 * @param state 
 * @param knightIds 
 * @returns 
 */
export const selectIslandTwoKnightsSpentCount = (state: RootState, knightIds: number[]) => {
    knightIds.forEach(knightId => validateKnightId(knightId))
    return knightIds.map(knightId => state.session.islandTwo.knight.isSpent[knightId]).filter(isSpent => isSpent).length
}

// Helper functions

function findFirstUnspentBuiltKnight(state: KnightState, knightIds: number[]): number {
    for (const knightId of knightIds) {
        if (state.isBuilt[knightId] && !state.isSpent[knightId]) {
            return knightId
        }
    }

    throw new Error("No unspent built knights found")
}

function validateKnightId(knightId: number) {
    if (knightId < 0 || knightId > 8) {
        throw new Error(`Knight with id=${knightId} not found`)
    }
}