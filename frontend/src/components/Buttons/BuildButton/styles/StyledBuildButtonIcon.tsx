import { styled, css } from 'styled-components'

interface StyledBuildButtonIconProps {
    $width: number;
    $opacity: number;
}

const StyledBuildButtonIcon = styled.img<StyledBuildButtonIconProps>`
  width: ${(props) => `${props.$width}%`};
  opacity: ${(props) =>
        props.$opacity &&
        css`
      ${props.$opacity}%
    `};

  transition: opacity 250ms ease-out;
`;

export default StyledBuildButtonIcon;