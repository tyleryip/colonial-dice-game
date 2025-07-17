import { KnightType, ResourceJokerType, RoadType } from "./enumerations"

// ISLAND 1

/**
 * Maps a structureId to its settlement number
 */
const islandOneSettlementMappings: Readonly<Record<number, number>> = {
    1: 3,
    6: 4,
    11: 5,
    14: 7,
    23: 9,
    26: 11
}

/**
 * Given a structureId, return its settlement number
 * @param structureId 
 * @returns settlement number
 */
export function GetIslandOneSettlementNumber(structureId: number): number {
    let settlementNumber = 0
    settlementNumber = islandOneSettlementMappings[structureId]

    if (settlementNumber === 0) {
        throw Error("Settlement number not found")
    }

    return settlementNumber
}

/**
 * Maps a structureId with its city number
 */
const islandOneCityMappings: Readonly<Record<number, number>> = {
    4: 7,
    9: 12,
    17: 20,
    20: 30
}

/**
 * Given a structureId, return its city number
 * @param structureId 
 * @returns city number
 */
export function GetIslandOneCityNumber(structureId: number): number {
    let cityNumber = 0
    cityNumber = islandOneCityMappings[structureId]

    if (cityNumber === 0) {
        throw Error("City number not found")
    }

    return cityNumber
}

/**
 * Maps a road's structure id to the its RoadType
 */
const islandOneRoadMappings: Readonly<Record<number, RoadType>> = {
    0: RoadType.Starting,
    2: RoadType.Forwardslash,
    3: RoadType.Horizontal,
    5: RoadType.Backslash,
    7: RoadType.Forwardslash,
    8: RoadType.Horizontal,
    10: RoadType.Backslash,
    12: RoadType.Horizontal,
    13: RoadType.Forwardslash,
    15: RoadType.Horizontal,
    16: RoadType.Forwardslash,
    18: RoadType.Backslash,
    19: RoadType.Forwardslash,
    21: RoadType.Backslash,
    22: RoadType.Forwardslash,
    24: RoadType.Backslash,
    25: RoadType.Forwardslash
}

/**
 * Given a road's structure id, return its RoadType
 * @param structureId 
 * @returns RoadType
 */
export function GetIslandOneRoadType(structureId: number): RoadType {
    let roadType = undefined
    roadType = islandOneRoadMappings[structureId]

    if (roadType === undefined) {
        throw Error(`Road with structureId=${structureId} not found`)
    }

    return roadType
}

const islandOneResourceJokerMappings: Readonly<Record<number, ResourceJokerType>> = {
    0: ResourceJokerType.Ore,
    1: ResourceJokerType.Wheat,
    2: ResourceJokerType.Wool,
    3: ResourceJokerType.Wood,
    4: ResourceJokerType.Brick,
    5: ResourceJokerType.Wildcard
}

/**
 * Given a resource joker id, return its ResourceJokerType
 * @param type 
 * @returns resource joker id
 */
export function GetIslandOneResourceJokerType(resourceJokerId: number): ResourceJokerType {
    if (resourceJokerId < 0 || resourceJokerId > 5) {
        throw Error(`Resource joker with id=${resourceJokerId} not found`)
    }

    return islandOneResourceJokerMappings[resourceJokerId]
}

const islandOneKnightMappings: Readonly<Record<number, KnightType>> = {
    0: KnightType.Ore,
    1: KnightType.Wheat,
    2: KnightType.Wool,
    3: KnightType.Wood,
    4: KnightType.Brick,
    5: KnightType.Wildcard
}

/**
 * Given a knight id, return its KnightType
 * @param type 
 * @returns knight id
 */
export function GetIslandOneKnightType(knightId: number): KnightType {
    if (knightId < 0 || knightId > 5) {
        throw Error(`Knight with id=${knightId} not found`)
    }

    return islandOneKnightMappings[knightId]
}

// ISLAND 2

/**
 * Maps a road's structure id to the its RoadType
 */
const islandTwoRoadMappings: Readonly<Record<number, RoadType>> = {
    0: RoadType.Starting,
    2: RoadType.Forwardslash,
    3: RoadType.Horizontal,
    5: RoadType.Backslash,
    7: RoadType.Forwardslash,
    8: RoadType.Horizontal,
    10: RoadType.Backslash,
    12: RoadType.Horizontal,
    13: RoadType.Forwardslash,
    15: RoadType.Horizontal,
    16: RoadType.Forwardslash,
    18: RoadType.Backslash,
    19: RoadType.Horizontal,
    21: RoadType.Forwardslash,
    23: RoadType.Backslash,
    24: RoadType.Horizontal,
    26: RoadType.Backslash,
    27: RoadType.Horizontal
}

/**
 * Given a road's structure id, return its RoadType
 * @param structureId 
 * @returns RoadType
 */
export function GetIslandTwoRoadType(structureId: number): RoadType {
    let roadType = undefined
    roadType = islandTwoRoadMappings[structureId]

    if (roadType === undefined) {
        throw Error(`Road with structureId=${structureId} not found`)
    }

    return roadType
}

const islandTwoResourceJokerMappings: Readonly<Record<number, ResourceJokerType>> = {
    0: ResourceJokerType.Ore,
    1: ResourceJokerType.Wheat,
    2: ResourceJokerType.Wool,
    3: ResourceJokerType.Wood,
    4: ResourceJokerType.Brick,
    5: ResourceJokerType.Wildcard,
    6: ResourceJokerType.Wildcard,
    7: ResourceJokerType.Wildcard,
    8: ResourceJokerType.Wildcard
}

/**
 * Given a resource joker id, return its ResourceJokerType
 * @param type 
 * @returns resource joker id
 */
export function GetIslandTwoResourceJokerType(resourceJokerId: number): ResourceJokerType {
    if (resourceJokerId < 0 || resourceJokerId > 8) {
        throw Error(`Resource joker with id=${resourceJokerId} not found`)
    }

    return islandTwoResourceJokerMappings[resourceJokerId]
}

const islandTwoKnightMappings: Readonly<Record<number, KnightType>> = {
    0: KnightType.Ore,
    1: KnightType.Wheat,
    2: KnightType.Wool,
    3: KnightType.Wood,
    4: KnightType.Brick,
    5: KnightType.Wildcard,
    6: KnightType.Wildcard,
    7: KnightType.Wildcard,
    8: KnightType.Wildcard
}

/**
 * Given a knight id, return its KnightType
 * @param type 
 * @returns knight id
 */
export function GetIslandTwoKnightType(knightId: number): KnightType {
    if (knightId < 0 || knightId > 8) {
        throw Error(`Knight with id=${knightId} not found`)
    }

    return islandTwoKnightMappings[knightId]
}