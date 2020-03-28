import React from 'react';
import classnames from 'classnames';
import styles from './index.module.css';

function ListItem(props) {
  const { data } = props;

  return (
    <>
      <div className={classnames('between-justify', styles.itemTitle)}>
        { data.titles.map((e, i) => (<span key={i}>{e}</span>)) }
      </div>
      <ul className={styles.itemDetails}>
        { 
          Array.isArray(data.details) ? 
          data.details.map((e, i) => <li key={i}>{i+1}）{e}</li>) : 
          <li>{data.details}</li> 
        }
      </ul>
    </>
  );
}

export default ListItem;
