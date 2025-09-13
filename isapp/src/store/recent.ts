import { atomWithStorage } from 'jotai/utils';

export interface RecentAppProps {
  id: string;
  name: string;
  icon: string;
  uri: string;
  lastOpened: number;
}

export const recentAppsAtom = atomWithStorage<RecentAppProps[]>('recentApps', []);