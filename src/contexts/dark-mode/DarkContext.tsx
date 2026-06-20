import type { DarkContextType } from '@/types';
import { createContext } from 'react';

export const DarkContext = createContext<DarkContextType | null>(null);
