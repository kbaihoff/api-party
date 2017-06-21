import React from 'react'

class OpenWeatherMapLocation extends React.Component {
  state = {
    location: {
      name: '',
      coord: {
        lat: '',
        lon: '',
      },
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
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.match.params.location}&APPID=${apiKey}`)
      .then(response => response.json())
      .then(location => this.setState({ location }))
      .catch(error => console.warn(error))
  }

  render() {
    const { location } = this.state
    console.log(location)
    return (
      <div className="location">
        <h2>{location.name}</h2>
        <h3>Latitude: {location.coord.lat}° N</h3>
        <h3>Longitude: {location.coord.lon}° E</h3>        
      </div>
    ) 
  }
}

export default OpenWeatherMapLocation