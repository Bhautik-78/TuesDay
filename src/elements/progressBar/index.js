import React from 'react';
import classNames from 'classnames';

const ProgressBar = ({ percent = 0, className }) => {
  return (
    <div className={classNames('progress-bar', className)}>
      <div className="progress" style={{ width: `${percent}%` }} />
    </div>
  )
};

export default ProgressBar;
