import Hexagon, { HexagonStructure } from '../Hexagon/Hexagon'
import { HexagonEdge, HexagonType, HexagonVertex, KnightType, ResourceJokerType, StructureType } from '../../../constants/enumerations';
import StyledGameBoard from './styles/StyledGameBoard'
import GameOverModal from '../../Modals/GameOverModal/GameOverModal';

const GameBoard = () => {

    return (
        <StyledGameBoard>

            <Hexagon
                id={0}
                type={HexagonType.Ore}
                resourceJokerId={ResourceJokerType.Ore}
                knightId={KnightType.Ore}
                structures={[
                    CreateRoad(0, HexagonEdge.NorthEast),
                    CreateSettlement(1, HexagonVertex.East),
                    CreateRoad(2, HexagonEdge.SouthEast),
                    CreateRoad(3, HexagonEdge.South),
                    CreateCity(4, HexagonVertex.SouthWest),
                ]} />

            <Hexagon
                id={1}
                type={HexagonType.Wheat}
                resourceJokerId={ResourceJokerType.Wheat}
                knightId={KnightType.Wheat}
                structures={[
                    CreateRoad(5, HexagonEdge.NorthEast),
                    CreateSettlement(6, HexagonVertex.East),
                    CreateRoad(7, HexagonEdge.SouthEast),
                    CreateRoad(8, HexagonEdge.South),
                    CreateCity(9, HexagonVertex.SouthWest)
                ]} />

            <Hexagon
                id={2}
                type={HexagonType.Wool}
                resourceJokerId={ResourceJokerType.Wool}
                knightId={KnightType.Wool}
                structures={[
                    CreateRoad(10, HexagonEdge.SouthWest),
                    CreateSettlement(11, HexagonVertex.SouthWest),
                    CreateRoad(12, HexagonEdge.South),
                    CreateRoad(13, HexagonEdge.SouthEast),
                    CreateSettlement(14, HexagonVertex.East),
                    CreateRoad(21, HexagonEdge.NorthEast)
                ]} />

            <Hexagon
                id={3}
                type={HexagonType.Wood}
                resourceJokerId={ResourceJokerType.Wood}
                knightId={KnightType.Wood}
                structures={[
                    CreateRoad(15, HexagonEdge.South),
                    CreateRoad(16, HexagonEdge.SouthEast),
                    CreateCity(17, HexagonVertex.East),
                    CreateRoad(18, HexagonEdge.NorthEast),
                    CreateRoad(22, HexagonEdge.NorthWest)
                ]} />

            <Hexagon
                id={4}
                type={HexagonType.Brick}
                resourceJokerId={ResourceJokerType.Brick}
                knightId={KnightType.Brick}
                structures={[
                    CreateRoad(19, HexagonEdge.SouthEast),
                    CreateCity(20, HexagonVertex.East),
                    CreateSettlement(23, HexagonVertex.SouthWest),
                    CreateRoad(24, HexagonEdge.SouthWest),
                    CreateRoad(25, HexagonEdge.NorthWest),
                    CreateSettlement(26, HexagonVertex.NorthWest)
                ]} />

            <Hexagon
                id={5}
                type={HexagonType.Desert}
                resourceJokerId={ResourceJokerType.Wildcard}
                knightId={KnightType.Wildcard} />

            <Hexagon
                id={6}
                type={HexagonType.Water} />

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