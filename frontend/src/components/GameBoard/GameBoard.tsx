import Hexagon, { HexagonStructure } from '../Hexagon/Hexagon'
import { HexagonEdge, HexagonType, HexagonVertex, KnightType, ResourceJokerType, StructureType } from '../../constants/enumerations';
import StyledGameBoard from './styles/StyledGameBoard'
import GameOverModal from '../Modals/GameOverModal/GameOverModal';

const GameBoard = () => {

    return (
        <StyledGameBoard>
            <Hexagon
                type={HexagonType.Water} />

            <Hexagon
                type={HexagonType.Ore}
                resourceJokerType={ResourceJokerType.Ore}
                knightType={KnightType.Ore}
                structures={[
                    CreateRoad(0, HexagonEdge.NorthEast),
                    CreateSettlement(1, HexagonVertex.East),
                    CreateRoad(2, HexagonEdge.SouthEast),
                    CreateRoad(3, HexagonEdge.South),
                    CreateCity(4, HexagonVertex.SouthWest),
                ]} />

            <Hexagon
                type={HexagonType.Wheat}
                resourceJokerType={ResourceJokerType.Wheat}
                knightType={KnightType.Wheat}
                structures={[
                    CreateRoad(5, HexagonEdge.NorthEast),
                    CreateSettlement(6, HexagonVertex.East),
                    CreateRoad(7, HexagonEdge.SouthEast),
                    CreateRoad(8, HexagonEdge.South),
                    CreateCity(9, HexagonVertex.SouthWest)
                ]} />

            <Hexagon
                type={HexagonType.Wool}
                resourceJokerType={ResourceJokerType.Wool}
                knightType={KnightType.Wool}
                structures={[
                    CreateRoad(10, HexagonEdge.SouthWest),
                    CreateSettlement(11, HexagonVertex.SouthWest),
                    CreateRoad(12, HexagonEdge.South),
                    CreateRoad(13, HexagonEdge.SouthEast),
                    CreateSettlement(14, HexagonVertex.East),
                    CreateRoad(21, HexagonEdge.NorthEast)
                ]} />

            <Hexagon
                type={HexagonType.Wood}
                resourceJokerType={ResourceJokerType.Wood}
                knightType={KnightType.Wood}
                structures={[
                    CreateRoad(15, HexagonEdge.South),
                    CreateRoad(16, HexagonEdge.SouthEast),
                    CreateCity(17, HexagonVertex.East),
                    CreateRoad(18, HexagonEdge.NorthEast),
                    CreateRoad(22, HexagonEdge.NorthWest)
                ]} />

            <Hexagon
                type={HexagonType.Brick}
                resourceJokerType={ResourceJokerType.Brick}
                knightType={KnightType.Brick}
                structures={[
                    CreateRoad(19, HexagonEdge.SouthEast),
                    CreateCity(20, HexagonVertex.East),
                    CreateSettlement(23, HexagonVertex.SouthWest),
                    CreateRoad(24, HexagonEdge.SouthWest),
                    CreateRoad(25, HexagonEdge.NorthWest),
                    CreateSettlement(26, HexagonVertex.NorthWest)
                ]} />

            <Hexagon
                type={HexagonType.Desert}
                resourceJokerType={ResourceJokerType.Wildcard}
                knightType={KnightType.Wildcard} />

            <GameOverModal />

        </StyledGameBoard>
    )
}

export default GameBoard

function CreateRoad(structureId: number, edge: HexagonEdge): HexagonStructure {
    return {
        id: structureId,
        type: StructureType.Road,
        edge: edge
    }
}

function CreateSettlement(structureId: number, vertex: HexagonVertex): HexagonStructure {
    return {
        id: structureId,
        type: StructureType.Settlement,
        vertex: vertex
    }
}

function CreateCity(structureId: number, vertex: HexagonVertex): HexagonStructure {
    return {
        id: structureId,
        type: StructureType.City,
        vertex: vertex
    }
}