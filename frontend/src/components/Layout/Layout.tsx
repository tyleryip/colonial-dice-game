import GameBoard from "../GameBoard/GameBoard";
import ResourceDiceContainer from "../ResourceDiceContainer/ResourceDiceContainer";
import Scoreboard from "../Scoreboard/Scoreboard";
import StyledLayout from "./styles/StyledLayout";

export default function Layout() {
    return (<StyledLayout>
        <Scoreboard />
        <GameBoard />
        <ResourceDiceContainer />
    </StyledLayout>)
}