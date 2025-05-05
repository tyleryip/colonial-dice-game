import { Resources } from '../../../types/Resources'
import StyledResourceCostIcon from './styles/StyledResourceCostIcon'
import StyledResourceCostPopup from './styles/StyledResourceCostPopup'
import StyledPopupArrow from '../styles/StyledPopupArrow';

// Icons
import ore_face from "../../../assets/dice/ore-face.svg";
import wheat_face from "../../../assets/dice/wheat-face.svg";
import wool_face from "../../../assets/dice/wool-face.svg";
import wood_face from "../../../assets/dice/wood-face.svg";
import brick_face from "../../../assets/dice/brick-face.svg";
import tooltip_arrow from "../../../assets/tooltip/tooltip-arrow.svg"
import { ResourceType } from '../../../constants/resources';

interface ResourceCostPopupProps {
    cost: Resources
    disabled: boolean
    top: number,
    left: number,
    width: number
    arrowTop: number,
    arrowLeft: number,
    arrowWidth: number,
    allowVertical?: boolean,
    verticalTop?: number,
    verticalLeft?: number,
    verticalWidth?: number,
}

const faceValues = [
    ore_face,
    wheat_face,
    wool_face,
    wood_face,
    brick_face,
];

const ResourceCostPopup = (props: ResourceCostPopupProps) => {
    return !props.disabled &&
        (<>
            <StyledResourceCostPopup
                $top={props.top}
                $left={props.left}
                $width={props.width}
                $allowVertical={props.allowVertical}
                $verticalTop={props.verticalTop}
                $verticalLeft={props.verticalLeft}
                $verticalWidth={props.verticalWidth} >
                {props.cost.map((resourceType: ResourceType, index: number) =>
                    <StyledResourceCostIcon
                        key={index}
                        src={faceValues[resourceType.id]}
                        $width={90 / props.cost.length}
                        $allowVertical={props.allowVertical}
                        $verticalWidth={100} />)}
            </StyledResourceCostPopup>
            <StyledPopupArrow
                src={tooltip_arrow}
                $top={props.arrowTop}
                $left={props.arrowLeft}
                $width={props.arrowWidth} />
        </>
        )
}

export default ResourceCostPopup