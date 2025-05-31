import StyledAsset from "../Asset/StyledAsset"
import { IconType, ResourceJokerType } from "../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectIsResourceJokerSpent } from "../../store/slices/resourceJokerSlice/resourceJokerSlice"
import { GetResourceJokerId } from "../../constants/mappings"
import StyledResourceJoker from "./styles/StyledResourceJoker"
import { selectIsKnightBuilt } from "../../store/slices/knightSlice/knightSlice"
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice/gameSlice"
import { clearResourceJokerFlag, selectAllDiceSpent, selectResourceJokerFlag, selectWildcardJokerFlag, setResourceJokerFlag } from "../../store/slices/diceSlice/diceSlice"
import { getResourceType } from "../../constants/resources"
import wool_joker_light from "/assets/jokers/light/wool-joker-light.svg"
import wheat_joker_light from "/assets/jokers/light/wheat-joker-light.svg"
import ore_joker_light from "/assets/jokers/light/ore-joker-light.svg"
import brick_joker_light from "/assets/jokers/light/brick-joker-light.svg"
import wood_joker_light from "/assets/jokers/light/wood-joker-light.svg"
import wool_joker_dark from "/assets/jokers/dark/wool-joker-dark.svg"
import wheat_joker_dark from "/assets/jokers/dark/wheat-joker-dark.svg"
import ore_joker_dark from "/assets/jokers/dark/ore-joker-dark.svg"
import brick_joker_dark from "/assets/jokers/dark/brick-joker-dark.svg"
import wood_joker_dark from "/assets/jokers/dark/wood-joker-dark.svg"
import selectionOpenSound from '/audio/selection_open.wav'
import selectionCloseSound from '/audio/selection_close.wav'
import useSound from "use-sound"
import { selectEffectiveVolume } from "../../store/slices/settingsSlice/settingsSlice"

interface ResourceJokerProps {
    type: ResourceJokerType
}

const resourceJokerIconsLight: Readonly<Record<number, string>> = {
    0: ore_joker_light,
    1: wheat_joker_light,
    2: wool_joker_light,
    3: wood_joker_light,
    4: brick_joker_light,
}

const resourceJokerIconsDark: Readonly<Record<number, string>> = {
    0: ore_joker_dark,
    1: wheat_joker_dark,
    2: wool_joker_dark,
    3: wood_joker_dark,
    4: brick_joker_dark,
}

const ResourceJoker = (props: ResourceJokerProps) => {
    // Props and constants

    const resourceJokerType = props.type
    const resourceJokerId = GetResourceJokerId(resourceJokerType)

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    // Each resource joker will line up with its corresponding knight (ex. knightId 1 = resourceJokerId 1)
    const resourceJokerAvailable = useAppSelector(state => selectIsKnightBuilt(state, resourceJokerId))
    const resourceJokerIsSpent = useAppSelector(state => selectIsResourceJokerSpent(state, resourceJokerId))
    const resourceJokerFlag = useAppSelector(state => selectResourceJokerFlag(state))
    const wildcardJokerFlag = useAppSelector(state => selectWildcardJokerFlag(state))
    const allDiceSpent = useAppSelector(state => selectAllDiceSpent(state))
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    // Can spend conditions

    const canSpendResourceJoker =
        gamePhaseBuilding
        && !resourceJokerIsSpent
        && resourceJokerAvailable
        && resourceJokerFlag == null
        && wildcardJokerFlag == null
        && !allDiceSpent

    const canCancelResourceJoker =
        gamePhaseBuilding
        && !resourceJokerIsSpent
        && resourceJokerFlag == resourceJokerId

    // Conditional rendering

    const iconType = resourceJokerIsSpent
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? resourceJokerIconsLight[resourceJokerType]
        : resourceJokerIconsDark[resourceJokerType]

    const tooltip = (): string => {
        if (canSpendResourceJoker) {
            return `Set any dice to ${getResourceType(resourceJokerId).toString()}`
        }

        if (canCancelResourceJoker) {
            return "Cancel"
        }

        return ""
    }

    const pulseDurationSeconds = (): number => {
        if (canSpendResourceJoker) {
            return 1
        }

        if (canCancelResourceJoker) {
            return 1.5
        }

        return 0
    }

    // Sound effects

    const [playSelectionOpenSound] = useSound(selectionOpenSound, {
        volume: volume
    })
    const [playSelectionCloseSound] = useSound(selectionCloseSound, {
        volume: volume
    })

    // Event handlers

    const handleClick = () => {
        if (canSpendResourceJoker) {
            playSelectionOpenSound()
            dispatch(setResourceJokerFlag(resourceJokerId))
            return
        }

        if (canCancelResourceJoker) {
            playSelectionCloseSound()
            dispatch(clearResourceJokerFlag())
            return
        }
    }

    return (
        <div onClick={handleClick}>
            <StyledResourceJoker
                title={tooltip()}
                $pointer={canSpendResourceJoker || canCancelResourceJoker}
                $pulse={canSpendResourceJoker || canCancelResourceJoker}
                $pulseDurationSeconds={pulseDurationSeconds()}
                $pending={canCancelResourceJoker}>
                <StyledAsset src={icon} alt={`Resource joker ${props.type}`} />
            </StyledResourceJoker>
        </div>
    )
}

export default ResourceJoker
