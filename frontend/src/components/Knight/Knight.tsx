import StyledAsset from "../Asset/StyledAsset"
import { IconType, KnightType } from "../../constants/enumerations"
import { useAppSelector } from "../../store/hooks"
import { selectIsKnightBuilt } from "../../store/slices/knightSlice"
import { GetKnightId } from "../../constants/mappings"

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
    const knightId = GetKnightId(props.type)
    const isKnightBuilt = useAppSelector(state => selectIsKnightBuilt(state))

    const iconType = isKnightBuilt[knightId]
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? knightIconsLight[props.type]
        : knightIconsDark[props.type]

    return (
        <StyledAsset src={icon} />
    )
}

export default Knight
