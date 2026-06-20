import { useState } from 'react';
import { DarkContext } from './DarkContext';
import type { DarkProviderProps } from '@/types/theme';

const DarkProvider = ({ children }: DarkProviderProps) => {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <DarkContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkProvider;
