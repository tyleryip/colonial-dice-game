import { styled, css } from 'styled-components'

interface StyledBuildButtonIconProps {
  $width: number;
  $opacity: number;
}

const StyledBuildButtonIcon = styled.img<StyledBuildButtonIconProps>`
/** Layout */

/** Box Model */
  width: ${(props) => `${props.$width}%`};

/** Colour + Background */

/** Typography */

/** Visual Effects */
  opacity: ${(props) =>
    props.$opacity &&
    css`
      ${props.$opacity}%
      `};
      
  transition: opacity 250ms ease-out;

/** Responsive Design */

/** Interactivity */

/** Micellaneous */
`;

export default StyledBuildButtonIcon;