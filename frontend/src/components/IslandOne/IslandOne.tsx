import GameBoard from "./GameBoard/GameBoard"
import GameControlsContainer from "./GameControlsContainer/GameControlsContainer"
import Layout from "../Layout/Layout"
import StyledGameBoardContainer from "../Layout/styles/StyledGameBoardContainer"
import Scoreboard from "./Scoreboard/Scoreboard"
import GameOverModal from "./Modals/GameOverModal/GameOverModal"

const IslandOne = () => {

    return (
        <Layout>
            <GameOverModal />
            <Scoreboard />
            <StyledGameBoardContainer>
                <GameBoard />
                <GameControlsContainer />
            </StyledGameBoardContainer>
        </Layout>
    )
}

export default IslandOne
