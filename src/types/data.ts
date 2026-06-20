import type { FunctionComponent } from 'react';

export interface ClientsLogo {
  id: number;
  name: string;
  logo: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface Stats {
  id: number;
  value: string;
  label: string;
}

export interface OurProcess {
  id: number;
  title: string;
  content: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
}

export interface Testimony {
  id: number;
  rating: number;
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}
