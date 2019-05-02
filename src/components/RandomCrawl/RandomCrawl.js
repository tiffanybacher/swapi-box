import React, { Component } from 'react';
import Crawl from 'react-star-wars-crawl';
import { getRandomFilm } from '../../apiCalls';

class RandomCrawl extends Component {
  constructor() {
    super();
    this.state = {
      film: {}
    }
  }

  componentDidMount = () => {
    const ranNum = Math.floor(Math.random() * 7 + 1);

    return getRandomFilm(ranNum)
      .then(film => this.setState({ film }))
      .catch(error => console.log(error));
  }

  render() {
    const { film } = this.state;
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const numeralIndex = film.episode_id - 1;
   
    return (
      <Crawl
        title={`Episode ${romanNumerals[numeralIndex]}`}
        subTitle={film.title}
        text={film.opening_crawl}
      />
    );
  }
}

// "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…"

export default RandomCrawl;