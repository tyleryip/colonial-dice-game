import StyledAsset from "../../Asset/StyledAsset"
import { IconType, KnightType } from "../../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { buildKnight } from "../../../store/slices/session/islandOne/knightSlice/knightSlice"
import { GetIslandTwoKnightType } from "../../../constants/mappings"
import StyledKnight from "./styles/StyledKnight"
import { useHover } from "@uidotdev/usehooks"
import ResourceCostPopup from "../../Popups/ResourceCostPopup/ResourceCostPopup"
import { knightCost } from "../../../constants/knights"
import { ResourceType } from "../../../constants/resources"
import { addToPendingScore } from "../../../store/slices/session/islandOne/scoreSlice/scoreSlice"
import knight_light from "/assets/knights/light/knight-light.svg"
import knight_dark from "/assets/knights/dark/knight-dark.svg"
import buildSound from '/audio/build.wav'
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice"
import useSound from "use-sound"
import { islandTwoSpendDice, selectIslandTwoHasResourcesNeeded } from "../../../store/slices/session/islandTwo/diceSlice/islandTwoDiceSlice"
import { selectIslandTwoIsGamePhaseBuilding } from "../../../store/slices/session/islandTwo/gameSlice/islandTwoGameSlice"

interface KnightProps {
    id: KnightType,
    isLeft?: boolean,
    isRight?: boolean
}

const Knight = (props: KnightProps) => {
    // Props and constants
    const knightId = props.id
    const knightType = GetIslandTwoKnightType(knightId)
    const knightPoints = knightId + 1

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIslandTwoIsGamePhaseBuilding(state))
    const isKnightBuilt = false
    const hasResourcesNeeded = useAppSelector(state => selectIslandTwoHasResourcesNeeded(state, knightCost))
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    // Built and can build conditions

    const canBuildKnight =
        gamePhaseBuilding
        && !isKnightBuilt
        && hasResourcesNeeded

    // Conditional rendering

    const [ref, hovering] = useHover();

    const iconType = isKnightBuilt
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? knight_light
        : knight_dark

    const disableResourceCostPopup = !hovering || isKnightBuilt

    const tooltip = canBuildKnight ? "Build knight" : ""

    const resourceCostPopupLeft =
        props.isLeft ? 11 :
            props.isRight ? 25 :
                18

    const resourceCostPopupArrowLeft =
        props.isLeft ? 40.5 :
            props.isRight ? 54.5 :
                47.5

    // Sound effects

    const [playBuildSound] = useSound(buildSound, {
        volume: volume
    });

    // Event handlers

    function handleClick() {
        if (canBuildKnight) {
            playBuildSound();

            dispatch(buildKnight(knightId))

            knightCost.forEach((resourceType: ResourceType) => {
                dispatch(islandTwoSpendDice(JSON.stringify(resourceType)))
            })

            dispatch(addToPendingScore(knightPoints))
        }
    }

    return (
        <div ref={ref} onClick={handleClick}>
            <StyledKnight
                title={tooltip}
                $pointer={canBuildKnight}
                $canBuild={canBuildKnight}
                $isLeft={props.isLeft}
                $isRight={props.isRight}>
                <StyledAsset
                    src={icon}
                    alt={`Knight ${knightType}`} />
            </StyledKnight>
            <ResourceCostPopup
                disabled={disableResourceCostPopup}
                cost={knightCost}
                top={-12}
                left={resourceCostPopupLeft}
                width={65}
                arrowTop={9}
                arrowLeft={resourceCostPopupArrowLeft} />
        </div>
    )
}

export default Knight
