import Modal from "react-bootstrap/Modal";
import { useAppSelector } from "../../../store/hooks";
import { selectIsGamePhaseRolling } from "../../../store/slices/gameSlice";
import { selectAllScoresFilled, selectTotalScore } from "../../../store/slices/scoreSlice";
import PlayAgainButton from "../../Buttons/PlayAgainButton/PlayAgainButton";
import StyledModalFooter from "../styles/StyledModalFooter";
import StyledModalHeader from "../styles/StyledModalHeader";
import StyledGameOverModalBody from "./styles/StyledGameOverModalBody";

const GameOverModal = () => {
    // Selectors

    const gamePhaseRolling = useAppSelector(state => selectIsGamePhaseRolling(state))
    const allScoresFilled = useAppSelector(state => selectAllScoresFilled(state))
    const totalScore = useAppSelector(state => selectTotalScore(state))

    // Conditional rendering

    const show = gamePhaseRolling && allScoresFilled

    // Copy

    const headerCopy = "Game Over"
    const scoreCopy = `Your score was ${totalScore}.`
    const playAgainCopy = "Press the button to play again."

    return (
        <Modal
            centered
            show={show}
            backdrop="static"
        >
            <StyledModalHeader>
                {headerCopy}
            </StyledModalHeader>
            <StyledGameOverModalBody>
                <p>{scoreCopy}</p>
                <p>{playAgainCopy}</p>
            </StyledGameOverModalBody>
            <StyledModalFooter>
                <PlayAgainButton />
            </StyledModalFooter>
        </Modal>
    )
}

export default GameOverModal
