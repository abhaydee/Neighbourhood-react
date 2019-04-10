import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps'
import './App.css';
import Gmaps from "./Gmaps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gmaps/>
      </div>
    );
  }
}

export default App;
