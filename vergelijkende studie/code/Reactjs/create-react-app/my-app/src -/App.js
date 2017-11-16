import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const zin = 'ReactJs is niet zo moeilijk';
      let state = false ;
      const user = {
          firstName: 'Stijn',
          lastName: 'Heynderickx'
      };
      const element2 = <h1>Hello, world</h1>;
      const element = (
          <h1>
              Hallo, {formatName(user)}!
          </h1>
      );

      function formatName(user) {
          return user.firstName + ' ' + user.lastName;
      }
      constructor()
      {
state = true;
      }
    return (
      <div id="root">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{element}</h1>
        </header>
          {element2}
        <p className="App-intro text">
            {zin}
        </p>
      </div>
    );
  }
}



export default App;
