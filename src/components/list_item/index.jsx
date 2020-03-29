import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function ListItem(props) {
  const { titles, details, type } = props;
  
  // 项目
  function renderProject() {
    return (
      <div className={classnames(styles.itemDetails, styles.projectDetails)}>
        <p><strong>项目描述：</strong>{details[0]}</p>
        <p><strong>工作职能：</strong>{details[1]}</p>
      </div>
    );
  }

  function renderDetail() {
    if (type === 'project') {
      return renderProject();
    }
    if (Array.isArray(details)) {
      return (
        <ul className={styles.itemDetails}>
          { details.map((e, i) => <li key={i}>{i+1}）{e}</li>) }
        </ul>
      );
    }
    if (typeof details === 'string') {
      return (
        <p className={styles.itemDetails}>{details}</p>
      );
    }
    return null;
  }

  function renderTitle() {
    if (titles) {
      return (
        <div className={classnames('between-justify', styles.itemTitle)}>
          { titles.map((e, i) => (<span key={i}>{e}</span>)) }
        </div>
      )
    }
    return null;
  }

  return (
    <>
      { renderTitle() }
      { renderDetail() }
    </>
  );
}

ListItem.propTypes = {
  titles: PropTypes.array, 
  details: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]), 
  type: PropTypes.string,
};

export default ListItem;
