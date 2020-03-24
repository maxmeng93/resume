import React from 'react';
import Title from '../title';

function ModuleItem(props) {
  return (
    <div>
      <Title {...props.titleInfo}></Title>
      {props.children}
    </div>
  );
}

export default ModuleItem;
