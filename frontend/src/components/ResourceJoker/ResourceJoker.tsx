import StyledResourceJoker from './styles/StyledResourceJoker'

interface ResourceJokerProps {
    icon: string
    width: number
}

const ResourceJoker = (props: ResourceJokerProps) => {
    return (
        <StyledResourceJoker>
            <img width={`${props.width}%`} src={props.icon} />
        </StyledResourceJoker>
    )
}

export default ResourceJoker
