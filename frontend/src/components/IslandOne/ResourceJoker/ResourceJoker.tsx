import StyledAsset from "../../Asset/StyledAsset"
import { IconType, ResourceJokerType } from "../../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { GetIslandOneResourceJokerType } from "../../../constants/mappings"
import StyledResourceJoker from "./styles/StyledResourceJoker"
import { selectIslandOneIsKnightBuilt, selectIslandOneIsKnightSpent } from "../../../store/slices/session/islandOne/knightSlice/islandOneKnightSlice"
import { selectIslandOneIsGamePhaseBuilding } from "../../../store/slices/session/islandOne/gameSlice/islandOneGameSlice"
import { islandOneClearResourceJokerFlag, selectIslandOneAllDiceSpent, selectIslandOneResourceJokerFlag, islandOneSetResourceJokerFlag } from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice"
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
import { islandOneResetActiveResourceJoker, islandOneSetActiveResourceJoker, selectIslandOneActiveResourceJoker } from "../../../store/slices/session/islandOne/resourceJokerSlice/islandOneResourceJokerSlice"

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
    const resourceJokerType = GetIslandOneResourceJokerType(resourceJokerId)

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIslandOneIsGamePhaseBuilding(state))
    const isKnightBuilt = useAppSelector(state => selectIslandOneIsKnightBuilt(state, resourceJokerId))
    const isKnightSpent = useAppSelector(state => selectIslandOneIsKnightSpent(state, resourceJokerId))
    const activeResourceJokerId = useAppSelector(state => selectIslandOneActiveResourceJoker(state))
    const resourceJokerFlag = useAppSelector(state => selectIslandOneResourceJokerFlag(state))
    const allDiceSpent = useAppSelector(state => selectIslandOneAllDiceSpent(state))
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    // Can spend conditions

    const resourceJokerAvailable = isKnightBuilt && !isKnightSpent

    const canSpendResourceJoker =
        gamePhaseBuilding
        && resourceJokerAvailable
        && resourceJokerFlag == null
        && activeResourceJokerId == null
        && !allDiceSpent

    const canCancelResourceJoker =
        gamePhaseBuilding
        && resourceJokerAvailable
        && activeResourceJokerId == resourceJokerId

    // Conditional rendering

    const iconType = isKnightSpent
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
            dispatch(islandOneSetResourceJokerFlag(resourceJokerId))
            dispatch(islandOneSetActiveResourceJoker(resourceJokerId))
            return
        }

        if (canCancelResourceJoker) {
            playSelectionCloseSound()
            dispatch(islandOneClearResourceJokerFlag())
            dispatch(islandOneResetActiveResourceJoker())
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
