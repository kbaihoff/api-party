import React from 'react'

class Github extends React.Component {
  render() {
    return (
      <div className="github">
        <img src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github logo" className="github-logo" />
        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <button type="submit">Look up Github user</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Github