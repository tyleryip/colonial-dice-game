import StyledAsset from "../Asset/StyledAsset"

interface RoadProps {
    icon: string
    width: number
}

const Road = (props: RoadProps) => {
    return (
        <StyledAsset width={`${props.width}%`} src={props.icon} />
    )
}

export default Road
