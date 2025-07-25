import GameControlsContainer from "../IslandTwo/GameControlsContainer/GameControlsContainer"
import Layout from "../Layout/Layout"
import StyledGameBoardContainer from "../Layout/styles/StyledGameBoardContainer"
import GameBoard from "./GameBoard/GameBoard"
import GameOverModal from "./Modals/GameOverModal/GameOverModal"

const IslandTwo = () => {
    return (
        <Layout>
            <GameOverModal />
            <StyledGameBoardContainer>
                <GameBoard />
                <GameControlsContainer />
            </StyledGameBoardContainer>
        </Layout>
    )
}

export default IslandTwo
