import GameBoard from "../GameBoard/GameBoard";
import GameControlsContainer from "../GameControlsContainer/GameControlsContainer";
import Scoreboard from "../Scoreboard/Scoreboard";
import StyledGameBoardContainer from "./styles/StyledGameBoardContainer";
import StyledLayout from "./styles/StyledLayout";
import StyledVerticallyCenteredContainer from "./styles/StyledVerticallyCenteredContainer";

export default function Layout() {
    return (
        <StyledLayout>
            <StyledVerticallyCenteredContainer>
                <Scoreboard />
                <StyledGameBoardContainer>
                    <GameBoard />
                    <GameControlsContainer />
                </StyledGameBoardContainer>
            </StyledVerticallyCenteredContainer>
        </StyledLayout>)
}