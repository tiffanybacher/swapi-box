import React, { Component } from 'react';
import RandomCrawl from '../RandomCrawl/RandomCrawl';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>STAR WARS</h1>
         <RandomCrawl />
        </header>
      </div>
    );
  }
}

export default App;
