import Hexagon, { HexagonStructure } from '../Hexagon/Hexagon'
import { HexagonEdge, HexagonVertex, StructureType } from '../../constants/enumerations';
import StyledGameBoard from './styles/StyledGameBoard'

import WaterHexagon from "../../assets/hexagons/water-hexagon.svg";
import BrickHexagon from "../../assets/hexagons/brick-hexagon.svg";
import DesertHexagon from "../../assets/hexagons/desert-hexagon.svg";
import OreHexagon from "../../assets/hexagons/ore-hexagon.svg";
import WheatHexagon from "../../assets/hexagons/wheat-hexagon.svg";
import WoodHexagon from "../../assets/hexagons/wood-hexagon.svg";
import WoolHexagon from "../../assets/hexagons/wool-hexagon.svg";

import ResourceJoker from '../ResourceJoker/ResourceJoker';

import WoolJoker from "../../assets/jokers/normal/wool-joker.svg"
import WheatJoker from "../../assets/jokers/normal/wheat-joker.svg"
import OreJoker from "../../assets/jokers/normal/ore-joker.svg"
import WildcardJoker from "../../assets/jokers/normal/wildcard-joker.svg"
import BrickJoker from "../../assets/jokers/normal/brick-joker.svg"
import WoodJoker from "../../assets/jokers/normal/wood-joker.svg"

import Knight from '../Knight/Knight';

import Knight1Icon from "../../assets/knights/light/knight-1-light.svg"

import Road from "../Road/Road";

import HorizontalRoadIcon from "../../assets/roads/light/horizontal-road-light.svg"
import ForwardslashRoadIcon from "../../assets/roads/light/forwardslash-road-light.svg"
import BackslashRoadIcon from "../../assets/roads/light/backslash-road-light.svg"

import Settlement from '../Settlement/Settlement';

import Settlement3Icon from "../../assets/settlements/light/settlement-3-light.svg"

import City from '../City/City';

import City7Icon from "../../assets/cities/light/city-7-light.svg"

const hexagonWidth = 37.5

const horizontalCenter = 31
const horizontalOffset = 27

const verticalCenter = 33.5
const verticalOffset = 16

const GameBoard = () => {

    // Knights
    const knight1 = <Knight icon={Knight1Icon} width={100} />

    // Jokers
    const brickJoker = <ResourceJoker icon={BrickJoker} width={100} />
    const wildcardJoker = <ResourceJoker icon={WildcardJoker} width={100} />
    const woodJoker = <ResourceJoker icon={WoodJoker} width={100} />
    const oreJoker = <ResourceJoker icon={OreJoker} width={100} />
    const woolJoker = <ResourceJoker icon={WoolJoker} width={100} />
    const wheatJoker = <ResourceJoker icon={WheatJoker} width={100} />

    // Roads
    const road1 = <Road icon={HorizontalRoadIcon} width={100} />
    const road2 = <Road icon={ForwardslashRoadIcon} width={100} />
    const road3 = <Road icon={BackslashRoadIcon} width={100} />

    // Settlements
    const settlement3 = <Settlement icon={Settlement3Icon} width={100} />

    // Cities
    const city7 = <City icon={City7Icon} width={100} />

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

            <Hexagon tile={WaterHexagon} width={hexagonWidth} top={verticalCenter} left={horizontalCenter} />

            <Hexagon tile={WoolHexagon} joker={woolJoker} width={hexagonWidth} top={verticalCenter + verticalOffset * 2} left={horizontalCenter} />

            <Hexagon tile={WheatHexagon} joker={wheatJoker} structures={wheatHexagonStructures} width={hexagonWidth} top={verticalCenter + verticalOffset} left={horizontalCenter - horizontalOffset} />

            <Hexagon tile={OreHexagon} joker={oreJoker} knight={knight1} width={hexagonWidth} top={verticalCenter - verticalOffset} left={horizontalCenter - horizontalOffset} />

            <Hexagon tile={DesertHexagon} joker={wildcardJoker} width={hexagonWidth} top={verticalCenter - verticalOffset * 2} left={horizontalCenter} />

            <Hexagon tile={BrickHexagon} joker={brickJoker} structures={brickHexagonStructures} width={hexagonWidth} top={verticalCenter - verticalOffset} left={horizontalCenter + horizontalOffset} />

            <Hexagon tile={WoodHexagon} joker={woodJoker} width={hexagonWidth} top={verticalCenter + verticalOffset} left={horizontalCenter + horizontalOffset} />
        </StyledGameBoard>
    )
}

export default GameBoard