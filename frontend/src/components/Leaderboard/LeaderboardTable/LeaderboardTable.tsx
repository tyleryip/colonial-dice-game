import { OverlayTrigger, Table, Tooltip } from "react-bootstrap"
import { LeaderboardEntry } from "../../../store/slices/local/leaderboardSlice/leaderboardSlice"
import LeaderboardRow from "../LeaderboardRow/LeaderboardRow"
import StyledScoreInformationIcon from "./styles/StyledScoreInformationIcon"
import StyledLeaderboardTableHeader from "./styles/StyledLeaderboardTableHeader"

export interface LeaderboardTableProps {
    entries: LeaderboardEntry[]
    scoreLabel: string
    scoreInformation: string
}

const LeaderboardTable = (props: LeaderboardTableProps) => {

    const scoreInformation = (
        <Tooltip>
            {props.scoreInformation}
        </Tooltip>
    )

    return (
        <Table
            striped>
            <thead>
                <tr>
                    <StyledLeaderboardTableHeader>
                        Rank
                    </StyledLeaderboardTableHeader>
                    <StyledLeaderboardTableHeader>
                        Name
                    </StyledLeaderboardTableHeader>
                    <StyledLeaderboardTableHeader
                        $width={25}>
                        {props.scoreLabel}
                        <OverlayTrigger trigger={['hover', 'click']} placement="top" overlay={scoreInformation}>
                            <StyledScoreInformationIcon src="/assets/leaderboard/information.png" />
                        </OverlayTrigger>
                    </StyledLeaderboardTableHeader>
                    <StyledLeaderboardTableHeader
                        $width={25}>
                        Date
                    </StyledLeaderboardTableHeader>
                </tr>
            </thead>
            <tbody>
                {
                    props.entries.map((entry, index) =>
                        <LeaderboardRow
                            key={index}
                            rank={index + 1}
                            entry={entry} />)
                }
            </tbody>
        </Table>
    )
}

export default LeaderboardTable
