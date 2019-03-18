import React from "react";
import { withResumeData } from '../context/Resume';
import { Row, Col } from 'antd';

const Introduction = (props) => (
    <React.Fragment>
            <div id="introduction" className="section">
                <Row type="flex" justify="center">
                    <Col span={16}>
                        <h3 className="section-title">{props.resume.introduction.title}</h3>
                        <div className="divider"></div>
                        <div dangerouslySetInnerHTML={{ __html: props.resume.introduction.text }} />
                    </Col>
                </Row>
            </div>
    </React.Fragment>
);

export default withResumeData(Introduction) ;