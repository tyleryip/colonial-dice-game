import StyledPlayAgainButton from "./styles/StyledPlayAgainButton";

interface PlayAgainButtonProps {
  copy: string
  onClick: () => void
}

const PlayAgainButton = (props: PlayAgainButtonProps) => {

  return (
    <StyledPlayAgainButton title={props.copy} onClick={props.onClick}>
      {props.copy}
    </StyledPlayAgainButton>
  );
};

export default PlayAgainButton;
