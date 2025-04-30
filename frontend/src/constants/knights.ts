import { Resources } from "../types/Resources"
import { ResourceType } from "./enumerations"

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