import { useContext } from 'react';
import { DarkContext } from './DarkContext';

export const useDark = () => {
  const context = useContext(DarkContext);

  if (!context) {
    throw new Error('useDark must be used within DarkProvider');
  }

  return context;
};
