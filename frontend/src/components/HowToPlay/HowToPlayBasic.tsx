import StyledHowToPlayAsset from "./styles/StyledHowToPlayAsset"
import roll_dice_gif from "/assets/how-to-play/basics/roll_dice.gif"
import lock_dice_gif from "/assets/how-to-play/basics/lock_dice.gif"
import trade_gold_gif from "/assets/how-to-play/basics/trade_gold.gif"
import build_structure_gif from "/assets/how-to-play/basics/build_structure.gif"
import use_resource_joker_gif from "/assets/how-to-play/basics/use_resource_joker.gif"

const HowToPlayBasic = () => {
    return (
        <>
            <h1>
                Background
            </h1>
            <p>
                Welcome to the Islands, a land rich with opportunity—if
                you have the resources to claim it! In this fact-paced, dice-rolling
                strategy game, you'll compete solo or with others to settle the Islands!
                Gather resources, make bold decisions, and race to victory in a game
                where every turn counts!
            </p>
            <h1>
                Setup
            </h1>
            <p>
                For local multiplayer, each player should open the Colonial Dice Game on their own device.
                While gameplay takes place individually on each screen, players should take turns rolling dice
                and building structures to maintain an engaging and competitive experience.
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
            <StyledHowToPlayAsset src={roll_dice_gif} />
            <p>
                <b>Locking</b>: between rolls, you may choose to 'lock' any number of die
                and re-roll the rest.
            </p>
            <StyledHowToPlayAsset src={lock_dice_gif} />
            <p>
                <b>Gold</b>: you may trade two gold for a resource of your choice.
            </p>
            <StyledHowToPlayAsset src={trade_gold_gif} />
            <h2>
                Building
            </h2>
            <p>
                During the building phase, you use the resources you rolled to build roads,
                settlements, cities, or knights.
            </p>
            <StyledHowToPlayAsset src={build_structure_gif} />
            <p>
                To build a structure, you must satisfy the following:
            </p>
            <p>
                <b>Cost</b>: each structure requires specific resources to build.
                You can hover over the structures to see their cost.
            </p>
            <p>
                <b>Adjacency</b>: you can only build structures next to an already built road.
            </p>
            <p>
                You can build multiple structures in one turn if you have enough resources.
            </p>
            <h1>
                Knights & Resource Jokers
            </h1>
            <p>
                Once built, knights grant a one-time resource joker, allowing you to set any unspent
                die to the resource shown beneath the knight.
            </p>
            <StyledHowToPlayAsset src={use_resource_joker_gif} />
            <p>
                The wildcard joker, marked with a '?' icon, lets you set any unspent die
                to <b>any resource of your choice</b>.
            </p>
            <p>
                You may use any number of resource jokers during a single turn—even on the same
                turn you build a knight.
            </p>
        </>
    )
}

export default HowToPlayBasic
