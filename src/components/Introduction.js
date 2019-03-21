import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'antd';
import { withResumeData } from '../context/Resume';
import Title from './Misc/Title';
import Parallax from './Misc/Parallax';
import compWeb from '../img/composition/composition-web.jpg';
import compLondon from '../img/composition/composition-london2.jpg';
import compElec from '../img/composition/composition-elec2.jpg';


const Introduction = ({ resume }) => {
  useEffect(() => {
    const highlights = document.querySelectorAll('span.highlight');

    Array.from(highlights).forEach((e) => {
      e.addEventListener('mouseenter', () => {
        console.log(e.dataset.highlight);
        document.querySelector('.composition').classList.add('active');
        document.querySelector(`.composition__photo--p${e.dataset.highlight}`).classList.add('active');
      });

      e.addEventListener('mouseleave', () => {
        console.log(e.dataset.highlight);
        document.querySelector('.composition').classList.remove('active');
        document.querySelector(`.composition__photo--p${e.dataset.highlight}`).classList.remove('active');
      });
    });
  });
  return (
    <div id="introduction" className="section">
      <div className="container">
        <Title title={resume.introduction.title} />
        <Row type="flex" justify="space-between">
          <Col span={12}>
            {ReactHtmlParser(resume.introduction.text)}
          </Col>
          <Col span={10}>
            <div className="composition">
              <figure className="composition__photo composition__photo--p1">
                <img src={compWeb} alt="Code" />
              </figure>
              <figure className="composition__photo composition__photo--p2">
                <img src={compElec} alt="Printed Circuit" />
              </figure>
              <figure className="composition__photo composition__photo--p3">
                <img src={compLondon} alt="London" />
              </figure>
            </div>
          </Col>
        </Row>
        <Parallax />
      </div>
    </div>
  )
};

Introduction.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Introduction);
