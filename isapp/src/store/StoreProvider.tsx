import React from 'react';
import { Provider } from 'jotai';

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider>{children}</Provider>;
};

export default StoreProvider;
