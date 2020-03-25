import React from 'react';
import ModuleItem from '../module_item';
import styles from './index.module.css';
import classnames from 'classnames';

function JobPreference(props) {
  let titleInfo = {
    title: '求职意向',
    icon: '',
  }

  return (
    <ModuleItem titleInfo={titleInfo}>
      {/* <div className={styles.inteCon}>
        <span>前端开发</span>
        <span>上海</span>
        <span>薪资面议</span>
        <span>一个月内到岗</span>
      </div> */}
      <div className={classnames('between-justify', styles.inteCon)}>
        <span>前端开发</span>
        <span>上海</span>
        <span>薪资面议</span>
        <span>一个月内到岗</span>
      </div>
    </ModuleItem>
  );
}

export default JobPreference;
