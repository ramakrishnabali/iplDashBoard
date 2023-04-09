// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const updateData = data.teams.map(teamDetails =>
      // console.log(teamDetails)
      ({
        name: teamDetails.name,
        id: teamDetails.id,
        teamImageUrl: teamDetails.team_image_url,
      }),
    )

    this.setState({teamDetails: updateData, isLoading: false})
    // console.log(updateData)
  }

  render() {
    const {teamDetails, isLoading} = this.state

    return (
      <div className="appContainer">
        <div className="dashboard">
          <div className="headingContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="iplLogo"
            />
            <h1 className="iplHeading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teamListContainer">
              {teamDetails.map(eachTeam => (
                <TeamCard team={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
