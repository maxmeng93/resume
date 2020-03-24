import React from 'react';
import ModuleItem from '../module_item';

function Edu(props) {
  let titleInfo = {
    title: '教育背景',
    icon: '',
  }

  return (
    <div>
      <ModuleItem titleInfo={titleInfo} />
    </div>
  );
}

export default Edu;
