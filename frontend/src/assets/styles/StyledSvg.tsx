import { css, styled } from "styled-components";

interface StyledSvgProps {
  $opacity?: number;
  $width?: number;
}

const StyledSvg = styled.svg<StyledSvgProps>`
  width: ${(props) =>
    props.$width &&
    css`
      ${props.$width}%
    `};
  opacity: ${(props) =>
    props.$opacity &&
    css`
      ${props.$opacity}%
    `};
`;

export default StyledSvg;
