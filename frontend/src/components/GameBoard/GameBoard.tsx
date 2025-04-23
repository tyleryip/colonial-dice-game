import Hexagon from '../Hexagon/Hexagon'
import StyledGameBoard from './styles/StyledGameBoard'
import WaterHexagon from "../../assets/hexagons/water-hexagon.svg";
import BrickHexagon from "../../assets/hexagons/brick-hexagon.svg";
import DesertHexagon from "../../assets/hexagons/desert-hexagon.svg";
import OreHexagon from "../../assets/hexagons/ore-hexagon.svg";
import WheatHexagon from "../../assets/hexagons/wheat-hexagon.svg";
import WoodHexagon from "../../assets/hexagons/wood-hexagon.svg";
import WoolHexagon from "../../assets/hexagons/wool-hexagon.svg";

const hexagonWidth = 150

const horizontalCenter = 100 - (hexagonWidth / 2.18)
const horizontalOffset = 27

const verticalCenter = 100 - (hexagonWidth / 2.27)
const verticalOffset = 16

const GameBoard = () => {
    return (
        <StyledGameBoard>
            <Hexagon top={`${verticalCenter}%`} left={`${horizontalCenter}%`}>
                <img width={`${hexagonWidth}%`} src={WaterHexagon}></img>
            </Hexagon>
            <Hexagon top={`${verticalCenter + verticalOffset * 2}%`} left={`${horizontalCenter}%`}>
                <img width={`${hexagonWidth}%`} src={WoolHexagon}></img>
            </Hexagon>
            <Hexagon top={`${verticalCenter + verticalOffset}%`} left={`${horizontalCenter - horizontalOffset}%`}>
                <img width={`${hexagonWidth}%`} src={WheatHexagon}></img>
            </Hexagon>
            <Hexagon top={`${verticalCenter - verticalOffset}%`} left={`${horizontalCenter - horizontalOffset}%`}>
                <img width={`${hexagonWidth}%`} src={OreHexagon}></img>
            </Hexagon>
            <Hexagon top={`${verticalCenter - verticalOffset * 2}%`} left={`${horizontalCenter}%`}>
                <img width={`${hexagonWidth}%`} src={DesertHexagon}></img>
            </Hexagon>
            <Hexagon top={`${verticalCenter - verticalOffset}%`} left={`${horizontalCenter + horizontalOffset}%`}>
                <img width={`${hexagonWidth}%`} src={BrickHexagon}></img>
            </Hexagon>
            <Hexagon top={`${verticalCenter + verticalOffset}%`} left={`${horizontalCenter + horizontalOffset}%`}>
                <img width={`${hexagonWidth}%`} src={WoodHexagon}></img>
            </Hexagon>
        </StyledGameBoard>
    )
}

export default GameBoard
