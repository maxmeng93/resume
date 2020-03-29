import React from 'react';
import ModuleItem from '../module_item';
import ListItem from '../list_item';

function Summary(props) {
  const titleInfo = {
    title: '自我评价',
    icon: <i className="iconfont" style={{fontSize: 18}}>&#xe623;</i>,
  }

  return (
    <ModuleItem {...titleInfo}>
      <ListItem details={props.summary} />
    </ModuleItem>
  );
}

export default Summary;
