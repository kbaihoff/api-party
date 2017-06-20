import React from 'react'

class OpenWeatherMapLocation extends React.Component {
  state = {
    location: {
      name: '',
      weather: [{
        id: null,
        main: '',
        description: '',
        icon: '',
      }],
    }
  }

  constructor(props) { // default props = {match: Object, location: Object, history: Object, staticContent: undefined}
    super(props)
    this.fetchLocationData(props)
  }
  
  fetchLocationData = (props) => {
    const apiKey = '04d2bbf8929165829d8dfeb3a3337f05'
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.match.params.location}&APPID=${apiKey}`)
      .then(response => response.json())
      .then(location => this.setState({ location }))
      .then(console.log(this.state.location))
      .catch(error => console.warn(error))
  }
  

// {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"base":"stations","main":{"temp":294.49,"pressure":1018,"humidity":77,"temp_min":290.15,"temp_max":298.15},"visibility":10000,"wind":{"speed":6.2,"deg":90},"clouds":{"all":8},"dt":1497988200,"sys":{"type":1,"id":5091,"message":0.0068,"country":"GB","sunrise":1497930185,"sunset":1497990093},"id":2643743,"name":"London","cod":200}


  render() {
    const { location } = this.state
    return (
      <div className="location">
        <h2>{location.name}</h2>
        <h3>{location.weather.id}</h3>
        {/*<h3>Followers: {user.followers}</h3>
        <h3>Following: {user.following}</h3>
        <h3>Location: {user.location}</h3>*/}
      </div>
    ) 
  }
}

export default OpenWeatherMapLocation