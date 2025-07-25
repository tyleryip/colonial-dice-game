import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import PlayAgainButton from "../../../Buttons/PlayAgainButton/PlayAgainButton";
import StyledModalFooter from "../../../Modals/styles/StyledModalFooter";
import StyledModalHeader from "../../../Modals/styles/StyledModalHeader";
import StyledGameOverModalBody from "./styles/StyledGameOverModalBody";
import { useState } from "react";
import { addLeaderboardEntry, AddLeaderboardEntryPayload } from "../../../../store/slices/local/leaderboardSlice/leaderboardSlice";
import StyledLeaderboardNameInput from "./styles/StyledLeaderboardNameInput";
import { GameMode } from "../../../../constants/enumerations";
import { islandTwoResetGame, selectIslandTwoCurrentTurn, selectIslandTwoIsGamePhaseRolling } from "../../../../store/slices/session/islandTwo/gameSlice/islandTwoGameSlice";
import { islandTwoResetScore, selectIslandTwoScore } from "../../../../store/slices/session/islandTwo/scoreSlice/islandTwoScoreSlice";
import { islandTwoResetDice } from "../../../../store/slices/session/islandTwo/diceSlice/islandTwoDiceSlice";
import { islandTwoResetKnights } from "../../../../store/slices/session/islandTwo/knightSlice/islandTwoKnightSlice";
import { islandTwoResetActiveResourceJoker } from "../../../../store/slices/session/islandTwo/resourceJokerSlice/islandTwoResourceJokerSlice";
import { islandTwoResetStructures } from "../../../../store/slices/session/islandTwo/structureSlice/islandTwoStructureSlice";

const GameOverModal = () => {
    // Props and constants

    const [leaderboardName, setLeaderboardName] = useState("")

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseRolling = useAppSelector(state => selectIslandTwoIsGamePhaseRolling(state))
    const currentTurn = useAppSelector(state => selectIslandTwoCurrentTurn(state))
    const score = useAppSelector(state => selectIslandTwoScore(state))

    // Conditional rendering

    const show = gamePhaseRolling && score >= 10

    // Since the current turn is 0-based, we add 1 (ex. the first play occurs on the first turn)
    const currentDisplayTurn = currentTurn + 1

    const totalScoreDisplay = currentDisplayTurn <= 12 ? `${currentDisplayTurn} turns!` : `${currentDisplayTurn} turns.`

    const saveToLeaderboard = leaderboardName.length > 0

    const playAgainButtonCopy = saveToLeaderboard
        ? "Save score and play again"
        : "Play again without saving";

    // Event handlers

    const handlePlayAgain = () => {
        if (saveToLeaderboard) {
            const addLeaderboardEntryPayload: AddLeaderboardEntryPayload = {
                name: leaderboardName,
                mode: GameMode.IslandTwo,
                score: currentDisplayTurn
            }

            dispatch(addLeaderboardEntry(addLeaderboardEntryPayload))

            // Reset leaderboard name for the next game
            setLeaderboardName("")
        }

        dispatch(islandTwoResetGame());
        dispatch(islandTwoResetKnights());
        dispatch(islandTwoResetActiveResourceJoker());
        dispatch(islandTwoResetStructures());
        dispatch(islandTwoResetScore());
        dispatch(islandTwoResetDice());
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
                <p>{`You reached 10 points in ${totalScoreDisplay}`}</p>
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
