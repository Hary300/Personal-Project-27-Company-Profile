import type { ComponentProps, ReactNode } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { EmblaCarouselType } from 'embla-carousel';
import type { Testimony } from './data';

export interface ButtonProps {
  children?: ReactNode;
  variant?: 'default' | 'black';
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

export interface AccordionTriggerProps extends ComponentProps<
  typeof AccordionPrimitive.Trigger
> {
  iconVariant?: 'plus-minus' | 'chevron';
}

export interface DotIndicatorProps {
  count: number;
  api: EmblaCarouselType | undefined;
  current: number;
}

export interface TestimonialsCardProps {
  item: Testimony;
}
