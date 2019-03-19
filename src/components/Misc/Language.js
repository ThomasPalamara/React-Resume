import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const Language = ({ languageHandler }) => (
  <div id="languageSwitch">
    <Select defaultValue="en" style={{ width: 120 }} onChange={languageHandler}>
      <Option value="en"><i className="ukFlag flag" /> English</Option>
      <Option value="fr"><i className="frFlag flag" /> French</Option>
    </Select>
  </div>
);

Language.propTypes = { languageHandler: PropTypes.func.isRequired };

export default Language;
