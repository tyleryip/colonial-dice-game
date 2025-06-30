import { styled, css } from 'styled-components'

interface StyledRollButtonIconProps {
  $opacity: number;
}

const StyledRollButtonIcon = styled.img<StyledRollButtonIconProps>`
/** Layout */

/** Box Model */
  width: 24%;

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

export default StyledRollButtonIcon;