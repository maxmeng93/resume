import React from 'react';
import ModuleItem from '../module_item';
import List from '../list';

function Project(props) {
  const titleInfo = {
    title: '项目经验',
    icon: '',
  }

  return (
    <ModuleItem {...titleInfo}>
      <List list={props.projects} />
    </ModuleItem>
  );
}

export default Project;
