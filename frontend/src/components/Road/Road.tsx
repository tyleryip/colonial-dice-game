import { IconType, RoadType, StructureType } from "../../constants/enumerations"
import StyledAsset from "../Asset/StyledAsset"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { buildStructure, selectIsStructureBuilt } from "../../store/slices/structureSlice"
import { GetRoadType } from "../../constants/mappings"

// Light icons
import horizontal_road_light from "../../assets/roads/light/horizontal-road-light.svg"
import forwardslash_road_light from "../../assets/roads/light/forwardslash-road-light.svg"
import backwardslash_road_light from "../../assets/roads/light/backslash-road-light.svg"

// Dark icons
import horizontal_road_dark from "../../assets/roads/dark/horizontal-road-dark.svg"
import forwardslash_road_dark from "../../assets/roads/dark/forwardslash-road-dark.svg"
import backwardslash_road_dark from "../../assets/roads/dark/backslash-road-dark.svg"

import starting_road from "../../assets/roads/starting-road.svg"
import StyledRoad from "./styles/StyledRoad"
import { useHover } from "@uidotdev/usehooks"
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice"
import ResourceCostPopup from "../Popups/ResourceCostPopup/ResourceCostPopup"
import { GetStructureCost, GetStructurePrerequisites } from "../../constants/structures"
import { selectCanBuild, spendDice } from "../../store/slices/diceSlice"
import { ResourceType } from "../../constants/resources"
import { addToPendingScore } from "../../store/slices/scoreSlice"

interface RoadProps {
    id: number // the unique structure id
    top: number,
    left: number,
    width: number
}

const roadIconsLight: { -readonly [key in RoadType]: string } = {
    [RoadType.Horizontal]: horizontal_road_light,
    [RoadType.Forwardslash]: forwardslash_road_light,
    [RoadType.Backslash]: backwardslash_road_light,
    [RoadType.Starting]: starting_road
}

const roadIconsDark: { -readonly [key in RoadType]: string } = {
    [RoadType.Horizontal]: horizontal_road_dark,
    [RoadType.Forwardslash]: forwardslash_road_dark,
    [RoadType.Backslash]: backwardslash_road_dark,
    [RoadType.Starting]: starting_road
}

const resourceCostPopupTop: { -readonly [key in RoadType]: number } = {
    [RoadType.Horizontal]: -26,
    [RoadType.Forwardslash]: -26,
    [RoadType.Backslash]: -26,
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
    const dispatch = useAppDispatch();
    const isStructureBuilt = useAppSelector(state => selectIsStructureBuilt(state))
    const isRoadBuilt = isStructureBuilt[props.id]

    const roadCost = GetStructureCost(StructureType.Road)
    const canBuild = useAppSelector(state => selectCanBuild(state, roadCost))

    const prerequisites = GetStructurePrerequisites(props.id)
    const canBuildRoad =
        !isRoadBuilt
        && prerequisites.map((structureId: number) => isStructureBuilt[structureId]).every((isBuilt: boolean) => isBuilt)
        && canBuild

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const [ref, hovering] = useHover();

    const iconType = isRoadBuilt
        ? IconType.Dark
        : IconType.Light

    const roadType = GetRoadType(props.id)
    const icon = iconType === IconType.Light
        ? roadIconsLight[roadType]
        : roadIconsDark[roadType]

    function handleClick() {
        if (gamePhaseBuilding && canBuildRoad) {
            dispatch(buildStructure(props.id))

            roadCost.forEach((resourceType: ResourceType) => {
                dispatch(spendDice(JSON.stringify(resourceType)))
            })

            dispatch(addToPendingScore(1))
        }
    }

    return (
        <div ref={ref} onClick={handleClick}>
            <StyledRoad
                $top={props.top}
                $left={props.left}
                $width={props.width}
                $pointer={gamePhaseBuilding && canBuildRoad}
                $pulse={gamePhaseBuilding && canBuildRoad}>
                <StyledAsset src={icon} />
            </StyledRoad>
            <ResourceCostPopup
                disabled={!hovering || isRoadBuilt || roadType == RoadType.Starting}
                cost={roadCost}
                top={props.top + resourceCostPopupTop[roadType]}
                left={props.left + resourceCostPopupLeft[roadType]}
                width={42}
                arrowTop={props.top - 5}
                arrowLeft={props.left + resourceCostPopupArrowLeft[roadType]}
                arrowWidth={5} />
        </div>
    )
}

export default Road
