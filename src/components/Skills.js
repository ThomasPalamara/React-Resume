import React from 'react';
import PropTypes from 'prop-types';
import { withResumeData } from '../context/Resume';
import Title from './Misc/Title';
import frontEnd from '../img/icons/front-end.svg';
import tools from '../img/icons/tools.svg';
import backEnd from '../img/icons/back-end.svg';
import languages from '../img/icons/languages.svg';
import design from '../img/icons/design.svg';

const svgs = [frontEnd, tools, backEnd, languages, design];

const Skills = ({ resume }) => (
  <div id="skills" className="section">
    <div className="container">
      <Title title={resume.skills.title} />
      <div className="card-row first">
        {resume.skills.categories.map((category, i) => (
          <div key={category.title} className={`card-col ${i < 3 ? 'third' : 'half'}`}>
            <div className="card">
              <div className="card__body">
                <figure className="skills-icon">
                  <object data={svgs[i]} type="image/svg+xml" aria-label={`icon ${category.title}`} />
                </figure>
                <h4>{category.title}</h4>
                <p>{category.description}</p>
                <ul>
                  {category.elements.map(element => (
                    <li key={element}>{element}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Skills.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Skills);
