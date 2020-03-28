import React from 'react';
import styles from './index.module.css';
import ListItem from '../list_item';

function List(props) {
  return (
    <ul>
      { 
        props.list.map((item, index) => 
          <li className={styles.item} key={index}>
            <ListItem data={item} />
          </li>
        ) 
      }
    </ul>
  );
}

export default List;
