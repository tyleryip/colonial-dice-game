import { styled } from "styled-components";

interface StyledLockProps {
  $locked: boolean;
}

const StyledLock = styled.img<StyledLockProps>`
/** Layout */ 
  position: absolute;
  width: 25%;
  top: 2%;
  left: 4%;

/** Box Model */ 

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 
  opacity: ${(prop) => (prop.$locked ? "100%" : "0%")};
  transition: opacity 250ms ease-out;

/** Responsive Design */ 

/** Interactivity */ 

/** Micellaneous */
`;

export default StyledLock;
