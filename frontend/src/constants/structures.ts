import { Resources } from "../types/Resources"
import { ResourceType, StructureType } from "./enumerations"

/**
 * Maps a structure id to a list of its prerequisite structure ids
 * Ex. Settlement with an id of A requires Road with an id of B and Settlement with an id of B --> [A] : [B, C]
 */
const prerequisites: Readonly<Record<number, number[]>> = {
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
export function GetStructurePrerequisites(structureId: number): number[] {
    if (structureId < 0 || structureId > 26) {
        throw new Error(`Structure with structureId=${structureId} not found`)
    }

    return prerequisites[structureId]
}

/**
 * Maps a structure id to its point value
 * Ex. Settlement with an id of A has a point value of 7 --> [A]: 7
 */
const points: Readonly<Record<number, number>> = {
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
export function GetStructurePoints(structureId: number): number {
    if (structureId < 0 || structureId > 26) {
        throw new Error(`Structure with structureId=${structureId} not found`)
    }

    return points[structureId]
}

/**
 * Maps a structure id to its StructureType
 */
const structureTypes: Readonly<Record<number, StructureType>> = {
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
export function GetStructureType(structureId: number): StructureType {
    if (structureId < 0 || structureId > 26) {
        throw new Error(`Structure with structureId=${structureId} not found`)
    }

    return structureTypes[structureId]
}

/**
 * Maps a StructureType to Resources
 */
const cost: { -readonly [key in StructureType]: Resources } = {
    [StructureType.Road]: {
        [ResourceType.Ore]: 0,
        [ResourceType.Wheat]: 0,
        [ResourceType.Wool]: 0,
        [ResourceType.Wood]: 1,
        [ResourceType.Brick]: 1,
        [ResourceType.Gold]: 0
    },
    [StructureType.Settlement]: {
        [ResourceType.Ore]: 0,
        [ResourceType.Wheat]: 1,
        [ResourceType.Wool]: 1,
        [ResourceType.Wood]: 1,
        [ResourceType.Brick]: 1,
        [ResourceType.Gold]: 0

    },
    [StructureType.City]: {
        [ResourceType.Ore]: 3,
        [ResourceType.Wheat]: 2,
        [ResourceType.Wool]: 0,
        [ResourceType.Wood]: 0,
        [ResourceType.Brick]: 0,
        [ResourceType.Gold]: 0
    },
}

/**
 * Given a structureId, return the cost in Resources
 * @param structureId 
 * @returns the cost of the structure in Resources
 */
export function GetStructureCost(type: StructureType): Resources {
    return cost[type];
}