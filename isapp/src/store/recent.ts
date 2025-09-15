import { atomWithStorage } from 'jotai/utils';

export interface RecentAppProps {
  name: string;
  icon: string;
  uri: string;
}

export const RECENTAPP_ID = 'recentApps';

export const recentAppsAtom = atomWithStorage<RecentAppProps[]>(RECENTAPP_ID, [
  {
    name: 'Memo',
    icon: 'https://yoonjonglyu.github.io/memo/assets/apple-touch-icon-60x60.png',
    uri: 'https://yoonjonglyu.github.io/memo/',
  },
]);
