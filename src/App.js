import React from 'react';
import './App.css';
import Info from './components/info';
import JobIntention from './components/job_intention';
import Skill from './components/skill';
import Work from './components/work';
import Project from './components/project';
import Edu from './components/edu';
import Summary from './components/summary';
import Homepage from './components/homepage';

let data = {
  // 基础信息
  info: {
    name: '孟禹丞',
    age: '27岁',
    experience: '5年经验',
    mobile: '18735812924',
    email: 'maxmeng93@gmail.com',
    describe: '5年前端开发经验，2年前端负责人',
  },
  // 求职意向
  jobIntention: {
    post: '前端工程师',
    city: '上海',
    pay: '20K',
    arrivalTime: '一个月内到岗',
  },
  skills: [
    '熟练使用React技术栈，如React、Redux、Redux-saga、dvajs、antd等',
    '也使用Vue、Vuex、Nuxtjs开发过多语言服务端渲染的网站',
    '了解微信小程序，并有实际开发经验',
    '熟悉 Git Flow 工作流程',
  ],
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
        '根据设计文档、开发规范设计、编写可复用的前端组件',
        '与产品、后端、UI设计人员探讨产品原型与功能实现，站在前端角度提出自己的见解',
        '研究和探索创新的开发思路和前沿的前端技术，应用到团队和产品中',
        '参与应用框架体系建设及前端工程体系建设，专研各种前沿技术和创新交互，增强用户体验、开拓前端能力边界',
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
      title: '魔方系统（架构设计）',
      company: '生工生物工程（上海）股份有限公司',
      details: [
        '魔方系统是集团内新一代的大中台系统，系统采用 React、Umijs、Dvajs、Antd、React-intld 等技术，目的是构建一个便于维护、入口统一、国际化、持续集成的新一代系统。公司原有的生产执行系统(MES)也在陆续迁移到这个系统。',
        '设计魔方系统架构、维护基础数据缓存、定义路由结构、设计页面路由及按钮权限、规定项目目录结构等',
      ],
    },
    {
      title: '生工新电商系统',
      company: '生工生物工程（上海）股份有限公司',
      details: [
        '新电商系统，为了替换目前正在使用的生工官网而开发的一个项目。技术栈是 Vue、Vuex、Nuxtjs 等。',
        '根据UI设计图，为组内同事分配工作。规划项目结构，封装复用组件。',
      ],
    },
    {
      title: '生产执行管理系统',
      company: '生工生物工程（上海）股份有限公司',
      details: [
        '生产执行管理系统(MES)内对接了公司的生产销售流程。系统内原有销售管理、合成管理、基因合成、测序管理、审批管理、快递管理、系统管理等7个子项目，我加入公司后又陆续开发了新测序管理、采购管理、人事管理、预算管理、基础数据、多肽合成管理、RNA合成管理等多个项目，这些项目会在下面分开介绍。https://mes.sangon.com/',
        '这是一个jQuery+easyUI的旧系统。在我接手后我设置了简单通用的开发规定，如设置统一的接口文件，每个页面通过工厂模式只导出一个变量等。一定程度上解决结构不清晰、接口管理混乱、乱用全局变量等问题。',
      ]
    },
    {
      title: '采购管理',
      company: '生工生物工程（上海）股份有限公司',
      details: [
        '采购管理连接了钉钉、Java后台、SAP系统，为公司采购、付款等提供了便利。采购管理有采购申请、采购订单、付款申请、银行科目、供应商科目等几个模块。采购管理还与之后开发的基础数据项目中的物资分类、采购科目、部门成本中心，及预算管理项目中的预算明细有较大的关联。',
        '负责了采购管理的基础开发工作，后期因开始其他项目，而将采购交由其他同事维护与bug修复。'
      ],
    },
    {
      title: '新测序管理',
      company: '生工生物工程（上海）股份有限公司',
      details: [
        '这是原有测序管理系统的全新升级版。它通过系统规划取样、测序订单、样品制备、样品排版、测序反应、反应排版、结果分析等流程，帮助公司测序部门可以更快更好的完成工作。一共有20+项目模块。',
        '通过与生产部门合作了解生产流程，并与产品、设计、后端深入探讨',
      ],
    },
    {
      title: '多肽合成管理',
      company: '生工生物工程（上海）股份有限公司',
      details: [
        '多肽合成管理有订单管理、多肽纯度、合成产品、氨基酸、修饰、类别、修饰产品、二硫键产品等多个模块',
        '负责基础页面开发，代码优化等工作',
      ],
    },
    {
      title: 'BBI集团官网',
      company: '生工生物工程（上海）股份有限公司',
      details: [
        'BBI集团是生工生物的控股公司，这个官网是为了上市公司披露财务信息、发布最新公告、介绍公司产品等目的而开发的。这个官网采用了Vue、Vuex、Nuxtjs、Nust-i18n等技术栈，最终成果是一个三种语言国际化、服务端渲染的项目。上线后也使用了PM2做进程管理。http://www.bbi-lifesciences.com/'
      ],
    },
    {
      title: 'BBI集团员工自助系统-web版',
      company: '生工生物工程（上海）股份有限公司',
      details: [
        '这是一个集团内部员工使用的一个系统，目前的功能只有薪资查询。每月薪资由人事负责从MES系统中的人事管理上传。http://employee.sangon.com/',
        '基础框架使用了Vue，还使用了 flexible.js 做移动端自适应。',
      ],
    },
    {
      title: 'BBI集团员工自助系统-小程序版',
      company: '生工生物工程（上海）股份有限公司',
      details: [
        '和上面的web版功能、页面都相同。',
        '负责项目开发、小程序提交审核等',
      ],
    },
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
  summary: '具有大型前端系统开发和框架设计经验，精通页面架构布局和PC端、移动端适配。自我驱动，代码洁癖，良好的编程能力和编程习惯，良好的学习能力。具备良好的团队合作精神，能利用自身技术能力提升团队整体研发效率。',
  homepage: [
    {
      title: '个人网站',
      href: 'https://www.maxmeng.top'
    },
    {
      title: 'GitHub',
      href: 'https://github.com/maxmeng93'
    },
    {
      title: '线上简历',
      href: '',
    }
  ],
};

function App() {
  return (
    <div className="App">
      <div className="a4">
        <div className="decorate">&nbsp;</div>
        <Info {...data.info} />
        <JobIntention {...data.jobIntention} />
        <Skill skills={data.skills} />
        <Work works={data.works} />
        <Project projects={data.projects} />
        <Edu edus={data.edus} />
        <Summary summary={data.summary} />
        <Homepage list={data.homepage} />
      </div>
    </div>
  );
}

export default App;
