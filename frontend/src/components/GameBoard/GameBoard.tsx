import Hexagon from '../Hexagon/Hexagon'
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
import BrickJoker from "../../assets/jokers/normal/wildcard-joker.svg"
import WoodJoker from "../../assets/jokers/normal/wood-joker.svg"

const hexagonWidth = 37.5

const horizontalCenter = 31
const horizontalOffset = 27

const verticalCenter = 33.5
const verticalOffset = 16

const GameBoard = () => {
    const brickJoker = <ResourceJoker icon={BrickJoker} width={100} />
    const wildcardJoker = <ResourceJoker icon={WildcardJoker} width={100} />
    const woodJoker = <ResourceJoker icon={WoodJoker} width={100} />
    const oreJoker = <ResourceJoker icon={OreJoker} width={100} />
    const woolJoker = <ResourceJoker icon={WoolJoker} width={100} />
    const wheatJoker = <ResourceJoker icon={WheatJoker} width={100} />


    return (
        <StyledGameBoard>
            <Hexagon tile={WaterHexagon} width={hexagonWidth} top={verticalCenter} left={horizontalCenter} />
            <Hexagon tile={WoolHexagon} center={woolJoker} width={hexagonWidth} top={verticalCenter + verticalOffset * 2} left={horizontalCenter} />
            <Hexagon tile={WheatHexagon} center={wheatJoker} width={hexagonWidth} top={verticalCenter + verticalOffset} left={horizontalCenter - horizontalOffset} />
            <Hexagon tile={OreHexagon} center={oreJoker} width={hexagonWidth} top={verticalCenter - verticalOffset} left={horizontalCenter - horizontalOffset} />
            <Hexagon tile={DesertHexagon} center={wildcardJoker} width={hexagonWidth} top={verticalCenter - verticalOffset * 2} left={horizontalCenter} />
            <Hexagon tile={BrickHexagon} center={brickJoker} width={hexagonWidth} top={verticalCenter - verticalOffset} left={horizontalCenter + horizontalOffset} />
            <Hexagon tile={WoodHexagon} center={woodJoker} width={hexagonWidth} top={verticalCenter + verticalOffset} left={horizontalCenter + horizontalOffset} />
        </StyledGameBoard>
    )
}

export default GameBoard