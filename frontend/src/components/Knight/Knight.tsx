import StyledAsset from "../Asset/StyledAsset"
import { IconType, KnightType } from "../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { buildKnight, selectIsKnightBuilt, selectIsKnightPrerequisiteBuilt } from "../../store/slices/knightSlice"
import { GetKnightId } from "../../constants/mappings"
import StyledKnight from "./styles/StyledKnight"
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice"
import { useHover } from "@uidotdev/usehooks"
import ResourceCostPopup from "../Popups/ResourceCostPopup/ResourceCostPopup"
import { knightCost } from "../../constants/knights"
import { selectHasResourcesNeeded, spendDice } from "../../store/slices/diceSlice"
import { ResourceType } from "../../constants/resources"
import { addToPendingScore } from "../../store/slices/scoreSlice"

// Light icons
import knight_1_light from "/assets/knights/light/knight-1-light.svg"
import knight_2_light from "/assets/knights/light/knight-2-light.svg"
import knight_3_light from "/assets/knights/light/knight-3-light.svg"
import knight_4_light from "/assets/knights/light/knight-4-light.svg"
import knight_5_light from "/assets/knights/light/knight-5-light.svg"
import knight_6_light from "/assets/knights/light/knight-6-light.svg"

// Dark icons
import knight_1_dark from "/assets/knights/dark/knight-1-dark.svg"
import knight_2_dark from "/assets/knights/dark/knight-2-dark.svg"
import knight_3_dark from "/assets/knights/dark/knight-3-dark.svg"
import knight_4_dark from "/assets/knights/dark/knight-4-dark.svg"
import knight_5_dark from "/assets/knights/dark/knight-5-dark.svg"
import knight_6_dark from "/assets/knights/dark/knight-6-dark.svg"

interface KnightProps {
    type: KnightType
}

const knightIconsLight: { -readonly [key in KnightType]: string } = {
    [KnightType.Ore]: knight_1_light,
    [KnightType.Wheat]: knight_2_light,
    [KnightType.Wool]: knight_3_light,
    [KnightType.Wood]: knight_4_light,
    [KnightType.Brick]: knight_5_light,
    [KnightType.Wildcard]: knight_6_light
}

const knightIconsDark: { -readonly [key in KnightType]: string } = {
    [KnightType.Ore]: knight_1_dark,
    [KnightType.Wheat]: knight_2_dark,
    [KnightType.Wool]: knight_3_dark,
    [KnightType.Wood]: knight_4_dark,
    [KnightType.Brick]: knight_5_dark,
    [KnightType.Wildcard]: knight_6_dark
}

const Knight = (props: KnightProps) => {
    // Props and constants
    const knightType = props.type
    const knightId = GetKnightId(knightType)
    const knightPoints = knightId + 1

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const isKnightBuilt = useAppSelector(state => selectIsKnightBuilt(state, knightId))
    const hasResourcesNeeded = useAppSelector(state => selectHasResourcesNeeded(state, knightCost))
    const hasPrerequisiteBuilt = useAppSelector(state => selectIsKnightPrerequisiteBuilt(state, knightId))

    // Built and can build conditions

    const canBuildKnight =
        gamePhaseBuilding
        && !isKnightBuilt
        && hasPrerequisiteBuilt
        && hasResourcesNeeded

    // Conditional rendering

    const [ref, hovering] = useHover();

    const iconType = isKnightBuilt
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? knightIconsLight[knightType]
        : knightIconsDark[knightType]

    const disableResourceCostPopup = !hovering || isKnightBuilt

    const tooltip = canBuildKnight ? "Build knight" : ""

    // Event handlers

    function handleClick() {
        if (canBuildKnight) {
            dispatch(buildKnight(knightId))

            knightCost.forEach((resourceType: ResourceType) => {
                dispatch(spendDice(JSON.stringify(resourceType)))
            })

            dispatch(addToPendingScore(knightPoints))
        }
    }

    return (
        <div ref={ref} onClick={handleClick}>
            <StyledKnight
                title={tooltip}
                $pointer={canBuildKnight}
                $pulse={canBuildKnight}>
                <StyledAsset
                    src={icon}
                    alt={`Knight ${knightType}`} />
            </StyledKnight>
            <ResourceCostPopup
                disabled={disableResourceCostPopup}
                cost={knightCost}
                top={-12}
                left={18}
                width={65}
                arrowTop={9}
                arrowLeft={47.5} />
        </div>
    )
}

export default Knight
