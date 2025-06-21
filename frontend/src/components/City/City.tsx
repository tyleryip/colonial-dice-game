import StyledAsset from "../Asset/StyledAsset"
import { IconType } from "../../constants/enumerations"
import { buildStructure, selectHasPrerequisiteStructuresBuilt, selectIsStructureBuilt } from "../../store/slices/structureSlice/structureSlice"
import { GetCityNumber } from "../../constants/mappings"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import StyledCity from "./styles/StyledCity"
import { useHover } from "@uidotdev/usehooks"
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice/gameSlice"
import ResourceCostPopup from "../Popups/ResourceCostPopup/ResourceCostPopup"
import { cityCost } from "../../constants/structures"
import { selectHasResourcesNeeded, spendDice } from "../../store/slices/diceSlice/diceSlice"
import { ResourceType } from "../../constants/resources"
import { addToPendingScore } from "../../store/slices/scoreSlice/scoreSlice"
import city_7_light from "/assets/cities/light/city-7-light.svg"
import city_12_light from "/assets/cities/light/city-12-light.svg"
import city_20_light from "/assets/cities/light/city-20-light.svg"
import city_30_light from "/assets/cities/light/city-30-light.svg"
import city_7_dark from "/assets/cities/dark/city-7-dark.svg"
import city_12_dark from "/assets/cities/dark/city-12-dark.svg"
import city_20_dark from "/assets/cities/dark/city-20-dark.svg"
import city_30_dark from "/assets/cities/dark/city-30-dark.svg"
import { selectEffectiveVolume } from "../../store/slices/settingsSlice/settingsSlice"
import buildSound from '/audio/build.wav'
import useSound from "use-sound"

interface CityProps {
    id: number,
    top: number,
    left: number
}

const cityIconsLight: Readonly<Record<number, string>> = {
    7: city_7_light,
    12: city_12_light,
    20: city_20_light,
    30: city_30_light
}

const cityIconsDark: Readonly<Record<number, string>> = {
    7: city_7_dark,
    12: city_12_dark,
    20: city_20_dark,
    30: city_30_dark
}

const City = (props: CityProps) => {
    // Props and constants

    const structureId = props.id
    const cityNumber = GetCityNumber(structureId)

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const isCityBuilt = useAppSelector(state => selectIsStructureBuilt(state, structureId))
    const hasResourcesNeeded = useAppSelector(state => selectHasResourcesNeeded(state, cityCost))
    const hasPrerequisiteStructuresBuilt = useAppSelector(state => selectHasPrerequisiteStructuresBuilt(state, structureId))
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
        ? cityIconsLight[cityNumber]
        : cityIconsDark[cityNumber]

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
