import React, { useState, useEffect } from 'react';
import { ResumeContext, resumeJSON } from 'context/Resume';
import { LocaleProvider } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';
import enGB from 'antd/lib/locale-provider/en_GB';
import Header from './Header';
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import Ending from './Ending';
import Language from './Misc/Language';
import resumePdf from '../img/ThomasPalamaraResume.pdf';

const Resume = () => {
  const [languageState, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const languageHandler = (language) => {
    localStorage.setItem('language', language);
    setLanguage(language);
  };

  useEffect(() => {
    console.log(document.querySelectorAll('[data-cv-link]'));
    document.querySelectorAll('[data-cv-link]').forEach((e) => {
      e.setAttribute('href', resumePdf);
    });
  });

  return (
    <ResumeContext.Provider value={resumeJSON[languageState]} className="App">
      <LocaleProvider locale={languageState === 'en' ? enGB : frFR}>
        <React.Fragment>
          <Language languageHandler={languageHandler} />
          <Header />
          <div className="pseudo-body">
            <Introduction />
            <Skills />
            <Projects />
          </div>
          <Ending />
        </React.Fragment>
      </LocaleProvider>
    </ResumeContext.Provider>
  );
};

export default Resume;
