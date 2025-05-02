import StyledTradingPopup from './styles/StyledTradingPopup'

// Dice faces
import ore_face from "../../assets/dice/ore-face.svg";
import wheat_face from "../../assets/dice/wheat-face.svg";
import wool_face from "../../assets/dice/wool-face.svg";
import wood_face from "../../assets/dice/wood-face.svg";
import brick_face from "../../assets/dice/brick-face.svg";
import StyledTradingIcon from './styles/StyledTradingIcon';
import { useAppDispatch } from '../../store/hooks';
import { setDice, SetDicePayload, spendGold } from '../../store/slices/diceSlice';
import { DiceValue } from '../../types/DiceValue';
import { ResourceType } from '../../constants/enumerations';

interface TradingPopupProps {
    onClosePopup: () => void
    diceId: number
}

const faceValues = [
    ore_face,
    wheat_face,
    wool_face,
    wood_face,
    brick_face
];

const TradingPopup = (props: TradingPopupProps) => {
    const dispatch = useAppDispatch()

    const tooltip = (resourceId: number) => `Trade for ${ResourceType[resourceId]}`

    function handleClick(resourceId: number) {
        const setDicePayload: SetDicePayload = {
            id: props.diceId,
            value: resourceId as DiceValue
        }

        dispatch(setDice(setDicePayload))
        dispatch(spendGold())

        props.onClosePopup();
    }

    return (
        <StyledTradingPopup>
            {faceValues.map((icon: string, resourceId: number) => {
                return <StyledTradingIcon
                    title={tooltip(resourceId)}
                    key={resourceId}
                    onClick={() => handleClick(resourceId)}
                    src={icon} />
            })}
        </StyledTradingPopup>
    )
}

export default TradingPopup
