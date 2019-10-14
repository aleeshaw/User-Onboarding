import React, { useState } from 'react';
import { withFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../Form.css';

function UserForm() {
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
  );
}

const FormikUserForm = withFormik({
  mapPropsToValues ({name, email, password, TOS}) {
    return {
      name: name ||"",
      email: email || "",
      password: password || "",
      TOS: true || false
    };
  },
  //VALIDATION
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Please type your name."),
    email: Yup.string()
      .email()
      .required("Please type a valid email."),
    password: Yup.string()
      .min(8)
      .required("Please choose a password with at least 8 characters"),
    TOS: Yup.bool()
      .positive()
      .required("Terms of Service Agreement required!")
  }),
  //END VALIDATION
  
  handleSubmit(values) {
    console.log(values)
    //stuff goes here too
  }
})(UserForm);

export default FormikUserForm;

// onSubmit={(values, tools) => {
//   console.log("values: ",values,"tools: ", tools);
//   tools.resetForm();
// }}

//place this later...alter for stuff.