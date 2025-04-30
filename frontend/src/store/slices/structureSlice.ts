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
        // When the user builds a structure
        buildStructure: (state, action: PayloadAction<number>) => {
            state.isBuilt[action.payload] = true
        },
        // When the game is reset so the board is restored to initial state
        resetStructures: (state) => {
            state.isBuilt = initialState.isBuilt
        }
    }
})

export default structureSlice.reducer;

// Actions

export const { resetStructures, buildStructure } = structureSlice.actions;

// Selectors

export const selectIsBuilt = (state: RootState) => state.structure.isBuilt