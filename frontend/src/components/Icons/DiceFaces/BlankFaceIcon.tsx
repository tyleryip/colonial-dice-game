import styled, { css } from "styled-components";
import wobble from "../../../animations/wobble";

interface BlankFaceIconProps {
  wobble: boolean;
  wobbleDurationMilliseconds: number;
}

interface StyledBlankFaceIconProps {
  $wobble: boolean;
  $wobbleDurationMilliseconds: number;
}

const StyledBlankFaceIcon = styled.svg<StyledBlankFaceIconProps>`
  width: 100%;
  border-radius: 10%;

  animation: ${(props) =>
    props.$wobble &&
    css`
      ${wobble} ${props.$wobbleDurationMilliseconds}ms linear
    `};
`;

const BlankFaceIcon = (props: BlankFaceIconProps) => {
  return (
    <StyledBlankFaceIcon
      $wobble={props.wobble}
      $wobbleDurationMilliseconds={props.wobbleDurationMilliseconds}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="white" />
    </StyledBlankFaceIcon>
  );
};

export default BlankFaceIcon;
