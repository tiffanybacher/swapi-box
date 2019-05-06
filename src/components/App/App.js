import React, { Component } from 'react';
import RandomCrawl from '../RandomCrawl/RandomCrawl';
import MainContainer from '../MainContainer/MainContainer';
import StarWarsLogo from '../../images/Star_Wars_logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={StarWarsLogo} alt="Star Wars Logo"/>
        </header>
        <RandomCrawl />
        <MainContainer />
      </div>
    );
  }
}

export default App;
