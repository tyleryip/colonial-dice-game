import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface structureState {
    isBuilt: boolean[]
}

const initialState: structureState = {
    isBuilt: new Array(27).fill(false)
}

export const structureSlice = createSlice({
    name: 'structure',
    initialState: initialState,
    reducers: {
        /**
         * When the user builds a structure
         * @param state 
         * @param action 
         */
        buildStructure: (state, action: PayloadAction<number>) => {
            const structureId = action.payload
            validateStructureId(structureId)
            state.isBuilt[structureId] = true
        },
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
         */
        resetStructures: (state) => {
            state.isBuilt = initialState.isBuilt
        }
    }
})

export default structureSlice.reducer;

// Actions

export const { resetStructures, buildStructure } = structureSlice.actions;

// Selectors

export const selectIsStructureBuilt = (state: RootState) => state.structure.isBuilt

// Helper functions

function validateStructureId(structureId: number) {
    if (structureId < 1 || structureId > 6) {
        throw new Error(`Structure with id=${structureId} not found`)
    }
}