import React from "react";
import { withResumeData } from '../context/Resume';
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

        const projectItems = document.getElementsByClassName('project-item');

        Array.prototype.forEach.call(projectItems, function (project) {
            if (scrollTop + window.innerHeight > getTopPosition(project)) {
                var scrolledIn = scrollTop + window.innerHeight - getTopPosition(project); //How much did we scrolled in the element. How many pixels of the element do we see
                var percentDisplayed = Math.min(100, (scrolledIn * 100) / project.offsetHeight);

                project.style.transform = `translateX(${150 - (percentDisplayed * 1.5)}px)`;
                project.style.opacity = percentDisplayed / 100;
            }
        });

        function getTopPosition(element) {
            var yPosition = 0;

            while (element) {
                yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                element = element.offsetParent;
            }
            return yPosition;
        }
    }
    render() {
        const resume = this.props.resume;
        return (
            <React.Fragment>
                <div id="projects" className="section">
                    <Row type="flex" justify="center">
                        <Col span={16}>
                            <h3 className="section-title">{resume.projects.title}</h3>
                            <div className="divider"></div>
                            <div>{resume.projects.text}</div>
                            <div>
                                {resume.projects.elements.map((element, i) => (
                                    <div id={`project-${i}`} className="project-item">
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
            </React.Fragment>
        );
    }
}

export default withResumeData(Projects);