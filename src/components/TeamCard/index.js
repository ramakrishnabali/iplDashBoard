// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {team} = props

  const {id, name, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`} className="navLinkContainer">
      <li className="listContainer">
        <img src={teamImageUrl} alt={name} className="teamLogo" />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
