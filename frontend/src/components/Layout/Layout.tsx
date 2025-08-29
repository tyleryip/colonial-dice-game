
import StyledLayout from "./styles/StyledLayout";
import StyledVerticallyCenteredContainer from "./styles/StyledVerticallyCenteredContainer";

interface LayoutProps {
    children?: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <StyledLayout>
            <StyledVerticallyCenteredContainer>
                {props.children}
            </StyledVerticallyCenteredContainer>
        </StyledLayout>)
}