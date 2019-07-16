import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'antd';
import { withResumeData } from '../context/Resume';
import Title from './Misc/Title';
import Parallax from './Misc/Parallax';
import compWebJPG from '../img/composition/composition-web.jpg';
import compLondonJPG from '../img/composition/composition-london2.jpg';
import compElecJPG from '../img/composition/composition-elec2.jpg';
import compWebWEBP from '../img/composition/composition-web.webp';
import compLondonWEBP from '../img/composition/composition-london2.webp';
import compElecWEBP from '../img/composition/composition-elec2.webp';

const Introduction = ({ resume }) => {
  useEffect(() => {
    const highlights = document.querySelectorAll('span.highlight');

    Array.from(highlights).forEach((e) => {
      e.addEventListener('mouseenter', () => {
        document.querySelector('.composition').classList.add('active');
        document
          .querySelector(`.composition__photo--p${e.dataset.highlight}`)
          .classList.add('active');
      });

      e.addEventListener('mouseleave', () => {
        document.querySelector('.composition').classList.remove('active');
        document
          .querySelector(`.composition__photo--p${e.dataset.highlight}`)
          .classList.remove('active');
      });
    });
  });
  return (
    <div id="introduction" className="section">
      <div className="container">
        <Title title={resume.introduction.title} />
        <Row type="flex" justify="space-between">
          <Col xs={24} md={12}>
            {ReactHtmlParser(resume.introduction.text)}
          </Col>
          <Col xs={24} md={10} className="mt-5 mt-md-0" style={{ minHeight: '300px' }}>
            <div className="composition">
              <figure className="composition__photo composition__photo--p1">
                <picture>
                  <source srcSet={compWebWEBP} type="image/webp" />
                  <source srcSet={compWebJPG} type="image/jpeg" />
                  <img src={compWebJPG} alt="Screen showing code" />
                </picture>
              </figure>
              <figure className="composition__photo composition__photo--p2">
                <picture>
                  <source srcSet={compElecWEBP} type="image/webp" />
                  <source srcSet={compElecJPG} type="image/jpeg" />
                  <img src={compElecJPG} alt="Screen showing code" />
                </picture>
              </figure>
              <figure className="composition__photo composition__photo--p3">
                <picture>
                  <source srcSet={compLondonWEBP} type="image/webp" />
                  <source srcSet={compLondonJPG} type="image/jpeg" />
                  <img src={compLondonJPG} alt="Arial view " />
                </picture>
              </figure>
            </div>
          </Col>
        </Row>
        <Parallax />
      </div>
    </div>
  );
};

Introduction.propTypes = { resume: PropTypes.object.isRequired };

export default withResumeData(Introduction);
