import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Lista_Planets = ({ image, name}) => {
  return (
    <li className="planets">
        <img className="main-image" src={image} />
        <strong>{name}</strong>
    </li>
  );
}

const App = ({ planets }) => {
  
    const listaComponent = planets.map((item, index) => {
      return <Lista_Planets
        key={index}
        image={item.image}
        price={item.price}
        index={index}
      />
    })
    return (<section id="content">
      <div>
        <ul className="k-widget k-listview">
          {listaComponent}
        </ul>
      </div>
    </section>)
  }

export default App;
