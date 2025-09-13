import { useAtom } from 'jotai';

import { recentAppsAtom } from '../store/recent';
import type { RecentAppProps } from '../store/recent';

const useRecent = () => {
  const [recentApps, setRecentApps] = useAtom(recentAppsAtom);

  const addRecentApp = (app: RecentAppProps) => {
    setRecentApps((prev) => {
      const updated = [app, ...prev.filter((item) => item.id !== app.id)];
      return updated.slice(0, 2); // Keep only the latest 2 entries
    });
  };

  return { recentApps, addRecentApp };
};
export default useRecent;
