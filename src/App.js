import React, { Component } from 'react';
import SignUp from './components/Sign-up';
import Audio from './components/Audio'


class App extends Component {
  render() {
    return (
      <div>
        <SignUp/>
        <Audio/>
      </div>
    );
  }
}

export default App;