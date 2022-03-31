import React from 'react';
import styles from './no-mobile-support.module.css';

const NoMobileSupport: React.FC = ({ children }) => {
  return (
    <div>
      <div className={styles.xs}>
        <p>{'This website can be best visualised on larger screems'}</p>
      </div>
      <div className={styles.lg}>{children}</div>
    </div>
  );
};

export default NoMobileSupport;
