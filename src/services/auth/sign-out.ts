import { signOut as signOutFirebase } from 'firebase/auth';
import { auth } from '../../firebase';

export const signOut = async () => {
  try {
    await signOutFirebase(auth);
  } catch (error) {
    console.log(error);
  }
};
