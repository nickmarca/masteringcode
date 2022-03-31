import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../../atoms/user-atom';
import { signOut } from '../../services/auth/sign-out';
import ButtonLink from '../button-link/button-link';
import styles from './already-logged-in.module.css';

const isLessThanFifteenMinAgo = (date: string) => {
  const fifteenMins = 15 * 60 * 1000;
  const fifteenMinsAgo = Date.now() - fifteenMins;
  const time = new Date(date).getTime();

  return time > fifteenMinsAgo;
};

const AlreadyLoggedIn: React.FC = ({ children }) => {
  const auth = useRecoilValue(authState);

  if (auth.status === 'WAITING') {
    return (
      <div className={styles.container}>
        <p>{'Loading...'}</p>
      </div>
    );
  }

  if (auth.status === 'NON-USER') {
    return (<>{children}</>) as JSX.Element;
  }

  if (auth.user && isLessThanFifteenMinAgo(auth.user?.metaData.creationTime)) {
    return (
      <div className={styles.container}>
        <h1>{'Welcome!'}</h1>
        <p>{'Thanks for registering with us'}</p>
        <p>
          <Link to="/">{'Click here to redirect to Home Page'}</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>{'Already logged in'}</h1>
      <p>{'It seems like you are already logged in'}</p>
      <p>
        {'Would you like to sign out? '}
        <ButtonLink inline onClick={signOut}>
          {'Sign out'}
        </ButtonLink>
      </p>
    </div>
  );
};

export default AlreadyLoggedIn;
