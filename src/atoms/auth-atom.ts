import { atom } from 'recoil';

export const userState = atom<{ fullName: string } | null | false>({
  key: 'userState',
  default: null,
});
