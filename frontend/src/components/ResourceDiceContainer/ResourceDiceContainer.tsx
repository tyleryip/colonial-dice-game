import { useState } from "react"
import ResourceDice from "../ResourceDice/ResourceDice"
import StyledButtonTray from "./styles/StyledButtonTray"
import StyledDiceTray from "./styles/StyledDiceTray"
import StyledResourceDiceContainer from "./styles/StyledResourceDiceContainer"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { resetDice, rollDice, selectDiceValues, selectIsLocked, selectRollCount, toggleLock } from "../../store/slices/diceSlice"
import RollButton from "../Buttons/RollButton/RollButton"
import BuildButton from "../Buttons/BuildButton/BuildButton"

const ResourceDiceContainer = () => {
    const diceValues = useAppSelector((state) => selectDiceValues(state))
    const isLocked = useAppSelector((state) => selectIsLocked(state))
    const rollCount = useAppSelector((state) => selectRollCount(state))
    const dispatch = useAppDispatch();

    const [rolling, setRolling] = useState(false)

    const diceIds = [0, 1, 2, 3, 4, 5]
    const rollDurationMilliseconds = 750

    function handleRollButtonClicked() {
        setTimeout(() => {
            dispatch(rollDice());
            setRolling(false);
        }, rollDurationMilliseconds);

        setRolling(true);
    }

    function handleBuildButtonClicked() {
        dispatch(resetDice());
    }

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
                        locked={isLocked[value]}
                        onToggleDiceLocked={() => dispatch(toggleLock(value))} />
                )}
            </StyledDiceTray>
            <StyledButtonTray >
                <RollButton disabled={rolling} handleClick={handleRollButtonClicked} rollCount={rollCount} />
                <BuildButton handleClick={handleBuildButtonClicked} />
            </StyledButtonTray>
        </StyledResourceDiceContainer>
    )
}

export default ResourceDiceContainer
