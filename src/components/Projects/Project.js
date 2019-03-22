import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Project = (props) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const showModal = () => {
    setModalVisibility(true);
  };

  const hideModal = () => {
    setModalVisibility(false);
  };

  return (
    <React.Fragment>
      <ProjectCard {...props} showModal={showModal} />
      <ProjectModal {...props} visible={modalVisibility} hideModal={hideModal} />
    </React.Fragment>
  );
};

export default Project;
