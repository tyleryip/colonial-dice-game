import NavbarToggle from "react-bootstrap/NavbarToggle";
import HowToPlayModal from "../Modals/HowToPlayModal/HowToPlayModal";
import { useState } from "react";
import SettingsModal from "../Modals/SettingsModal/SettingsModal";
import StyledNavbar from "./styles/StyledNavbar";
import StyledNavbarBrand from "./styles/StyledNavbarBrand";
import StyledNavbarCollapse from "./styles/StyledNavbarCollapse";
import StyledNavbarText from "./styles/StyledNavbarText";
import StyledNavbarButton from "./NavbarButton/styles/StyledNavbarButton";
import dice_icon from "/assets/navbar/dice-icon.png";
import StyledNavbarBrandIcon from "./styles/StyledNavbarBrandIcon";
import LeaderboardModal from "../Modals/LeaderboardModal/LeaderboardModal";
import { NavDropdown } from "react-bootstrap";
import StyledNavDropdown from "./styles/StyledNavDropdown";

const Navbar = () => {
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <StyledNavbar expand="sm">
      <StyledNavbarBrand>
        <StyledNavbarBrandIcon src={dice_icon} />
        {"Colonial Dice Game"}
      </StyledNavbarBrand>
      <NavbarToggle />
      <StyledNavbarCollapse>
        <StyledNavDropdown title="Islands">
          <NavDropdown.Item href="/" >Island 1</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/island-2" >Island 2</NavDropdown.Item>
        </StyledNavDropdown>
        <StyledNavbarText>
          <StyledNavbarButton onClick={() => setShowLeaderboardModal(true)}>
            {"Leaderboard"}
          </StyledNavbarButton>
          <LeaderboardModal
            show={showLeaderboardModal}
            onHide={() => setShowLeaderboardModal(false)} />
        </StyledNavbarText>
        <StyledNavbarText>
          <StyledNavbarButton onClick={() => setShowHowToPlayModal(true)}>
            {"How to Play"}
          </StyledNavbarButton>
          <HowToPlayModal
            show={showHowToPlayModal}
            onHide={() => setShowHowToPlayModal(false)}
          />
        </StyledNavbarText>
        <StyledNavbarText>
          <StyledNavbarButton onClick={() => setShowSettingsModal(true)}>
            {"Settings"}
          </StyledNavbarButton>
          <SettingsModal
            show={showSettingsModal}
            onHide={() => setShowSettingsModal(false)}
          />
        </StyledNavbarText>
      </StyledNavbarCollapse>
    </StyledNavbar>
  );
};

export default Navbar;
