import { ResourceJokerType } from "../../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { selectIsGamePhaseBuilding } from "../../../store/slices/session/islandOne/gameSlice/gameSlice"
import StyledResourceJoker from "./styles/StyledResourceJoker"
import StyledAsset from "../../Asset/StyledAsset"
import { useState } from "react"
import { ResourceType } from "../../../constants/resources"
import WildcardTradingPopup from "../../Popups/WildcardTradingPopup/WildcardTradingPopup"
import { islandOneClearWildcardJokerFlag, selectIslandOneAllDiceSpent, selectIslandOneResourceJokerFlag, selectIslandOneWildcardJokerFlag, islandOneSetWildcardJokerFlag } from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice"
import wool_joker_light from "/assets/jokers/light/wool-joker-light.png"
import wheat_joker_light from "/assets/jokers/light/wheat-joker-light.png"
import ore_joker_light from "/assets/jokers/light/ore-joker-light.png"
import brick_joker_light from "/assets/jokers/light/brick-joker-light.png"
import wood_joker_light from "/assets/jokers/light/wood-joker-light.png"
import wildcard_joker_light from "/assets/jokers/light/wildcard-joker-light.png"
import wool_joker_dark from "/assets/jokers/dark/wool-joker-dark.png"
import wheat_joker_dark from "/assets/jokers/dark/wheat-joker-dark.png"
import ore_joker_dark from "/assets/jokers/dark/ore-joker-dark.png"
import wildcard_joker_half_dark from "/assets/jokers/dark/wildcard-joker-half-dark.png"
import wildcard_joker_full_dark from "/assets/jokers/dark/wildcard-joker-full-dark.png"
import brick_joker_dark from "/assets/jokers/dark/brick-joker-dark.png"
import wood_joker_dark from "/assets/jokers/dark/wood-joker-dark.png"
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice"
import useSound from "use-sound"
import selectionOpenSound from '/audio/selection_open.wav'
import selectionCloseSound from '/audio/selection_close.wav'

interface WildcardJokerProps {
    id: number
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

const WildcardResourceJoker = (props: WildcardJokerProps) => {
    // Props and constants

    const resourceJokerId = props.id
    const [tradingPopupOpen, setTradingPopupOpen] = useState(false);

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    // Each resource joker will line up with its corresponding knight (ex. knightId 1 = resourceJokerId 1)
    const resourceJokerAvailable = false
    const resourceJokerIsSpent = false
    const resourceJokerFlag = null
    const wildcardJokerFlag = null
    const allDiceSpent = useAppSelector(state => selectIslandOneAllDiceSpent(state))
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    /*
    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    // Each resource joker will line up with its corresponding knight (ex. knightId 1 = resourceJokerId 1)
    const resourceJokerAvailable = useAppSelector(state => selectIsKnightBuilt(state, resourceJokerId))
    const resourceJokerIsSpent = useAppSelector(state => selectIsResourceJokerSpent(state, resourceJokerId))
    const resourceJokerFlag = useAppSelector(state => selectResourceJokerFlag(state))
    const wildcardJokerFlag = useAppSelector(state => selectWildcardJokerFlag(state))
    const allDiceSpent = useAppSelector(state => selectAllDiceSpent(state))
    const volume = useAppSelector(state => selectEffectiveVolume(state))
    */

    // Can spend conditions

    const canSpendWildcardJoker =
        gamePhaseBuilding
        && !resourceJokerIsSpent
        && resourceJokerAvailable
        && resourceJokerFlag == null
        && wildcardJokerFlag == null
        && !allDiceSpent

    const canCancelWildcardJoker =
        gamePhaseBuilding
        && !resourceJokerIsSpent
        && wildcardJokerFlag != null

    // Conditional rendering

    const icon = (): string => {
        return wildcard_joker_light
    }

    const tooltip = (): string => {
        if (canSpendWildcardJoker) {
            return "Set any dice to resource of your choice"
        }

        if (canCancelWildcardJoker) {
            return "Cancel"
        }

        return ""
    }

    const getTradingPopupTooltip = (resourceType: ResourceType) => {
        return `Set any dice to ${resourceType.name}`;
    }

    const pulseDurationSeconds = (): number => {
        if (canSpendWildcardJoker) {
            return 1
        }

        if (wildcardJokerFlag != null) {
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
        if (canSpendWildcardJoker) {
            if (!tradingPopupOpen) {
                playSelectionOpenSound();
                setTradingPopupOpen(true)
            }
        }

        if (canCancelWildcardJoker) {
            playSelectionCloseSound();
            dispatch(islandOneClearWildcardJokerFlag())
        }
    }

    const handleTradePopupClick = (resourceId: number) => {
        dispatch(islandOneSetWildcardJokerFlag(resourceId))

        setTradingPopupOpen(false);
    }

    const handleCloseTradePopup = () => {
        if (tradingPopupOpen) {
            playSelectionCloseSound();
        }

        setTradingPopupOpen(false);
    }

    return (
        <div onClick={handleClick}>
            <WildcardTradingPopup
                tooltip={getTradingPopupTooltip}
                disabled={!tradingPopupOpen}
                onClick={handleTradePopupClick}
                onClose={handleCloseTradePopup} />
            <StyledResourceJoker
                title={tooltip()}
                $pointer={canSpendWildcardJoker || canCancelWildcardJoker}
                $pulse={canSpendWildcardJoker || canCancelWildcardJoker}
                $pulseDurationSeconds={pulseDurationSeconds()}
                $pending={wildcardJokerFlag != null}>
                <StyledAsset
                    src={icon()}
                    alt={`Resource joker ${ResourceJokerType.Wildcard}`} />
            </StyledResourceJoker>
        </div>
    )
}

export default WildcardResourceJoker
