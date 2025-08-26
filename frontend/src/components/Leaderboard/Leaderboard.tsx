import Table from 'react-bootstrap/Table'
import { useAppSelector } from '../../store/hooks'
import { selectOrderedIslandOneLeaderboardEntries, selectOrderedIslandTwoLeaderboardEntries } from '../../store/slices/local/leaderboardSlice/leaderboardSlice'
import StyledLeaderboard from './styles/StyledLeaderboard'
import LeaderboardRow from './LeaderboardRow/LeaderboardRow'
import LeaderboardPlaceholder from './LeaderboardPlaceholder/LeaderboardPlaceholder'
import Tab from 'react-bootstrap/Tab'
import { Nav, Row } from 'react-bootstrap'
import StyledLeaderboardNavItem from './styles/StyledLeaderboardNavItem'
import StyledLeaderboardTabPane from './styles/StyledLeaderboardTabPane'

const Leaderboard = () => {
    // Selectors
    const islandOneEntries = useAppSelector(state => selectOrderedIslandOneLeaderboardEntries(state))
    const islandTwoEntries = useAppSelector(state => selectOrderedIslandTwoLeaderboardEntries(state))

    return (
        <StyledLeaderboard>
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
                                islandOneEntries.length == 0 ? <LeaderboardPlaceholder /> :
                                    <Table
                                        striped>
                                        <thead>
                                            <tr>
                                                <th>Rank</th>
                                                <th>Name</th>
                                                <th>Score</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                islandOneEntries.map((entry, index) => <LeaderboardRow key={index} rank={index + 1} entry={entry} />)
                                            }
                                        </tbody>
                                    </Table>
                            }
                        </StyledLeaderboardTabPane>
                        <StyledLeaderboardTabPane eventKey={'islandTwo'}>
                            {
                                islandTwoEntries.length == 0 ? <LeaderboardPlaceholder /> :
                                    <Table
                                        striped>
                                        <thead>
                                            <tr>
                                                <th>Rank</th>
                                                <th>Name</th>
                                                <th>Score</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                islandTwoEntries.map((entry, index) => <LeaderboardRow key={index} rank={index + 1} entry={entry} />)
                                            }
                                        </tbody>
                                    </Table>
                            }
                        </StyledLeaderboardTabPane>
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </StyledLeaderboard>
    )
}

export default Leaderboard
