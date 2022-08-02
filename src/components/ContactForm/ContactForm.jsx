import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  onHandle = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.onHandleSubmit}>
        {' '}
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onHandle}
        />
        <label className={s.label} htmlFor="number">
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onHandle}
        />
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
