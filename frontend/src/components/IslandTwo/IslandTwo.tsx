import GameControlsContainer from "../IslandTwo/GameControlsContainer/GameControlsContainer"
import Layout from "../Layout/Layout"
import StyledGameBoardContainer from "../Layout/styles/StyledGameBoardContainer"
import GameBoard from "./GameBoard/GameBoard"
import GameOverModal from "./Modals/GameOverModal/GameOverModal"
import Scoreboard from "./Scoreboard/Scoreboard"

const IslandTwo = () => {
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

export default IslandTwo
