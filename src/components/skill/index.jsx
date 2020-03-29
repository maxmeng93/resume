import React from 'react';
import ModuleItem from '../module_item';
import ListItem from '../list_item';

function Skill(props) {
  const titleInfo = {
    title: '专业技能',
    icon: <i className="iconfont" style={{fontSize: 24}}>&#xe69a;</i>,
  }

  return (
    <ModuleItem {...titleInfo}>
      <ListItem details={props.skills} />
    </ModuleItem>
  );
}

export default Skill;
