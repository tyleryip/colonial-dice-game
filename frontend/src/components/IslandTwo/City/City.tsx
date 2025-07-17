import StyledAsset from "../../Asset/StyledAsset"
import { IconType } from "../../../constants/enumerations"
import { buildStructure } from "../../../store/slices/session/islandOne/structureSlice/structureSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import StyledCity from "./styles/StyledCity"
import { useHover } from "@uidotdev/usehooks"
import { selectIsGamePhaseBuilding } from "../../../store/slices/session/islandOne/gameSlice/gameSlice"
import ResourceCostPopup from "../../Popups/ResourceCostPopup/ResourceCostPopup"
import { cityCost } from "../../../constants/structures"
import { selectHasResourcesNeeded, spendDice } from "../../../store/slices/session/islandOne/diceSlice/diceSlice"
import { ResourceType } from "../../../constants/resources"
import { addToPendingScore } from "../../../store/slices/session/islandOne/scoreSlice/scoreSlice"
import city_light from "/assets/cities/light/city-light.svg"
import city_dark from "/assets/cities/dark/city-dark.svg"
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice"
import buildSound from '/audio/build.wav'
import useSound from "use-sound"
import { GetIslandOneCityNumber } from "../../../constants/mappings"

interface CityProps {
    id: number,
    top: number,
    left: number
}

const City = (props: CityProps) => {
    // Props and constants

    const structureId = props.id
    const cityNumber = GetIslandOneCityNumber(structureId)

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const isCityBuilt = false
    const hasResourcesNeeded = useAppSelector(state => selectHasResourcesNeeded(state, cityCost))
    const hasPrerequisiteStructuresBuilt = false
    const volume = useAppSelector(state => selectEffectiveVolume(state))

    /*
    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const isCityBuilt = useAppSelector(state => selectIsStructureBuilt(state, structureId))
    const hasResourcesNeeded = useAppSelector(state => selectHasResourcesNeeded(state, cityCost))
    const hasPrerequisiteStructuresBuilt = useAppSelector(state => selectHasPrerequisiteStructuresBuilt(state, structureId))
    const volume = useAppSelector(state => selectEffectiveVolume(state))
    */

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
        ? city_light
        : city_dark

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

            dispatch(buildStructure(structureId))

            cityCost.forEach((resourceType: ResourceType) => {
                dispatch(spendDice(JSON.stringify(resourceType)))
            })

            dispatch(addToPendingScore(cityNumber))
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
                <StyledAsset src={icon} alt={`City ${cityNumber}`} />
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
