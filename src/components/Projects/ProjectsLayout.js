import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { withResumeData } from '../../context/Resume';
import Title from '../Misc/Title';
import Project from './Project';

function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    images[key.replace('./', '')] = r(key);
  });
  return images;
}
const images = importAll(require.context('../../img/projects', false, /\.(png|jpe?g|svg)$/));

const ProjectsLayout = ({ resume }) => (
  <div id="projects" className="section">
    <div className="container">
      <Title title={resume.projects.title} />
      <p className="mb-5">{resume.projects.text}</p>
      <Row type="flex" justify="space-around" gutter={16}>
        {resume.projects.elements.map(element => (
          <Col key={element.title} xs={24} sm={16} lg={10} xl={8} style={{ marginBottom: '54px' }}>
            <Project element={element} misc={resume.misc} images={images} />
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

ProjectsLayout.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(ProjectsLayout);

// <div className="project__techList">
// <p>Used in this project : </p>
// <ul>
//   {element.techs.map(tech => (
//     <li key={tech}> {tech}</li>
//   ))}
// </ul>
// </div>

// componentDidMount() {
//   window.addEventListener('scroll', this.handleScroll);
// }
// handleScroll = () => {
//   const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

//   const projectItems = document.getElementsByClassName('project-item');

//   Array.prototype.forEach.call(projectItems, function (project) {
//     if (scrollTop + window.innerHeight > getTopPosition(project)) {
//       var scrolledIn = scrollTop + window.innerHeight - getTopPosition(project); //How much did we scrolled in the element. How many pixels of the element do we see
//       var percentDisplayed = Math.min(100, (scrolledIn * 100) / project.offsetHeight);

//       project.style.transform = `translateX(${150 - (percentDisplayed * 1.5)}px)`;
//       project.style.opacity = percentDisplayed / 100;
//     }
//   });

//   function getTopPosition(element) {
//     var yPosition = 0;

//     while (element) {
//       yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//       element = element.offsetParent;
//     }
//     return yPosition;
//   }
// }
