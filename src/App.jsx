import React, { Component } from 'react';
import Education from './components/Education';
import Personal from './components/Personal';

class App extends Component {
  state = {  } 
  render() { 
    return (
    <div className='container'>
      <Personal />
      <Education />
    </div>
    );
  }
}
 
export default App;

