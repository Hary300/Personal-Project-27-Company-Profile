export interface ClientsLogo {
  id: number;
  name: string;
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
