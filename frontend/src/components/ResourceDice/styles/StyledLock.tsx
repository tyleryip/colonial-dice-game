import { styled } from "styled-components";

interface StyledLockProps {
  $locked: boolean;
}

const StyledLock = styled.img<StyledLockProps>`
  position: absolute;
  top: 2%;
  left: 4%;
  opacity: ${(prop) => (prop.$locked ? "100%" : "0%")};
  transition: opacity 250ms ease-out;
`;

export default StyledLock;
