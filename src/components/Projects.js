import React from "react";
import { ResumeContext } from '../context/ResumeContext';
import { Row, Col } from 'antd';


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        var winHeight = window.innerHeight;

        // Annoying to compute doc height due to browser inconsistency
        var body = document.body;
        var html = document.documentElement;
        var docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
     
        var value = document.body.scrollTop;

        console.log(scrollTop);
    }
    render() {
        return (
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
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
            </ResumeContext.Consumer>
        );
    }
}

export default Projects;