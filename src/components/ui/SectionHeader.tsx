import type { SectionHeaderProps } from '@/types';

const SectionHeader = ({
  title,
  subtitle = '',
  align = 'center',
  variant = 'default',
}: SectionHeaderProps) => {
  const baseStyle = 'flex flex-col gap-2.75';

  const alignStyle = {
    center: 'justify-center text-center',
    left: 'text-left',
  };

  const variantStyle = {
    default: '',
    faq: 'lg:flex-row lg:justify-between lg:items-end',
  };

  const sectionHeaderClasses = `${baseStyle} ${alignStyle[align]} ${variantStyle[variant]}`;
  return (
    <div className={sectionHeaderClasses}>
      <p
        className={`font-bold text-display-sm lg:text-display-xl ${variant === 'faq' ? 'max-w-85' : ''}`}
      >
        {title}
      </p>
      <p
        className={`font-medium text-sm text-neutral-500 lg:text-lg ${variant === 'faq' ? 'max-w-61.25' : ''}`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
