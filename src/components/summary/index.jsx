import React from 'react';
import ModuleItem from '../module_item';

function Summary(props) {
  let titleInfo = {
    title: '自我评价',
    icon: '',
  }

  return (
    <div>
      <ModuleItem titleInfo={titleInfo} />
    </div>
  );
}

export default Summary;
