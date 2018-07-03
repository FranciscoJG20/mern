import React, { Component } from 'react';
import './App.css';
import Songs from '../Songs/Songs'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> I am a MERN app! Woohoo!</h1>
       <h2> I am also Drake's new album, SCORPION</h2>
       <ul className="SongList">
         < Songs />
       </ul> 
       <form method="POST" action="/" >
       <input type="textbox" placeholder="Add more songs here"></input>
       <input type="submit" value="Submit"></input>
       </form>
      </div>

    );
  }
}

export default App;
