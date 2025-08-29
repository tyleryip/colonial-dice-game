import StyledHowToPlayAsset from "./styles/StyledHowToPlayAsset"
import island_one_board from "/assets/how-to-play/island-one/island_one_board.png"


const HowToPlayIslandOne = () => {
    return (
        <>
            <h1>
                Objective
            </h1>
            <p>
                The objective of Island 1 is to <b>obtain the most points within
                    15 turns</b>. Players earn points by building roads,
                settlements, cities, and knights - each contributing a specific
                value to their total score.
            </p>
            <StyledHowToPlayAsset src={island_one_board} />
            <h1>
                Building
            </h1>
            <p>
                On Island 1, in addition to satisfying the cost and adjacency requirements, you
                must also build structures in a specific order. With the exception of roads,
                you must build structures in order of ascending point value. (ex. You must build
                settlement 3 before you can build settlement 4, etc.)
            </p>
            <h1>
                Scoring
            </h1>
            <p>
                Each turn, you will receive points for each structure or knight you build.
                However, if you do not build anything, you will receive an 'X' for that turn, which
                indicates -2 points. The game ends after 15 rounds and the player with the most
                points wins!
            </p>
        </>
    )
}

export default HowToPlayIslandOne
