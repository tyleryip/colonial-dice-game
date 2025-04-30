import { StructureType } from "../constants/enumerations"

export type Structure = {
    id: number,
    type: StructureType, // Required to map a structure to its cost
    prerequisites?: number[],
    points: number,
    built: boolean
}