import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Button,
  FormStyled,
  FieldStyled,
  ErrorMessageStyled,
} from './ContactForm.styled';
import { Formik } from 'formik';
import * as yup from 'yup';

let schema = yup.object({
  name: yup
    .string()
    .required('Please enter a name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('Please enter a number')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

class ContactForm extends Component {
  onHandleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values.name, values.number);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={this.onHandleSubmit}
      >
        <FormStyled>
          <Label htmlFor="name">Name</Label>
          <FieldStyled type="text" id="name" name="name" />
          <ErrorMessageStyled name="name" component="div" />
          <Label htmlFor="number">Number</Label>
          <FieldStyled type="tel" id="number" name="number" />
          <ErrorMessageStyled name="number" component="div" />
          <Button type="submit">Add Contact</Button>
        </FormStyled>
      </Formik>
    );
  }
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
