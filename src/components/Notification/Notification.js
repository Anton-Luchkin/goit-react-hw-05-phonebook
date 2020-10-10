import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Notification.module.css';

const Notification = ({ showNotification }) => (
  <CSSTransition
    in={showNotification}
    timeout={250}
    classNames={styles}
    unmountOnExit
  >
    <div className={styles.notificationBox}>
      <span className={styles.notificationText}>Contact already exist!</span>
    </div>
  </CSSTransition>
);

export default Notification;
