import Hexagon, { HexagonStructure } from '../Hexagon/Hexagon'
import { HexagonEdge, HexagonType, HexagonVertex, KnightType, ResourceJokerType, StructureType } from '../../constants/enumerations';
import StyledGameBoard from './styles/StyledGameBoard'

import Knight from '../Knight/Knight';
import ResourceJoker from '../ResourceJoker/ResourceJoker';
import Road from "../Road/Road";
import Settlement from '../Settlement/Settlement';
import City from '../City/City';
import { GetCityStructureId, GetSettlementStructureId } from '../../constants/mappings';

const GameBoard = () => {

    // Knights
    const oreKnight = <Knight type={KnightType.Ore} />
    const wheatKnight = <Knight type={KnightType.Wheat} />
    const woolKnight = <Knight type={KnightType.Wool} />
    const woodKnight = <Knight type={KnightType.Wood} />
    const brickKnight = <Knight type={KnightType.Brick} />
    const wildcardKnight = <Knight type={KnightType.Wildcard} />

    // Jokers
    const oreJoker = <ResourceJoker type={ResourceJokerType.Ore} />
    const wheatJoker = <ResourceJoker type={ResourceJokerType.Wheat} />
    const woolJoker = <ResourceJoker type={ResourceJokerType.Wool} />
    const woodJoker = <ResourceJoker type={ResourceJokerType.Wood} />
    const brickJoker = <ResourceJoker type={ResourceJokerType.Brick} />
    const wildcardJoker = <ResourceJoker type={ResourceJokerType.Wildcard} />

    return (
        <StyledGameBoard>
            <Hexagon type={HexagonType.Water} />

            <Hexagon type={HexagonType.Ore}
                joker={oreJoker}
                knight={oreKnight}
                structures={[
                    CreateRoad(0, HexagonEdge.NorthEast),
                    CreateSettlement(3, HexagonVertex.East),
                    CreateRoad(2, HexagonEdge.SouthEast),
                    CreateRoad(3, HexagonEdge.South),
                    CreateCity(7, HexagonVertex.SouthWest),
                ]} />

            <Hexagon type={HexagonType.Wheat}
                joker={wheatJoker}
                knight={wheatKnight}
                structures={[
                    CreateRoad(5, HexagonEdge.NorthEast),
                    CreateSettlement(4, HexagonVertex.East),
                    CreateRoad(7, HexagonEdge.SouthEast),
                    CreateRoad(8, HexagonEdge.South),
                    CreateCity(12, HexagonVertex.SouthWest)
                ]} />

            <Hexagon type={HexagonType.Wool}
                joker={woolJoker}
                knight={woolKnight}
                structures={[
                    CreateRoad(10, HexagonEdge.SouthWest),
                    CreateSettlement(5, HexagonVertex.SouthWest),
                    CreateRoad(12, HexagonEdge.South),
                    CreateRoad(13, HexagonEdge.SouthEast),
                    CreateSettlement(7, HexagonVertex.East),
                    CreateRoad(21, HexagonEdge.NorthEast)
                ]} />

            <Hexagon type={HexagonType.Wood}
                joker={woodJoker}
                knight={woodKnight}
                structures={[
                    CreateRoad(15, HexagonEdge.South),
                    CreateRoad(16, HexagonEdge.SouthEast),
                    CreateCity(20, HexagonVertex.East),
                    CreateRoad(18, HexagonEdge.NorthEast),
                    CreateRoad(22, HexagonEdge.NorthWest)
                ]} />

            <Hexagon type={HexagonType.Brick}
                joker={brickJoker}
                knight={brickKnight}
                structures={[
                    CreateRoad(19, HexagonEdge.SouthEast),
                    CreateCity(30, HexagonVertex.East),
                    CreateSettlement(9, HexagonVertex.SouthWest),
                    CreateRoad(24, HexagonEdge.SouthWest),
                    CreateRoad(25, HexagonEdge.NorthWest),
                    CreateSettlement(11, HexagonVertex.NorthWest)
                ]} />

            <Hexagon type={HexagonType.Desert}
                joker={wildcardJoker}
                knight={wildcardKnight} />
        </StyledGameBoard>
    )
}

export default GameBoard

function CreateRoad(structureId: number, edge: HexagonEdge): HexagonStructure {
    const road = <Road id={structureId} />

    return {
        key: structureId,
        type: StructureType.Road,
        structure: road,
        edge: edge
    }
}

function CreateSettlement(settlementNumber: number, vertex: HexagonVertex): HexagonStructure {
    const settlement = <Settlement settlementNumber={settlementNumber} />
    const structureId = GetSettlementStructureId(settlementNumber)

    return {
        key: structureId,
        type: StructureType.Settlement,
        structure: settlement,
        vertex: vertex
    }
}

function CreateCity(cityNumber: number, vertex: HexagonVertex): HexagonStructure {
    const city = <City cityNumber={cityNumber} />
    const structureId = GetCityStructureId(cityNumber)

    return {
        key: structureId,
        type: StructureType.City,
        structure: city,
        vertex: vertex
    }
}