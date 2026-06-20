import type { FunctionComponent } from 'react';

interface Social {
  name: string;
  url: string;
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  cta: string;
  socials: Social[];
}

export interface SocialMediaProps {
  className?: string;
}
