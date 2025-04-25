import StyledAsset from "../Asset/StyledAsset"

interface CityProps {
    icon: string
    width: number
}

const City = (props: CityProps) => {
    return (
        <StyledAsset width={`${props.width}%`} src={props.icon} />
    )
}

export default City
