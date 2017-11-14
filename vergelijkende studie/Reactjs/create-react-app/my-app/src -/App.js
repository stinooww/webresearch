import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const zin = 'Spelen met ReactJs is niet zo moeilijk';
      const user = {
          firstName: 'Stijn',
          lastName: 'Heynderickx'
      };

      const element = (
          <h1>
              Hallo, {formatName(user)}!
          </h1>
      );

      function formatName(user) {
          return user.firstName + ' ' + user.lastName;
      }
    return (
      <div id="root">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{element}</h1>
        </header>
        <p className="App-intro text">
            {zin}
        </p>
      </div>
    );
  }
}



export default App;
