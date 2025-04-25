/**
 * Structures that are placed on an edge or vertex of a hexagon
 */
export enum StructureType {
    Road,
    Settlement,
    City
}

export enum RoadType {
    Horizontal, // Roads that look like this: -
    Forwardslash, // Roads that look like this: /
    Backslash, // Roads that look like this: \
    Starting // Special case for the starting road with the arrow
}

export enum HexagonType {
    Water,
    Ore,
    Wheat,
    Wool,
    Wood,
    Brick,
    Desert
}

export enum HexagonVertex {
    NorthWest,
    NorthEast,
    West,
    East,
    SouthWest,
    SouthEast
}

export enum HexagonEdge {
    North,
    NorthWest,
    NorthEast,
    SouthWest,
    SouthEast,
    South
}

export enum KnightType {
    Ore,
    Wheat,
    Wool,
    Wood,
    Brick,
    Wildcard
}

export enum ResourceJokerType {
    Ore,
    Wheat,
    Wool,
    Wood,
    Brick,
    Wildcard
}

export enum IconType {
    Light,
    Dark
}