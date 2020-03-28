import React from 'react';
import Title from '../title';
import styles from './index.module.css';

function ModuleItem(props) {
  const { title, icon } = props;
  return (
    <div className={styles.box}>
      <Title title={title} icon={icon}></Title>
      {props.children}
    </div>
  );
}

export default ModuleItem;
