import React from "react";
import { ResumeContext } from '../context/ResumeContext';
import { Row, Col } from 'antd';

const Projects = (props) => (
    <ResumeContext.Consumer>
        {resume => (
            <div id="projects" className="container section">
                <Row type="flex" justify="center">
                    <Col span={16}>
                        <h3 className="section-title">{resume.projects.title}</h3>
                        <div className="divider"></div>
                        <div>{resume.projects.text}</div>
                        <div>
                            {resume.projects.elements.map(element => (
                                <div className="project-item">
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
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        )}
    </ResumeContext.Consumer>
);

export default Projects;