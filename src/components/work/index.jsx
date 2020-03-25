import React from 'react';
import ModuleItem from '../module_item';
import classnames from 'classnames';
import styles from './index.module.css';

function WorkItem(props) {
  const { work } = props;
  return (
    <li className={styles.workItem}>
      <div className={classnames('between-justify', styles.workItemTitle)}>
        <span>{work.startTime}-{work.endTime}</span>
        <span>{work.company}</span>
        <span>{work.role}</span>
      </div>
      <ul className={styles.workItemDetails}>
        { 
          Array.isArray(work.details) ? 
          work.details.map((e, i) => <li>{i+1}）{e}</li>) : 
          <li>{work.details}</li> 
        }
      </ul>
    </li>
  );
}

function Work(props) {
  let titleInfo = {
    title: '工作经验',
    icon: '',
  }

  let works = [
    {
      startTime: '2017.6',
      endTime: '至今',
      company: '生工生物工程（上海）股份有限公司',
      role: '前端负责人',
      details: [
        '前端组长，负责公司前端开发工作，人员招聘，技术选型，架构搭建',
        '设计、编写可复用的前端组件，跟踪并了解前端技术的发展趋向，学习主流的技术',
        '与产品、后端、UI设计人员探讨产品原型与功能实现',
      ],
    }, {
      startTime: '2016.6',
      endTime: '2017.6',
      company: '上海运动元信息科技有限公司',
      role: '前端开发',
      details: [
        '负责公司管理后台、运营系统、赛事报名等系统的开发维护工作',
        '根据产品经理与UI设计师提出的产品原型与功能需求，实现web网页布局与页面逻辑',
      ],
    }, {
      startTime: '2015.3',
      endTime: '2016.4',
      company: '山西优逸客科技有限公司',
      role: '前端开发',
      details: [
        '负责公司产品开发维护工作',
        '完成组长安排的任务'
      ],
    }
  ];

  return (
    <ModuleItem titleInfo={titleInfo}>
      <ul>
        { works.map(e => <WorkItem work={e} />) }
      </ul>
    </ModuleItem>
  );
}

export default Work;
