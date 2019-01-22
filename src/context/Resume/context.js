import React from 'react';
const resume_en = require("resume.json");
const resume_fr = require("resume.json");

export const resume = {
  en: resume_en,
  fr: resume_fr,
};

const ResumeContext = React.createContext(
  resume_en // default value
);

export const ResumeData = Component => props => (
  <ResumeContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </ResumeContext.Consumer>
);

export default ResumeContext;
