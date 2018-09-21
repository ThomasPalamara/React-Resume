import React from "react";
import { ResumeContext } from '../context/ResumeContext';
import { Row, Col } from 'antd';

const Introduction = (props) => (
    <ResumeContext.Consumer>
        {resume => (
            <Row type="flex" justify="center" className="primary-bg">
                <Col span={16}>
                    <h3 className="section-title">{resume.skills.title}</h3>
                    <div className="divider" />
                    <div className="card-row first">
                    {resume.skills.categories.map((category, i) => (
                                <div className={`card-col ${i<3 ? 'third' : 'half'}`}>
                                    <div className="card">
                                        <h4>{category.title}</h4>
                                        <ul>
                                        {category.elements.map(element => (
                                            <li>{element}</li>
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