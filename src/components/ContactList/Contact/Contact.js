import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p className={styles.contactText}>
        {name}: <span>{number}</span>
      </p>
      <button
        className={styles.delContactBtn}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  contactItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
