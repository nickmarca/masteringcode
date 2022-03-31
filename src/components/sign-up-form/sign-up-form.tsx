import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AtSVG from '../../fragments/svgs/at-svg';
import LockSVG from '../../fragments/svgs/lock-svg';
import UserSVG from '../../fragments/svgs/user-svg';
import { SignUpFormState, useSignUp } from '../../hooks/useSignUp';
import Button from '../button/button';
import FormInput from '../form-input/form-input';
import styles from './sign-up-form.module.css';

const SignUpForm: React.FC = () => {
  const { register, handleSubmit } = useForm<SignUpFormState>();
  const [isLoading, signUp] = useSignUp();

  return (
    <form className={styles.container} onSubmit={handleSubmit(signUp)}>
      <FormInput
        icon={<UserSVG />}
        placeholder="Full Name"
        className={styles.field}
        type="text"
        {...register('displayName', { required: true })}
      />
      <FormInput
        icon={<AtSVG />}
        placeholder="Email Address"
        className={styles.field}
        type="email"
        {...register('email', { required: true })}
      />
      <FormInput
        icon={<LockSVG />}
        placeholder="Password"
        className={styles.field}
        type="password"
        {...register('password', { required: true })}
      />
      <p className={styles.legalMessage}>
        {'I agree with '}
        <span>{'Terms'}</span>
        {' and '}
        <span>{'Privacy'}</span>
      </p>
      <Button
        variant="primary"
        className={styles.signUpButton}
        disabled={isLoading}
      >
        {'SIGN UP'}
      </Button>
      <p className={styles.alreadySubscribedMessage}>
        {'Already have an account? '}
        <Link to="/login">{'Log In'}</Link>
      </p>
    </form>
  );
};

export default SignUpForm;
