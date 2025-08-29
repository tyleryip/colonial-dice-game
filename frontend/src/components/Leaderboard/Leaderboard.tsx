import { useAppSelector } from '../../store/hooks'
import { selectOrderedIslandOneLeaderboardEntries, selectOrderedIslandTwoLeaderboardEntries } from '../../store/slices/local/leaderboardSlice/leaderboardSlice'
import LeaderboardPlaceholder from './LeaderboardPlaceholder/LeaderboardPlaceholder'
import Tab from 'react-bootstrap/Tab'
import { Nav, Row } from 'react-bootstrap'
import StyledLeaderboardNavItem from './styles/StyledLeaderboardNavItem'
import StyledLeaderboardTabPane from './styles/StyledLeaderboardTabPane'
import LeaderboardTable from './LeaderboardTable/LeaderboardTable'

const Leaderboard = () => {
    // Props and constants
    const islandOneScoreInformation = "For Island 1, the objective is to score the most points in 15 turns."
    const islandTwoScoreInformation = "For Island 2, the objective is to score 10 points in the fewest number of turns."

    // Selectors
    const islandOneEntries = useAppSelector(state => selectOrderedIslandOneLeaderboardEntries(state))
    const islandTwoEntries = useAppSelector(state => selectOrderedIslandTwoLeaderboardEntries(state))

    return (
        <Tab.Container
            defaultActiveKey={'islandOne'}>
            <Row>
                <Nav
                    variant='underline'
                    className='flex-row'>
                    <StyledLeaderboardNavItem>
                        <Nav.Link eventKey={'islandOne'}>Island 1</Nav.Link>
                    </StyledLeaderboardNavItem>
                    <StyledLeaderboardNavItem>
                        <Nav.Link eventKey={'islandTwo'}>Island 2</Nav.Link>
                    </StyledLeaderboardNavItem>
                </Nav>
            </Row>
            <Row>
                <Tab.Content>
                    <StyledLeaderboardTabPane eventKey={'islandOne'}>
                        {
                            islandOneEntries.length == 0 ?
                                <LeaderboardPlaceholder /> :
                                <LeaderboardTable
                                    entries={islandOneEntries}
                                    scoreLabel={"Score"}
                                    scoreInformation={islandOneScoreInformation} />
                        }
                    </StyledLeaderboardTabPane>
                    <StyledLeaderboardTabPane eventKey={'islandTwo'}>
                        {
                            islandTwoEntries.length == 0 ? <LeaderboardPlaceholder /> :
                                <LeaderboardTable
                                    entries={islandTwoEntries}
                                    scoreLabel={"Turns"}
                                    scoreInformation={islandTwoScoreInformation} />
                        }
                    </StyledLeaderboardTabPane>
                </Tab.Content>
            </Row>
        </Tab.Container>
    )
}

export default Leaderboard
