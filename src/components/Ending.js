import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { withResumeData } from '../context/Resume';

const Ending = ({ resume }) => (
  <div className="container">
    <div className="ending__container">
      <h2 className="ending__title">{resume.ending.mainText}</h2>
      <h3 className="ending__title">{ReactHtmlParser(resume.ending.secondaryText)}</h3>
    </div>
  </div>
);

Ending.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Ending);
