import Hexagon, { HexagonStructure } from '../Hexagon/Hexagon'
import { HexagonEdge, HexagonType, HexagonVertex, KnightType, ResourceJokerType, RoadType, StructureType } from '../../constants/enumerations';
import StyledGameBoard from './styles/StyledGameBoard'

import Knight from '../Knight/Knight';
import ResourceJoker from '../ResourceJoker/ResourceJoker';
import Road from "../Road/Road";
import Settlement from '../Settlement/Settlement';
import City from '../City/City';

const GameBoard = () => {

    // Knights
    const oreKnight = <Knight id={1} type={KnightType.Ore} />
    const wheatKnight = <Knight id={2} type={KnightType.Wheat} />
    const woolKnight = <Knight id={3} type={KnightType.Wool} />
    const woodKnight = <Knight id={4} type={KnightType.Wood} />
    const brickKnight = <Knight id={5} type={KnightType.Brick} />
    const wildcardKnight = <Knight id={6} type={KnightType.Wildcard} />

    // Jokers
    const oreJoker = <ResourceJoker id={1} type={ResourceJokerType.Ore} />
    const wheatJoker = <ResourceJoker id={2} type={ResourceJokerType.Wheat} />
    const woolJoker = <ResourceJoker id={3} type={ResourceJokerType.Wool} />
    const woodJoker = <ResourceJoker id={4} type={ResourceJokerType.Wood} />
    const brickJoker = <ResourceJoker id={5} type={ResourceJokerType.Brick} />
    const wildcardJoker = <ResourceJoker id={6} type={ResourceJokerType.Wildcard} />

    // Roads
    const road1 = <Road id={0} type={RoadType.Horizontal} />
    const road2 = <Road id={0} type={RoadType.Forwardslash} />
    const road3 = <Road id={0} type={RoadType.Backslash} />

    // Settlements
    const settlement3 = <Settlement id={1} settlementNumber={3} />

    // Cities
    const city7 = <City id={1} cityNumber={7} />

    const wheatHexagonStructures: HexagonStructure[] = [
        {
            id: 1,
            type: StructureType.Road,
            structure: road1,
            edge: HexagonEdge.North
        },
        {
            id: 2,
            type: StructureType.Road,
            structure: road1,
            edge: HexagonEdge.South
        },
        {
            id: 3,
            type: StructureType.Road,
            structure: road2,
            edge: HexagonEdge.SouthEast
        },
        {
            id: 4,
            type: StructureType.Road,
            structure: road2,
            edge: HexagonEdge.NorthWest
        },
        {
            id: 5,
            type: StructureType.Road,
            structure: road3,
            edge: HexagonEdge.NorthEast
        },
        {
            id: 6,
            type: StructureType.Road,
            structure: road3,
            edge: HexagonEdge.SouthWest
        },
        {
            id: 7,
            type: StructureType.Settlement,
            structure: settlement3,
            vertex: HexagonVertex.NorthWest
        },
        {
            id: 8,
            type: StructureType.Settlement,
            structure: settlement3,
            vertex: HexagonVertex.NorthEast
        },
        {
            id: 9,
            type: StructureType.Settlement,
            structure: settlement3,
            vertex: HexagonVertex.West
        },
        {
            id: 10,
            type: StructureType.Settlement,
            structure: settlement3,
            vertex: HexagonVertex.East
        },
        {
            id: 11,
            type: StructureType.Settlement,
            structure: settlement3,
            vertex: HexagonVertex.SouthWest
        },
        {
            id: 12,
            type: StructureType.Settlement,
            structure: settlement3,
            vertex: HexagonVertex.SouthEast
        }
    ]

    const brickHexagonStructures: HexagonStructure[] = [
        {
            id: 1,
            type: StructureType.Road,
            structure: road1,
            edge: HexagonEdge.North
        },
        {
            id: 2,
            type: StructureType.Road,
            structure: road1,
            edge: HexagonEdge.South
        },
        {
            id: 3,
            type: StructureType.Road,
            structure: road2,
            edge: HexagonEdge.SouthEast
        },
        {
            id: 4,
            type: StructureType.Road,
            structure: road2,
            edge: HexagonEdge.NorthWest
        },
        {
            id: 5,
            type: StructureType.Road,
            structure: road3,
            edge: HexagonEdge.NorthEast
        },
        {
            id: 6,
            type: StructureType.Road,
            structure: road3,
            edge: HexagonEdge.SouthWest
        },
        {
            id: 7,
            type: StructureType.City,
            structure: city7,
            vertex: HexagonVertex.NorthWest
        },
        {
            id: 8,
            type: StructureType.City,
            structure: city7,
            vertex: HexagonVertex.NorthEast
        },
        {
            id: 9,
            type: StructureType.City,
            structure: city7,
            vertex: HexagonVertex.West
        },
        {
            id: 10,
            type: StructureType.City,
            structure: city7,
            vertex: HexagonVertex.East
        },
        {
            id: 11,
            type: StructureType.City,
            structure: city7,
            vertex: HexagonVertex.SouthWest
        },
        {
            id: 12,
            type: StructureType.City,
            structure: city7,
            vertex: HexagonVertex.SouthEast
        }
    ]

    return (
        <StyledGameBoard>
            <Hexagon type={HexagonType.Water} />
            <Hexagon type={HexagonType.Ore} joker={oreJoker} knight={oreKnight} />
            <Hexagon type={HexagonType.Wheat} joker={wheatJoker} knight={wheatKnight} structures={wheatHexagonStructures} />
            <Hexagon type={HexagonType.Wool} joker={woolJoker} knight={woolKnight} />
            <Hexagon type={HexagonType.Wood} joker={woodJoker} knight={woodKnight} />
            <Hexagon type={HexagonType.Brick} joker={brickJoker} knight={brickKnight} structures={brickHexagonStructures} />
            <Hexagon type={HexagonType.Desert} joker={wildcardJoker} knight={wildcardKnight} />
        </StyledGameBoard>
    )
}

export default GameBoard