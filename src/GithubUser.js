import React, { Component } from 'react'

class GithubUser extends Component {
  state = {
    user: {
      avatar_url: '',
      login: '',
      followers: '',
      following: '',
      location: '',
      html_url: '',
    }
  }
  
  constructor(props) { // default props = {match: Object, location: Object, history: Object, staticContent: undefined}
    super(props)
    this.fetchUserData(props)
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchUserData(nextProps)
    }
  }

  fetchUserData = (props) => {
    fetch(`https://api.github.com/users/${props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
      .then(console.log(this.state.user))
      .catch(error => console.warn(error))
  }

  render() {
    const { user } = this.state
    return (
      <div className="github-user">
        <img src={user.avatar_url} alt="user" />
        <h2>{user.login}</h2>
        <h3>Followers: {user.followers}</h3>
        <h3>Following: {user.following}</h3>
        <h3>Location: {user.location}</h3>
        <a href={user.html_url} target="_">Link to {user.login}'s profile</a>
      </div>
    )    
  }
}

export default GithubUser