import { styled, css } from 'styled-components'

interface StyledRollButtonIconProps {
    $width: number;
    $opacity: number;
}

const StyledRollButtonIcon = styled.img<StyledRollButtonIconProps>`
  width: ${(props) => `${props.$width}%`};
  opacity: ${(props) =>
        props.$opacity &&
        css`
      ${props.$opacity}%
    `};

  transition: opacity 250ms ease-out;
`;

export default StyledRollButtonIcon;