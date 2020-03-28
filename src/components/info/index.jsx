import React from 'react';
import styles from './index.module.css';

function Info(props) {
  return (
    <div className={styles.info}>
      <h1 className={styles.name}>{props.name}</h1>
      <p className={styles.describe}>{props.describe}</p>
      <div className={styles.baseInfo}>
        <span className={styles.baseInfoItem}>{props.age}</span>
        <span className={styles.baseInfoItem}>{props.experience}</span>
        <span className={styles.baseInfoItem}>{props.mobile}</span>
        <span className={styles.baseInfoItem}>{props.email}</span>
      </div>
    </div>
  );
}

export default Info;
