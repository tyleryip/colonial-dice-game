import StyledHowToPlayNavItem from './styles/StyledHowToPlayNavItem'
import HowToPlayBasic from './HowToPlayBasic'
import HowToPlayIslandOne from './HowToPlayIslandOne'
import HowToPlayIslandTwo from './HowToPlayIslandTwo'
import { Nav, Row, Tab } from 'react-bootstrap'
import StyledHowToPlayTabPane from './styles/StyledHowToPlayTabPane'

const HowToPlay = () => {
    return (
        <Tab.Container
            defaultActiveKey={'basics'}>
            <Row>
                <Nav
                    variant='underline'
                    className='flex-row'>
                    <StyledHowToPlayNavItem>
                        <Nav.Link eventKey={'basics'}>Basics</Nav.Link>
                    </StyledHowToPlayNavItem>
                    <StyledHowToPlayNavItem>
                        <Nav.Link eventKey={'islandOne'}>Island 1</Nav.Link>
                    </StyledHowToPlayNavItem>
                    <StyledHowToPlayNavItem>
                        <Nav.Link eventKey={'islandTwo'}>Island 2</Nav.Link>
                    </StyledHowToPlayNavItem>
                </Nav>
            </Row>
            <Row>
                <Tab.Content>
                    <StyledHowToPlayTabPane eventKey={'basics'}>
                        <HowToPlayBasic />
                    </StyledHowToPlayTabPane>
                    <StyledHowToPlayTabPane eventKey={'islandOne'}>
                        <HowToPlayIslandOne />
                    </StyledHowToPlayTabPane>
                    <StyledHowToPlayTabPane eventKey={'islandTwo'}>
                        <HowToPlayIslandTwo />
                    </StyledHowToPlayTabPane>
                </Tab.Content>
            </Row>
        </Tab.Container>
    )
}

export default HowToPlay