import React, { Component } from 'react';
import RandomCrawl from '../RandomCrawl/RandomCrawl';
import MainContainer from '../MainContainer/MainContainer';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: {}
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>STAR WARS</h1>
         <RandomCrawl />
        </header>
        <MainContainer />
      </div>
    );
  }
}

export default App;
