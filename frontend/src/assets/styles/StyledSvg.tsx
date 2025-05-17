import { css, styled } from "styled-components";

interface StyledSvgProps {
  $opacity?: number;
  $width?: number;
}

const StyledSvg = styled.svg<StyledSvgProps>`
  width: ${(props) => `${props.$width}%`};
  opacity: ${(props) =>
    props.$opacity &&
    css`
      ${props.$opacity}%
    `};

  transition: opacity 250ms ease-out;
`;

export default StyledSvg;
