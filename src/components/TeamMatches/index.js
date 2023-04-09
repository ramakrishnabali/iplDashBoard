// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

let bgClassName = ''

class TeamMatches extends Component {
  state = {team: [], isLoading: true}

  componentDidMount() {
    this.getTeam()
  }

  getTeam = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    // console.log(match)

    bgClassName = id

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: [...data.recent_matches],
    }

    // console.log(updatedData)

    this.setState({team: updatedData, isLoading: false})
  }

  render() {
    const {team, isLoading} = this.state

    const {teamBannerUrl, latestMatchDetails, recentMatches} = team
    // console.log(recentMatches)
    return (
      <div className={`teamContainer ${bgClassName}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="teamBannerContainer">
            <img src={teamBannerUrl} alt="team banner" className="banner" />
            <p className="latest">Latest Matches</p>

            <LatestMatch matchDetails={latestMatchDetails} />

            <ul className="recentMatchContainer">
              {recentMatches.map(recent => (
                <MatchCard recentMatchDetails={recent} ket={recent.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
