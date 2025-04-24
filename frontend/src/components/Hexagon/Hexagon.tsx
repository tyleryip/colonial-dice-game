import React from 'react'
import StyledHexagon from './styles/StyledHexagon'
import StyledKnight from './styles/StyledKnight'
import StyledResourceJoker from './styles/StyledResourceJoker'
import { HexagonEdge, HexagonVertex, StructureType } from '../../constants/enumerations'

interface HexagonProps {
    width: number
    top: number,
    left: number,
    tile: string
    knight?: React.ReactNode
    joker?: React.ReactNode
    structures?: HexagonStructure[]
}

/**
 * A structure (road/settlement/city) to be rendered on an edge or vertex of the hexagon 
 */
export interface HexagonStructure {
    type: StructureType
    structure: React.ReactNode
    vertex?: HexagonVertex
    edge?: HexagonEdge
}

export default function Hexagon(props: HexagonProps) {
    return (
        <StyledHexagon $top={props.top} $left={props.left} $width={props.width} >
            <img width={"100%"} src={props.tile} />
            {props.knight && AddKnight(props.knight)}
            {props.joker && AddResourceJoker(props.joker)}
            {props.structures && props.structures.map((s) => AddStructure(s))}
        </StyledHexagon>
    )
}

function AddKnight(knight: React.ReactNode): React.ReactNode | null {
    if (knight == null) {
        throw new Error("Knight cannot be empty")
    }

    const knightTopOffset = 6
    const knightLeftOffset = 43

    return <StyledKnight $top={knightTopOffset} $left={knightLeftOffset}>{knight}</StyledKnight>
}

function AddResourceJoker(resourceJoker: React.ReactNode): React.ReactNode | null {
    if (resourceJoker == null) {
        throw new Error("Resource joker cannot be empty")
    }

    const jokerTopOffset = 33
    const jokerLeftOffset = 35

    return <StyledResourceJoker $top={jokerTopOffset} $left={jokerLeftOffset}>{resourceJoker}</StyledResourceJoker>
}

function AddStructure(hexagonStructure: HexagonStructure): React.ReactNode | null {
    if (hexagonStructure.structure == null) {
        throw new Error("Hexagon structure cannot be empty")
    }

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

    switch (hexagonStructure.edge) {
        case HexagonEdge.North:
            break;
        case HexagonEdge.NorthWest:
            break;
        case HexagonEdge.NorthEast:
            break;
        case HexagonEdge.SouthWest:
            break;
        case HexagonEdge.SouthEast:
            break;
        case HexagonEdge.South:
            break;
        default:
            throw new Error("Road must be placed on an edge");
    }

    return;
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
            break;
        case HexagonVertex.NorthEast:
            break;
        case HexagonVertex.West:
            break;
        case HexagonVertex.East:
            break;
        case HexagonVertex.SouthWest:
            break;
        case HexagonVertex.SouthEast:
            break;
        default:
            throw new Error("Settlement must be placed on a vertex");
    }

    return
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
            break;
        case HexagonVertex.NorthEast:
            break;
        case HexagonVertex.West:
            break;
        case HexagonVertex.East:
            break;
        case HexagonVertex.SouthWest:
            break;
        case HexagonVertex.SouthEast:
            break;
        default:
            throw new Error("City must be placed on a vertex");
    }

    return
}
