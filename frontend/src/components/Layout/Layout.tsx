import GameBoard from "../GameBoard/GameBoard";
import ResourceDiceContainer from "../ResourceDiceContainer/ResourceDiceContainer";
import StyledLayout from "./styles/StyledLayout";

export default function Layout() {
    return (<StyledLayout>
        <GameBoard />
        <ResourceDiceContainer />
    </StyledLayout>)
}