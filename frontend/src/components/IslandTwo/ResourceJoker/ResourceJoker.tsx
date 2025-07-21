import StyledAsset from "../../Asset/StyledAsset"
import { IconType, ResourceJokerType } from "../../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { GetIslandTwoResourceJokerType } from "../../../constants/mappings"
import StyledResourceJoker from "./styles/StyledResourceJoker"
import { getResourceType } from "../../../constants/resources"
import wool_joker_light from "/assets/jokers/light/wool-joker-light.png"
import wheat_joker_light from "/assets/jokers/light/wheat-joker-light.png"
import ore_joker_light from "/assets/jokers/light/ore-joker-light.png"
import brick_joker_light from "/assets/jokers/light/brick-joker-light.png"
import wood_joker_light from "/assets/jokers/light/wood-joker-light.png"
import wool_joker_dark from "/assets/jokers/dark/wool-joker-dark.png"
import wheat_joker_dark from "/assets/jokers/dark/wheat-joker-dark.png"
import ore_joker_dark from "/assets/jokers/dark/ore-joker-dark.png"
import brick_joker_dark from "/assets/jokers/dark/brick-joker-dark.png"
import wood_joker_dark from "/assets/jokers/dark/wood-joker-dark.png"
import selectionOpenSound from '/audio/selection_open.wav'
import selectionCloseSound from '/audio/selection_close.wav'
import useSound from "use-sound"
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice"
import { selectIslandTwoIsGamePhaseBuilding } from "../../../store/slices/session/islandTwo/gameSlice/islandTwoGameSlice"
import { selectIslandTwoIsKnightBuilt } from "../../../store/slices/session/islandTwo/knightSlice/islandTwoKnightSlice"
import { islandTwoClearResourceJokerFlag, islandTwoSetResourceJokerFlag, selectIslandTwoAllDiceSpent, selectIslandTwoResourceJokerFlag, selectIslandTwoWildcardJokerFlag } from "../../../store/slices/session/islandTwo/diceSlice/islandTwoDiceSlice"
import { selectIslandTwoIsResourceJokerSpent } from "../../../store/slices/session/islandTwo/resourceJokerSlice/resourceJokerSlice"

interface ResourceJokerProps {
    id: ResourceJokerType
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

    const resourceJokerId = props.id
    const resourceJokerType = GetIslandTwoResourceJokerType(resourceJokerId)

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIslandTwoIsGamePhaseBuilding(state))
    // Each resource joker will line up with its corresponding knight (ex. knightId 1 = resourceJokerId 1)
    const resourceJokerAvailable = useAppSelector(state => selectIslandTwoIsKnightBuilt(state, resourceJokerId))
    const resourceJokerIsSpent = useAppSelector(state => selectIslandTwoIsResourceJokerSpent(state, resourceJokerId))
    const resourceJokerFlag = useAppSelector(state => selectIslandTwoResourceJokerFlag(state))
    const wildcardJokerFlag = useAppSelector(state => selectIslandTwoWildcardJokerFlag(state))
    const allDiceSpent = useAppSelector(state => selectIslandTwoAllDiceSpent(state))
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
            dispatch(islandTwoSetResourceJokerFlag(resourceJokerId))
            return
        }

        if (canCancelResourceJoker) {
            playSelectionCloseSound()
            dispatch(islandTwoClearResourceJokerFlag())
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
                <StyledAsset src={icon} alt={`Resource joker ${props.id}`} />
            </StyledResourceJoker>
        </div>
    )
}

export default ResourceJoker
