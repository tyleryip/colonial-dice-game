import { styled } from "styled-components"

interface StyledResourceCostIconProps {
    $width: number
    $allowVertical?: boolean
    $verticalWidth?: number
}

const StyledResourceCostIcon = styled.img<StyledResourceCostIconProps>`
    padding-left: 1%;
    padding-right: 1%;
    width: ${props => `${props.$width}%`};

    @media ${(props) => props.theme.breakpoints.xs} {
        width: ${props => props.$allowVertical && `${props.$verticalWidth}%`};
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: ${props => `${props.$width}%`};
    }

    @media ${(props) => props.theme.breakpoints.m} {

    }

    @media ${(props) => props.theme.breakpoints.l} {
    
    }

    @media ${(props) => props.theme.breakpoints.xl} {

    }

    @media ${(props) => props.theme.breakpoints.xxl} {
    
    }
`

export default StyledResourceCostIcon