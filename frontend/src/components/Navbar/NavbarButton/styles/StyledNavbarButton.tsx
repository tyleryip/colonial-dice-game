import { styled } from "styled-components";

const StyledNavbarButton = styled.div`
  width: 100%;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }

  transition: font-weight 250ms ease-out;
`;

export default StyledNavbarButton;
