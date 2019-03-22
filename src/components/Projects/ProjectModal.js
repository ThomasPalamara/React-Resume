import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col, Icon, Button } from 'antd';


const ProjectModal = ({ misc, element, visible, images, hideModal }) => {
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        hideModal();
      }
    });
  });

  return (
    <div className={`modal ${visible ? 'show' : ''}`}>
      <div className="project__modal modal__content">
        <Row type="flex" justify="space-around" gutter={0}>
          <Col span={7}>
            <img className="project__modal__picture" src={images[element.picture]} alt={`Project ${element.title}`} />
          </Col>
          <Col span={17}>
            <div className="project__modal__content">
              <h1 className="heading-grad">{ReactHtmlParser(element.title)}</h1>
              <p>{ReactHtmlParser(element.description.long)}</p>
              <div className="project__modal__links">
                <Row>
                  <Col span={12}>
                    <Button type="ghost" href="https://github.com/ThomasPalamara/React-Resume" target="_blank" className="githubLink" icon="github">
                      <span>{misc.gitHubLink}</span>
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button type="ghost" href="" target="_blank" className="projectLink" icon="reconciliation">
                      <span>{misc.projectLink}</span>
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <div className="project__techList">
          <p>Used in this project : </p>
          <ul>
            {element.techs.map(tech => (
              <li key={tech}> {tech}</li>
            ))}
          </ul>
        </div>
        <button className="modal__btn-close" type="button" onClick={hideModal}><Icon type="close" /></button>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  misc: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired,
  images: PropTypes.objectOf(PropTypes.string).isRequired,
  hideModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default ProjectModal;
