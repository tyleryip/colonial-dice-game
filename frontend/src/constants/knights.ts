import { Resources } from "../types/Resources"
import { ResourceType } from "./enumerations"

/**
 * Maps a knight id to a its prerequisite knight ids
 * Ex. Knight with an id of A requires Knight with an id of B --> [A] : B
 */
const prerequisites: Readonly<Record<number, number | null>> = {
    0: null,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
}

/**
 * Given a knightId, return the id of its prerequisite knight
 * @param knightId 
 * @returns the knightId of its prerequisite knight
 */
export function GetKnightPrerequisites(knightId: number): number | null {
    if (knightId < 0 || knightId > 5) {
        throw new Error(`knight with knightId=${knightId} not found`)
    }

    return prerequisites[knightId]
}

const cost: Resources = {
    [ResourceType.Wheat]: 1,
    [ResourceType.Ore]: 1,
    [ResourceType.Wool]: 1
}

/**
 * @param
 * @returns the cost of a knight in Resources
 */
export function GetKnightCost(): Resources {
    return cost
}