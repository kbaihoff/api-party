import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import Github from './Github'
import OpenWeatherMap from './OpenWeatherMap'
import Instagram from './Instagram'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to='/github' className="nl">Github</NavLink>
              <NavLink to='/openweathermap'className="nl">OpenWeatherMap</NavLink>
              {/*<NavLink to='/instagram' className="nl">Instagram</NavLink>*/}
              {/*Add another NavLink for a new link*/}
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/github' component={Github} />
          <Route path='/openweathermap' component={OpenWeatherMap} />
          {/*<Route path='/instagram' component={Instagram} />*/}
          {/*Add another Route for a new link*/}
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}
export default App;