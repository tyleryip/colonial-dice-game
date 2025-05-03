import StyledTradingPopup from './styles/StyledTradingPopup'
import StyledTradingIcon from './styles/StyledTradingIcon';
import { useAppDispatch } from '../../../store/hooks';
import { setDice, SetDicePayload, spendGold } from '../../../store/slices/diceSlice';
import { DiceValue } from '../../../types/DiceValue';
import { ResourceType } from '../../../constants/enumerations';
import StyledPopupArrow from '../styles/StyledPopupArrow';
import useClickOutside from '../../../hooks/useClickOutside';

import tooltip_arrow from "../../../assets/tooltip/tooltip-arrow.svg"

// Dice faces
import ore_face from "../../../assets/dice/ore-face.svg";
import wheat_face from "../../../assets/dice/wheat-face.svg";
import wool_face from "../../../assets/dice/wool-face.svg";
import wood_face from "../../../assets/dice/wood-face.svg";
import brick_face from "../../../assets/dice/brick-face.svg";

interface TradingPopupProps {
    diceId: number,
    disabled: boolean,
    onClose: () => void
}

const faceValues = [
    ore_face,
    wheat_face,
    wool_face,
    wood_face,
    brick_face
];

const TradingPopup = (props: TradingPopupProps) => {
    // If any clicks are registered outside of this div, invoke the onClose function
    const ref = useClickOutside(() => props.onClose());

    const dispatch = useAppDispatch()

    const tooltip = (resourceId: number) => `Trade for ${ResourceType[resourceId]}`

    function handleClick(resourceId: number) {
        const setDicePayload: SetDicePayload = {
            id: props.diceId,
            value: resourceId as DiceValue
        }

        dispatch(setDice(setDicePayload))
        dispatch(spendGold())

        props.onClose();
    }

    return !props.disabled
        && (
            <div ref={ref}>
                <StyledTradingPopup>
                    {faceValues.map((icon: string, resourceId: number) => {
                        return <StyledTradingIcon
                            title={tooltip(resourceId)}
                            key={resourceId}
                            onClick={() => handleClick(resourceId)}
                            src={icon} />
                    })}
                </StyledTradingPopup>
                <StyledPopupArrow
                    src={tooltip_arrow}
                    $top={-20}
                    $left={40}
                    $width={23} />
            </div>
        )
}

export default TradingPopup
