import StyledAsset from "../Asset/StyledAsset"
import { IconType, StructureType } from "../../constants/enumerations"
import { selectIsStructureBuilt } from "../../store/slices/structureSlice"
import { GetCityNumber } from "../../constants/mappings"
import { useAppSelector } from "../../store/hooks"
import StyledCity from "./styles/StyledCity"
import { useHover } from "@uidotdev/usehooks"
import { selectIsGamePhaseBuilding } from "../../store/slices/gameSlice"
import ResourceCostPopup from "../Popups/ResourceCostPopup/ResourceCostPopup"
import { GetStructureCost } from "../../constants/structures"

// Light icons
import city_7_light from "../../assets/cities/light/city-7-light.svg"
import city_12_light from "../../assets/cities/light/city-12-light.svg"
import city_20_light from "../../assets/cities/light/city-20-light.svg"
import city_30_light from "../../assets/cities/light/city-30-light.svg"

// Dark icons
import city_7_dark from "../../assets/cities/dark/city-7-dark.svg"
import city_12_dark from "../../assets/cities/dark/city-12-dark.svg"
import city_20_dark from "../../assets/cities/dark/city-20-dark.svg"
import city_30_dark from "../../assets/cities/dark/city-30-dark.svg"

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
    const isStructureBuilt = useAppSelector(state => selectIsStructureBuilt(state))
    const isCityBuilt = isStructureBuilt[props.id]

    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))
    const [ref, hovering] = useHover();

    const iconType = isCityBuilt
        ? IconType.Dark
        : IconType.Light

    const cityNumber = GetCityNumber(props.id)
    const icon = iconType === IconType.Light
        ? cityIconsLight[cityNumber]
        : cityIconsDark[cityNumber]

    const cityWidth = 15.5

    return (
        <div ref={ref}>
            <StyledCity
                $top={props.top}
                $left={props.left}
                $width={cityWidth}
                $pointer={gamePhaseBuilding && !isCityBuilt}>
                <StyledAsset src={icon} />
            </StyledCity>
            <ResourceCostPopup
                disabled={!hovering || isCityBuilt}
                cost={GetStructureCost(StructureType.City)}
                top={props.top - 25}
                left={props.left - 41}
                width={100}
                arrowTop={props.top - 5}
                arrowLeft={props.left + 6.5}
                arrowWidth={5}
                allowVertical
                verticalTop={props.top - 117}
                verticalLeft={props.left - 1}
                verticalWidth={20}
            />
        </div>
    )
}

export default City
