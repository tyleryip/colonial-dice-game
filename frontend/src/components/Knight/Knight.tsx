import StyledAsset from "../Asset/StyledAsset"
import { IconType } from "../../constants/enumerations"

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

interface KnightProps {
    id: number
}

const knightIconsLight: Readonly<Record<number, string>> = {
    1: knight_1_light,
    2: knight_2_light,
    3: knight_3_light,
    4: knight_4_light,
    5: knight_5_light,
    6: knight_6_light
}

const knightIconsDark: Readonly<Record<number, string>> = {
    1: knight_1_dark,
    2: knight_2_dark,
    3: knight_3_dark,
    4: knight_4_dark,
    5: knight_5_dark,
    6: knight_6_dark
}

const Knight = (props: KnightProps) => {
    // TODO: get icon state from store
    const iconType = IconType.Light

    const icon = iconType === IconType.Light
        ? knightIconsLight[props.id]
        : knightIconsDark[props.id]

    return (
        <StyledAsset width={"100%"} src={icon} />
    )
}

export default Knight
