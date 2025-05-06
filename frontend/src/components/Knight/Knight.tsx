import StyledAsset from "../Asset/StyledAsset"
import { IconType, KnightType } from "../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { buildKnight, selectIsKnightBuilt } from "../../store/slices/knightSlice"
import { GetKnightId } from "../../constants/mappings"
import StyledKnight from "./styles/StyledKnight"
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice"
import { useHover } from "@uidotdev/usehooks"
import ResourceCostPopup from "../Popups/ResourceCostPopup/ResourceCostPopup"

// Light icons
import knight_1_light from "../../assets/knights/light/knight-1-light.svg"
import knight_2_light from "../../assets/knights/light/knight-2-light.svg"
import knight_3_light from "../../assets/knights/light/knight-3-light.svg"
import knight_4_light from "../../assets/knights/light/knight-4-light.svg"
import knight_5_light from "../../assets/knights/light/knight-5-light.svg"
import knight_6_light from "../../assets/knights/light/knight-6-light.svg"

// Dark icons
import knight_1_dark from "../../assets/knights/dark/knight-1-dark.svg"
import knight_2_dark from "../../assets/knights/dark/knight-2-dark.svg"
import knight_3_dark from "../../assets/knights/dark/knight-3-dark.svg"
import knight_4_dark from "../../assets/knights/dark/knight-4-dark.svg"
import knight_5_dark from "../../assets/knights/dark/knight-5-dark.svg"
import knight_6_dark from "../../assets/knights/dark/knight-6-dark.svg"
import { GetKnightPrerequisites, knightCost } from "../../constants/knights"
import { selectCanBuild, spendDice } from "../../store/slices/diceSlice"
import { ResourceType } from "../../constants/resources"
import { addToPendingScore } from "../../store/slices/scoreSlice"

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
    const dispatch = useAppDispatch();
    const knightId = GetKnightId(props.type)
    const isKnightBuilt = useAppSelector(state => selectIsKnightBuilt(state))
    const isBuilt = isKnightBuilt[knightId]

    const canBuild = useAppSelector(state => selectCanBuild(state, knightCost))

    const prerequisiteId = GetKnightPrerequisites(knightId)
    const canBuildKnight =
        !isBuilt
        && (prerequisiteId == null || isKnightBuilt[prerequisiteId])
        && canBuild

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const [ref, hovering] = useHover();

    const iconType = isBuilt
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? knightIconsLight[props.type]
        : knightIconsDark[props.type]

    function handleClick() {
        if (gamePhaseBuilding && canBuild) {
            dispatch(buildKnight(knightId))

            knightCost.forEach((resourceType: ResourceType) => {
                dispatch(spendDice(JSON.stringify(resourceType)))
            })

            // TODO: get the point value from constants
            dispatch(addToPendingScore(knightId + 1))
        }
    }

    return (
        <div ref={ref} onClick={handleClick}>
            <StyledKnight
                $top={14}
                $left={44}
                $width={12}
                $pointer={gamePhaseBuilding && canBuildKnight}
                $pulse={gamePhaseBuilding && canBuildKnight}>
                <StyledAsset src={icon} />
            </StyledKnight>
            <ResourceCostPopup
                disabled={!hovering || isBuilt}
                cost={knightCost}
                top={-13}
                left={18}
                width={65}
                arrowTop={9}
                arrowLeft={47.5}
                arrowWidth={5} />
        </div>
    )
}

export default Knight
