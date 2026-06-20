import type { ReactNode } from 'react';

export interface DarkContextType {
  isDark: boolean;
  toggleDark: () => void;
}

export interface DarkProviderProps {
  children: ReactNode;
}
