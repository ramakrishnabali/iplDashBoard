// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props

  // console.log(matchDetails)

  const updateMatchDetails = {
    umpires: matchDetails.umpires,
    result: matchDetails.result,
    manOfTheMatch: matchDetails.man_of_the_match,
    id: matchDetails.id,
    date: matchDetails.date,
    venue: matchDetails.venue,
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    firstInnings: matchDetails.first_innings,
    secondInnings: matchDetails.second_innings,
    matchStatus: matchDetails.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updateMatchDetails

  console.log(competingTeamLogo)

  return (
    <div className="latestMatchContainer">
      <div className="venueContainer">
        <p className="competingTeam">{competingTeam}</p>
        <p className="commonHeading">{date}</p>
        <p className="commonDescription">{venue}</p>
        <p className="commonDescription">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competingLogo"
      />
      <div className="detailsContainer">
        <p className="commonHeading">First Innings</p>
        <p className="commonDescription">{firstInnings}</p>
        <p className="commonHeading">Second Innings</p>
        <p className="commonDescription">{secondInnings}</p>
        <p className="commonHeading">Man Of The Match</p>
        <p className="commonDescription">{manOfTheMatch}</p>
        <p className="commonHeading">Umpires</p>
        <p className="commonDescription">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
