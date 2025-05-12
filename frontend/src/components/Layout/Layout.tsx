import GameBoard from "../GameBoard/GameBoard";
import Navbar from "../Navbar/Navbar";
import ResourceDiceContainer from "../ResourceDiceContainer/ResourceDiceContainer";
import Scoreboard from "../Scoreboard/Scoreboard";
import StyledLayout from "./styles/StyledLayout";

export default function Layout() {
    return (<StyledLayout>
        <Navbar />
        <Scoreboard />
        <GameBoard />
        <ResourceDiceContainer />
    </StyledLayout>)
}