import React from 'react';
import styles from './index.module.css';
import ListItem from '../list_item';

function List(props) {
  const { type, list } = props;

  return (
    <ul>
      { 
        list.map((item, index) => 
          <li className={styles.item} key={index}>
            <ListItem {...item} type={type} />
          </li>
        ) 
      }
    </ul>
  );
}

export default List;
