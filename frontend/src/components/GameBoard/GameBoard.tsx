import Hexagon, { HexagonStructure } from '../Hexagon/Hexagon'
import { HexagonEdge, HexagonVertex, RoadType, StructureType } from '../../constants/enumerations';
import StyledGameBoard from './styles/StyledGameBoard'

import WaterHexagon from "../../assets/hexagons/water-hexagon.svg";
import BrickHexagon from "../../assets/hexagons/brick-hexagon.svg";
import DesertHexagon from "../../assets/hexagons/desert-hexagon.svg";
import OreHexagon from "../../assets/hexagons/ore-hexagon.svg";
import WheatHexagon from "../../assets/hexagons/wheat-hexagon.svg";
import WoodHexagon from "../../assets/hexagons/wood-hexagon.svg";
import WoolHexagon from "../../assets/hexagons/wool-hexagon.svg";

import Knight from '../Knight/Knight';
import ResourceJoker from '../ResourceJoker/ResourceJoker';
import Road from "../Road/Road";
import Settlement from '../Settlement/Settlement';
import City from '../City/City';

const horizontalCenter = 31
const horizontalOffset = 27

const verticalCenter = 33.5
const verticalOffset = 16

const GameBoard = () => {

    // Knights
    const knight1 = <Knight id={1} />

    // Jokers
    const oreJoker = <ResourceJoker id={1} />
    const wheatJoker = <ResourceJoker id={2} />
    const woolJoker = <ResourceJoker id={3} />
    const woodJoker = <ResourceJoker id={4} />
    const brickJoker = <ResourceJoker id={5} />
    const wildcardJoker = <ResourceJoker id={6} />

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

            <Hexagon tile={WaterHexagon} top={verticalCenter} left={horizontalCenter} />

            <Hexagon tile={WoolHexagon} joker={woolJoker} top={verticalCenter + verticalOffset * 2} left={horizontalCenter} />

            <Hexagon tile={WheatHexagon} joker={wheatJoker} structures={wheatHexagonStructures} top={verticalCenter + verticalOffset} left={horizontalCenter - horizontalOffset} />

            <Hexagon tile={OreHexagon} joker={oreJoker} knight={knight1} top={verticalCenter - verticalOffset} left={horizontalCenter - horizontalOffset} />

            <Hexagon tile={DesertHexagon} joker={wildcardJoker} top={verticalCenter - verticalOffset * 2} left={horizontalCenter} />

            <Hexagon tile={BrickHexagon} joker={brickJoker} structures={brickHexagonStructures} top={verticalCenter - verticalOffset} left={horizontalCenter + horizontalOffset} />

            <Hexagon tile={WoodHexagon} joker={woodJoker} top={verticalCenter + verticalOffset} left={horizontalCenter + horizontalOffset} />
        </StyledGameBoard>
    )
}

export default GameBoard