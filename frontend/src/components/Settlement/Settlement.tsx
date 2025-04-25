import StyledAsset from "../Asset/StyledAsset"

// Light icons
import settlement_3_light from "../../assets/settlements/light/settlement-3-light.svg"
import settlement_4_light from "../../assets/settlements/light/settlement-4-light.svg"
import settlement_5_light from "../../assets/settlements/light/settlement-5-light.svg"
import settlement_7_light from "../../assets/settlements/light/settlement-7-light.svg"
import settlement_9_light from "../../assets/settlements/light/settlement-9-light.svg"
import settlement_11_light from "../../assets/settlements/light/settlement-11-light.svg"

// Dark icons
import settlement_3_dark from "../../assets/settlements/dark/settlement-3-dark.svg"
import settlement_4_dark from "../../assets/settlements/dark/settlement-4-dark.svg"
import settlement_5_dark from "../../assets/settlements/dark/settlement-5-dark.svg"
import settlement_7_dark from "../../assets/settlements/dark/settlement-7-dark.svg"
import settlement_9_dark from "../../assets/settlements/dark/settlement-9-dark.svg"
import settlement_11_dark from "../../assets/settlements/dark/settlement-11-dark.svg"
import { IconType } from "../../constants/enumerations"

interface SettlementProps {
    id: number, // the unique structure id
    settlementNumber: number // the number that appears on the settlement
}

const settlementIconsLight: Readonly<Record<number, string>> = {
    3: settlement_3_light,
    4: settlement_4_light,
    5: settlement_5_light,
    7: settlement_7_light,
    9: settlement_9_light,
    11: settlement_11_light
}

const settlementIconsDark: Readonly<Record<number, string>> = {
    3: settlement_3_dark,
    4: settlement_4_dark,
    5: settlement_5_dark,
    7: settlement_7_dark,
    9: settlement_9_dark,
    11: settlement_11_dark
}

const Settlement = (props: SettlementProps) => {
    // TODO: get icon type based on store
    const iconType = IconType.Light

    const icon = iconType === IconType.Light
        ? settlementIconsLight[props.settlementNumber]
        : settlementIconsDark[props.settlementNumber]

    return (
        <StyledAsset src={icon} />
    )
}

export default Settlement
