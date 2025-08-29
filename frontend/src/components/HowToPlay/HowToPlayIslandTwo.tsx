import StyledHowToPlayAsset from "./styles/StyledHowToPlayAsset"
import island_two_board from "/assets/how-to-play/island-two/island_two_board.png"
import longest_road_gif from "/assets/how-to-play/island-two/longest_road.gif"
import largest_army_gif from "/assets/how-to-play/island-two/largest_army.gif"

const HowToPlayIslandTwo = () => {
    return (
        <>
            <h1>
                Objective
            </h1>
            <p>
                The objective of Island 2 is to <b>obtain 10 points within the fewest
                    number of turns</b>. Similar to Island 1, players earn points by building
                settlements and cities. However, unlike Island 1, roads and knights
                do not contribute to your score.
            </p>
            <StyledHowToPlayAsset src={island_two_board} />
            <h1>
                Building
            </h1>
            <p>
                On Island 2, there is no requirements to build in a specific order. You do, however,
                still have to follow the adjacency requirement of building next to an already built road.
            </p>
            <h1>
                Scoring
            </h1>
            <p>
                On Island 2, structures are worth a fixed amount of points:
                <ul>
                    <li><b>Settlements</b> - Each settlement is worth 1 point.</li>
                    <li><b>Cities</b> - Each city is worth 2 points.</li>
                    <li><b>Roads</b> - Roads do not contribute points directly.
                        However, they are required to connect to settlements and
                        cities.</li>
                    <li><b>Knights</b> - Knights do not contribute points directly. However, they are
                        extremely useful for aqcuiring the resources needed to build
                        settlements and cities.</li>
                </ul>
            </p>
            <p>
                In addition to settlements and cities, there are special points for
                Longest Road and/or Largest Army:
            </p>
            <p>
                <b>Longest Road</b> - The first player to build 5 or more continuous roads
                is awarded 2 points. If another player builds a longer road, you lose Longest Road
                and the other player gets Longest Road.
            </p>
            <StyledHowToPlayAsset src={longest_road_gif} />
            <p>
                <b>Largest Army</b> - The first player to build 3 or more knights
                is awarded 2 points. If another player more knights, you lose Largest Army
                and the other player gets Largest Army.
            </p>
            <StyledHowToPlayAsset src={largest_army_gif} />
            <p>
                The game ends after a player reaches 10 points!
            </p>
        </>
    )
}

export default HowToPlayIslandTwo
