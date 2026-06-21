export type SectionKey =
  | 'clients'
  | 'stats'
  | 'ourProcess'
  | 'service'
  | 'industry'
  | 'project'
  | 'testimonial'
  | 'faq'
  | 'contact';

export type SectionHeader = {
  title: string;
  subtitle: string;
};

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  variant?: 'default' | 'faq';
}
