import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello Stijn Heynderickx</h1>
        </header>
        <p className="App-intro">
          Dit is mijn eerste demo hello world, to be continued!
        </p>
      </div>
    );
  }
}

export default App;
