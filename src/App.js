import React, { Component } from 'react';
import logo from './logo.svg';
import Resume from './components/Resume';
import { ResumeContext, resume } from './context/ResumeContext';



class App extends Component {
  render() {
    return (
      <ResumeContext.Provider value={resume['en']} className="App">
        <Resume/>
      </ResumeContext.Provider>
    );
  }
}

export default App;
