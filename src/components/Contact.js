import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withResumeData } from '../context/Resume';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = ({ resume, form }) => {

  const [emailValidateTrigger, setEmailValidateTrigger] = useState('onBlur');

  const handleEmailValidationTrigger = (e) => {
    if (form.isFieldValidating('email') !== undefined) {
      setEmailValidateTrigger('onChange');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...values })
        })
          .then(() => alert('Success!'))
          .catch(error => alert(error));

        e.preventDefault();
      } else {
        console.log(err);
      }
    });
  }
  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} formLayout="horizontal" className="login-form" data-netlify="true">
      <Form.Item>
        {getFieldDecorator(
          'name', {
            rules: [{
              required: true,
              message: 'Please input your name!',
            }],
          },
        )(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />)}
      </Form.Item>
      <Form.Item hasFeedback>
        {getFieldDecorator(
          'email', {
            validateTrigger: emailValidateTrigger,
            rules: [{
              required: true,
              message: 'Please input your Email!',
            }, {
              message: 'Please input a valid Email!',
              type: 'email',
            }],
          },
        )(<Input onChange={handleEmailValidationTrigger} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Submit</Button>
      </Form.Item>
    </Form>
  );
}

Contact.propTypes = { resume: PropTypes.object.isRequired };

const WrappedContact = Form.create({ name: 'contact' })(Contact);

export default withResumeData(WrappedContact);
