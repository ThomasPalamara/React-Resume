import React from 'react';
const resume_en = require("resume_en.json");
const resume_fr = require("resume_fr.json");

export const resumeJSON = {
  en: resume_en,
  fr: resume_fr,
};

const ResumeContext = React.createContext(
  null // default value
);

export const withResumeData = Component => props => (
  <ResumeContext.Consumer>
    {resume => (<Component {...props} resume={resume} />)}
  </ResumeContext.Consumer>
);

export default ResumeContext;
