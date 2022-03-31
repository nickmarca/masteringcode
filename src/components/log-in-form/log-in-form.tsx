import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AtSVG from '../../fragments/svgs/at-svg';
import LockSVG from '../../fragments/svgs/lock-svg';
import { useLogin, LogInFormState } from '../../hooks/useLogin';
import { useNavigateAfterLogIn } from '../../hooks/useNavigateAfterLogIn';
import Button from '../button/button';
import FormInput from '../form-input/form-input';
import styles from './log-in-form.module.css';

const LogInForm: React.FC = () => {
  const [isLoading, login] = useLogin();
  const { register, handleSubmit } = useForm<LogInFormState>();
  const navigateAfterLogIn = useNavigateAfterLogIn();

  const onSubmit = async (data: LogInFormState) => {
    const { success } = await login(data);

    if (success) {
      navigateAfterLogIn();
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
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
      <Button
        variant="primary"
        className={styles.logInButton}
        disabled={isLoading}
      >
        {'LOG IN'}
      </Button>
      <p className={styles.subscribeMessage}>
        {"Doesn't have an account yet? "}
        <Link to="/sign-up">{'Sign up'}</Link>
      </p>
    </form>
  );
};

export default LogInForm;
