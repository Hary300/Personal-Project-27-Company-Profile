import { useState } from 'react';
import { DarkContext } from './DarkContext';

interface DarkProviderProp {
  children: React.ReactNode;
}

const DarkProvider = ({ children }: DarkProviderProp) => {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((prev) => !prev);
  return (
    <DarkContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkProvider;
