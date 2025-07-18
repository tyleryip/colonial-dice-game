import GameControlsContainer from "../GameControlsContainer/GameControlsContainer"
import Layout from "../Layout/Layout"
import StyledGameBoardContainer from "../Layout/styles/StyledGameBoardContainer"
import GameBoard from "./GameBoard/GameBoard"

const IslandTwo = () => {
    return (
        <Layout>
                <StyledGameBoardContainer>
                    <GameBoard />
                    <GameControlsContainer />
                </StyledGameBoardContainer>
        </Layout>
    )
}

export default IslandTwo
