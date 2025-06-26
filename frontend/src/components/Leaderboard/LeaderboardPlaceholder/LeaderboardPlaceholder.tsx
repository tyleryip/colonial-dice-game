import StyledLeaderboardPlaceholder from './styles/StyledLeaderboardPlaceholder'
import StyledLeaderboardPlaceholderIcon from './styles/StyledLeaderboardPlaceholderIcon'
import StyledLeaderboardPlaceholderText from './styles/StyledLeaderboardPlaceholderText'
import first_place_trophy from "/assets/leaderboard/first-place-trophy.png"

const LeaderboardPlaceholder = () => {
    const copy = "Be the first! Play now to top the leaderboard!"

    return (
        <StyledLeaderboardPlaceholder>
            <StyledLeaderboardPlaceholderIcon src={first_place_trophy} />
            <StyledLeaderboardPlaceholderText>
                {copy}
            </StyledLeaderboardPlaceholderText>
        </StyledLeaderboardPlaceholder>
    )
}

export default LeaderboardPlaceholder
