import React from 'react';
import ModuleItem from '../module_item';
import List from '../list';

function Work(props) {
  const titleInfo = {
    title: '工作经验',
    icon: <i className="iconfont" style={{fontSize: 22}}>&#xe61b;</i>,
  }

  return (
    <ModuleItem {...titleInfo}>
      <List list={props.works} />
    </ModuleItem>
  );
}

export default Work;
