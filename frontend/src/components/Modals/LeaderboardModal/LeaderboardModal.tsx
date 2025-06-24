import Modal from "react-bootstrap/Modal"
import StyledModalHeader from "../styles/StyledModalHeader"
import StyledLeaderboardModalBody from "./styles/StyledLeaderboardModalBody"
import Leaderboard from "../../Leaderboard/Leaderboard"

interface LeaderboardModalProps {
    show: boolean,
    onHide: () => void
}

const LeaderboardModal = (props: LeaderboardModalProps) => {
    // Copy

    const headerCopy = "Leaderboard"

    return (
        <Modal
            centered
            backdrop="static"
            show={props.show}
            scrollable>
            <StyledModalHeader
                closeButton
                onHide={() => props.onHide()}>
                {headerCopy}
            </StyledModalHeader>
            <StyledLeaderboardModalBody>
                <Leaderboard />
            </StyledLeaderboardModalBody>
        </Modal>
    )
}

export default LeaderboardModal
