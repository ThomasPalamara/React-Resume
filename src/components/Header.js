import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { withResumeData } from '../context/Resume';

const Header = ({ resume }) => (
  <React.Fragment>
    <header>
      <div className="container">
        <Row>
          <Col xs={24} sm={12}>
            <h4>{resume.greetings}</h4>
            <h1>{`${resume.name} ${resume.firstName}`}</h1>
            <h3>{resume.position}</h3>
          </Col>
          <Col xs={24} sm={12}>
            <p>{resume.email}</p>
            <p>{`${resume.location.city}, ${resume.location.countryCode}`}</p>
            <p>{resume.phoneNumber.en}</p>
            <p>{resume.phoneNumber.fr}</p>
          </Col>
        </Row>
      </div>
    </header>
  </React.Fragment>
);

Header.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Header);
