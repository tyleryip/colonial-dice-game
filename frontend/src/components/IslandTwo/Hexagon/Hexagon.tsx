import React from 'react'
import StyledHexagon from './styles/StyledHexagon'
import { HexagonEdge, HexagonType, HexagonVertex, ResourceJokerType, StructureType } from '../../../constants/enumerations'
import Knight from '../Knight/Knight'
import ResourceJoker from '../ResourceJoker/ResourceJoker'
import City from '../City/City'
import Settlement from '../Settlement/Settlement'
import Road from '../Road/Road'
import WildcardResourceJoker from '../ResourceJoker/WildcardJoker'

// Hexagon icons
import water_hexagon from "/assets/hexagons/water-hexagon.svg";
import ore_hexagon from "/assets/hexagons/ore-hexagon.svg";
import wheat_hexagon from "/assets/hexagons/wheat-hexagon.svg";
import wool_hexagon from "/assets/hexagons/wool-hexagon.svg";
import wood_hexagon from "/assets/hexagons/wood-hexagon.svg";
import brick_hexagon from "/assets/hexagons/brick-hexagon.svg";
import desert_hexagon from "/assets/hexagons/desert-hexagon.svg";
import { GetIslandTwoResourceJokerType } from '../../../constants/mappings'

interface HexagonProps {
    id: number,
    type: HexagonType,
    knightId?: number
    rightKnightId?: number,
    leftKnightId?: number,
    resourceJokerId?: number
    structures?: HexagonStructure[]
}

/**
 * A structure (road/settlement/city) to be rendered on an edge or vertex of the hexagon 
 */
export interface HexagonStructure {
    id: number
    type: StructureType
    vertex?: HexagonVertex
    edge?: HexagonEdge
}

const hexagonIcons: { -readonly [key in HexagonType]: string } = {
    [HexagonType.Water]: water_hexagon,
    [HexagonType.Ore]: ore_hexagon,
    [HexagonType.Wheat]: wheat_hexagon,
    [HexagonType.Wool]: wool_hexagon,
    [HexagonType.Wood]: wood_hexagon,
    [HexagonType.Brick]: brick_hexagon,
    [HexagonType.Desert]: desert_hexagon
}

const verticalCenter = 33.5
const verticalOffset = 16
const verticalOffsets: Readonly<Record<number, number>> = {
    0: verticalCenter - verticalOffset,
    1: verticalCenter + verticalOffset,
    2: verticalCenter + 2 * verticalOffset,
    3: verticalCenter + verticalOffset,
    4: verticalCenter - verticalOffset,
    5: verticalCenter - 2 * verticalOffset,
    6: verticalCenter
}

const horizontalCenter = 31
const horizontalOffset = 27
const horizontalOffsets: Readonly<Record<number, number>> = {
    0: horizontalCenter - horizontalOffset,
    1: horizontalCenter - horizontalOffset,
    2: horizontalCenter,
    3: horizontalCenter + horizontalOffset,
    4: horizontalCenter + horizontalOffset,
    5: horizontalCenter,
    6: horizontalCenter
}

export default function Hexagon(props: HexagonProps) {
    // Props and constants

    const icon = hexagonIcons[props.type]
    const top = verticalOffsets[props.id]
    const left = horizontalOffsets[props.id]

    // Conditional rendering

    const resourceJokerType = props.resourceJokerId != null ?
        GetIslandTwoResourceJokerType(props.resourceJokerId)
        : null

    return (
        <StyledHexagon
            $top={top}
            $left={left} >
            <img
                width={"100%"}
                src={icon}
                alt={`Hexagon ${props.type.toString()}`} />
            {props.knightId != undefined
                && <Knight id={props.knightId} />}
            {props.leftKnightId != undefined
                && <Knight id={props.leftKnightId} isLeft />}
            {props.rightKnightId != undefined
                && <Knight id={props.rightKnightId} isRight />}
            {props.resourceJokerId != undefined
                && resourceJokerType != ResourceJokerType.Wildcard
                && resourceJokerType != null
                && <ResourceJoker id={props.resourceJokerId} />}
            {props.resourceJokerId != undefined
                && resourceJokerType == ResourceJokerType.Wildcard
                && <WildcardResourceJoker id={props.resourceJokerId} />}
            {props.structures != undefined
                && props.structures.map((s) => AddStructure(s))}
        </StyledHexagon>
    )
}

function AddStructure(hexagonStructure: HexagonStructure): React.ReactNode | null {
    if (hexagonStructure.edge && hexagonStructure.vertex) {
        throw new Error("Hexagon structure cannot have both an edge and vertex set");
    }

    switch (hexagonStructure.type) {
        case StructureType.Road:
            return AddRoad(hexagonStructure)
        case StructureType.Settlement:
            return AddSettlement(hexagonStructure)
        case StructureType.City:
            return AddCity(hexagonStructure)
        default:
            return null;
    }
}

function AddRoad(hexagonStructure: HexagonStructure): React.ReactNode | null {
    if (hexagonStructure.type != StructureType.Road) {
        throw new Error("Structure is not a road")
    }

    if (hexagonStructure.vertex != null) {
        throw new Error("Road cannot be placed on a vertex");
    }

    let roadTopOffset = 0
    let roadLeftOffset = 0
    let width = 0

    const horizontalWidth = 25
    const diagonalWidth = 16.5

    switch (hexagonStructure.edge) {
        case HexagonEdge.North:
            roadTopOffset = -2.5
            roadLeftOffset = 37
            width = horizontalWidth
            break;

        case HexagonEdge.NorthWest:
            roadTopOffset = 12.5
            roadLeftOffset = 5.7
            width = diagonalWidth
            break;

        case HexagonEdge.NorthEast:
            roadTopOffset = 12.5
            roadLeftOffset = 78
            width = diagonalWidth
            break;

        case HexagonEdge.SouthWest:
            roadTopOffset = 60
            roadLeftOffset = 5.7
            width = diagonalWidth
            break;

        case HexagonEdge.SouthEast:
            roadTopOffset = 60
            roadLeftOffset = 78
            width = diagonalWidth
            break;

        case HexagonEdge.South:
            roadTopOffset = 95
            roadLeftOffset = 37
            width = horizontalWidth
            break;

        default:
            throw new Error("Road must be placed on an edge");
    }

    return <Road
        key={hexagonStructure.id}
        id={hexagonStructure.id}
        top={roadTopOffset}
        left={roadLeftOffset}
        width={width} />
}

function AddSettlement(hexagonStructure: HexagonStructure): React.ReactNode | null {
    if (hexagonStructure.type != StructureType.Settlement) {
        throw new Error("Structure is not a settlement")
    }

    if (hexagonStructure.edge != null) {
        throw new Error("Settlement cannot be placed on an edge");
    }

    let settlementTopOffset = 0
    let settlementLeftOffset = 0

    switch (hexagonStructure.vertex) {
        case HexagonVertex.NorthWest:
            settlementTopOffset = -8
            settlementLeftOffset = 19
            break;

        case HexagonVertex.NorthEast:
            settlementTopOffset = -8
            settlementLeftOffset = 67
            break;

        case HexagonVertex.West:
            settlementTopOffset = 40
            settlementLeftOffset = -4
            break;

        case HexagonVertex.East:
            settlementTopOffset = 40
            settlementLeftOffset = 90
            break;

        case HexagonVertex.SouthWest:
            settlementTopOffset = 87
            settlementLeftOffset = 19
            break;

        case HexagonVertex.SouthEast:
            settlementTopOffset = 87
            settlementLeftOffset = 67
            break;

        default:
            throw new Error("Settlement must be placed on a vertex");
    }

    return <Settlement
        key={hexagonStructure.id}
        id={hexagonStructure.id}
        top={settlementTopOffset}
        left={settlementLeftOffset} />
}

function AddCity(hexagonStructure: HexagonStructure): React.ReactNode | null {
    if (hexagonStructure.type != StructureType.City) {
        throw new Error("Structure is not a city")
    }

    if (hexagonStructure.edge != null) {
        throw new Error("City cannot be placed on an edge");
    }

    let cityTopOffset = 0
    let cityLeftOffset = 0

    switch (hexagonStructure.vertex) {
        case HexagonVertex.NorthWest:
            cityTopOffset = -7
            cityLeftOffset = 17
            break;

        case HexagonVertex.NorthEast:
            cityTopOffset = -7
            cityLeftOffset = 67
            break;

        case HexagonVertex.West:
            cityTopOffset = 39
            cityLeftOffset = -5
            break;

        case HexagonVertex.East:
            cityTopOffset = 39
            cityLeftOffset = 88
            break;

        case HexagonVertex.SouthWest:
            cityTopOffset = 87
            cityLeftOffset = 17
            break;

        case HexagonVertex.SouthEast:
            cityTopOffset = 87
            cityLeftOffset = 67
            break;

        default:
            throw new Error("City must be placed on a vertex");
    }

    return <City
        key={hexagonStructure.id}
        id={hexagonStructure.id}
        top={cityTopOffset}
        left={cityLeftOffset} />
}
