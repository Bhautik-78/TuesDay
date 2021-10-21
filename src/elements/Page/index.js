import React from 'react';

import classNames from 'classnames';

const Page = ({ children, className, ...props }) => {
  return (
    <div className={classNames('page', className)} {...props}>
      {children}
    </div>
  )
};

export default Page;
