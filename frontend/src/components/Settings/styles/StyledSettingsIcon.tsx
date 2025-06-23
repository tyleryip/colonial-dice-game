import { styled } from 'styled-components'

interface StyledSettingsIconProps {
    $width: number,
}

const StyledSettingsIcon = styled.img<StyledSettingsIconProps>`
/** Layout */ 

/** Box Model */ 
    width: ${props => `${props.$width}%`};
    margin-right: 2%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 

/** Interactivity */ 

/** Micellaneous */
`

export default StyledSettingsIcon;