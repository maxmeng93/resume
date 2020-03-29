import React from 'react';
import ModuleItem from '../module_item';
import styles from './index.module.css';

function Homepage(props) {
  const titleInfo = {
    title: '社交主页',
    icon: '',
  }

  return (
    <ModuleItem {...titleInfo}>
      <ul>
        {
          props.list.map((item, i) => (
            <li className={styles.item} key={i}>
              <strong>{item.title}</strong>
              <a href={item.href} target="_blank">{item.href}</a>
            </li>
          ))
        }
      </ul>
    </ModuleItem>
  );
}

export default Homepage;
