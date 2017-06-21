import React from 'react'
import { Route } from 'react-router-dom'
import InstagramUser from './InstagramUser'
import './Instagram.css'

class Instagram extends React.Component {
  state = {
    username: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/instagram/${this.state.username}`) // this.props.history is an "array" of places/links you've been to
  }

  handleChange = (ev) => {
    const username = ev.currentTarget.value
    this.setState({ username })
  }

  render() {
    return (
      <div className="instagram">
        <img src="http://1000logos.net/wp-content/uploads/2017/02/Instagram-app-logo.jpg" alt="instagram logo" className="instagram-logo" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Look up Instagram user</button>
          </div>
        </form>
        <Route exact path='/instagram' render={() => <h3>Please enter a username to search on Instagram</h3>} />
        <Route path='/instagram/:username' component={InstagramUser} />
          {/*params.username refers to the :username in the path*/}
      </div>
    )
  }
}

export default Instagram