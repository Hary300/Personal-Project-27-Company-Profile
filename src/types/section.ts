export interface SectionHeader {
  section: string;
  title: string;
  subtitle: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}
