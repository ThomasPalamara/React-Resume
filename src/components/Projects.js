import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { withResumeData } from '../context/Resume';
import Title from './Misc/Title';


const Projects = ({ resume }) => (
  <React.Fragment>
    <div id="projects" className="section">
      <div className="container">
        <Title title={resume.projects.title} />
        <p className="mb-5">{resume.projects.text}</p>
        <Row type="flex" justify="space-around" gutter={16}>
          {resume.projects.elements.map(element => (
            <Col span={6}>
              <div className="card">
                <div className="tag">APT</div>
                <h3>{element.title}</h3>
                <p>{element.description}</p>

                <div className="project-tech">
                  <p>Used in this project : </p>
                  <ul>
                    {element.techs.map(tech => (
                      <li> {tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </React.Fragment>
);

Projects.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Projects);


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
