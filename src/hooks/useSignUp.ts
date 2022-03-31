import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';

export type SignUpFormState = {
  email: string;
  password: string;
  displayName: string;
};

export const useSignUp = () => {
  const [isLoading, setLoading] = useState(false);

  const signUp = async ({ email, password, displayName }: SignUpFormState) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, { displayName });
      return { success: true };
    } catch (error) {
      return { message: 'Something went wrong' };
    } finally {
      setLoading(false);
    }
  };

  return [isLoading, signUp] as [boolean, typeof signUp];
};
