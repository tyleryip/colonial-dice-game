import StyledModalHeader from "../styles/StyledModalHeader";
import Modal from "react-bootstrap/Modal";
import StyledSettingsModalBody from "./styles/StyledSettingsModalBody";
import StyledModalFooter from "../styles/StyledModalFooter";
import StyledVersion from "./styles/StyledVersion";
import ResetGameButton from "../../Buttons/ResetGameButton/ResetGameButton";
import Settings from "../../Settings/Settings";

interface SettingsModalProps {
  show: boolean;
  onHide: () => void;
}

const appVersion = __APP_VERSION__;

const SettingsModal = (props: SettingsModalProps) => {
  // Copy

  const headerCopy = "Settings";

  const footerCopy = `v${appVersion}`;

  return (
    <Modal centered backdrop="static" show={props.show}>
      <StyledModalHeader closeButton onHide={() => props.onHide()}>
        {headerCopy}
      </StyledModalHeader>
      <StyledSettingsModalBody>
        <Settings />
        <ResetGameButton onReset={() => props.onHide()} />
      </StyledSettingsModalBody>
      <StyledModalFooter>
        <StyledVersion>{footerCopy}</StyledVersion>
      </StyledModalFooter>
    </Modal>
  );
};

export default SettingsModal;
