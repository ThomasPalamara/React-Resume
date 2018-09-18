import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import { ResumeContext, resume } from './context/ResumeContext';

import 'antd/dist/antd.css';



class App extends Component {
  render() {
    return (
      <ResumeContext.Provider value={resume['en']} className="App">
        <Header/>
      </ResumeContext.Provider>
    );
  }
}

export default App;
