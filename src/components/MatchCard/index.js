// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const getMatchStatusClassName = data =>
    data === 'Won' ? 'match-won' : 'match-lost'
  const getMatchStatus = `match-status ${getMatchStatusClassName(matchStatus)}`

  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={getMatchStatus}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
