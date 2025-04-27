import ResourceDice from "../ResourceDice/ResourceDice"
import StyledResourceDiceContainer from "./StyledResourceDiceContainer"

const ResourceDiceContainer = () => {
    return (
        <StyledResourceDiceContainer>
            <ResourceDice id={1} locked={false} />
            <ResourceDice id={2} locked={false} />
            <ResourceDice id={3} locked={false} />
            <ResourceDice id={4} locked={false} />
            <ResourceDice id={5} locked={false} />
            <ResourceDice id={6} locked={false} />
        </StyledResourceDiceContainer>
    )
}

export default ResourceDiceContainer
