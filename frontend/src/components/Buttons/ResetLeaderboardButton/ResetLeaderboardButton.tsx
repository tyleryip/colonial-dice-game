import { useAppDispatch } from '../../../store/hooks';
import { resetLeaderboard } from '../../../store/slices/leaderboardSlice/leaderboardSlice';
import StyledResetLeaderboardButton from './styles/StyledResetLeaderboardButton'

interface ResetLeaderboardButtonProps {
    onReset: () => void;
}

const ResetLeaderboardButton = (props: ResetLeaderboardButtonProps) => {
    // Dispatch

    const dispatch = useAppDispatch();

    // Conditional rendering

    const tooltip = "Reset leaderboard";

    // Event handlers

    function handleClick() {
        dispatch(resetLeaderboard())

        props.onReset();
    }

    return (
        <StyledResetLeaderboardButton title={tooltip} onClick={handleClick}>
            Reset Leaderboard
        </StyledResetLeaderboardButton>
    )
}

export default ResetLeaderboardButton
