import StyledModalHeader from '../styles/StyledModalHeader'
import Modal from 'react-bootstrap/Modal'
import StyledHowToPlayModalBody from './styles/StyledHowToPlayModalBody'

interface HowToPlayModalProps {
    show: boolean
    onHide: () => void
}

const HowToPlayModal = (props: HowToPlayModalProps) => {

    // Copy

    const headerCopy = "How to Play"

    return (
        <Modal
            centered
            scrollable
            backdrop="static"
            show={props.show}
            size='lg'
        >
            <StyledModalHeader
                closeButton
                onHide={() => props.onHide()}>
                {headerCopy}
            </StyledModalHeader>
            <StyledHowToPlayModalBody>
                <h1>
                    Basics
                </h1>
                <p>
                    The objective of Colonial Dice Game is to build as many roads,
                    settlements, cities, and knights as possible. Each road, settlement,
                    city, and knight is worth a certain amount of points. Players compete
                    to obtain the most points in 15 turns.
                </p>
                <h1>
                    Setup
                </h1>
                <p>
                    Each player should open Colonial Dice Game on their device.
                </p>
                <h1>
                    Gameplay
                </h1>
                <p>
                    Colonial Dice Game is a turn-based game, starting with the youngest player
                    and continuing clockwise. Each turn includes two phases, rolling and building.
                </p>
                <h2>
                    Rolling
                </h2>
                <p>
                    During the rolling phase, you may roll the resource dice up to three times.
                    You may also choose to stop rolling early and build.
                </p>
                <ul>
                    <li>
                        <b>Locking</b>: between rolls, you may choose to 'lock' any number of die
                        and re-roll the rest.
                    </li>

                </ul>
                <h2>
                    Building
                </h2>
                <p>
                    During the building phase, you use the resources you rolled to build roads,
                    settlements, cities, or knights. To build a structure, you must satisfy the
                    following:
                </p>
                <ul>
                    <li>
                        <b>Cost</b>: each structure requires specific resources to build.
                        You can hover over the structures to see their cost.
                    </li>
                    <li>
                        <b>Adjacency</b>: you can only build structures next to an already built road.
                    </li>
                    <li>
                        <b>Prerequisites</b>: with the exception of roads, you must build structures in order of
                        ascending point value. (ex. You must build settlement 3 before
                        you can build settlement 4, etc.)
                    </li>
                </ul>
                <p>
                    You can build multiple structures in one turn if you have enough resources.
                </p>
                <h1>
                    Special Rules
                </h1>
                <ul>
                    <li>
                        <b>Knights</b>: once built, they provide a one-time resource joker that can change
                        a die of your choice to the resource depicted. The wildcard joker allows you
                        to choose which resource to set. You may use as many resource jokers in a turn as you want,
                        including on the same turn you built the knight.
                    </li>
                    <li>
                        <b>Gold</b>: you may trade two gold for a resource of your choice, as many times as you
                        have gold available.
                    </li>
                </ul>
                <h1>
                    Scoring
                </h1>
                <p>
                    Each turn, you will receive points for each structure or knight you build.
                    However, if you do not build anything, you will receive an 'X' for that turn, which
                    indicates -2 points. The game ends after 15 rounds and the player with the most
                    points wins.
                </p>
            </StyledHowToPlayModalBody>
        </Modal>
    )
}

export default HowToPlayModal
