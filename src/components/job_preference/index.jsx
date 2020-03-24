import React from 'react';
import ModuleItem from '../module_item';

function JobPreference(props) {
  let titleInfo = {
    title: '求职意向',
    icon: '',
  }

  return (
    <div>
      <ModuleItem titleInfo={titleInfo} />
    </div>
  );
}

export default JobPreference;
