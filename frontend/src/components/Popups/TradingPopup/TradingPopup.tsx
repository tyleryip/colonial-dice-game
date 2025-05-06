import StyledTradingPopup from './styles/StyledTradingPopup'
import StyledTradingIcon from './styles/StyledTradingIcon';
import { useAppDispatch } from '../../../store/hooks';
import { setDice, SetDicePayload, spendDice } from '../../../store/slices/diceSlice';
import { DiceValue } from '../../../types/DiceValue';
import StyledPopupArrow from '../styles/StyledPopupArrow';
import useClickOutside from '../../../hooks/useClickOutside';


// Icons
import ore_face from "../../../assets/dice/ore-face.svg";
import wheat_face from "../../../assets/dice/wheat-face.svg";
import wool_face from "../../../assets/dice/wool-face.svg";
import wood_face from "../../../assets/dice/wood-face.svg";
import brick_face from "../../../assets/dice/brick-face.svg";
import tooltip_arrow from "../../../assets/tooltip/tooltip-arrow.svg"
import { ResourceType } from '../../../constants/resources';

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

const resourceTypes = [ResourceType.ORE, ResourceType.WHEAT, ResourceType.WOOL, ResourceType.WOOD, ResourceType.BRICK]

const TradingPopup = (props: TradingPopupProps) => {
    // If any clicks are registered outside of this div, invoke the onClose function
    const ref = useClickOutside(() => props.onClose());

    const dispatch = useAppDispatch()

    const tooltip = (resourceType: ResourceType) => `Trade for ${resourceType.name}`

    function handleClick(resourceId: number) {
        const setDicePayload: SetDicePayload = {
            id: props.diceId,
            value: resourceId as DiceValue
        }

        dispatch(setDice(setDicePayload))
        dispatch(spendDice(JSON.stringify(ResourceType.GOLD)))

        props.onClose();
    }

    return !props.disabled
        && (
            <div ref={ref}>
                <StyledTradingPopup>
                    {resourceTypes.map((resourceType: ResourceType, resourceId: number) => {
                        return <StyledTradingIcon
                            title={tooltip(resourceType)}
                            key={resourceId}
                            onClick={() => handleClick(resourceId)}
                            src={faceValues[resourceId]} />
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
