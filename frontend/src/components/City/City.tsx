import StyledAsset from "../Asset/StyledAsset"
import { IconType } from "../../constants/enumerations"

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
import { useAppSelector } from "../../store/hooks"
import { selectStructures } from "../../store/slices/structureSlice"
import { GetCityStructureId } from "../../constants/mappings"

interface CityProps {
    cityNumber: number // the number that appears on the city
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
    const structures = useAppSelector(state => selectStructures(state))

    const structureId = GetCityStructureId(props.cityNumber)
    const iconType = structures[structureId].built
        ? IconType.Dark
        : IconType.Light

    const icon = iconType === IconType.Light
        ? cityIconsLight[props.cityNumber]
        : cityIconsDark[props.cityNumber]

    return (
        <StyledAsset src={icon} />
    )
}

export default City
