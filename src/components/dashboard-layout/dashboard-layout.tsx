import React from 'react';
import { Outlet } from 'react-router-dom';
import { requireAuth } from '../../hocs/require-auth/require-auth';
import DashboardNavHeader from '../dashboard-nav-header/dashboard-nav-header';
import DashboardSideBar from '../dashboard-side-bar/dashboard-side-bar';
import styles from './dashboard-layout.module.css';

const DashboardLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <DashboardSideBar />
      <main>
        <DashboardNavHeader />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default requireAuth(DashboardLayout);
