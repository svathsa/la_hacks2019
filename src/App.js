import React, { Component } from 'react';
import './App.css';
// import dummy components
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Post from './components/Post'
// Will be used to implement Redux
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      /* < BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route path='/about' component={About} ></Route>
          <Route path='/contact' component={Contact} ></Route>
          <Route path='/:post_id' component={Post} ></Route>
          </Switch>
        </div>
      </BrowserRouter> */
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
