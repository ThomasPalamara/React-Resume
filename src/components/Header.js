import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { withResumeData } from '../context/Resume';

const Header = ({ resume }) => (
  <React.Fragment>
    <header>
      <Row>
        <Col span={12}>
          <h4>{typeof resume}</h4>
          <h4>{resume.greetings}</h4>
          <h1>{`${resume.name} ${resume.firstName}`}</h1>
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
);

Header.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Header);
