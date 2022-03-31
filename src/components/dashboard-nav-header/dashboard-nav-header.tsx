import React from 'react';
import { signOut } from '../../services/auth/sign-out';
import ButtonLink from '../button-link/button-link';
import styles from './dashboard-nav-header.module.css';

const DashboardNavHeader: React.FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div className={styles.rightSide}>
          <ButtonLink className={styles.signOutButton} onClick={signOut}>
            {'Sign out'}
          </ButtonLink>
          <div className={styles.userProfilePicture}></div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavHeader;
