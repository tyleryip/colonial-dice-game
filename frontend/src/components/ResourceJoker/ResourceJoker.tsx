import StyledAsset from "../Asset/StyledAsset"
import { IconType, ResourceJokerType } from "../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectIsResourceJokerSpent } from "../../store/slices/resourceJokerSlice"
import { GetResourceJokerId } from "../../constants/mappings"
import StyledResourceJoker from "./styles/StyledResourceJoker"
import { selectIsKnightBuilt } from "../../store/slices/knightSlice"
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice"

// Light icons
import wool_joker_light from "../../assets/jokers/light/wool-joker-light.svg"
import wheat_joker_light from "../../assets/jokers/light/wheat-joker-light.svg"
import ore_joker_light from "../../assets/jokers/light/ore-joker-light.svg"
import wildcard_joker_light from "../../assets/jokers/light/wildcard-joker-light.svg"
import brick_joker_light from "../../assets/jokers/light/brick-joker-light.svg"
import wood_joker_light from "../../assets/jokers/light/wood-joker-light.svg"

// Dark icons
import wool_joker_dark from "../../assets/jokers/dark/wool-joker-dark.svg"
import wheat_joker_dark from "../../assets/jokers/dark/wheat-joker-dark.svg"
import ore_joker_dark from "../../assets/jokers/dark/ore-joker-dark.svg"
import wildcard_joker_dark from "../../assets/jokers/dark/wildcard-joker-dark.svg"
import brick_joker_dark from "../../assets/jokers/dark/brick-joker-dark.svg"
import wood_joker_dark from "../../assets/jokers/dark/wood-joker-dark.svg"
import { setResourceJokerFlag } from "../../store/slices/diceSlice"

interface ResourceJokerProps {
    type: ResourceJokerType
}

const resourceJokerIconsLight: { -readonly [key in ResourceJokerType]: string } = {
    [ResourceJokerType.Ore]: ore_joker_light,
    [ResourceJokerType.Wheat]: wheat_joker_light,
    [ResourceJokerType.Wool]: wool_joker_light,
    [ResourceJokerType.Wood]: wood_joker_light,
    [ResourceJokerType.Brick]: brick_joker_light,
    [ResourceJokerType.Wildcard]: wildcard_joker_light
}

const resourceJokerIconsDark: { -readonly [key in ResourceJokerType]: string } = {
    [ResourceJokerType.Ore]: ore_joker_dark,
    [ResourceJokerType.Wheat]: wheat_joker_dark,
    [ResourceJokerType.Wool]: wool_joker_dark,
    [ResourceJokerType.Wood]: wood_joker_dark,
    [ResourceJokerType.Brick]: brick_joker_dark,
    [ResourceJokerType.Wildcard]: wildcard_joker_dark
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

    // Can spend conditions

    const canSpendResourceJoker =
        gamePhaseBuilding
        && !resourceJokerIsSpent
        && resourceJokerAvailable

    // Conditional rendering

    const iconType = resourceJokerIsSpent
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? resourceJokerIconsLight[resourceJokerType]
        : resourceJokerIconsDark[resourceJokerType]

    // Event handlers

    function handleClick() {
        // TODO: handle the wildcard joker selection

        if (canSpendResourceJoker) {
            dispatch(setResourceJokerFlag(resourceJokerId))
        }
    }

    return (
        <div onClick={handleClick}>
            <StyledResourceJoker
                $pointer={gamePhaseBuilding && canSpendResourceJoker}
                $pulse={gamePhaseBuilding && canSpendResourceJoker}>
                <StyledAsset src={icon} />
            </StyledResourceJoker>
        </div>
    )
}

export default ResourceJoker
