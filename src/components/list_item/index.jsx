import React from 'react';
import classnames from 'classnames';
import styles from './index.module.css';

function ListItem(props) {
  const { data, type } = props;
  
  // 项目
  function renderProject() {
    return (
      <div className={styles.itemDetails}>
        <p style={{'textIndent': '2em'}}><strong>项目描述：</strong>{data.details[0]}</p>
        <p style={{'textIndent': '2em'}}><strong>工作职能：</strong>{data.details[1]}</p>
      </div>
    );
  }

  function renderDetail() {
    if (type === 'project') {
      return renderProject();
    }
    return (
      <ul className={styles.itemDetails}>
        { 
          Array.isArray(data.details) ? 
          data.details.map((e, i) => <li key={i}>{i+1}）{e}</li>) : 
          <li>{data.details}</li> 
        }
      </ul>
    );
  }

  return (
    <>
      <div className={classnames('between-justify', styles.itemTitle)}>
        { data.titles.map((e, i) => (<span key={i}>{e}</span>)) }
      </div>
      { renderDetail() }
    </>
  );
}

export default ListItem;
