import React from 'react'
import { Route } from 'react-router-dom'
import OpenWeatherMapLocation from './OpenWeatherMapLocation'
import './OpenWeatherMap.css'

class OpenWeatherMap extends React.Component {
  state = {
    location: ''
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/openweathermap/${this.state.location}`) // this.props.history is an "array" of places/links you've been to
  }

  handleChange = (ev) => {
    const location = ev.currentTarget.value
    this.setState({ location })
  }
  
  render() {
    return (
      <div className="openweathermap">
        <img src="" alt="openweathermap logo" className="openweathermap-logo" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" value={this.state.location} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Look up location</button>
          </div>
        </form>
        <Route exact path='/openweathermap' render={() => <h3>Please enter a location to search on OpenWeatherMap</h3>} />
        <Route path='/openweathermap/:location' component={OpenWeatherMapLocation} />
          {/*params.location refers to the :location in the path*/}
      </div>
    )
  }
}

export default OpenWeatherMap