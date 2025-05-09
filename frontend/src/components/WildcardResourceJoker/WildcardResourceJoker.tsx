import { IconType, ResourceJokerType } from "../../constants/enumerations"
import { GetResourceJokerId } from "../../constants/mappings"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice"
import { selectIsKnightBuilt } from "../../store/slices/knightSlice"
import { selectIsResourceJokerSpent } from "../../store/slices/resourceJokerSlice"
import { setResourceJokerFlag } from "../../store/slices/diceSlice"
import StyledResourceJoker from "../ResourceJoker/styles/StyledResourceJoker"
import StyledAsset from "../Asset/StyledAsset"

// Light icons
import wool_joker_light from "../../assets/jokers/light/wool-joker-light.svg"
import wheat_joker_light from "../../assets/jokers/light/wheat-joker-light.svg"
import ore_joker_light from "../../assets/jokers/light/ore-joker-light.svg"
import brick_joker_light from "../../assets/jokers/light/brick-joker-light.svg"
import wood_joker_light from "../../assets/jokers/light/wood-joker-light.svg"
import wildcard_joker_light from "../../assets/jokers/light/wildcard-joker-light.svg"

// Dark icons
import wool_joker_dark from "../../assets/jokers/dark/wool-joker-dark.svg"
import wheat_joker_dark from "../../assets/jokers/dark/wheat-joker-dark.svg"
import ore_joker_dark from "../../assets/jokers/dark/ore-joker-dark.svg"
import wildcard_joker_dark from "../../assets/jokers/dark/wildcard-joker-dark.svg"
import brick_joker_dark from "../../assets/jokers/dark/brick-joker-dark.svg"
import wood_joker_dark from "../../assets/jokers/dark/wood-joker-dark.svg"
import { useState } from "react"
import TradingPopup from "../Popups/TradingPopup/TradingPopup"
import { ResourceType } from "../../constants/resources"

const resourceJokerIconsLight: Readonly<Record<number, string>> = {
    0: ore_joker_light,
    1: wheat_joker_light,
    2: wool_joker_light,
    3: wood_joker_light,
    4: brick_joker_light,
    5: wildcard_joker_light
}

const resourceJokerIconsDark: Readonly<Record<number, string>> = {
    0: ore_joker_dark,
    1: wheat_joker_dark,
    2: wool_joker_dark,
    3: wood_joker_dark,
    4: brick_joker_dark,
    5: wildcard_joker_dark
}

const WildcardResourceJoker = () => {
    // Props and constants
    const resourceJokerId = GetResourceJokerId(ResourceJokerType.Wildcard)
    const [tradingPopupOpen, setTradingPopupOpen] = useState(false);
    const [targetResource, setTargetResource] = useState<number | null>(null)

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

    const icon = (): string => {
        if (targetResource != null) {
            return resourceJokerIconsLight[targetResource]
        }

        return iconType === IconType.Light
            ? resourceJokerIconsLight[resourceJokerId]
            : resourceJokerIconsDark[resourceJokerId]
    }

    const getTradingPopupTooltip = (resourceType: ResourceType) => {
        return `Trade for ${resourceType.name}`;
    }

    const pulseDurationSeconds = (): number => {
        if (canSpendResourceJoker) {
            return 1
        }

        if (targetResource != null) {
            return 1.5
        }

        return 0
    }

    // Event handlers

    const handleClick = () => {
        if (canSpendResourceJoker) {
            setTradingPopupOpen(true)
        }
    }

    const handleTradePopupClick = (resourceId: number) => {
        setTargetResource(resourceId)

        setTradingPopupOpen(false);
    }

    const handleCloseTradePopup = () => {
        setTradingPopupOpen(false);
    }

    return (
        <div onClick={handleClick}>
            <TradingPopup
                tooltip={getTradingPopupTooltip}
                disabled={!tradingPopupOpen}
                onClick={handleTradePopupClick}
                onClose={handleCloseTradePopup} />
            <StyledResourceJoker
                $pointer={gamePhaseBuilding && canSpendResourceJoker}
                $pulse={gamePhaseBuilding && canSpendResourceJoker}
                $pulseDurationSeconds={pulseDurationSeconds()}
                $pending={targetResource != null}>
                <StyledAsset src={icon()} />
            </StyledResourceJoker>
        </div>
    )
}

export default WildcardResourceJoker
