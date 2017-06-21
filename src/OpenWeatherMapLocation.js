import React from 'react'
import './OpenWeatherMapLocation.css'

class OpenWeatherMapLocation extends React.Component {
  state = {
    location: {
      name: '',
      coord: {
        lat: '',
        lon: '',
      },
      main: {
        humidity: '',
        temp: '',
      },
      weather: [{
        description: '',
        icon: '',
        main: '',
      }]
    }
  }

  constructor(props) { // default props = {match: Object, location: Object, history: Object, staticContent: undefined}
    super(props)
    this.fetchLocationData(props)
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.match.params.location !== nextProps.match.params.location) {
      this.fetchLocationData(nextProps)
    }
  }
  
  fetchLocationData = (props) => {
    const apiKey = '04d2bbf8929165829d8dfeb3a3337f05'
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.match.params.location}&units=metric&APPID=${apiKey}`)
      .then(response => response.json())
      .then(location => this.setState({ location }))
      .catch(error => console.warn(error))
  }

  render() {
    const { location } = this.state
    const imgSrc = `http://openweathermap.org/img/w/${location.weather[0].icon}.png`
    console.log(location)
    return (
      <div className="location">
        <h2>{location.name} ({location.coord.lat}° N, {location.coord.lon}° E)</h2>
        <h3>Current temperature: {location.main.temp}° C</h3>
        <h3>
          Current forecast: {location.weather[0].description}
          <img src={imgSrc} alt={location.weather[0].icon} />
        </h3>
      </div>
    ) 
  }
}

export default OpenWeatherMapLocation