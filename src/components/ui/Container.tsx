import type { LayoutProp } from '../../types';

const Container = ({
  children,
  variant = 'default',
  className = '',
}: LayoutProp) => {
  const baseStyles = 'container m-auto flex px-xl lg:px-11xl';

  const variantStyles = {
    default: 'py-5xl lg:py-8xl flex-col gap-3xl lg:gap-7xl',
    header: 'py-3xl justify-between items-center lg:py-0 lg:h-21',
    footer: 'py-3xl lg:py-5xl',
  };

  const containerClasses = `
  ${baseStyles}
  ${variantStyles[variant]}
  ${className}
  `.trim();

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
