import React from 'react';
import ModuleItem from '../module_item';

function Work(props) {
  let titleInfo = {
    title: '工作经验',
    icon: '',
  }

  return (
    <div>
      <ModuleItem titleInfo={titleInfo} />
    </div>
  );
}

export default Work;
