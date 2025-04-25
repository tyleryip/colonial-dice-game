import React from 'react'
import StyledHexagon from './styles/StyledHexagon'
import StyledKnight from './styles/StyledKnight'
import StyledResourceJoker from './styles/StyledResourceJoker'
import { HexagonEdge, HexagonVertex, StructureType } from '../../constants/enumerations'
import StyledRoad from './styles/StyledRoad'
import StyledSettlement from './styles/StyledSettlement'
import StyledCity from './styles/StyledCity'

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
    id: number
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
    let width = 0

    switch (hexagonStructure.edge) {
        case HexagonEdge.North:
            roadTopOffset = -2.5
            roadLeftOffset = 37
            width = 25
            break;

        case HexagonEdge.NorthWest:
            roadTopOffset = 10
            roadLeftOffset = 4
            width = 19
            break;

        case HexagonEdge.NorthEast:
            roadTopOffset = 10
            roadLeftOffset = 77
            width = 19
            break;

        case HexagonEdge.SouthWest:
            roadTopOffset = 59
            roadLeftOffset = 4
            width = 19
            break;

        case HexagonEdge.SouthEast:
            roadTopOffset = 59
            roadLeftOffset = 77
            width = 19
            break;

        case HexagonEdge.South:
            roadTopOffset = 92
            roadLeftOffset = 37
            width = 25
            break;

        default:
            throw new Error("Road must be placed on an edge");
    }

    return <StyledRoad key={hexagonStructure.id} $top={roadTopOffset} $left={roadLeftOffset} $width={width}>{hexagonStructure.structure}</StyledRoad>;
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
            settlementTopOffset = -10
            settlementLeftOffset = 17
            break;

        case HexagonVertex.NorthEast:
            settlementTopOffset = -10
            settlementLeftOffset = 64
            break;

        case HexagonVertex.West:
            settlementTopOffset = 38
            settlementLeftOffset = -5
            break;

        case HexagonVertex.East:
            settlementTopOffset = 38
            settlementLeftOffset = 87
            break;

        case HexagonVertex.SouthWest:
            settlementTopOffset = 83
            settlementLeftOffset = 17
            break;

        case HexagonVertex.SouthEast:
            settlementTopOffset = 83
            settlementLeftOffset = 64
            break;

        default:
            throw new Error("Settlement must be placed on a vertex");
    }

    return <StyledSettlement key={hexagonStructure.id} $top={settlementTopOffset} $left={settlementLeftOffset}>{hexagonStructure.structure}</StyledSettlement>
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
            cityTopOffset = -10
            cityLeftOffset = 15
            break;

        case HexagonVertex.NorthEast:
            cityTopOffset = -10
            cityLeftOffset = 64
            break;

        case HexagonVertex.West:
            cityTopOffset = 38.5
            cityLeftOffset = -7
            break;

        case HexagonVertex.East:
            cityTopOffset = 38.5
            cityLeftOffset = 85
            break;

        case HexagonVertex.SouthWest:
            cityTopOffset = 84
            cityLeftOffset = 15
            break;

        case HexagonVertex.SouthEast:
            cityTopOffset = 84
            cityLeftOffset = 64
            break;

        default:
            throw new Error("City must be placed on a vertex");
    }

    return <StyledCity key={hexagonStructure.id} $top={cityTopOffset} $left={cityLeftOffset}>{hexagonStructure.structure}</StyledCity>
}
