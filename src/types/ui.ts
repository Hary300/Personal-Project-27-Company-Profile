import type { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface LayoutProps {
  children: ReactNode;
  variant?: 'default' | 'header' | 'footer';
  className?: string;
}

export interface LogoProps {
  className?: string;
}

export interface OverlayProps {
  variant: 'dark' | 'light';
}
