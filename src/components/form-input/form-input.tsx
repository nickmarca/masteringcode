import React from 'react';
import classnames from 'classnames';
import styles from './form-input.module.css';

type FormInputProps = {
  icon: React.ReactNode;
  className?: string;
} & React.ComponentProps<'input'>;

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ icon, className, ...props }, ref) => {
    return (
      <div className={classnames(styles.container, className)}>
        <div className={styles.icon}>{icon}</div>
        <input ref={ref} {...props} className={styles.input} />
      </div>
    );
  },
);

export default FormInput;
