import Hexagon, { HexagonStructure } from '../../IslandTwo/Hexagon/Hexagon'
import { HexagonEdge, HexagonType, HexagonVertex, ResourceJokerType, StructureType } from '../../../constants/enumerations';
import StyledGameBoard from './styles/StyledGameBoard'

const GameBoard = () => {
    return (
        <StyledGameBoard>
            <Hexagon
                id={0}
                type={HexagonType.Ore}
                resourceJokerId={0}
                knightId={0}
                structures={[
                    CreateRoad(0, HexagonEdge.NorthEast),
                    CreateSettlement(1, HexagonVertex.East),
                    CreateRoad(2, HexagonEdge.SouthEast),
                    CreateRoad(3, HexagonEdge.South),
                    CreateCity(4, HexagonVertex.SouthWest)
                ]} />

            <Hexagon
                id={1}
                type={HexagonType.Wheat}
                resourceJokerId={1}
                knightId={1}
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
                resourceJokerId={2}
                knightId={2}
                structures={[
                    CreateRoad(10, HexagonEdge.SouthWest),
                    CreateSettlement(11, HexagonVertex.SouthWest),
                    CreateRoad(12, HexagonEdge.South),
                    CreateRoad(13, HexagonEdge.SouthEast),
                    CreateCity(14, HexagonVertex.East)
                ]} />

            <Hexagon
                id={3}
                type={HexagonType.Wood}
                resourceJokerId={3}
                knightId={3}
                structures={[
                    CreateRoad(15, HexagonEdge.South),
                    CreateRoad(16, HexagonEdge.SouthEast),
                    CreateSettlement(17, HexagonVertex.East),
                    CreateRoad(18, HexagonEdge.NorthEast),
                    CreateRoad(19, HexagonEdge.North),
                    CreateCity(20, HexagonVertex.NorthWest)
                ]} />

            <Hexagon
                id={4}
                type={HexagonType.Brick}
                resourceJokerId={4}
                knightId={4}
                structures={[
                    CreateRoad(21, HexagonEdge.SouthEast),
                    CreateSettlement(22, HexagonVertex.East),
                    CreateRoad(23, HexagonEdge.NorthEast),
                    CreateRoad(24, HexagonEdge.North),
                    CreateSettlement(25, HexagonVertex.NorthWest)
                ]} />

            <Hexagon
                id={5}
                type={HexagonType.Desert}
                resourceJokerId={ResourceJokerType.Wildcard}
                leftKnightId={5}
                rightKnightId={6}
                structures={[
                    CreateRoad(26, HexagonEdge.NorthEast),
                    CreateRoad(27, HexagonEdge.North),
                    CreateSettlement(28, HexagonVertex.NorthWest)
                ]}
            />

            <Hexagon
                id={6}
                type={HexagonType.Desert}
                leftKnightId={7}
                rightKnightId={8}
                resourceJokerId={6} />
                
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