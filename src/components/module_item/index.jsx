import React from 'react';
import Title from '../title';
import styles from './index.module.css';

function ModuleItem(props) {
  return (
    <div className={styles.box}>
      <Title {...props.titleInfo}></Title>
      {props.children}
    </div>
  );
}

export default ModuleItem;
