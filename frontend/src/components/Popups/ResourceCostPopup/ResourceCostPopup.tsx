import StyledResourceCostIcon from "./styles/StyledResourceCostIcon";
import StyledResourceCostPopup from "./styles/StyledResourceCostPopup";
import StyledPopupArrow from "../styles/StyledPopupArrow";
import { ResourceType } from "../../../constants/resources";
import ore_face from "/assets/resources/ore.png";
import wheat_face from "/assets/resources/wheat.png";
import wool_face from "/assets/resources/wool.png";
import wood_face from "/assets/resources/wood.png";
import brick_face from "/assets/resources/brick.png";
import tooltip_arrow from "/assets/tooltip/tooltip-arrow.svg";

interface ResourceCostPopupProps {
  cost: ResourceType[];
  disabled: boolean;
  top: number;
  left: number;
  width: number;
  arrowTop: number;
  arrowLeft: number;
  allowVertical?: boolean;
  verticalTop?: number;
  verticalLeft?: number;
  verticalWidth?: number;
}

const faceValues = [ore_face, wheat_face, wool_face, wood_face, brick_face];

const ResourceCostPopup = (props: ResourceCostPopupProps) => {
  return (
    !props.disabled && (
      <>
        <StyledResourceCostPopup
          $top={props.top}
          $left={props.left}
          $width={props.width}
          $allowVertical={props.allowVertical}
          $verticalTop={props.verticalTop}
          $verticalLeft={props.verticalLeft}
          $verticalWidth={props.verticalWidth}
        >
          {props.cost.map((resourceType: ResourceType, index: number) => (
            <StyledResourceCostIcon
              key={index}
              src={faceValues[resourceType.id]}
              $width={90 / props.cost.length}
              $allowVertical={props.allowVertical}
              $verticalWidth={100}
            />
          ))}
        </StyledResourceCostPopup>
        <StyledPopupArrow
          src={tooltip_arrow}
          $top={props.arrowTop}
          $left={props.arrowLeft}
          $width={5}
        />
      </>
    )
  );
};

export default ResourceCostPopup;
