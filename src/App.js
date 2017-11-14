import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="white">Exoplanet Explorer</h1>
          <p>Learn more about planets around other stars</p>
          <button>Search</button>
        </header>
        <h3>query: earth-like planets</h3>
        <div className="div">Nombre de planetas</div>
      </div>
    );
  }
}

export default App;
