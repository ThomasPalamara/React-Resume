import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { withResumeData } from '../context/Resume';

// TODO: Color links
const Ending = ({ resume }) => {
  const text = {};
  console.log(resume.language);
  if (resume.language === 'en') {
    text.main = 'Thank you for reading me.';
    text.secondary = 'If you wish to get in touch, do not hesitate to contact me using <a href="https:///www.linkedin.com/in/thomas-palamara-a8ab36a7/?locale=en_US" target="_blank" rel="noopener">Linkedin</a> or my contacts present in my <a href="/img/ThomasPalamaraResume.pdf" target="_blank" rel="noopener">resume</a>';
  } else {
    text.main = "Merci de m'avoir lu.";
    text.secondary = 'Si vous souhaitez me contacter n\'hésitez pas a me contacter via mon profil <a href="https:///www.linkedin.com/in/thomas-palamara-a8ab36a7/?locale=en_US" target="_blank" rel="noopener"> ou en utilisant mes coordonnées présentes sur mon CV';
  }
  return (
    <div className="container">
      <div className="ending__container">
        <h2 className="ending__title">{resume.ending.mainText}</h2>
        <h3 className="ending__title">{ReactHtmlParser(resume.ending.secondaryText)}</h3>
      </div>
    </div>
  );
};

Ending.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Ending);
