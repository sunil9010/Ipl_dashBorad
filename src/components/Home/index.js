// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTheCard()
  }

  getTheCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCardList: updatedData, isLoading: false})
  }

  renderTeamCard = () => {
    const {teamCardList} = this.state
    return (
      <ul className="list_items">
        {teamCardList.map(every => (
          <TeamCard key={every.id} teamCardDetails={every} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-route-container">
        <div className="teams-list-container">
          <div className="ipl-dashboard-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamCard()}
        </div>
      </div>
    )
  }
}
export default Home
