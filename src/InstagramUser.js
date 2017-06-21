import React, { Component } from 'react'
import './InstagramUser.css'

class InstagramUser extends Component {
  state = {
    user: {
      id: '',
    }
  }
  
  // constructor(props) { // default props = {match: Object, location: Object, history: Object, staticContent: undefined}
  //   super(props)
  //   this.fetchUserData(props)
  // }

  // componentWillReceiveProps = (nextProps) => {
  //   if (this.props.match.params.username !== nextProps.match.params.username) {
  //     this.fetchUserData(nextProps)
  //   }
  // }

  // fetchUserData = (props) => {   
  //   const access_token = 'f9dd6a5168964907bef4b58d8e7fb3eb'
  //   fetch(`https://api.instagram.com/v1/users/${this.state.user.id}/?access_token=${access_token}`)
  //     .then(response => response.json())
  //     .then(user => console.log(user))
  //     .catch(error => console.warn(error))
  // }

  render() {
    const { user } = this.state
    return (
      <div className="instagram-user">I need an access token to fetch data, and I have no idea how to get that. So here we are.</div>
    )    
  }
}

export default InstagramUser