import StyledAsset from "../../Asset/StyledAsset"
import { IconType } from "../../../constants/enumerations"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import StyledCity from "./styles/StyledCity"
import { useHover } from "@uidotdev/usehooks"
import ResourceCostPopup from "../../Popups/ResourceCostPopup/ResourceCostPopup"
import { cityCost } from "../../../constants/structures"
import { ResourceType } from "../../../constants/resources"
import city_2_light from "/assets/cities/light/city-2-light.svg"
import city_2_dark from "/assets/cities/dark/city-2-dark.svg"
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice"
import buildSound from '/audio/build.wav'
import useSound from "use-sound"
import { islandTwoSpendDice, selectIslandTwoHasResourcesNeeded } from "../../../store/slices/session/islandTwo/diceSlice/islandTwoDiceSlice"
import { islandTwoBuildStructure, selectIslandTwoHasPrerequisiteStructuresBuilt, selectIslandTwoIsStructureBuilt } from "../../../store/slices/session/islandTwo/structureSlice/islandTwoStructureSlice"
import { selectIslandTwoIsGamePhaseBuilding } from "../../../store/slices/session/islandTwo/gameSlice/islandTwoGameSlice"
import { islandTwoAddScore } from "../../../store/slices/session/islandTwo/scoreSlice/islandTwoScoreSlice"

interface CityProps {
    id: number,
    top: number,
    left: number
}

const City = (props: CityProps) => {
    // Props and constants

    const structureId = props.id

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector(state => selectIslandTwoIsGamePhaseBuilding(state))
    const isCityBuilt = useAppSelector(state => selectIslandTwoIsStructureBuilt(state, structureId))
    const hasResourcesNeeded = useAppSelector(state => selectIslandTwoHasResourcesNeeded(state, cityCost))
    const hasPrerequisiteStructuresBuilt = useAppSelector(state => selectIslandTwoHasPrerequisiteStructuresBuilt(state, structureId))
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    // Can build conditions

    const canBuildCity =
        gamePhaseBuilding
        && !isCityBuilt
        && hasPrerequisiteStructuresBuilt
        && hasResourcesNeeded

    // Conditional rendering

    const [ref, hovering] = useHover();

    const iconType = isCityBuilt
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? city_2_light
        : city_2_dark

    const disableResourceCostPopup =
        !hovering
        || isCityBuilt

    const tooltip = canBuildCity ? "Build city" : ""

    // Sound effects

    const [playBuildSound] = useSound(buildSound, {
        volume: volume,
        interrupt: false
    })

    // Event handlers

    function handleClick() {
        if (canBuildCity) {
            playBuildSound()

            dispatch(islandTwoBuildStructure(structureId))

            cityCost.forEach((resourceType: ResourceType) => {
                dispatch(islandTwoSpendDice(JSON.stringify(resourceType)))
            })

            dispatch(islandTwoAddScore(2))
        }
    }

    return (
        <div ref={ref} onClick={handleClick}>
            <StyledCity
                title={tooltip}
                $top={props.top}
                $left={props.left}
                $pointer={canBuildCity}
                $canBuild={canBuildCity}>
                <StyledAsset src={icon} alt={`City`} />
            </StyledCity>
            <ResourceCostPopup
                disabled={disableResourceCostPopup}
                cost={cityCost}
                top={props.top - 23}
                left={props.left - 41}
                width={100}
                arrowTop={props.top - 5}
                arrowLeft={props.left + 6.5}
                allowVertical
                verticalTop={props.top - 117}
                verticalLeft={props.left - 1}
                verticalWidth={20}
            />
        </div>
    )
}

export default City
