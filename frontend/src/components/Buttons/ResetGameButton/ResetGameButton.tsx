import StyledResetGameButton from "./styles/StyledResetGameButton";

interface ResetGameButtonProps {
  title: string,
  onReset: () => void;
}

const ResetGameButton = (props: ResetGameButtonProps) => {
  // Conditional rendering

  const tooltip = `${props.title}`;

  // Event handlers

  function handleClick() {
    const resetConfirmed = confirm(`Do you want to reset ${props.title}? All progress will be lost.`)
    if (!resetConfirmed) {
      return
    }

    props.onReset();
  }

  return (
    <StyledResetGameButton title={tooltip} onClick={handleClick}>
      {`Reset ${props.title}`}
    </StyledResetGameButton>
  );
};

export default ResetGameButton;
