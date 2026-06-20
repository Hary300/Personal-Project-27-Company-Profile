import { useContext } from 'react';
import { DarkContext } from './DarkContext';

export const useDark = () => {
  const context = useContext(DarkContext);

  // using this code causes error after ctrl + s in this file
  // if (!context) {
  //   throw new Error('useDark must be used within DarkProvider');
  // }

  return context || { isDark: false, toggleDark: () => {} };
};
