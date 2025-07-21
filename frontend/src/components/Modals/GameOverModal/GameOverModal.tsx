import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { islandOneResetGame, selectIslandOneIsGamePhaseRolling } from "../../../store/slices/session/islandOne/gameSlice/islandOneGameSlice";
import { resetScore, selectAllScoresFilled, selectTotalScore } from "../../../store/slices/session/islandOne/scoreSlice/scoreSlice";
import PlayAgainButton from "../../Buttons/PlayAgainButton/PlayAgainButton";
import StyledModalFooter from "../styles/StyledModalFooter";
import StyledModalHeader from "../styles/StyledModalHeader";
import StyledGameOverModalBody from "./styles/StyledGameOverModalBody";
import { useState } from "react";
import { addLeaderboardEntry, AddLeaderboardEntryPayload } from "../../../store/slices/local/leaderboardSlice/leaderboardSlice";
import { islandOneResetDice } from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice";
import { islandOneResetKnights } from "../../../store/slices/session/islandOne/knightSlice/islandOneKnightSlice";
import { islandOneResetResourceJokers } from "../../../store/slices/session/islandOne/resourceJokerSlice/resourceJokerSlice";
import { islandOneResetStructures } from "../../../store/slices/session/islandOne/structureSlice/islandOneStructureSlice";
import StyledLeaderboardNameInput from "./styles/StyledLeaderboardNameInput";

const GameOverModal = () => {
    // Props and constants

    const [leaderboardName, setLeaderboardName] = useState("")

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseRolling = useAppSelector(state => selectIslandOneIsGamePhaseRolling(state))
    const allScoresFilled = useAppSelector(state => selectAllScoresFilled(state))
    const totalScore = useAppSelector(state => selectTotalScore(state))

    // Conditional rendering

    const show = gamePhaseRolling && allScoresFilled

    const totalScoreDisplay = totalScore > 65 ? `${totalScore}!` : `${totalScore}.`

    const saveToLeaderboard = leaderboardName.length > 0

    const playAgainButtonCopy = saveToLeaderboard
        ? "Save score and play again"
        : "Play again without saving";

    // Event handlers

    const handlePlayAgain = () => {
        if (saveToLeaderboard) {
            const addLeaderboardEntryPayload: AddLeaderboardEntryPayload = {
                name: leaderboardName,
                score: totalScore
            }

            dispatch(addLeaderboardEntry(addLeaderboardEntryPayload))

            // Reset leaderboard name for the next game
            setLeaderboardName("")
        }

        dispatch(islandOneResetGame());
        dispatch(islandOneResetKnights());
        dispatch(islandOneResetResourceJokers());
        dispatch(islandOneResetStructures());
        dispatch(resetScore());
        dispatch(islandOneResetDice());
    }

    return (
        <Modal
            centered
            show={show}
            backdrop="static"
        >
            <StyledModalHeader>
                {"Game Over"}
            </StyledModalHeader>
            <StyledGameOverModalBody>
                <p>{`Your score was ${totalScoreDisplay}`}</p>
                <p>{"Enter your name to save your score to the leaderboard or play again without saving."}</p>
                <StyledLeaderboardNameInput type="text" label={"Name"} placeholder="Name" value={leaderboardName} onChange={(event) => setLeaderboardName(event.target.value)} />
            </StyledGameOverModalBody>
            <StyledModalFooter>
                <PlayAgainButton copy={playAgainButtonCopy} onClick={handlePlayAgain} />
            </StyledModalFooter>
        </Modal>
    )
}

export default GameOverModal
