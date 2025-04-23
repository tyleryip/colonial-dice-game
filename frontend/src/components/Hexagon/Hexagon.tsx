import React from 'react'
import StyledHexagon from './styles/StyledHexagon'
import StyledCenter from './styles/StyledCenter'

interface HexagonProps {
    width: number
    top: number,
    left: number,
    tile: string
    center?: React.ReactNode
    verticies?: HexagonVerticies
    edges?: HexagonEdges
}

/**
 * Components that should be placed on the verticies of the hexagon
 */
interface HexagonVerticies {
    northWest?: React.ReactNode
    northEast?: React.ReactNode
    west?: React.ReactNode
    east?: React.ReactNode
    southWest?: React.ReactNode
    southEast?: React.ReactNode
}

/**
 * Components that should be placed on the edges of the hexagon
 */
interface HexagonEdges {
    north?: React.ReactNode
    northWest: React.ReactNode
    northEast: React.ReactNode
    southWest: React.ReactNode
    southEast: React.ReactNode
    south?: React.ReactNode
}

const centerTopOffset = 33
const centerLeftOffset = 35

export default function Hexagon(props: HexagonProps) {
    return (
        <StyledHexagon $top={props.top} $left={props.left} $width={props.width} >
            <img width={"100%"} src={props.tile} />
            {props.center && <StyledCenter $top={centerTopOffset} $left={centerLeftOffset}>{props.center}</StyledCenter>}
        </StyledHexagon>
    )
}
