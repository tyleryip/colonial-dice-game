import { styled, css } from 'styled-components'

interface StyledRollButtonIconProps {
  $opacity: number;
}

const StyledRollButtonIcon = styled.img<StyledRollButtonIconProps>`
  width: 24%;
  opacity: ${(props) =>
    props.$opacity &&
    css`
      ${props.$opacity}%
    `};

  transition: opacity 250ms ease-out;
`;

export default StyledRollButtonIcon;