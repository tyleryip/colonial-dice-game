import { styled } from 'styled-components'

interface StyledSettingsIconProps {
    $width: number,
}

const StyledSettingsIcon = styled.img<StyledSettingsIconProps>`
    width: ${props => `${props.$width}%`};
    margin-right: 2%;
`

export default StyledSettingsIcon;