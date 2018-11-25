import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import AppBody from './comp/Layout/AppBody/AppBody';
//import MenuBar from './comp/layout/comp/menuBar/MenuBar';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBody/>
        </div>
      </Router>
    );
  }
}

export default App;











/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import Suma from './components/Suma';

class App extends Component{
  render(){
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo nombre="Panda" apellido="Fernandez"/>
        <Suma />
      </div>
    );
  }
}

export default App;
*/
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
*/

