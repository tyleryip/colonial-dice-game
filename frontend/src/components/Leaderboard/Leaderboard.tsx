import Table from 'react-bootstrap/Table'
import { useAppSelector } from '../../store/hooks'
import { selectOrderedLeaderboardEntries } from '../../store/slices/leaderboardSlice/leaderboardSlice'
import StyledLeaderboard from './styles/StyledLeaderboard'
import LeaderboardRow from './LeaderboardRow/LeaderboardRow'
import LeaderboardPlaceholder from './LeaderboardPlaceholder/LeaderboardPlaceholder'

const Leaderboard = () => {
    // Props and constants

    // Selectors
    const leaderboardEntries = useAppSelector(state => selectOrderedLeaderboardEntries(state))

    // Conditional rendering

    return (
        <StyledLeaderboard>
            {
                leaderboardEntries.length == 0 ? <LeaderboardPlaceholder /> :
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
                                leaderboardEntries.map((entry, index) => <LeaderboardRow key={index} rank={index + 1} entry={entry} />)
                            }
                        </tbody>
                    </Table>
            }
        </StyledLeaderboard>
    )
}

export default Leaderboard
