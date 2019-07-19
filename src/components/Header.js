import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'antd';
import { withResumeData } from '../context/Resume';
import resumePdf from '../img/ThomasPalamaraResume.pdf';

// TODO: fraire french part
const Header = ({ resume }) => (
  <React.Fragment>
    <header>
      <div className="container">
        <Row>
          <Col xs={24} sm={16}>
            <h4>{resume.greetings}</h4>
            <h1>{`${resume.firstName} ${resume.name}`}</h1>
            <h3>{resume.position}</h3>
          </Col>
          <Col xs={24} sm={8}>
            <p>{`${resume.location.city}, ${resume.location.countryCode}`}</p>
            <p>{resume.email}</p>
            <p>
              Take a look at my
              <a href={resumePdf} className="link" target="_blank" rel="noopener noreferrer">
                <span>Resume</span>
              </a>
              <span className="d-inline-block">
                or visit my&nbsp;
                <a
                  style={{ fontSize: '24px', color: '#fff' }}
                  href={`https://www.linkedin.com/in/thomas-palamara-a8ab36a7/${
                    resume.language === 'en' ? '?locale=en_US' : ''
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="linkedin" theme="filled" />
                </a>
                &nbsp;profile
              </span>
            </p>
          </Col>
        </Row>
      </div>
    </header>
  </React.Fragment>
);

Header.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Header);
