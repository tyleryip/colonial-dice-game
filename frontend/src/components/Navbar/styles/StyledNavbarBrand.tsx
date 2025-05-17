import NavbarBrand from "react-bootstrap/NavbarBrand";
import { styled } from "styled-components";

const StyledNavbarBrand = styled(NavbarBrand)`
  display: flex;
  align-items: center;

  > h1 {
    font-size: 20px;
    align-self: center;
    margin-bottom: 0;
    margin-left: 1%;
  }
`;

export default StyledNavbarBrand;
