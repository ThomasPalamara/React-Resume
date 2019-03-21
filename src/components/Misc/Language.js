import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { withResumeData } from '../../context/Resume';

const { Option } = Select;

const Language = ({ resume, languageHandler }) => (
  <div id="languageSwitch">
    <Select defaultValue="en" style={{ width: 125 }} onChange={languageHandler}>
      <Option value="en"><i className="ukFlag flag" /> { resume.misc.enLang }</Option>
      <Option value="fr"><i className="frFlag flag" /> { resume.misc.frLang }</Option>
    </Select>
  </div>
);

Language.propTypes = { 
  resume: PropTypes.object.isRequired,
  languageHandler: PropTypes.func.isRequired,
};

export default withResumeData(Language);
