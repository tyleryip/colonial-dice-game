import { useAppSelector } from "../../store/hooks"
import { selectAllDiceSpent, selectAnyDiceSpent, selectResourceJokerFlag, selectRollCount, selectWildcardJokerFlag } from "../../store/slices/session/islandOne/diceSlice/diceSlice"
import { selectIsGamePhaseBuilding, selectIsGamePhaseRolling } from "../../store/slices/session/islandOne/gameSlice/gameSlice"
import { selectShowInstructions } from "../../store/slices/local/settingsSlice/settingsSlice"
import StyledInstructions from "./styles/StyledInstructions"

interface InstructionProps {
    rolling: boolean,
    canTrade: boolean
}

const Instructions = (props: InstructionProps) => {
    // Selectors

    const showInstructions = useAppSelector(state => selectShowInstructions(state))
    const gamePhaseRolling = useAppSelector(state =>
        selectIsGamePhaseRolling(state)
    );
    const gamePhaseBuilding = useAppSelector(state =>
        selectIsGamePhaseBuilding(state)
    );
    const rollCount = useAppSelector(state =>
        selectRollCount(state)
    );
    const anyDiceSpent = useAppSelector(state => selectAnyDiceSpent(state))
    const allDiceSpent = useAppSelector(state => selectAllDiceSpent(state))
    const resourceJokerFlag = useAppSelector(state =>
        selectResourceJokerFlag(state)
    );
    const wildcardJokerFlag = useAppSelector(state =>
        selectWildcardJokerFlag(state)
    );

    // Conditional rendering

    /**
     * Based on the current game state, return the appropriate instructions to display to the user
     * @returns The instruction string to display
     */
    const getInstructionCopy = (): string => {
        if (!showInstructions) {
            return ""
        }

        if (gamePhaseRolling) {
            if (rollCount == 0 || (props.rolling && rollCount <= 1)) {
                return "Click the roll button."
            }

            if (rollCount > 0) {
                return "Continue rolling or click the build button to build."
            }
        }

        if (gamePhaseBuilding) {
            if (resourceJokerFlag != null || wildcardJokerFlag != null) {
                return "Choose the die to set or cancel."
            }

            if (props.canTrade) {
                return "Click gold to trade."
            }

            // TODO: only show build prompt if the user can actually build with available resources
            if (!anyDiceSpent) {
                return "Click a structure or knight to build."
            }

            if (allDiceSpent) {
                return "Click the dice button to roll."
            }

            return "Continue building or click the dice button to roll."
        }

        // Default to empty instructions
        return ""
    };

    return (
        <StyledInstructions>
            {getInstructionCopy()}
        </StyledInstructions>
    )
}

export default Instructions
