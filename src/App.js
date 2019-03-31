import React, { Component } from 'react';
import './App.css';
// import components
import Login from './components/Login'
import Home from './components/Home'
import LeadPage from './components/LeadPage'
import Team from './components/Team'
import ProfilePage from './components/ProfilePage'
import BigProfilePage from './components/BigProfilePage'
// Will be used to implement Redux
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
       < BrowserRouter>
        <div className="App">
          <Switch>
          <Route exact path='/' component={Login} ></Route>
          <Route exact path='/home' component={Home} ></Route>
          <Route exact path='/leadpage' component={LeadPage} ></Route>
          <Route exact path='/team/:team_id' component={Team} ></Route>
          <Route exact path='/profile/:profile_id' component={BigProfilePage} ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
