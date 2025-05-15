import StyledModalHeader from '../styles/StyledModalHeader'
import Modal from 'react-bootstrap/Modal'
import StyledHowToPlayModalBody from './styles/StyledHowToPlayModalBody'
import StyledHowToPlayAsset from './styles/StyledHowToPlayAsset'
import fresh_game_png from "/assets/how-to-play/fresh_game.png"
import game_over_png from "/assets/how-to-play/game_over.png"
import build_structure_gif from "/assets/how-to-play/build_structure.gif"
import hover_to_see_cost_gif from "/assets/how-to-play/hover_to_see_cost.gif"
import toggle_dice_locks_gif from "/assets/how-to-play/toggle_dice_locks.gif"
import use_knight_to_set_resource_gif from "/assets/how-to-play/use_knight_to_set_resource.gif"
import use_wildcard_joker_to_choose_resource_gif from "/assets/how-to-play/use_wildcard_joker_to_choose_resource.gif"
import trade_gold_for_any_resource_gif from "/assets/how-to-play/trade_gold_for_any_resource.gif"

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
                <StyledHowToPlayAsset
                    src={fresh_game_png}
                    alt="The Colonial Dice Game board" />
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

                <p>
                    <b>Locking</b>: between rolls, you may choose to 'lock' any number of die
                    and re-roll the rest.
                </p>
                <StyledHowToPlayAsset
                    src={toggle_dice_locks_gif}
                    alt="Locking dice" />
                <h2>
                    Building
                </h2>
                <p>
                    During the building phase, you use the resources you rolled to build roads,
                    settlements, cities, or knights.
                </p>
                <StyledHowToPlayAsset
                    src={build_structure_gif}
                    alt="Building structures" />
                <p>
                    To build a structure, you must satisfy the following:
                </p>
                <p>
                    <b>Cost</b>: each structure requires specific resources to build.
                    You can hover over the structures to see their cost.
                </p>
                <StyledHowToPlayAsset
                    src={hover_to_see_cost_gif}
                    alt="Hover to see cost" />
                <p>
                    <b>Adjacency</b>: you can only build structures next to an already built road.
                </p>
                <p>
                    <b>Prerequisites</b>: with the exception of roads, you must build structures in order of
                    ascending point value. (ex. You must build settlement 3 before
                    you can build settlement 4, etc.)
                </p>
                <p>
                    You can build multiple structures in one turn if you have enough resources.
                </p>
                <h1>
                    Special Rules
                </h1>
                <p>
                    <b>Knights</b>: once built, they provide a one-time resource joker that can change
                    a die of your choice to the resource depicted.
                </p>
                <StyledHowToPlayAsset
                    src={use_knight_to_set_resource_gif}
                    alt="Use knight to set resource" />
                <p>
                    The wildcard joker lets you choose which resource to set.
                </p>
                <StyledHowToPlayAsset
                    src={use_wildcard_joker_to_choose_resource_gif}
                    alt="Use wildcard joker to pick resource to set" />
                <p>
                    You may use as many resource jokers in a turn as you want,
                    including on the same turn you built the knight.
                </p>
                <p>
                    <b>Gold</b>: you may trade two gold for a resource of your choice, as many times as you
                    have gold available.
                </p>
                <StyledHowToPlayAsset
                    src={trade_gold_for_any_resource_gif}
                    alt="Trade gold for any resource" />
                <h1>
                    Scoring
                </h1>
                <p>
                    Each turn, you will receive points for each structure or knight you build.
                    However, if you do not build anything, you will receive an 'X' for that turn, which
                    indicates -2 points. The game ends after 15 rounds and the player with the most
                    points wins.
                </p>
                <StyledHowToPlayAsset
                    src={game_over_png}
                    alt="Game over" />
            </StyledHowToPlayModalBody>
        </Modal>
    )
}

export default HowToPlayModal
