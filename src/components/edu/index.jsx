import React from 'react';
import ModuleItem from '../module_item';
import List from '../list';

function Edu(props) {
  const titleInfo = {
    title: '教育背景',
    icon: <i className="iconfont" style={{fontSize: 28}}>&#xe637;</i>,
  }

  return (
    <ModuleItem {...titleInfo}>
      <List list={props.edus} />
    </ModuleItem>
  );
}

export default Edu;
