import { useAtom } from 'jotai';
import { setLocalStorage } from 'isa-util';

import { recentAppsAtom, RECENTAPP_ID } from '../store/recent';
import type { RecentAppProps } from '../store/recent';

const useRecent = () => {
  const [recentApps, setRecentApps] = useAtom(recentAppsAtom);

  const addRecentApp = (app: RecentAppProps) => {
    setRecentApps((prev) => {
      const updated = [
        app,
        ...prev.filter((item) => item.name !== app.name),
      ].slice(0, 2); // Keep only the latest 2 entries
      setLocalStorage(RECENTAPP_ID, updated);
      return updated;
    });
  };

  return { recentApps, addRecentApp };
};
export default useRecent;
