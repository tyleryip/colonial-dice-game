import { resourceId as ResourceId, Resources } from '../../../types/Resources'
import StyledResourceCostIcon from './styles/StyledResourceCostIcon'
import StyledResourceCostPopup from './styles/StyledResourceCostPopup'
import StyledPopupArrow from '../styles/StyledPopupArrow';

// Resource icons
import ore_face from "../../../assets/dice/ore-face.svg";
import wheat_face from "../../../assets/dice/wheat-face.svg";
import wool_face from "../../../assets/dice/wool-face.svg";
import wood_face from "../../../assets/dice/wood-face.svg";
import brick_face from "../../../assets/dice/brick-face.svg";

import tooltip_arrow from "../../../assets/tooltip/tooltip-arrow.svg"

interface ResourceCostPopupProps {
    cost: Resources
    disabled: boolean
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
            <StyledResourceCostPopup>
                {Array.from({ length: 5 }).map((_, resourceId: number) => {
                    return (
                        props.cost[resourceId as ResourceId] > 0
                        && Array.from({ length: props.cost[resourceId as ResourceId] })
                            .map((_, index: number) => <StyledResourceCostIcon key={index} src={faceValues[resourceId]} />))
                })}
            </StyledResourceCostPopup>
            <StyledPopupArrow
                src={tooltip_arrow}
                $top={8}
                $left={47.5}
                $width={5} />
        </>
        )
}

export default ResourceCostPopup