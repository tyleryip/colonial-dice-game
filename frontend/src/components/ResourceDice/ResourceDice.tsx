import StyledResourceDice from "./styles/StyledResourceDice";
import { DiceValue } from "../../types/DiceValue";
import TradingPopup from "../Popups/TradingPopup/TradingPopup";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectIsGamePhaseBuilding,
  selectIsGamePhaseRolling,
} from "../../store/slices/gameSlice/gameSlice";
import { getResourceType, ResourceType } from "../../constants/resources";
import {
  toggleDiceLock,
  selectResourceJokerFlag,
  setDice,
  clearResourceJokerFlag,
  SetDicePayload,
  spendDice,
  selectWildcardJokerFlag,
  clearWildcardJokerFlag,
} from "../../store/slices/diceSlice/diceSlice";
import { spendResourceJoker } from "../../store/slices/resourceJokerSlice/resourceJokerSlice";
import { ResourceJokerType } from "../../constants/enumerations";
import { GetResourceJokerId } from "../../constants/mappings";
import OreFaceIcon from "../Icons/DiceFaces/OreFaceIcon";
import WheatFaceIcon from "../Icons/DiceFaces/WheatFaceIcon";
import WoolFaceIcon from "../Icons/DiceFaces/WoolFaceIcon";
import WoodFaceIcon from "../Icons/DiceFaces/WoodFaceIcon";
import BrickFaceIcon from "../Icons/DiceFaces/BrickFaceIcon";
import GoldFaceIcon from "../Icons/DiceFaces/GoldFaceIcon";
import BlankFaceIcon from "../Icons/DiceFaces/BlankFaceIcon";
import LockIcon from "../Icons/DiceFaces/LockIcon";

interface ResourceDiceProps {
  id: number;
  value: DiceValue;
  rolling: boolean;
  rollDurationMilliseconds: number;
  isLocked: boolean;
  isSpent: boolean;
  isTradeable: boolean;
}

const ResourceDice = (props: ResourceDiceProps) => {
  // Props and constants
  const diceId = props.id;
  const diceValue = props.value;
  const isLocked = props.isLocked;
  const isSpent = props.isSpent;
  const rolling = props.rolling;
  const rollDurationMilliseconds = props.rollDurationMilliseconds;
  const isTradeable = props.isTradeable;
  const [tradingPopupOpen, setTradingPopupOpen] = useState(false);

  // Dispatch

  const dispatch = useAppDispatch();

  // Selectors

  const gamePhaseRolling = useAppSelector((state) =>
    selectIsGamePhaseRolling(state)
  );
  const gamePhaseBuilding = useAppSelector((state) =>
    selectIsGamePhaseBuilding(state)
  );
  const resourceJokerFlag = useAppSelector((state) =>
    selectResourceJokerFlag(state)
  );
  const wildcardJokerFlag = useAppSelector((state) =>
    selectWildcardJokerFlag(state)
  );

  // Conditional rendering

  const canOpenTradePopup =
    gamePhaseBuilding &&
    diceValue == ResourceType.GOLD.id &&
    !isSpent &&
    isTradeable;

  const canSetWithResourceJoker =
    gamePhaseBuilding && resourceJokerFlag != null && !isSpent;

  const canSetWithWildcardJoker =
    gamePhaseBuilding && wildcardJokerFlag != null && !isSpent;

  const wobble = rolling && !isLocked;

  const pulse =
    canOpenTradePopup || canSetWithResourceJoker || canSetWithWildcardJoker;

  const pointer =
    (gamePhaseRolling && diceValue !== null) ||
    canOpenTradePopup ||
    canSetWithResourceJoker ||
    canSetWithWildcardJoker;

  const getTooltip = (): string => {
    if (gamePhaseRolling && diceValue != null) {
      return isLocked ? "Unlock dice" : "Lock dice";
    }

    if (gamePhaseBuilding && resourceJokerFlag != null && !isSpent) {
      return `Set to ${getResourceType(resourceJokerFlag).toString()}`;
    }

    if (gamePhaseBuilding && wildcardJokerFlag != null && !isSpent) {
      return `Set to ${getResourceType(wildcardJokerFlag).toString()}`;
    }

    return canOpenTradePopup ? "Trade gold" : "";
  };

  const getTradingPopupTooltip = (resourceType: ResourceType) => {
    return `Trade for ${resourceType.name}`;
  };

  // Event handlers

  const handleClick = () => {
    if (gamePhaseRolling && diceValue !== null) {
      dispatch(toggleDiceLock(diceId));
      return;
    }

    if (gamePhaseBuilding && !isSpent) {
      // Resource and wildcard joker setting takes priority over gold trading
      if (wildcardJokerFlag != null) {
        dispatch(
          setDice({ id: diceId, value: wildcardJokerFlag as DiceValue })
        );
        dispatch(clearWildcardJokerFlag());
        dispatch(
          spendResourceJoker(GetResourceJokerId(ResourceJokerType.Wildcard))
        );
        return; // Prevent setting a gold dice from also opening up the trading popup
      }

      if (resourceJokerFlag != null) {
        dispatch(
          setDice({ id: diceId, value: resourceJokerFlag as DiceValue })
        );
        dispatch(clearResourceJokerFlag());
        dispatch(spendResourceJoker(resourceJokerFlag));
        return; // Prevent setting a gold dice from also opening up the trading popup
      }

      if (canOpenTradePopup) {
        setTradingPopupOpen(!tradingPopupOpen);
      }
    }
  };

  const handleTradePopupClick = (resourceId: number) => {
    const setDicePayload: SetDicePayload = {
      id: diceId,
      value: resourceId as DiceValue,
    };

    dispatch(setDice(setDicePayload));
    dispatch(spendDice(JSON.stringify(ResourceType.GOLD)));

    handleCloseTradePopup();
  };

  const handleCloseTradePopup = () => {
    setTradingPopupOpen(false);
  };

  return (
    <StyledResourceDice title={getTooltip()} $pointer={pointer}>
      <TradingPopup
        tooltip={getTradingPopupTooltip}
        disabled={!tradingPopupOpen}
        onClick={handleTradePopupClick}
        onClose={handleCloseTradePopup}
      />
      {((rolling && !isLocked) || diceValue === null) && (
        <BlankFaceIcon
          wobble={wobble}
          wobbleDurationMilliseconds={rollDurationMilliseconds}
        />
      )}
      {(!rolling || isLocked) && diceValue === 0 && (
        <OreFaceIcon onClick={handleClick} grayscale={isSpent} pulse={pulse} />
      )}
      {(!rolling || isLocked) && diceValue === 1 && (
        <WheatFaceIcon
          onClick={handleClick}
          grayscale={isSpent}
          pulse={pulse}
        />
      )}
      {(!rolling || isLocked) && diceValue === 2 && (
        <WoolFaceIcon onClick={handleClick} grayscale={isSpent} pulse={pulse} />
      )}
      {(!rolling || isLocked) && diceValue === 3 && (
        <WoodFaceIcon onClick={handleClick} grayscale={isSpent} pulse={pulse} />
      )}
      {(!rolling || isLocked) && diceValue === 4 && (
        <BrickFaceIcon
          onClick={handleClick}
          grayscale={isSpent}
          pulse={pulse}
        />
      )}
      {(!rolling || isLocked) && diceValue === 5 && (
        <GoldFaceIcon onClick={handleClick} grayscale={isSpent} pulse={pulse} />
      )}
      <LockIcon locked={isLocked} />
    </StyledResourceDice>
  );
};

export default ResourceDice;
