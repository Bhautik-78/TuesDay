import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  className,
  grayed = false,
  long = false,
  size = 'medium',
  ...props
}) => {
  return (
    <div className={classNames('button', { [`size-${size}`]: true, long, grayed }, className)} {...props}>
      {children}
    </div>
  );
};

export default Button;
