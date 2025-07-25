import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"
import { GetIslandOneStructurePrerequisites } from "../../../../../constants/structures"
import { StructureState } from "../../shared/structureSlice"

const initialState: StructureState = {
    isBuilt: getInitialState()
}

export const islandOneStructureSlice = createSlice({
    name: 'islandOneStructure',
    initialState: initialState,
    reducers: {
        /**
         * When the user builds a structure
         * @param state 
         * @param action 
         */
        islandOneBuildStructure: (state, action: PayloadAction<number>) => {
            const structureId = action.payload
            validateStructureId(structureId)
            state.isBuilt[structureId] = true
        },
        /**
         * When the game is reset so the board is restored to initial state
         * @param state 
         */
        islandOneResetStructures: (state) => {
            state.isBuilt = initialState.isBuilt
        }
    }
})

export default islandOneStructureSlice.reducer;

// Actions

export const {
    islandOneResetStructures,
    islandOneBuildStructure
} = islandOneStructureSlice.actions;

// Selectors

export const selectIslandOneIsStructureBuilt = (state: RootState, structureId: number) => {
    validateStructureId(structureId)
    return state.session.islandOne.structure.isBuilt[structureId]
}
export const selectIslandOneHasPrerequisiteStructuresBuilt = (state: RootState, structureId: number) => {
    validateStructureId(structureId)
    const structurePrerequisites = GetIslandOneStructurePrerequisites(structureId)
    return structurePrerequisites
        .map((structureId: number) => state.session.islandOne.structure.isBuilt[structureId])
        .every((isBuilt: boolean) => isBuilt)
}

// Helper functions

function getInitialState(): boolean[] {
    const isBuilt = new Array<boolean>(27).fill(false);
    isBuilt[0] = true; // Starting road is always already built

    return isBuilt
}

function validateStructureId(structureId: number) {
    if (structureId < 0 || structureId > 26) {
        throw new Error(`Structure with id=${structureId} not found`)
    }
}