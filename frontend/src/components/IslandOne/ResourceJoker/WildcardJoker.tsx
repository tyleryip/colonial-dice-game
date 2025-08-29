import { IconType, ResourceJokerType } from "../../../constants/enumerations"
import { GetIslandOneResourceJokerType } from "../../../constants/mappings"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { selectIslandOneIsGamePhaseBuilding } from "../../../store/slices/session/islandOne/gameSlice/islandOneGameSlice"
import { selectIslandOneIsKnightBuilt, selectIslandOneIsKnightSpent } from "../../../store/slices/session/islandOne/knightSlice/islandOneKnightSlice"
import StyledResourceJoker from "./styles/StyledResourceJoker"
import StyledAsset from "../../Asset/StyledAsset"
import { useState } from "react"
import { ResourceType } from "../../../constants/resources"
import WildcardTradingPopup from "../../Popups/WildcardTradingPopup/WildcardTradingPopup"
import { selectIslandOneAllDiceSpent, selectIslandOneResourceJokerFlag, islandOneClearResourceJokerFlag, islandOneSetResourceJokerFlag } from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice"
import wool_joker_light from "/assets/jokers/light/wool-joker-light.png"
import wheat_joker_light from "/assets/jokers/light/wheat-joker-light.png"
import ore_joker_light from "/assets/jokers/light/ore-joker-light.png"
import brick_joker_light from "/assets/jokers/light/brick-joker-light.png"
import wood_joker_light from "/assets/jokers/light/wood-joker-light.png"
import wildcard_joker_light from "/assets/jokers/light/wildcard-joker-light.png"
import wool_joker_dark from "/assets/jokers/dark/wool-joker-dark.png"
import wheat_joker_dark from "/assets/jokers/dark/wheat-joker-dark.png"
import ore_joker_dark from "/assets/jokers/dark/ore-joker-dark.png"
import wildcard_joker_dark from "/assets/jokers/dark/wildcard-joker-dark.png"
import brick_joker_dark from "/assets/jokers/dark/brick-joker-dark.png"
import wood_joker_dark from "/assets/jokers/dark/wood-joker-dark.png"
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice"
import useSound from "use-sound"
import selectionOpenSound from '/audio/selection_open.wav'
import selectionCloseSound from '/audio/selection_close.wav'
import { islandOneResetActiveResourceJoker, islandOneSetActiveResourceJoker, selectIslandOneActiveResourceJoker } from "../../../store/slices/session/islandOne/resourceJokerSlice/islandOneResourceJokerSlice"

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

    const resourceJokerId = GetIslandOneResourceJokerType(ResourceJokerType.Wildcard)
    const [tradingPopupOpen, setTradingPopupOpen] = useState(false);

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIslandOneIsGamePhaseBuilding(state))
    const isKnightBuilt = useAppSelector(state => selectIslandOneIsKnightBuilt(state, resourceJokerId))
    const isKnightSpent = useAppSelector(state => selectIslandOneIsKnightSpent(state, resourceJokerId))
    const activeResourceJoker = useAppSelector(state => selectIslandOneActiveResourceJoker(state))
    const resourceJokerFlag = useAppSelector(state => selectIslandOneResourceJokerFlag(state))
    const allDiceSpent = useAppSelector(state => selectIslandOneAllDiceSpent(state))
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    // Can spend conditions

    const resourceJokerAvailable = isKnightBuilt && !isKnightSpent

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

    const iconType = isKnightSpent
        ? IconType.Dark
        : IconType.Light

    const icon = (): string => {
        if (resourceJokerFlag != null && activeResourceJoker == resourceJokerId) {
            return resourceJokerIconsLight[resourceJokerFlag]
        }

        return iconType === IconType.Light
            ? resourceJokerIconsLight[resourceJokerId]
            : resourceJokerIconsDark[resourceJokerId]
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
                dispatch(islandOneSetActiveResourceJoker(resourceJokerId))
                playSelectionOpenSound();
                setTradingPopupOpen(true)
            }
        }

        if (canCancelWildcardJoker) {
            playSelectionCloseSound();
            dispatch(islandOneClearResourceJokerFlag())
            dispatch(islandOneResetActiveResourceJoker())
        }
    }

    const handleTradePopupClick = (resourceId: number) => {
        dispatch(islandOneSetResourceJokerFlag(resourceId))

        setTradingPopupOpen(false);
    }

    const handleCloseTradePopup = () => {
        if (tradingPopupOpen) {
            dispatch(islandOneResetActiveResourceJoker())
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
