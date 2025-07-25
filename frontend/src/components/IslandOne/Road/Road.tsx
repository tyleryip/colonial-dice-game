import { IconType, RoadType } from "../../../constants/enumerations"
import StyledAsset from "../../Asset/StyledAsset"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { islandOneBuildStructure, selectIslandOneHasPrerequisiteStructuresBuilt, selectIslandOneIsStructureBuilt } from "../../../store/slices/session/islandOne/structureSlice/islandOneStructureSlice"
import { GetIslandOneRoadType } from "../../../constants/mappings"
import StyledRoad from "./styles/StyledRoad"
import { useHover } from "@uidotdev/usehooks"
import { selectIslandOneIsGamePhaseBuilding } from "../../../store/slices/session/islandOne/gameSlice/islandOneGameSlice"
import ResourceCostPopup from "../../Popups/ResourceCostPopup/ResourceCostPopup"
import { roadCost } from "../../../constants/structures"
import { selectIslandOneHasResourcesNeeded, islandOneSpendDice } from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice"
import { ResourceType } from "../../../constants/resources"
import { islandOneAddToPendingScore } from "../../../store/slices/session/islandOne/scoreSlice/islandOneScoreSlice"
import horizontal_road_1_light from "/assets/roads/light/horizontal-road-1-light.svg"
import forwardslash_road_1_light from "/assets/roads/light/forwardslash-road-1-light.svg"
import backwardslash_road_1_light from "/assets/roads/light/backslash-road-1-light.svg"
import starting_road from "/assets/roads/starting-road.svg"
import horizontal_road_1_dark from "/assets/roads/dark/horizontal-road-1-dark.svg"
import forwardslash_road_1_dark from "/assets/roads/dark/forwardslash-road-1-dark.svg"
import backwardslash_road_1_dark from "/assets/roads/dark/backslash-road-1-dark.svg"
import buildSound from '/audio/build.wav'
import useSound from "use-sound"
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice"

interface RoadProps {
    id: number // the unique structure id
    top: number,
    left: number,
    width: number
}

const roadIconsLight: { -readonly [key in RoadType]: string } = {
    [RoadType.Horizontal]: horizontal_road_1_light,
    [RoadType.Forwardslash]: forwardslash_road_1_light,
    [RoadType.Backslash]: backwardslash_road_1_light,
    [RoadType.Starting]: starting_road
}

const roadIconsDark: { -readonly [key in RoadType]: string } = {
    [RoadType.Horizontal]: horizontal_road_1_dark,
    [RoadType.Forwardslash]: forwardslash_road_1_dark,
    [RoadType.Backslash]: backwardslash_road_1_dark,
    [RoadType.Starting]: starting_road
}

const resourceCostPopupTop: { -readonly [key in RoadType]: number } = {
    [RoadType.Horizontal]: -25,
    [RoadType.Forwardslash]: -25,
    [RoadType.Backslash]: -25,
    [RoadType.Starting]: 0
}

const resourceCostPopupLeft: { -readonly [key in RoadType]: number } = {
    [RoadType.Horizontal]: -8,
    [RoadType.Forwardslash]: -9.6,
    [RoadType.Backslash]: -16,
    [RoadType.Starting]: 0
}

const resourceCostPopupArrowLeft: { -readonly [key in RoadType]: number } = {
    [RoadType.Horizontal]: 10.5,
    [RoadType.Forwardslash]: 9,
    [RoadType.Backslash]: 2.5,
    [RoadType.Starting]: 0
}

const Road = (props: RoadProps) => {
    // Props and constants
    const structureId = props.id
    const roadType = GetIslandOneRoadType(structureId)
    const roadPoints = 1

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector(state => selectIslandOneIsGamePhaseBuilding(state))
    const isRoadBuilt = useAppSelector(state => selectIslandOneIsStructureBuilt(state, structureId))
    const hasResourcesNeeded = useAppSelector(state => selectIslandOneHasResourcesNeeded(state, roadCost))
    const hasPrerequisiteStructuresBuilt = useAppSelector(state => selectIslandOneHasPrerequisiteStructuresBuilt(state, structureId))
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    // Can build conditions

    const canBuildRoad =
        gamePhaseBuilding
        && !isRoadBuilt
        && hasPrerequisiteStructuresBuilt
        && hasResourcesNeeded

    // Conditional rendering

    const [ref, hovering] = useHover();

    const iconType = isRoadBuilt
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? roadIconsLight[roadType]
        : roadIconsDark[roadType]

    const disableResourceCostPopup =
        !hovering
        || isRoadBuilt
        || roadType == RoadType.Starting

    const tooltip = canBuildRoad ? "Build road" : ""

    // Sound effects

    const [playBuildSound] = useSound(buildSound, {
        volume: volume,
        interrupt: false
    })

    // Event handlers

    function handleClick() {
        if (canBuildRoad) {
            playBuildSound()

            dispatch(islandOneBuildStructure(structureId))

            roadCost.forEach((resourceType: ResourceType) => {
                dispatch(islandOneSpendDice(JSON.stringify(resourceType)))
            })

            dispatch(islandOneAddToPendingScore(roadPoints))
        }
    }

    return (
        <div ref={ref} onClick={handleClick}>
            <StyledRoad
                title={tooltip}
                $top={props.top}
                $left={props.left}
                $width={props.width}
                $pointer={canBuildRoad}
                $canBuild={canBuildRoad}>
                <StyledAsset
                    src={icon}
                    alt="Road" />
            </StyledRoad>
            <ResourceCostPopup
                disabled={disableResourceCostPopup}
                cost={roadCost}
                top={props.top + resourceCostPopupTop[roadType]}
                left={props.left + resourceCostPopupLeft[roadType]}
                width={42}
                arrowTop={props.top - 5}
                arrowLeft={props.left + resourceCostPopupArrowLeft[roadType]} />
        </div>
    )
}

export default Road
