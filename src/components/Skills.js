import React from "react";
import { ResumeContext } from '../context/ResumeContext';
import { Row, Col } from 'antd';
import frontEnd from '../img/icons/front-end.svg';
import tools from '../img/icons/tools.svg';
import backEnd from '../img/icons/back-end.svg';
import languages from '../img/icons/languages.svg';
import design from '../img/icons/design.svg';

const svgs = [frontEnd, tools, backEnd, languages, design]

const Introduction = (props) => (
    <ResumeContext.Consumer>
        {resume => (
            <Row type="flex" justify="center" className="section primary-bg">
                <Col span={16}>
                    <h3 className="section-title">{resume.skills.title}</h3>
                    <div className="divider" />
                    <div className="card-row first">
                    {resume.skills.categories.map((category, i) => (
                        <div key={i} className={`card-col ${i < 3 ? 'third' : 'half'}`}>
                            <div className="card">
                                <figure className="skills-icon">
                                    <img src={svgs[i]} alt={`Icon ${category.title}`} />
                                </figure>
                                <h4>{category.title}</h4>
                                <p>{category.description}</p>
                                <ul>
                                    {category.elements.map((element, i) => (
                                        <li key={i}>{element}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    </div>
                </Col>
            </Row>
    )}
    </ResumeContext.Consumer>
);

export default Introduction;