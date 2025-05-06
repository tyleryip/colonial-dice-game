import StyledAsset from "../Asset/StyledAsset"
import { IconType, StructureType } from "../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { buildStructure, selectIsStructureBuilt } from "../../store/slices/structureSlice"
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
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice"
import { useHover } from "@uidotdev/usehooks"
import ResourceCostPopup from "../Popups/ResourceCostPopup/ResourceCostPopup"
import { GetStructureCost, GetStructurePrerequisites } from "../../constants/structures"
import { selectCanBuild, spendDice } from "../../store/slices/diceSlice"
import { ResourceType } from "../../constants/resources"
import { addToPendingScore } from "../../store/slices/scoreSlice"

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
    const dispatch = useAppDispatch();
    const isStructureBuilt = useAppSelector(state => selectIsStructureBuilt(state))
    const isSettlementBuilt = isStructureBuilt[props.id]

    const settlementCost = GetStructureCost(StructureType.Settlement)
    const canBuild = useAppSelector(state => selectCanBuild(state, settlementCost))

    const prerequisites = GetStructurePrerequisites(props.id)
    const canBuildSettlement =
        !isSettlementBuilt
        && prerequisites.map((structureId: number) => isStructureBuilt[structureId]).every((isBuilt: boolean) => isBuilt)
        && canBuild

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const [ref, hovering] = useHover();

    const iconType = isSettlementBuilt
        ? IconType.Dark
        : IconType.Light

    const settlementNumber = GetSettlementNumber(props.id)
    const icon = iconType === IconType.Light
        ? settlementIconsLight[settlementNumber]
        : settlementIconsDark[settlementNumber]

    function handleClick() {
        if (gamePhaseBuilding && canBuildSettlement) {
            dispatch(buildStructure(props.id))

            settlementCost.forEach((resourceType: ResourceType) => {
                dispatch(spendDice(JSON.stringify(resourceType)))
            })

            dispatch(addToPendingScore(settlementNumber))
        }
    }

    return (
        <div ref={ref} onClick={handleClick}>
            <StyledSettlement
                $top={props.top}
                $left={props.left}
                $width={13}
                $pointer={gamePhaseBuilding && canBuildSettlement}
                $pulse={gamePhaseBuilding && canBuildSettlement}>
                <StyledAsset src={icon} />
            </StyledSettlement>
            <ResourceCostPopup
                disabled={!hovering || isSettlementBuilt || (gamePhaseBuilding && !canBuildSettlement)}
                cost={settlementCost}
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
