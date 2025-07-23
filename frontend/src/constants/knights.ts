import { ResourceType } from "./resources"

/**
 * Maps a knight id to a its prerequisite knight ids
 * Ex. Knight with an id of A requires Knight with an id of B --> [A] : B
 */
const islandOneKnightPrerequisites: Readonly<Record<number, number | null>> = {
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
export function GetislandOneKnightPrerequisite(knightId: number): number | null {
    if (knightId < 0 || knightId > 5) {
        throw new Error(`knight with knightId=${knightId} not found`)
    }

    return islandOneKnightPrerequisites[knightId]
}

export const knightCost: ResourceType[] = [ResourceType.ORE, ResourceType.WHEAT, ResourceType.WOOL]