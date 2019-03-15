import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'antd';
import { withResumeData } from '../context/Resume';
import Title from './Misc/Title';
import Parallax from './Misc/Parallax';
import compWeb from '../img/composition/composition-web.jpg';
import compLondon from '../img/composition/composition-london2.jpg';
import compElec from '../img/composition/composition-elec2.jpg';


const Introduction = ({ resume }) => (
  <div id="introduction" className="section">
    <div className="container">
      <Title title={resume.introduction.title} />
      <Row type="flex" justify="space-between">
        <Col span={12}>
          <p>{ReactHtmlParser(resume.introduction.text)}</p>
        </Col>
        <Col span={10}>
          <div className="composition">
            <img src={compWeb} alt="Code" className="composition__photo composition__photo--p1" />
            <img src={compElec} alt="Printed Circuit" className="composition__photo composition__photo--p2" />
            <img src={compLondon} alt="London" className="composition__photo composition__photo--p3" />
          </div>
        </Col>
      </Row>
      <Parallax />
    </div>
  </div>
);

Introduction.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Introduction);
