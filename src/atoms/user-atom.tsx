import { atom } from 'recoil';

type AuthState = {
  status: 'WAITING' | 'USER' | 'NON-USER';
  user?: {
    fullName: string;
    metaData: {
      creationTime: string;
    };
  };
};

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    status: 'WAITING',
  },
});
