import React from 'react';
import ModuleItem from '../module_item';

function Summary(props) {
  const titleInfo = {
    title: '自我评价',
    icon: '',
  }

  return (
    <div>
      <ModuleItem titleInfo={titleInfo}>
        <p>{props.summary}</p>
      </ModuleItem>
    </div>
  );
}

export default Summary;
