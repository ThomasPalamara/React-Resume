import React from 'react';

const resumeEn = require('resume_en.json');
const resumeFr = require('resume_fr.json');

export const resumeJSON = {
  en: resumeEn,
  fr: resumeFr,
};

const ResumeContext = React.createContext(resumeJSON.en);

export const withResumeData = Component => props => (
  <ResumeContext.Consumer>
    {resume => (<Component {...props} resume={resume} />)}
  </ResumeContext.Consumer>
);

export default ResumeContext;
