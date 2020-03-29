import React from 'react';
import ModuleItem from '../module_item';
import List from '../list';

function Project(props) {
  const titleInfo = {
    title: '项目经验',
    icon: '',
  }
  
  const projects = props.projects.map((item, index) => {
    return {
      titles: [`${index+1}、${item.title}`, item.company],
      details: item.details,
    };
  });

  return (
    <ModuleItem {...titleInfo}>
      <List list={projects} type="project" />
    </ModuleItem>
  );
}

export default Project;
