import React from 'react';
import styles from './index.module.css';

function Info() {
  return (
    <div className={styles.info}>
      <h1 className={styles.name}>孟禹丞</h1>
      <p className={styles.word}>5年前端开发经验，2年前端负责人。</p>
      <div className={styles.baseInfo}>
        <span className={styles.baseInfoItem}>27岁</span>
        <span className={styles.baseInfoItem}>5年经验</span>
        <span className={styles.baseInfoItem}>18735812924</span>
        <span className={styles.baseInfoItem}>maxmeng93@gmail.com</span>
      </div>
    </div>
  );
}

export default Info;
