import { css, styled } from "styled-components";
import pulse from "../../../../animations/pulse";

export interface DiceFaceIconProps {
  onClick: () => void;
  grayscale: boolean;
  pulse: boolean;
}

interface StyledDiceFaceIconProps {
  $grayscale: boolean;
  $pulse: boolean;
}

const StyledDiceFaceIcon = styled.svg<StyledDiceFaceIconProps>`
  width: 100%;
  border-radius: 10%;
  visibility: visible;

  filter: ${(props) =>
    props.$grayscale &&
    css`
                grayscale(100%)
            `};

  opacity: ${(props) =>
    props.$grayscale &&
    css`
                30%
            `};

  animation: ${(props) =>
    props.$pulse &&
    css`
      ${pulse(1.05)} 1s infinite
    `};

  transition: opacity 250ms ease-out, filter 250ms ease-out;
`;

export default StyledDiceFaceIcon;
