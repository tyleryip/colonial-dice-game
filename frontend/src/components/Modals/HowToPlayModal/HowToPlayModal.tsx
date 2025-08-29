import StyledModalHeader from '../styles/StyledModalHeader'
import Modal from 'react-bootstrap/Modal'
import StyledHowToPlayModalBody from './styles/StyledHowToPlayModalBody'
import HowToPlay from '../../HowToPlay/HowToPlay'

interface HowToPlayModalProps {
    show: boolean
    onHide: () => void
}

const HowToPlayModal = (props: HowToPlayModalProps) => {
    return (
        <Modal
            centered
            scrollable
            backdrop="static"
            show={props.show}
            size='xl'
        >
            <StyledModalHeader
                closeButton
                onHide={() => props.onHide()}>
                {"How to Play"}
            </StyledModalHeader>
            <StyledHowToPlayModalBody>
                <HowToPlay />
            </StyledHowToPlayModalBody>
        </Modal>
    )
}

export default HowToPlayModal
