interface KnightProps {
    icon: string
    width: number
}

const Knight = (props: KnightProps) => {
    return (
        <img width={`${props.width}%`} src={props.icon} />
    )
}

export default Knight
