import React, { Component } from 'react';
import './App.css';
// import dummy components
import Login from './components/Login'
import Home from './components/Home'
// Will be used to implement Redux
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
       < BrowserRouter>
        <div className="App">
          <Switch>
          <Route exact path='/' component={Login} ></Route>
          <Route exact path='/home' component={Home} ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
