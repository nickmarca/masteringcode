import React from 'react';
import AlreadyLoggedIn from '../../components/already-logged-in/already-logged-in';
import AuthCard from '../../components/auth-card/auth-card';
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import styles from './sign-up-page.module.css';

const SignUpPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <AuthCard>
        <AlreadyLoggedIn>
          <h1>{'Sign up for an account'}</h1>
          <SignUpForm />
        </AlreadyLoggedIn>
      </AuthCard>
    </div>
  );
};

export default SignUpPage;
