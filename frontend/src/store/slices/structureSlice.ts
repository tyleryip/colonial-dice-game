import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StructureType } from "../../constants/enumerations"
import { Structure } from "../../types/Structure"
import { RootState } from "../store"

interface structureState {
    structures: Structure[]
}

const initialState: structureState = {
    structures: [
        {
            id: 0,
            type: StructureType.Road,
            points: 0,
            built: true
        },
        {
            id: 1,
            type: StructureType.Settlement,
            points: 3,
            built: false
        },
        {
            id: 2,
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 3,
            prerequisites: [2],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 4,
            prerequisites: [3],
            type: StructureType.City,
            points: 7,
            built: false
        },
        {
            id: 5,
            prerequisites: [2],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 6,
            prerequisites: [1, 5],
            type: StructureType.Settlement,
            points: 4,
            built: false
        },
        {
            id: 7,
            prerequisites: [5],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 8,
            prerequisites: [7],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 9,
            prerequisites: [4, 8],
            type: StructureType.City,
            points: 12,
            built: false
        },
        {
            id: 10,
            prerequisites: [7],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 11,
            prerequisites: [6, 7],
            type: StructureType.Settlement,
            points: 5,
            built: false
        },
        {
            id: 12,
            prerequisites: [10],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 13,
            prerequisites: [12],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 14,
            prerequisites: [11, 13],
            type: StructureType.Settlement,
            points: 7,
            built: false
        },
        {
            id: 15,
            prerequisites: [13],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 16,
            prerequisites: [15],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 17,
            prerequisites: [9, 16],
            type: StructureType.City,
            points: 20,
            built: false
        },
        {
            id: 18,
            prerequisites: [16],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 19,
            prerequisites: [18],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 20,
            prerequisites: [17, 19],
            type: StructureType.City,
            points: 30,
            built: false
        },
        {
            id: 21,
            prerequisites: [13],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 22,
            prerequisites: [21],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 23,
            prerequisites: [14, 21],
            type: StructureType.Settlement,
            points: 9,
            built: false
        },
        {
            id: 24,
            prerequisites: [22],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 25,
            prerequisites: [24],
            type: StructureType.Road,
            points: 1,
            built: false
        },
        {
            id: 26,
            prerequisites: [23, 24],
            type: StructureType.Settlement,
            points: 11,
            built: false
        }
    ]
}

export const structureSlice = createSlice({
    name: 'structure',
    initialState: initialState,
    reducers: {
        // When the user builds a structure
        buildStructure: (state, action: PayloadAction<number>) => {
            state.structures[action.payload].built = true
        },
        // When the game is reset so the board is restored to initial state
        resetStructures: (state) => {
            state.structures = initialState.structures
        }
    }
})

export default structureSlice.reducer;

// Actions

export const { resetStructures, buildStructure } = structureSlice.actions;

// Selectors

export const selectStructures = (state: RootState) => state.structure.structures