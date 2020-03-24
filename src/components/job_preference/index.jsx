import React from 'react';
import Title from '../title';

function JobPreference(props) {
  let title = '求职意向';
  let icon = '';

  return (
    <div>
      <Title title={title} icon={icon} />
    </div>
  );
}

export default JobPreference;
