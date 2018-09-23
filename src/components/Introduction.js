import React from "react";
import { ResumeContext } from '../context/ResumeContext';
import { Row, Col } from 'antd';

const Introduction = (props) => (
    <ResumeContext.Consumer>
        {resume => (
            <div id="introduction" className="container section">
                <Row type="flex" justify="center">
                    <Col span={16}>
                        <h3 className="section-title">{resume.introduction.title}</h3>
                        <div className="divider"></div>
                        <div dangerouslySetInnerHTML={{ __html: resume.introduction.text }} />
                    </Col>
                </Row>
            </div>
        )}
    </ResumeContext.Consumer>
);

export default Introduction;