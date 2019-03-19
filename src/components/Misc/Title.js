import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div>
    <h3 className="section-title">{title}</h3>
    <div className="divider" />
  </div>
);


Title.propTypes = { title: PropTypes.string.isRequired };

export default Title;
