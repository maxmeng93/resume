import React from 'react';
import ModuleItem from '../module_item';

function Project(props) {
  let titleInfo = {
    title: '项目经验',
    icon: '',
  }

  return (
    <div>
      <ModuleItem titleInfo={titleInfo} />
    </div>
  );
}

export default Project;
