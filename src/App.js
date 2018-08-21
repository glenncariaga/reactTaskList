import React, { Component } from 'react';
import Main from './containers/main.js'
import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Main></Main>
      </div>
    );
  }
}

export default App;
