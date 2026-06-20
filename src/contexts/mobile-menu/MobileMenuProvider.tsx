import { useState } from 'react';
import { MobileMenuContext } from './MobileMenuContext';
import type { MobileMenuProviderProps } from '@/types';

const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuProvider;
