import React, { Component } from 'react';
import './css/styles.css';
import List from './components/List';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor () {
    super()
    this.state = {
      songs: [{
        title: 'one'
      }, {
        title: 'two'
      }, {
        title: 'three'
      }, {
        title: 'four'
      }]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <List songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
