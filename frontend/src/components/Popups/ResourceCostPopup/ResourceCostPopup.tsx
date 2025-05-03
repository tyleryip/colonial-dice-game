import { resourceId as ResourceId, Resources } from '../../../types/Resources'
import StyledResourceCostIcon from './styles/StyledResourceCostIcon'
import StyledResourceCostPopup from './styles/StyledResourceCostPopup'

// Resource icons
import ore_face from "../../../assets/dice/ore-face.svg";
import wheat_face from "../../../assets/dice/wheat-face.svg";
import wool_face from "../../../assets/dice/wool-face.svg";
import wood_face from "../../../assets/dice/wood-face.svg";
import brick_face from "../../../assets/dice/brick-face.svg";

interface ResourceCostPopupProps {
    cost: Resources
}

const faceValues = [
    ore_face,
    wheat_face,
    wool_face,
    wood_face,
    brick_face,
];

const ResourceCostPopup = (props: ResourceCostPopupProps) => {
    return (
        <StyledResourceCostPopup>
            {Array.from({ length: 5 }).map((_, resourceId: number) => {
                return (
                    props.cost[resourceId as ResourceId] > 0
                    && Array.from({ length: props.cost[resourceId as ResourceId] })
                        .map((_, index: number) => <StyledResourceCostIcon key={index} src={faceValues[resourceId]} />))
            })}
        </StyledResourceCostPopup>
    )
}

export default ResourceCostPopup