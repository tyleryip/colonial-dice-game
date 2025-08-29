import StyledModalHeader from "../styles/StyledModalHeader";
import Modal from "react-bootstrap/Modal";
import StyledSettingsModalBody from "./styles/StyledSettingsModalBody";
import StyledModalFooter from "../styles/StyledModalFooter";
import StyledVersion from "./styles/StyledVersion";
import ResetGameButton from "../../Buttons/ResetGameButton/ResetGameButton";
import Settings from "../../Settings/Settings";
import ResetLeaderboardButton from "../../Buttons/ResetLeaderboardButton/ResetLeaderboardButton";
import StyledSettingsButtonTray from "./styles/StyledSettingsButtonTray";
import { useAppDispatch } from "../../../store/hooks";
import { islandOneResetGame } from "../../../store/slices/session/islandOne/gameSlice/islandOneGameSlice";
import { islandOneResetDice } from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice";
import { islandOneResetKnights } from "../../../store/slices/session/islandOne/knightSlice/islandOneKnightSlice";
import { islandOneResetActiveResourceJoker } from "../../../store/slices/session/islandOne/resourceJokerSlice/islandOneResourceJokerSlice";
import { islandOneResetScore } from "../../../store/slices/session/islandOne/scoreSlice/islandOneScoreSlice";
import { islandOneResetStructures } from "../../../store/slices/session/islandOne/structureSlice/islandOneStructureSlice";
import { islandTwoResetDice } from "../../../store/slices/session/islandTwo/diceSlice/islandTwoDiceSlice";
import { islandTwoResetGame } from "../../../store/slices/session/islandTwo/gameSlice/islandTwoGameSlice";
import { islandTwoResetKnights } from "../../../store/slices/session/islandTwo/knightSlice/islandTwoKnightSlice";
import { islandTwoResetActiveResourceJoker } from "../../../store/slices/session/islandTwo/resourceJokerSlice/islandTwoResourceJokerSlice";
import { islandTwoResetScore } from "../../../store/slices/session/islandTwo/scoreSlice/islandTwoScoreSlice";
import { islandTwoResetStructures } from "../../../store/slices/session/islandTwo/structureSlice/islandTwoStructureSlice";

interface SettingsModalProps {
  show: boolean;
  onHide: () => void;
}

const appVersion = __APP_VERSION__;

const SettingsModal = (props: SettingsModalProps) => {
  // Dispatch

  const dispatch = useAppDispatch();

  // Copy

  const showDedication = import.meta.env.VITE_SHOW_DEDICATION === "true"
  console.log("showDedication: ", showDedication)

  const footerCopy = `v${appVersion}`;

  // Event handlers
  const handleIslandOneResetGame = () => {
    dispatch(islandOneResetGame());
    dispatch(islandOneResetKnights());
    dispatch(islandOneResetActiveResourceJoker());
    dispatch(islandOneResetStructures());
    dispatch(islandOneResetScore());
    dispatch(islandOneResetDice());

    props.onHide();
  }

  const handleIslandTwoResetGame = () => {
    dispatch(islandTwoResetGame());
    dispatch(islandTwoResetKnights());
    dispatch(islandTwoResetActiveResourceJoker());
    dispatch(islandTwoResetStructures());
    dispatch(islandTwoResetScore());
    dispatch(islandTwoResetDice());

    props.onHide();
  }

  return (
    <Modal centered backdrop="static" show={props.show}>
      <StyledModalHeader closeButton onHide={() => props.onHide()}>
        {"Settings"}
      </StyledModalHeader>
      <StyledSettingsModalBody>
        <Settings />
        <StyledSettingsButtonTray>
          <ResetGameButton title={"Island 1"} onReset={() => handleIslandOneResetGame()} />
          <ResetGameButton title={"Island 2"} onReset={() => handleIslandTwoResetGame()} />
          <ResetLeaderboardButton onReset={() => props.onHide()} />
        </StyledSettingsButtonTray>
      </StyledSettingsModalBody>
      <StyledModalFooter>
        <StyledVersion>{footerCopy}</StyledVersion>
        {showDedication && <StyledVersion>{"Inspired by Monika ❤️"}</StyledVersion>}
      </StyledModalFooter>
    </Modal>
  );
};

export default SettingsModal;
