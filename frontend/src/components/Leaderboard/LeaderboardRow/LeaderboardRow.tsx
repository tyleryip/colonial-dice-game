import { LeaderboardEntry } from "../../../store/slices/local/leaderboardSlice/leaderboardSlice"
import StyledLeaderboardRankIcon from "./styles/StyledLeaderboardRankIcon"
import StyledLeaderboardRow from "./styles/StyledLeaderboardRow"
import StyledLeaderboardTableData from "./styles/StyledLeaderboardTableData"
import first_place_trophy from "/assets/leaderboard/first-place-trophy.png"
import second_place_trophy from "/assets/leaderboard/second-place-trophy.png"
import third_place_trophy from "/assets/leaderboard/third-place-trophy.png"

interface LeaderboardRowProps {
    rank: number,
    entry: LeaderboardEntry
}

const rankIcons = [
    first_place_trophy,
    second_place_trophy,
    third_place_trophy
]

const LeaderboardRow = (props: LeaderboardRowProps) => {
    // Conditional rendering
    const showRankIcon = props.rank < 4

    const rankIcon = showRankIcon
        ? rankIcons[props.rank - 1]
        : ""

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    };
    const displayDate = new Date(props.entry.date).toLocaleDateString("en-CA", options)

    return (
        <StyledLeaderboardRow>
            <StyledLeaderboardTableData
                $rank>
                {showRankIcon ?
                    <StyledLeaderboardRankIcon src={rankIcon} /> :
                    props.rank
                }
            </StyledLeaderboardTableData>
            <StyledLeaderboardTableData>{props.entry.name}</StyledLeaderboardTableData>
            <StyledLeaderboardTableData>{props.entry.score}</StyledLeaderboardTableData>
            <StyledLeaderboardTableData>{displayDate}</StyledLeaderboardTableData>
        </StyledLeaderboardRow>
    )
}

export default LeaderboardRow
