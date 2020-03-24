import React from 'react';
import styles from './index.module.css';

function Title(props) {
  return (
    <div className={styles.titleBox}>
      <i className={styles.icon}></i>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
}

export default Title;
