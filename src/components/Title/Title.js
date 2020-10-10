import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Title.module.css';

const Title = () => (
  <div>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={styles}
      unmountOnExit
    >
      <h2 className={styles.title}>Phonebook</h2>
    </CSSTransition>
  </div>
);

export default Title;
