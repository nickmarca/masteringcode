import React from 'react';
import classnames from 'classnames';
import styles from './button.module.css';

type ButtonProps = {
  variant: 'primary';
} & React.ComponentProps<'button'>;

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={classnames(styles.common, className, {
        [styles[variant]]: variant,
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
