import { IconType, RoadType } from "../../constants/enumerations"
import StyledAsset from "../Asset/StyledAsset"
import { useAppSelector } from "../../store/hooks"
import { selectIsBuilt } from "../../store/slices/structureSlice"
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

interface RoadProps {
    id: number // the unique structure id
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

const Road = (props: RoadProps) => {
    const structures = useAppSelector(state => selectIsBuilt(state))

    const iconType = structures[props.id]
        ? IconType.Dark
        : IconType.Light

    const roadType = GetRoadType(props.id)
    const icon = iconType === IconType.Light
        ? roadIconsLight[roadType]
        : roadIconsDark[roadType]

    return (
        <StyledAsset src={icon} />
    )
}

export default Road
