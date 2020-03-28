import React from 'react';
import './App.css';
import Info from './components/info';
import JobIntention from './components/job_intention';
import Work from './components/work';
import Project from './components/project';
import Edu from './components/edu';
import Summary from './components/summary';

let data = {
  // 基础信息
  info: {
    name: '孟禹丞',
    age: '27岁',
    mobile: '18735812924',
    email: 'maxmeng93@gmail.com',
    describe: '5年前端开发经验，2年前端负责人。',
  },
  // 求职意向
  jobIntention: {
    post: '前端工程师',
    city: '上海',
    pay: '20K',
    arrivalTime: '一个月内到岗',
  },
  // 工作经验
  works: [
    {
      startTime: '2017.6',
      endTime: '至今',
      company: '生工生物工程（上海）股份有限公司',
      role: '前端负责人',
      titles: [
        '2017.6-至今',
        '生工生物工程（上海）股份有限公司',
        '前端负责人',
      ],
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
      titles: [
        '2016.6-2017.6',
        '上海运动元信息科技有限公司',
        '前端开发',
      ],
      details: [
        '负责公司管理后台、运营系统、赛事报名等系统的开发维护工作',
        '根据产品经理与UI设计师提出的产品原型与功能需求，实现web网页布局与页面逻辑',
      ],
    }, {
      startTime: '2015.3',
      endTime: '2016.4',
      company: '山西优逸客科技有限公司',
      role: '前端开发',
      titles: [
        '2015.3-2016.4',
        '山西优逸客科技有限公司',
        '前端开发',
      ],
      details: [
        '负责公司产品开发维护工作',
        '完成组长安排的任务'
      ],
    }
  ],
  // 项目经验
  projects: [
    {
      titles: [
        'BBI集团官网'
      ],
      details: '',
    }
  ],
  // 教育背景
  edus: [
    {
      titles: [
        '2011.9-2014.7',
        '太原旅游职业学院',
        '酒店管理',
      ],
      details: '在学校学习了网页设计，为之后的工作打下基础。',
    }
  ],
  summary: '自我驱动，代码洁癖',
};

function App() {
  return (
    <div className="App">
      <div className="a4">
        <Info />
        <JobIntention {...data.jobIntention} />
        <Work works={data.works} />
        <Project projects={data.projects} />
        <Edu edus={data.edus} />
        <Summary summary={data.summary} />
      </div>
    </div>
  );
}

export default App;
