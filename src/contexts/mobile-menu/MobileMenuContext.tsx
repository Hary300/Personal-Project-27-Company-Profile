import type { MobileMenuContextType } from '@/types';
import { createContext } from 'react';

export const MobileMenuContext = createContext<MobileMenuContextType | null>(
  null
);
