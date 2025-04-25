import StyledAsset from "../Asset/StyledAsset"

interface SettlementProps {
    icon: string
    width: number
}

const Settlement = (props: SettlementProps) => {
    return (
        <StyledAsset width={`${props.width}%`} src={props.icon} />
    )
}

export default Settlement
