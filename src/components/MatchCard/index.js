// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props

  const updateMatchDetails = {
    umpires: recentMatchDetails.umpires,
    result: recentMatchDetails.result,
    manOfTheMatch: recentMatchDetails.man_of_the_match,
    id: recentMatchDetails.id,
    date: recentMatchDetails.date,
    venue: recentMatchDetails.venue,
    competingTeam: recentMatchDetails.competing_team,
    competingTeamLogo: recentMatchDetails.competing_team_logo,
    firstInnings: recentMatchDetails.first_innings,
    secondInnings: recentMatchDetails.second_innings,
    matchStatus: recentMatchDetails.match_status,
  }

  const {
    result,
    matchStatus,
    competingTeam,
    competingTeamLogo,
  } = updateMatchDetails

  const statusClassName = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingLogo"
      />
      <p className="competingTeam">{competingTeam}</p>
      <p className="commonDescription">{result}</p>
      <p className={`commonHeading ${statusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
