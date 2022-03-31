import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { authState } from '../atoms/user-atom';
import { auth } from '../firebase';

const AuthAgent: React.FC = () => {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log('AUTH AGENT: ', user);
      if (user) {
        setAuthState({
          status: 'USER',
          user: {
            fullName: user.displayName ?? '',
            metaData: { creationTime: user.metadata.creationTime ?? '' },
          },
        });
      } else {
        setAuthState({
          status: 'NON-USER',
        });
      }
    });

    return () => unsubscribe();
  }, [setAuthState]);

  return <></>;
};

export default AuthAgent;
