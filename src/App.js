import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const List_Planets = ({ image, name}) => {
  return (
    <li className="planets">
        <img className="main-image" src={image} />
        <strong>{name}</strong>
    </li>
  );
}

const App = ({ planets }) => {
  
    const listComponent = planets.map((item, index) => {
      return <List_Planets
        key={index}
        image={item.image}
        name={item.name}
        index={index}
      />
    })
    return (<section id="content">
      <div>
        <ul className="k-widget k-listview">
          {listComponent}
        </ul>
      </div>
    </section>)
  }

export default App;
