import { ResourceType } from "../constants/enumerations";

/**
 * Models the cost of a structure or knight, as well as the user's inventory
 */
export type Resources = {
    [key in ResourceType]?: number
}