import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { GetKnightPrerequisite } from "../../../constants/knights"

export interface KnightState {
    isBuilt: boolean[]
}

const initialState: KnightState = {
    isBuilt: new Array<boolean>(6).fill(false)
}

export const knightSlice = createSlice({
    name: 'knight',
    initialState: initialState,
    reducers: {
        /**
         * When the user builds a knight
         * @param state 
         * @param action 
         */
        buildKnight: (state, action: PayloadAction<number>) => {
            const knightId = action.payload
            validateKnightId(knightId)
            state.isBuilt[knightId] = true
        },
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
         */
        resetKnights: (state) => {
            state.isBuilt = initialState.isBuilt
        }
    }
})

export default knightSlice.reducer

// Actions

export const { buildKnight, resetKnights } = knightSlice.actions;

// Selectors

export const selectIsKnightBuilt = (state: RootState, knightId: number) => {
    validateKnightId(knightId)
    return state.session.knight.isBuilt[knightId]
}

export const selectIsKnightPrerequisiteBuilt = (state: RootState, knightId: number) => {
    validateKnightId(knightId)
    const knightPrerequisiteId = GetKnightPrerequisite(knightId)
    return knightPrerequisiteId == null
        ? true
        : state.session.knight.isBuilt[knightPrerequisiteId];
}

// Helper functions

function validateKnightId(knightId: number) {
    if (knightId < 0 || knightId > 5) {
        throw new Error(`Knight with id=${knightId} not found`)
    }
}