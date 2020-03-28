import React from 'react';
import ModuleItem from '../module_item';
import List from '../list';

function Work(props) {
  const titleInfo = {
    title: '工作经验',
    icon: '',
  }

  return (
    <ModuleItem titleInfo={titleInfo}>
      <List list={props.works} />
    </ModuleItem>
  );
}

export default Work;
