import { ResourceJokerType } from "../../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import StyledResourceJoker from "./styles/StyledResourceJoker"
import StyledAsset from "../../Asset/StyledAsset"
import { useState } from "react"
import { ResourceType } from "../../../constants/resources"
import WildcardTradingPopup from "../../Popups/WildcardTradingPopup/WildcardTradingPopup"
import wildcard_joker_light from "/assets/jokers/light/wildcard-joker-light.png"
import wildcard_joker_half_dark from "/assets/jokers/dark/wildcard-joker-half-dark.png"
import wildcard_joker_full_dark from "/assets/jokers/dark/wildcard-joker-full-dark.png"
import wool_joker_light from "/assets/jokers/light/wool-joker-light.png"
import wheat_joker_light from "/assets/jokers/light/wheat-joker-light.png"
import ore_joker_light from "/assets/jokers/light/ore-joker-light.png"
import brick_joker_light from "/assets/jokers/light/brick-joker-light.png"
import wood_joker_light from "/assets/jokers/light/wood-joker-light.png"
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice"
import useSound from "use-sound"
import selectionOpenSound from '/audio/selection_open.wav'
import selectionCloseSound from '/audio/selection_close.wav'
import { selectIslandTwoIsGamePhaseBuilding } from "../../../store/slices/session/islandTwo/gameSlice/islandTwoGameSlice"
import { selectIslandTwoAllDiceSpent, selectIslandTwoResourceJokerFlag, islandTwoSetResourceJokerFlag, islandTwoClearResourceJokerFlag } from "../../../store/slices/session/islandTwo/diceSlice/islandTwoDiceSlice"
import { selectIslandTwoKnightsBuiltCount, selectIslandTwoKnightsSpentCount } from "../../../store/slices/session/islandTwo/knightSlice/islandTwoKnightSlice"
import { islandTwoResetActiveResourceJoker, islandTwoSetActiveResourceJoker, selectIslandTwoActiveResourceJoker } from "../../../store/slices/session/islandTwo/resourceJokerSlice/islandTwoResourceJokerSlice"
import { IslandTwoResourceJokerKnightMappings } from "../../../constants/mappings"

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

const WildcardResourceJoker = (props: WildcardJokerProps) => {
    // Props and constants

    const resourceJokerId = props.id
    const [tradingPopupOpen, setTradingPopupOpen] = useState(false);
    const knightIds = IslandTwoResourceJokerKnightMappings[resourceJokerId]

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIslandTwoIsGamePhaseBuilding(state))
    const knightsBuilt = useAppSelector(state => selectIslandTwoKnightsBuiltCount(state, knightIds))
    const knightsSpent = useAppSelector(state => selectIslandTwoKnightsSpentCount(state, knightIds))
    const activeResourceJoker = useAppSelector(state => selectIslandTwoActiveResourceJoker(state))
    const resourceJokerFlag = useAppSelector(state => selectIslandTwoResourceJokerFlag(state))
    const allDiceSpent = useAppSelector(state => selectIslandTwoAllDiceSpent(state))
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    // Can spend conditions

    const resourceJokerAvailable = knightsBuilt > knightsSpent

    const canSpendWildcardJoker =
        gamePhaseBuilding
        && resourceJokerAvailable
        && resourceJokerFlag == null
        && activeResourceJoker == null
        && !allDiceSpent

    const canCancelWildcardJoker =
        gamePhaseBuilding
        && resourceJokerAvailable
        && resourceJokerFlag != null
        && activeResourceJoker == resourceJokerId

    // Conditional rendering

    const icon = (): string => {
        if (activeResourceJoker == resourceJokerId && resourceJokerFlag != null) {
            return resourceJokerIconsLight[resourceJokerFlag];
        }

        if (knightsSpent == 2) {
            return wildcard_joker_full_dark
        }

        if (knightsSpent == 1) {
            return wildcard_joker_half_dark
        }

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

        if (resourceJokerFlag != null) {
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
                dispatch(islandTwoSetActiveResourceJoker(resourceJokerId))
                playSelectionOpenSound();
                setTradingPopupOpen(true)
            }
        }

        if (canCancelWildcardJoker) {
            playSelectionCloseSound();
            dispatch(islandTwoClearResourceJokerFlag())
            dispatch(islandTwoResetActiveResourceJoker())
        }
    }

    const handleTradePopupClick = (resourceId: number) => {
        dispatch(islandTwoSetResourceJokerFlag(resourceId))

        setTradingPopupOpen(false);
    }

    const handleCloseTradePopup = () => {
        if (tradingPopupOpen) {
            dispatch(islandTwoResetActiveResourceJoker())
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
                $pending={canCancelWildcardJoker}>
                <StyledAsset
                    src={icon()}
                    alt={`Resource joker ${ResourceJokerType.Wildcard}`} />
            </StyledResourceJoker>
        </div>
    )
}

export default WildcardResourceJoker
