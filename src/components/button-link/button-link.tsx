import React from 'react';
import classnames from 'classnames';
import styles from './button-link.module.css';

type ButtonLinkProps = {
  inline?: boolean;
} & React.ComponentProps<'button'>;

const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  inline,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classnames(styles.buttonLink, className, {
        [styles.inline]: inline,
      })}
    />
  );
};

export default ButtonLink;
