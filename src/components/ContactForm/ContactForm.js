import React, { Component } from 'react';

import styles from './ContactForm.module.css';

const initialState = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.hendleSubmit} className={styles.contact_form}>
        <label className={styles.lable}>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
            className={styles.input}
          />
        </label>
        <label className={styles.lable}>
          Number
          <input
            type="phone"
            value={number}
            onChange={this.handleChange}
            name="number"
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
