import StyledAsset from "../Asset/StyledAsset"
import { GamePhase, IconType, StructureType } from "../../constants/enumerations"
import { useAppSelector } from "../../store/hooks"
import { selectIsStructureBuilt } from "../../store/slices/structureSlice"
import { GetSettlementNumber } from "../../constants/mappings"
import StyledSettlement from "./styles/StyledSettlement"

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
import { selectCurrentGamePhase } from "../../store/slices/gameSlice"
import { useHover } from "@uidotdev/usehooks"
import ResourceCostPopup from "../Popups/ResourceCostPopup/ResourceCostPopup"
import { GetStructureCost } from "../../constants/structures"

interface SettlementProps {
    id: number,
    top: number,
    left: number
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
    const isStructureBuilt = useAppSelector(state => selectIsStructureBuilt(state))
    const isSettlementBuilt = isStructureBuilt[props.id]

    const currentGamePhase = useAppSelector(state => selectCurrentGamePhase(state))
    const [ref, hovering] = useHover();

    const iconType = isSettlementBuilt
        ? IconType.Dark
        : IconType.Light

    const settlementNumber = GetSettlementNumber(props.id)
    const icon = iconType === IconType.Light
        ? settlementIconsLight[settlementNumber]
        : settlementIconsDark[settlementNumber]

    const settlementWidth = 13

    return (
        <div ref={ref}>
            <StyledSettlement
                $top={props.top}
                $left={props.left}
                $width={settlementWidth}
                $pointer={currentGamePhase == GamePhase.Building && !isSettlementBuilt}>
                <StyledAsset src={icon} />
            </StyledSettlement>
            <ResourceCostPopup
                disabled={!hovering || isSettlementBuilt}
                cost={GetStructureCost(StructureType.Settlement)}
                top={props.top - 26}
                left={props.left - 36}
                width={85}
                arrowTop={props.top - 4.5}
                arrowLeft={props.left + 4}
                arrowWidth={5} />
        </div>
    )
}

export default Settlement
