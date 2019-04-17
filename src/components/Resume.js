import React, { useState } from 'react';
import { ResumeContext, resumeJSON } from 'context/Resume';
import { LocaleProvider, Switch } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';
import enGB from 'antd/lib/locale-provider/en_GB';
import Header from './Header';
import HeaderBis from './HeaderBis';
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import Language from './Misc/Language';


const Resume = () => {
  const [languageState, setLanguage] = useState('en');

  const languageHandler = (language) => {
    setLanguage(language);
  };

  const [headerState, setHeader] = useState(false);

  const headerHandler = (checked) => {
    setHeader(checked);
  };

  return (
    <ResumeContext.Provider value={resumeJSON[languageState]} className="App">
      <LocaleProvider locale={languageState === 'en' ? enGB : frFR}>
        <React.Fragment>
          <Language languageHandler={languageHandler} />
          { headerState ? <Header /> : <HeaderBis />}
          <Switch onChange={headerHandler} style={{ position: 'fixed' }} />
          <div className="pseudo-body">
            <Introduction />
            <Skills />
            <Projects />
          </div>
        </React.Fragment>   
      </LocaleProvider>
    </ResumeContext.Provider>
  );
};

export default Resume;
