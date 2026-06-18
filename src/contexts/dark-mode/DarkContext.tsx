import { createContext } from 'react';

interface DartContextType {
  isDark: boolean;
  toggleDark: () => void;
}

export const DarkContext = createContext<DartContextType | null>(null);
