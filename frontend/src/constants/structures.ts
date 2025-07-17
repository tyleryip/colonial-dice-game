import { StructureType } from "./enumerations"
import { ResourceType } from "./resources"

// ISLAND 1

/**
 * Maps a structure id to a list of its prerequisite structure ids
 * Ex. Settlement with an id of A requires Road with an id of B and Settlement with an id of B --> [A] : [B, C]
 */
const islandOnePrerequisites: Readonly<Record<number, number[]>> = {
    0: [],
    1: [],
    2: [],
    3: [2],
    4: [3],
    5: [2],
    6: [1, 5],
    7: [5],
    8: [7],
    9: [4, 8],
    10: [7],
    11: [6, 7],
    12: [10],
    13: [12],
    14: [11, 13],
    15: [13],
    16: [15],
    17: [9, 16],
    18: [16],
    19: [18],
    20: [17, 19],
    21: [13],
    22: [21],
    23: [14, 21],
    24: [22],
    25: [24],
    26: [23, 24]
}


/**
 * Given a structureId, return the structureIds of its prerequisite structures
 * @param structureId 
 * @returns the structureIds of any prerequisite structures
 */
export function GetIslandOneStructurePrerequisites(structureId: number): number[] {
    if (structureId < 0 || structureId > 26) {
        throw new Error(`Structure with structureId=${structureId} not found`)
    }

    return islandOnePrerequisites[structureId]
}

/**
 * Maps a structure id to its point value
 * Ex. Settlement with an id of A has a point value of 7 --> [A]: 7
 */
const islandOnePoints: Readonly<Record<number, number>> = {
    0: 0,
    1: 3,
    2: 1,
    3: 1,
    4: 7,
    5: 1,
    6: 4,
    7: 1,
    8: 1,
    9: 12,
    10: 1,
    11: 5,
    12: 1,
    13: 1,
    14: 7,
    15: 1,
    16: 1,
    17: 20,
    18: 1,
    19: 1,
    20: 30,
    21: 1,
    22: 1,
    23: 9,
    24: 1,
    25: 1,
    26: 11
}

/**
 * Given a structureId, return its point value
 * @param structureId 
 * @returns the number of points for building the structure
 */
export function GetIslandOneStructurePoints(structureId: number): number {
    if (structureId < 0 || structureId > 26) {
        throw new Error(`Structure with structureId=${structureId} not found`)
    }

    return islandOnePoints[structureId]
}

/**
 * Maps a structure id to its StructureType
 */
const islandOneStructureTypes: Readonly<Record<number, StructureType>> = {
    0: StructureType.Road,
    1: StructureType.Settlement,
    2: StructureType.Road,
    3: StructureType.Road,
    4: StructureType.City,
    5: StructureType.Road,
    6: StructureType.Settlement,
    7: StructureType.Road,
    8: StructureType.Road,
    9: StructureType.City,
    10: StructureType.Road,
    11: StructureType.Settlement,
    12: StructureType.Road,
    13: StructureType.Road,
    14: StructureType.Settlement,
    15: StructureType.Road,
    16: StructureType.Road,
    17: StructureType.City,
    18: StructureType.Road,
    19: StructureType.Road,
    20: StructureType.City,
    21: StructureType.Road,
    22: StructureType.Road,
    23: StructureType.Settlement,
    24: StructureType.Road,
    25: StructureType.Road,
    26: StructureType.Settlement
}

/**
 * Given a structureId, return its StructureType
 * @param structureId 
 * @returns the StructureType
 */
export function GetIslandOneStructureType(structureId: number): StructureType {
    if (structureId < 0 || structureId > 26) {
        throw new Error(`Structure with structureId=${structureId} not found`)
    }

    return islandOneStructureTypes[structureId]
}

// ISLAND 2

/**
 * Maps a structure id to a list of its prerequisite structure ids
 * Ex. Settlement with an id of A requires Road with an id of B and Settlement with an id of B --> [A] : [B, C]
 */
const islandTwoPrerequisites: Readonly<Record<number, number[]>> = {
    0: [],
    1: [],
    2: [],
    3: [2],
    4: [3],
    5: [2],
    6: [5],
    7: [5],
    8: [7],
    9: [8],
    10: [7],
    11: [10],
    12: [10],
    13: [12],
    14: [13],
    15: [13],
    16: [15],
    17: [16],
    18: [16],
    19: [18],
    20: [19],
    21: [18],
    22: [21],
    23: [21],
    24: [23],
    25: [24],
    26: [25],
    27: [26],
    28: [27]
}


/**
 * Given a structureId, return the structureIds of its prerequisite structures
 * @param structureId 
 * @returns the structureIds of any prerequisite structures
 */
export function GetIslandTwoStructurePrerequisites(structureId: number): number[] {
    if (structureId < 0 || structureId > 28) {
        throw new Error(`Structure with structureId=${structureId} not found`)
    }

    return islandTwoPrerequisites[structureId]
}

/**
 * Given a structureId, return its point value
 * @param structureId 
 * @returns the number of points for building the structure
 */
export function GetIslandTwoStructurePoints(structureId: number): number {
    if (structureId < 0 || structureId > 28) {
        throw new Error(`Structure with structureId=${structureId} not found`)
    }

    switch (GetIslandTwoStructureType(structureId)) {
        case StructureType.Road:
            return 0
        case StructureType.Settlement:
            return 1
        case StructureType.City:
            return 2
        default:
            return 0
    }
}

/**
 * Maps a structure id to its StructureType
 */
const islandTwoStructureTypes: Readonly<Record<number, StructureType>> = {
    0: StructureType.Road,
    1: StructureType.Settlement,
    2: StructureType.Road,
    3: StructureType.Road,
    4: StructureType.City,
    5: StructureType.Road,
    6: StructureType.Settlement,
    7: StructureType.Road,
    8: StructureType.Road,
    9: StructureType.City,
    10: StructureType.Road,
    11: StructureType.Settlement,
    12: StructureType.Road,
    13: StructureType.Road,
    14: StructureType.City,
    15: StructureType.Road,
    16: StructureType.Road,
    17: StructureType.Settlement,
    18: StructureType.Road,
    19: StructureType.Road,
    20: StructureType.City,
    21: StructureType.Road,
    22: StructureType.Settlement,
    23: StructureType.Road,
    24: StructureType.Road,
    25: StructureType.Settlement,
    26: StructureType.Road,
    27: StructureType.Road,
    28: StructureType.Settlement
}

/**
 * Given a structureId, return its StructureType
 * @param structureId 
 * @returns the StructureType
 */
export function GetIslandTwoStructureType(structureId: number): StructureType {
    if (structureId < 0 || structureId > 28) {
        throw new Error(`Structure with structureId=${structureId} not found`)
    }

    return islandTwoStructureTypes[structureId]
}

// COMMON

export const roadCost = [ResourceType.WOOD, ResourceType.BRICK]
export const settlementCost = [ResourceType.WHEAT, ResourceType.WOOL, ResourceType.WOOD, ResourceType.BRICK]
export const cityCost = [ResourceType.ORE, ResourceType.ORE, ResourceType.ORE, ResourceType.WHEAT, ResourceType.WHEAT]
