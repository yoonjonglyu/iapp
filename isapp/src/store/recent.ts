import { atomWithStorage } from 'jotai/utils';

import apps from '../apps';

export interface RecentAppProps {
  name: string;
  icon: string;
  uri: string;
}

export const RECENTAPP_ID = 'recentApps';

export const recentAppsAtom = atomWithStorage<RecentAppProps[]>(RECENTAPP_ID, [
  apps[0],
]);
