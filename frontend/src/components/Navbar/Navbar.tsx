import StyledNavBar from './styles/StyledNavBar'
import StyledNavBarBrand from './styles/StyledNavBarBrand'
import dice_icon from "../../assets/buttons/dice-icon.svg"
import StyledNavBarBrandIcon from './styles/StyledNavBarBrandIcon'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import StyledNavbarCollapse from './styles/StyledNavbarCollapse'
import StyledNavbarText from './styles/StyledNavbarText'

const Navbar = () => {
    return (
        <StyledNavBar expand="sm">
            <StyledNavBarBrand href={"/"}>
                <StyledNavBarBrandIcon src={dice_icon} />
                {"Colonial Dice Game"}
            </StyledNavBarBrand>
            <NavbarToggle />
            <StyledNavbarCollapse>
                <StyledNavbarText>
                    {"How to Play"}
                </StyledNavbarText>
                <StyledNavbarText >
                    {"Settings"}
                </StyledNavbarText>
            </StyledNavbarCollapse>
        </StyledNavBar>
    )
}

export default Navbar
