import React, { Component } from 'react'

class GithubUser extends Component {
  constructor(props) {
    super(props)
    this.fetchUserData()
  }

  fetchUserData = () => {
    console.log('Fetch!')
  }

  render() {
    return <div>It works</div>    
  }
}

export default GithubUser