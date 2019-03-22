import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Button } from 'antd';


const ProjectCard = ({ misc, element, images, showModal }) => {

  useEffect(() => {
    try {
      document.querySelectorAll('.project__picture').forEach((e) => {
        e.style.backgroundImage = `${getComputedStyle(e).getPropertyValue('background-image')}, url(${images[e.dataset.bgImage]})`;
      });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div className="card project__item">
      <figure className="project__picture" data-bg-image={element.picture} />
      <div className="card__body">
        <div className="tag d-none">APT</div>
        <h3 className="project__heading">
          <span>{ReactHtmlParser(element.title)}</span>
        </h3>
        <p>{element.description.short}</p>
        <Button type="primary" onClick={showModal}>
          {misc.learnMore}
        </Button>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  misc: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired,
  images: PropTypes.objectOf(PropTypes.string).isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ProjectCard;

// <div className="project__techList">
