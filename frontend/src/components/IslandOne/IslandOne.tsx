import GameBoard from "./GameBoard/GameBoard"
import GameControlsContainer from "./GameControlsContainer/GameControlsContainer"
import Layout from "../Layout/Layout"
import StyledGameBoardContainer from "../Layout/styles/StyledGameBoardContainer"
import Scoreboard from "./Scoreboard/Scoreboard"

const IslandOne = () => {

    return (
        <Layout>
            <Scoreboard />
            <StyledGameBoardContainer>
                <GameBoard />
                <GameControlsContainer />
            </StyledGameBoardContainer>
        </Layout>
    )
}

export default IslandOne
