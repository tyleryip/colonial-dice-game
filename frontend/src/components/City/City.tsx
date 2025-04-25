import StyledAsset from "../Asset/StyledAsset"
import { IconType } from "../../constants/enumerations"

// Light icons
import city_7_light from "../../assets/cities/light/city-7-light.svg"
import city_12_light from "../../assets/cities/light/city-7-light.svg"
import city_20_light from "../../assets/cities/light/city-7-light.svg"
import city_30_light from "../../assets/cities/light/city-7-light.svg"

// Dark icons
import city_7_dark from "../../assets/cities/dark/city-7-dark.svg"
import city_12_dark from "../../assets/cities/dark/city-7-dark.svg"
import city_20_dark from "../../assets/cities/dark/city-7-dark.svg"
import city_30_dark from "../../assets/cities/dark/city-7-dark.svg"

interface CityProps {
    id: number // the unique structure id
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
    // TODO: get icon type from store
    const iconType = IconType.Light

    const icon = iconType === IconType.Light
        ? cityIconsLight[props.cityNumber]
        : cityIconsDark[props.cityNumber]

    return (
        <StyledAsset width={"100%"} src={icon} />
    )
}

export default City
