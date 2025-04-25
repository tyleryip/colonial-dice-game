import StyledAsset from "../Asset/StyledAsset"

interface ResourceJokerProps {
    icon: string
    width: number
}

const ResourceJoker = (props: ResourceJokerProps) => {
    return (
        <StyledAsset width={`${props.width}%`} src={props.icon} />
    )
}

export default ResourceJoker
