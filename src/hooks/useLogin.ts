import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';

export type LogInFormState = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const [isLoading, setLoading] = useState(false);

  const login = async ({ email, password }: LogInFormState) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      return { message: 'Invalid email/password combination' };
    } finally {
      setLoading(false);
    }
  };

  return [isLoading, login] as [boolean, typeof login];
};
