import { useState } from "react"
import ResourceDice from "../ResourceDice/ResourceDice"
import StyledButtonTray from "./styles/StyledButtonTray"
import StyledDiceTray from "./styles/StyledDiceTray"
import StyledResourceDiceContainer from "./styles/StyledResourceDiceContainer"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { resetDice, rollDice, selectDiceValues, selectIsLocked, selectIsSpent, selectRollCount, setRollCount, toggleDiceLock, unlockAllDice } from "../../store/slices/diceSlice"
import RollButton from "../Buttons/RollButton/RollButton"
import BuildButton from "../Buttons/BuildButton/BuildButton"
import { selectCurrentGamePhase, setGamePhase } from "../../store/slices/gameSlice"
import { GamePhase, ResourceType } from "../../constants/enumerations"

const ResourceDiceContainer = () => {
    const currentGamePhase = useAppSelector((state) => selectCurrentGamePhase(state))
    const diceValues = useAppSelector((state) => selectDiceValues(state))
    const isLocked = useAppSelector((state) => selectIsLocked(state))
    const isSpent = useAppSelector((state) => selectIsSpent(state))
    const rollCount = useAppSelector((state) => selectRollCount(state))

    const dispatch = useAppDispatch();

    const [rolling, setRolling] = useState(false)

    const diceIds = [0, 1, 2, 3, 4, 5]
    const rollDurationMilliseconds = 750

    // Event handlers

    function handleRollButtonClicked() {
        if (currentGamePhase == GamePhase.Building) {
            // if the user is starting to roll after completing the build phase, we need to update the phase to rolling
            dispatch(setGamePhase(GamePhase.Rolling))
        }

        setTimeout(() => {
            // Generate new values for the dice after rolling
            dispatch(rollDice());

            // Stop rolling animation
            setRolling(false);

        }, rollDurationMilliseconds);

        // Start rolling animation
        setRolling(true);
    }

    function handleBuildButtonClicked() {
        if (currentGamePhase == GamePhase.Rolling) {
            dispatch(setGamePhase(GamePhase.Building))

            // Remove the locks from the dice since they cannot be rolled anymore
            dispatch(unlockAllDice())

            // Make all the dice in the Roll Button appear used
            dispatch(setRollCount(3))
        }

        if (currentGamePhase == GamePhase.Building) {
            dispatch(setGamePhase(GamePhase.Rolling))
            dispatch(resetDice())
        }
    }

    // Conditional rendering

    const rollButtonDisabled = (currentGamePhase == GamePhase.Rolling && rollCount >= 3)
        || currentGamePhase == GamePhase.Building
        || rolling

    const buildButtonDisabled = (currentGamePhase == GamePhase.Rolling && rollCount == 0)

    const isTradeable = diceValues.filter(diceValue => diceValue == ResourceType.Gold).length > 1;

    return (
        <StyledResourceDiceContainer>
            <StyledDiceTray>
                {diceIds.map((value: number) =>
                    <ResourceDice
                        key={value}
                        id={value}
                        value={diceValues[value]}
                        rolling={rolling}
                        rollDurationMilliseconds={rollDurationMilliseconds}
                        isLocked={isLocked[value]}
                        isSpent={isSpent[value]}
                        isTradeable={isTradeable}
                        currentGamePhase={currentGamePhase}
                        onToggleDiceLocked={() => dispatch(toggleDiceLock(value))} />
                )}
            </StyledDiceTray>
            <StyledButtonTray >
                <RollButton disabled={rollButtonDisabled} handleClick={handleRollButtonClicked} rollCount={rollCount} />
                <BuildButton disabled={buildButtonDisabled} handleClick={handleBuildButtonClicked} currentGamePhase={currentGamePhase} />
            </StyledButtonTray>
        </StyledResourceDiceContainer>
    )
}

export default ResourceDiceContainer
