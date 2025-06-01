import StyledAsset from "../Asset/StyledAsset"
import { IconType } from "../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { buildStructure, selectHasPrerequisiteStructuresBuilt, selectIsStructureBuilt } from "../../store/slices/structureSlice/structureSlice"
import { GetSettlementNumber } from "../../constants/mappings"
import StyledSettlement from "./styles/StyledSettlement"
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice/gameSlice"
import { useHover } from "@uidotdev/usehooks"
import ResourceCostPopup from "../Popups/ResourceCostPopup/ResourceCostPopup"
import { settlementCost } from "../../constants/structures"
import { selectHasResourcesNeeded, spendDice } from "../../store/slices/diceSlice/diceSlice"
import { ResourceType } from "../../constants/resources"
import { addToPendingScore } from "../../store/slices/scoreSlice/scoreSlice"
import settlement_3_light from "/assets/settlements/light/settlement-3-light.svg"
import settlement_4_light from "/assets/settlements/light/settlement-4-light.svg"
import settlement_5_light from "/assets/settlements/light/settlement-5-light.svg"
import settlement_7_light from "/assets/settlements/light/settlement-7-light.svg"
import settlement_9_light from "/assets/settlements/light/settlement-9-light.svg"
import settlement_11_light from "/assets/settlements/light/settlement-11-light.svg"
import settlement_3_dark from "/assets/settlements/dark/settlement-3-dark.svg"
import settlement_4_dark from "/assets/settlements/dark/settlement-4-dark.svg"
import settlement_5_dark from "/assets/settlements/dark/settlement-5-dark.svg"
import settlement_7_dark from "/assets/settlements/dark/settlement-7-dark.svg"
import settlement_9_dark from "/assets/settlements/dark/settlement-9-dark.svg"
import settlement_11_dark from "/assets/settlements/dark/settlement-11-dark.svg"
import { selectEffectiveVolume } from "../../store/slices/settingsSlice/settingsSlice"
import buildSound from '/audio/build.wav'
import useSound from "use-sound"

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
    // Props and constants

    const structureId = props.id
    const settlementNumber = GetSettlementNumber(structureId)

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const isSettlementBuilt = useAppSelector(state => selectIsStructureBuilt(state, structureId))
    const hasPrerequisiteStructuresBuilt = useAppSelector(state => selectHasPrerequisiteStructuresBuilt(state, structureId))
    const hasResourcesNeeded = useAppSelector(state => selectHasResourcesNeeded(state, settlementCost))
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    // Built and can build conditions

    const canBuildSettlement =
        gamePhaseBuilding
        && !isSettlementBuilt
        && hasPrerequisiteStructuresBuilt
        && hasResourcesNeeded

    // Conditional rendering

    const [ref, hovering] = useHover();

    const iconType = isSettlementBuilt
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? settlementIconsLight[settlementNumber]
        : settlementIconsDark[settlementNumber]

    const disableResourceCostPopup =
        !hovering
        || isSettlementBuilt

    const tooltip = canBuildSettlement ? "Build settlement" : ""

    // Sound effects

    const [playBuildSound] = useSound(buildSound, {
        volume: volume,
        interrupt: false
    })

    // Event handlers

    function handleClick() {
        if (canBuildSettlement) {
            playBuildSound()
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
                title={tooltip}
                $top={props.top}
                $left={props.left}
                $pointer={canBuildSettlement}
                $pulse={canBuildSettlement}>
                <StyledAsset
                    src={icon}
                    alt={`Settlement ${settlementNumber}`} />
            </StyledSettlement>
            <ResourceCostPopup
                disabled={disableResourceCostPopup}
                cost={settlementCost}
                top={props.top - 24}
                left={props.left - 36}
                width={85}
                arrowTop={props.top - 4.5}
                arrowLeft={props.left + 4} />
        </div>
    )
}

export default Settlement
