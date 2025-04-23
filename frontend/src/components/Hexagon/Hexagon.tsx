import StyledHexagon from './styles/StyledHexagon'

interface HexagonProps {
    top: string,
    left: string,
    children: React.ReactNode
}

export default function Hexagon(props: HexagonProps) {
    return (
        <StyledHexagon $top={props.top} $left={props.left} >
            {props.children}
        </StyledHexagon>
    )
}
