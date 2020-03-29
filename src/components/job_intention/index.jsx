import React from 'react';
import ModuleItem from '../module_item';
import styles from './index.module.css';
import classnames from 'classnames';

function JobIntention(props) {
  const titleInfo = {
    title: '求职意向',
    icon: <i className="iconfont" style={{fontSize: 24}}>&#xe69d;</i>,
  }

  return (
    <ModuleItem {...titleInfo}>
      <div className={classnames('between-justify', styles.inteCon)}>
        <span>{props.post}</span>
        <span>{props.city}</span>
        <span>{props.pay}</span>
        <span>{props.arrivalTime}</span>
      </div>
    </ModuleItem>
  );
}

export default JobIntention;
