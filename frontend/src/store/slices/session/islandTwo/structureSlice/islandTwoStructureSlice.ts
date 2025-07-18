import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"
import { GetIslandTwoStructurePrerequisites } from "../../../../../constants/structures"
import { StructureState } from "../../shared/structureSlice"

const initialState: StructureState = {
    isBuilt: getInitialState()
}

export const islandTwoStructureSlice = createSlice({
    name: 'islandTwoStructure',
    initialState: initialState,
    reducers: {
        /**
         * When the user builds a structure
         * @param state 
         * @param action 
         */
        islandTwoBuildStructure: (state, action: PayloadAction<number>) => {
            const structureId = action.payload
            validateStructureId(structureId)
            state.isBuilt[structureId] = true
        },
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
         */
        islandTwoResetStructures: (state) => {
            state.isBuilt = initialState.isBuilt
        }
    }
})

export default islandTwoStructureSlice.reducer;

// Actions

export const {
    islandTwoResetStructures,
    islandTwoBuildStructure
} = islandTwoStructureSlice.actions;

// Selectors

export const selectIslandTwoIsStructureBuilt = (state: RootState, structureId: number) => {
    validateStructureId(structureId)
    return state.session.islandTwo.structure.isBuilt[structureId]
}
export const selectIslandTwoHasPrerequisiteStructuresBuilt = (state: RootState, structureId: number) => {
    validateStructureId(structureId)
    const structurePrerequisites = GetIslandTwoStructurePrerequisites(structureId)
    return structurePrerequisites
        .map((structureId: number) => state.session.islandTwo.structure.isBuilt[structureId])
        .every((isBuilt: boolean) => isBuilt)
}

// Helper functions

function getInitialState(): boolean[] {
    const isBuilt = new Array<boolean>(28).fill(false);
    isBuilt[0] = true; // Starting road is always already built

    return isBuilt
}

function validateStructureId(structureId: number) {
    if (structureId < 0 || structureId > 28) {
        throw new Error(`Structure with id=${structureId} not found`)
    }
}