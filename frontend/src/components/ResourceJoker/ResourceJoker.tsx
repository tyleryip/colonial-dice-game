import StyledAsset from "../Asset/StyledAsset"
import { IconType, ResourceJokerType } from "../../constants/enumerations"

// Light icons
import wool_joker_light from "../../assets/jokers/light/wool-joker-light.svg"
import wheat_joker_light from "../../assets/jokers/light/wheat-joker-light.svg"
import ore_joker_light from "../../assets/jokers/light/ore-joker-light.svg"
import wildcard_joker_light from "../../assets/jokers/light/wildcard-joker-light.svg"
import brick_joker_light from "../../assets/jokers/light/brick-joker-light.svg"
import wood_joker_light from "../../assets/jokers/light/wood-joker-light.svg"

// Dark icons
import wool_joker_dark from "../../assets/jokers/dark/wool-joker-dark.svg"
import wheat_joker_dark from "../../assets/jokers/dark/wheat-joker-dark.svg"
import ore_joker_dark from "../../assets/jokers/dark/ore-joker-dark.svg"
import wildcard_joker_dark from "../../assets/jokers/dark/wildcard-joker-dark.svg"
import brick_joker_dark from "../../assets/jokers/dark/brick-joker-dark.svg"
import wood_joker_dark from "../../assets/jokers/dark/wood-joker-dark.svg"

interface ResourceJokerProps {
    id: number,
    type: ResourceJokerType
}

const resourceJokerIconsLight: { -readonly [key in ResourceJokerType]: string } = {
    [ResourceJokerType.Ore]: ore_joker_light,
    [ResourceJokerType.Wheat]: wheat_joker_light,
    [ResourceJokerType.Wool]: wool_joker_light,
    [ResourceJokerType.Wood]: wood_joker_light,
    [ResourceJokerType.Brick]: brick_joker_light,
    [ResourceJokerType.Wildcard]: wildcard_joker_light
}

const resourceJokerIconsDark: { -readonly [key in ResourceJokerType]: string } = {
    [ResourceJokerType.Ore]: ore_joker_dark,
    [ResourceJokerType.Wheat]: wheat_joker_dark,
    [ResourceJokerType.Wool]: wool_joker_dark,
    [ResourceJokerType.Wood]: wood_joker_dark,
    [ResourceJokerType.Brick]: brick_joker_dark,
    [ResourceJokerType.Wildcard]: wildcard_joker_dark
}

const ResourceJoker = (props: ResourceJokerProps) => {
    // TODO: get icon type from store
    const iconType = IconType.Light

    const icon = iconType === IconType.Light
        ? resourceJokerIconsLight[props.type]
        : resourceJokerIconsDark[props.type]

    // TODO: adjust width based on icon type as well since the icons are different sizes?
    return (
        <StyledAsset width={"100%"} src={icon} />
    )
}

export default ResourceJoker
