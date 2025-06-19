import StyledPopupArrow from "../styles/StyledPopupArrow";
import useClickOutside from "../../../hooks/useClickOutside";
import { ResourceType } from "../../../constants/resources";
import StyledWildcardTradingPopup from "./styles/StyledWildcardTradingPopup";
import StyledWildcardTradingIcon from "./styles/StyledWildcardTradingIcon";
import ore_face from "/assets/resources/ore.png";
import wheat_face from "/assets/resources/wheat.png";
import wool_face from "/assets/resources/wool.png";
import wood_face from "/assets/resources/wood.png";
import brick_face from "/assets/resources/brick.png";
import tooltip_arrow from "/assets/tooltip/tooltip-arrow.svg";

interface WildcardTradingPopupProps {
  disabled: boolean;
  tooltip: (resourceType: ResourceType) => string;
  onClick: (resourceId: number) => void;
  onClose: () => void;
}

const faceValues = [ore_face, wheat_face, wool_face, wood_face, brick_face];

const resourceTypes = [
  ResourceType.ORE,
  ResourceType.WHEAT,
  ResourceType.WOOL,
  ResourceType.WOOD,
  ResourceType.BRICK,
];

const WildcardTradingPopup = (props: WildcardTradingPopupProps) => {
  // If any clicks are registered outside of this div, invoke the onClose function
  const ref = useClickOutside(() => props.onClose());

  return (
    !props.disabled && (
      <div ref={ref}>
        <StyledWildcardTradingPopup>
          {resourceTypes.map(
            (resourceType: ResourceType, resourceId: number) => {
              return (
                <StyledWildcardTradingIcon
                  title={props.tooltip(resourceType)}
                  key={resourceId}
                  onClick={() => props.onClick(resourceId)}
                  src={faceValues[resourceId]}
                />
              );
            }
          )}
        </StyledWildcardTradingPopup>
        <StyledPopupArrow src={tooltip_arrow} $top={8} $left={48} $width={5} />
      </div>
    )
  );
};

export default WildcardTradingPopup;
