import React from 'react';
import styles from './index.module.css';

function Title(props) {
  return (
    <div className={styles.titleBox}>
      <div className={styles.icon}>{props.icon}</div>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
}

export default Title;
