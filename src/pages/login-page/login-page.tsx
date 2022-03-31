import React from 'react';
import AlreadyLoggedIn from '../../components/already-logged-in/already-logged-in';
import AuthCard from '../../components/auth-card/auth-card';
import LogInForm from '../../components/log-in-form/log-in-form';
import styles from './login-page.module.css';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <AuthCard>
        <AlreadyLoggedIn>
          <h1>{'Log in'}</h1>
          <LogInForm />
        </AlreadyLoggedIn>
      </AuthCard>
    </div>
  );
};

export default LoginPage;
