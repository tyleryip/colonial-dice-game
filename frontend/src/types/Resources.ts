import { ResourceType } from "../constants/enumerations";

/**
 * Models the cost of a structure or knight, as well as the user's inventory
 */
export type Resources = {
    [key in ResourceType]: number
}

/**
 * Used to index Resources
 */
export type resourceId = 0 | 1 | 2 | 3 | 4 | 5