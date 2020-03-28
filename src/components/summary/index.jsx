import React from 'react';
import ModuleItem from '../module_item';

function Summary(props) {
  const titleInfo = {
    title: '自我评价',
    icon: '',
  }

  return (
    <ModuleItem {...titleInfo}>
      <p>{props.summary}</p>
    </ModuleItem>
  );
}

export default Summary;
