import React, { Component } from 'react';
import RandomCrawl from '../RandomCrawl/RandomCrawl';
import MainContainer from '../MainContainer/MainContainer';
import StarWarsLogo from '../../images/Star_Wars_logo.png';

class App extends Component {
  state = {
    favorites: []
  }

  addToFavorites = (card) => {
    const favorites = [...this.state.favorites, card];

    this.setState({ favorites });
  }

  removeFromFavorites = (id) => {
    const favorites = this.state.favorites.filter(fave => fave.id !== id);

    this.setState({ favorites });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={StarWarsLogo} alt="Star Wars Logo"/>
        </header>
        <RandomCrawl />
        <MainContainer 
          addToFavorites={this.addToFavorites}
          removeFromFavorites={this.removeFromFavorites} 
          favorites={this.state.favorites} />
      </div>
    );
  }
}

export default App;
