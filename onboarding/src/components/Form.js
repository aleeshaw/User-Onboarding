import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../Form.css';

const UserForm = props => {

  return (
    <Formik
      initialValues={{
        name: '', 
        email: '', 
        password: '',
        TOS: false 
      }}
      onSubmit={(values, tools) => {
        console.log("values: ",values,"tools: ", tools);
        tools.resetForm();
      }}

      render={props => {
        return (
          <Form className='user-form'>
            <Field 
              className = 'text-field'
              type = 'text'
              name = 'name'
              placeholder = 'name'
            />
            <Field 
              className = 'text-field'
              type = 'text'
              name = 'email'
              placeholder = 'email' 
            />
            <Field 
              className = 'text-field'
              type = 'password'
              name = 'password'
              placeholder = 'Password' 
            />
            <div className='tos-submit'>
              <label>
              <Field
                type = 'checkbox'
                name = 'TOS'
              />
              I Agree to the Terms of Service
              </label>
              <input 
                className = 'sub-btn'
                type='submit' 
                value='Sign Up!'
              />
            </div>
          </Form>
        )
      }}
    />
  )
};

export default UserForm;