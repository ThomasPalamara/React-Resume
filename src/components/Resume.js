import React, { useState } from 'react';
import { ResumeContext, resumeJSON } from 'context/Resume';
import Header from './Header';
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import Language from './Misc/Language';

const Resume = () => {
  const [languageState, setLanguage] = useState('en');

  const languageHandler = (language) => {
    console.log(language);
    setLanguage(language);
  };

  return (
    <ResumeContext.Provider value={resumeJSON[languageState]} className="App">
      <Language languageHandler={languageHandler} />
      <Header />
      <div className="pseudo-body">
        <Introduction />
        <Skills />
        <Projects />
      </div>
    </ResumeContext.Provider>
  );
};

export default Resume;
