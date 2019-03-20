import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col, Icon } from 'antd';


const ProjectModal = ({ element, visible, images, hideModal }) => {
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        hideModal();
      }
    });
  });

  return (
    <div className={`modal ${visible ? 'show' : ''}`}>
      <div className="modal__content">
        <Row type="flex" justify="space-around" gutter={0}>
          <Col span={7}>
            re
          </Col>
          <Col span={17}>
            <h1 className="heading-grad">{ReactHtmlParser(element.title)}</h1>
            <button type="button" onClick={hideModal}><Icon type="close" /></button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  element: PropTypes.object.isRequired,
  images: PropTypes.objectOf(PropTypes.string).isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default ProjectModal;
