import React from 'react';
import styles from './auth-card.module.css';

const AuthCard: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default AuthCard;
