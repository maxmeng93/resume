import React from 'react';
import ModuleItem from '../module_item';

function Skill(props) {
  const titleInfo = {
    title: '技能特长',
    icon: '',
  }

  return (
    <ModuleItem {...titleInfo}>
      <p>{props.summary}</p>
    </ModuleItem>
  );
}

export default Skill;
