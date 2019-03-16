import React from "react";
import { ResumeContext } from '../context/ResumeContext';
import { Row, Col } from 'antd';

const Header = (props) => (
    <ResumeContext.Consumer>
        {resume => (
            <header>
                <div className="header-bg"></div>
                <Row>
                    <Col span={12}>
                <div className="header-bg1"></div>
                        <h4>{resume.greetings}</h4>
                        <h1>{resume.name + ' ' + resume.firstName}</h1>
                        <h3>{resume.position}</h3>
                    </Col>
                    <Col span={12}>
                        <p>{resume.email}</p>
                        <p>{`${resume.location.city}, ${resume.location.countryCode}`}</p>
                        <p>{resume.phoneNumber.en}</p>
                        <p>{resume.phoneNumber.fr}</p>
                    </Col>
                </Row>
            </header>
        )}
    </ResumeContext.Consumer>
);

export default Header;