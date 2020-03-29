import React from 'react';
import ModuleItem from '../module_item';
import styles from './index.module.css';

function Homepage(props) {
  const titleInfo = {
    title: '社交主页',
    icon: <i className="iconfont" style={{fontSize: 24}}>&#xe69b;</i>,
  }

  return (
    <ModuleItem {...titleInfo}>
      <ul>
        {
          props.list.map((item, i) => (
            <li className={styles.item} key={i}>
              <strong>{item.title}</strong>
              <a href={item.href} target="_blank" rel="noopener noreferrer">{item.href}</a>
            </li>
          ))
        }
      </ul>
    </ModuleItem>
  );
}

export default Homepage;
