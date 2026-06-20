import type { ReactNode } from 'react';

export interface NavbarProps {
  scrolled: boolean;
}

export interface NavItem {
  title: string;
  href: string;
}

export interface NavLinksProps {
  variant?: 'mobile' | 'desktop';
  className?: string;
}

export interface MobileMenuContextType {
  isOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

export interface MobileMenuProviderProps {
  children: ReactNode;
}
