import React from "react";
import { Select } from 'antd';

const Option = Select.Option;

const Language = (props) => (
    <div id="languageSwitch">
        <Select defaultValue="en" style={{ width: 120 }} onChange={props.languageHandler}>
            <Option value="en"><i className="ukFlag flag"></i>English</Option>
            <Option value="fr"> <i className="frFlag flag"></i> French</Option>
        </Select>
    </div>
);

export default Language;