import StyledRollButton from './styles/StyledRollButton'

import dice_icon from "../../../assets/buttons/dice-icon.svg"
import StyledRollButtonIcon from './styles/StyledRollButtonIcon'

interface RollButtonProps {
    disabled?: boolean
    rollCount: number
    handleClick: () => void
}

const RollButton = (props: RollButtonProps) => {
    const tooltip = `${3 - props.rollCount} rolls left`

    return (
        <StyledRollButton title={tooltip} disabled={props.disabled || props.rollCount >= 3} onClick={props.handleClick}>
            {Array.from({ length: 3 }, (_, key) => (
                <StyledRollButtonIcon key={key} src={dice_icon} $used={props.rollCount > key} />
            ))}
        </StyledRollButton>
    )
}

export default RollButton
