import React from 'react';
import ModuleItem from '../module_item';
import List from '../list';

function Edu(props) {
  const titleInfo = {
    title: '教育背景',
    icon: '',
  }

  return (
    <ModuleItem titleInfo={titleInfo}>
      {/* <div className="between-justify">
        <span>2011.9-2014.7</span>
        <span>太原旅游职业学院</span>
        <span>酒店管理</span>
      </div> */}
      <List list={props.edus} />
    </ModuleItem>
  );
}

export default Edu;
