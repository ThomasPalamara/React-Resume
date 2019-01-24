import React from "react";
import { withResumeData } from '../context/Resume';
import { Row, Col } from 'antd';

const Header = (props) => {
    const resume = props.resume;
    return (
        <React.Fragment>
            <header>
                <Row>
                    <Col span={12}>
                        <h4>{resume.greetings}</h4>
                        <h1>{resume.name + ' ' + props.resume.firstName}</h1>
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
        </React.Fragment>
    )
};

export default withResumeData(Header);