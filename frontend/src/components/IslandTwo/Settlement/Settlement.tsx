import StyledAsset from "../../Asset/StyledAsset"
import { IconType } from "../../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import StyledSettlement from "./styles/StyledSettlement"
import { selectIsGamePhaseBuilding } from "../../../store/slices/session/islandOne/gameSlice/gameSlice"
import { useHover } from "@uidotdev/usehooks"
import ResourceCostPopup from "../../Popups/ResourceCostPopup/ResourceCostPopup"
import { settlementCost } from "../../../constants/structures"
import { ResourceType } from "../../../constants/resources"
import { addToPendingScore } from "../../../store/slices/session/islandOne/scoreSlice/scoreSlice"
import settlement_light from "/assets/settlements/light/settlement-light.svg"
import settlement_dark from "/assets/settlements/dark/settlement-dark.svg"
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice"
import buildSound from '/audio/build.wav'
import useSound from "use-sound"
import { islandTwoBuildStructure, selectIslandTwoHasPrerequisiteStructuresBuilt, selectIslandTwoIsStructureBuilt } from "../../../store/slices/session/islandTwo/structureSlice/islandTwoStructureSlice"
import { islandTwoSpendDice, selectIslandTwoHasResourcesNeeded } from "../../../store/slices/session/islandTwo/diceSlice/islandTwoDiceSlice"

interface SettlementProps {
    id: number,
    top: number,
    left: number
}

const Settlement = (props: SettlementProps) => {
    // Props and constants

    const structureId = props.id

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const isSettlementBuilt = useAppSelector(state => selectIslandTwoIsStructureBuilt(state, structureId))
    const hasPrerequisiteStructuresBuilt = useAppSelector(state => selectIslandTwoHasPrerequisiteStructuresBuilt(state, structureId))
    const hasResourcesNeeded = useAppSelector(state => selectIslandTwoHasResourcesNeeded(state, settlementCost))
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
        ? settlement_light
        : settlement_dark

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
            dispatch(islandTwoBuildStructure(props.id))

            settlementCost.forEach((resourceType: ResourceType) => {
                dispatch(islandTwoSpendDice(JSON.stringify(resourceType)))
            })

            dispatch(addToPendingScore(1))
        }
    }

    return (
        <div ref={ref} onClick={handleClick}>
            <StyledSettlement
                title={tooltip}
                $top={props.top}
                $left={props.left}
                $pointer={canBuildSettlement}
                $canBuild={canBuildSettlement}>
                <StyledAsset
                    src={icon}
                    alt={`Settlement`} />
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
