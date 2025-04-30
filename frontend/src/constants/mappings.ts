import { KnightType, ResourceJokerType, ResourceType, RoadType } from "./enumerations"

/**
 * Maps a settlement number to its structure id
 */
const settlementMappings: Readonly<Record<number, number>> = {
    3: 1,
    4: 6,
    5: 11,
    7: 14,
    9: 23,
    11: 26
}

/**
 * Given a settlement number, return its structure id
 * @param settlementNumber 
 * @returns structureId
 */
export function GetSettlementStructureId(settlementNumber: number): number {
    let structureId = 0
    structureId = settlementMappings[settlementNumber]

    if (structureId === 0) {
        throw Error("Settlement number not found")
    }

    return structureId
}

/**
 * Maps a city number to its structure id
 */
const cityMappings: Readonly<Record<number, number>> = {
    7: 4,
    12: 9,
    20: 17,
    30: 20
}

/**
 * Given a city number, return its structure id
 * @param settlementNumber 
 * @returns structureId
 */
export function GetCityStructureId(settlementNumber: number): number {
    let structureId = 0
    structureId = cityMappings[settlementNumber]

    if (structureId === 0) {
        throw Error("City number not found")
    }

    return structureId
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

const resourceMappings: Readonly<Record<number, ResourceType>> = {
    1: ResourceType.Ore,
    2: ResourceType.Wheat,
    3: ResourceType.Wool,
    4: ResourceType.Wood,
    5: ResourceType.Brick,
    6: ResourceType.Gold,
}

/**
 * Given a resourceId, return its ResourceType
 * @param resourceId
 * @returns ResourceType
 */
export function GetResourceType(resourceId: number): ResourceType {
    let resourceType = undefined
    resourceType = resourceMappings[resourceId]

    if (resourceType === undefined) {
        throw Error(`Resource with resourceId=${resourceId} not found`)
    }

    return resourceType
}