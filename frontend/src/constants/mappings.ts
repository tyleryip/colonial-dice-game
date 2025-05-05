import { KnightType, ResourceJokerType, RoadType } from "./enumerations"

/**
 * Maps a structureId to its settlement number
 */
const settlementMappings: Readonly<Record<number, number>> = {
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
export function GetSettlementNumber(structureId: number): number {
    let settlementNumber = 0
    settlementNumber = settlementMappings[structureId]

    if (settlementNumber === 0) {
        throw Error("Settlement number not found")
    }

    return settlementNumber
}

/**
 * Maps a strcutureId with its city number
 */
const cityMappings: Readonly<Record<number, number>> = {
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
export function GetCityNumber(structureId: number): number {
    let cityNumber = 0
    cityNumber = cityMappings[structureId]

    if (cityNumber === 0) {
        throw Error("City number not found")
    }

    return cityNumber
}

/**
 * Maps a road's structure id to the its RoadType
 */
const roadMappings: Readonly<Record<number, RoadType>> = {
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
export function GetRoadType(structureId: number): RoadType {
    let roadType = undefined
    roadType = roadMappings[structureId]

    if (roadType === undefined) {
        throw Error(`Road with structureId=${structureId} not found`)
    }

    return roadType
}

const resourceJokerMappings: { -readonly [key in ResourceJokerType]: number } = {
    [ResourceJokerType.Ore]: 0,
    [ResourceJokerType.Wheat]: 1,
    [ResourceJokerType.Wool]: 2,
    [ResourceJokerType.Wood]: 3,
    [ResourceJokerType.Brick]: 4,
    [ResourceJokerType.Wildcard]: 5,
}

/**
 * Given a ResourceJokerType, return its resource joker id
 * @param type 
 * @returns resource joker id
 */
export function GetResourceJokerId(type: ResourceJokerType): number {
    let resourceJokeId = -1
    resourceJokeId = resourceJokerMappings[type]

    if (resourceJokeId == -1) {
        throw Error(`Resource joker with ResourceJokerType=${type} not found`)
    }

    return resourceJokeId
}

const knightMappings: { -readonly [key in KnightType]: number } = {
    [KnightType.Ore]: 0,
    [KnightType.Wheat]: 1,
    [KnightType.Wool]: 2,
    [KnightType.Wood]: 3,
    [KnightType.Brick]: 4,
    [KnightType.Wildcard]: 5,
}

/**
 * Given a KnightType, return its resource joker id
 * @param type 
 * @returns resource joker id
 */
export function GetKnightId(type: KnightType): number {
    let knightId = -1
    knightId = knightMappings[type]

    if (knightId == -1) {
        throw Error(`Knight with KnightType=${type} not found`)
    }

    return knightId
}