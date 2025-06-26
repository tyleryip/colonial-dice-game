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
        const resetConfirmed = confirm("Do you want to reset your local leaderboard? All leaderboard entries will be lost.")
        if (!resetConfirmed) {
            return
        }

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
