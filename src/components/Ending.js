import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { withResumeData } from '../context/Resume';

const Ending = ({ resume }) => {
  const text = {};
  console.log(resume.language);
  if (resume.language === 'en') {
    text.main = 'Thank you for reading me.';
    text.secondary = 'If you want to get in touch, do not hesitate to contact me using <a href="https:///www.linkedin.com/in/thomas-palamara-a8ab36a7/?locale=en_US" target="_blank" rel="noopener">Linkedin</a> or my contacts present in my <a href="/img/ThomasPalamaraResume.pdf" target="_blank" rel="noopener">resume</a>';
  }
  return (
    <div className="container">
      <div className="ending__container">
        <h2 className="ending__title">{text.main}</h2>
        <h3 className="ending__title">{ReactHtmlParser(text.secondary)}</h3>
      </div>
    </div>
  );
};

Ending.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Ending);
