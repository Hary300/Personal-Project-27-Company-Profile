import type { NavLinksProps } from '@/types';
import { useMobileMenu } from '../../contexts/mobile-menu/useMobileMenu';
import { navItems } from '@/data/navigation';

const NavLinks = ({ variant = 'mobile', className = '' }: NavLinksProps) => {
  const { closeMenu } = useMobileMenu();

  const baseStyles = `flex gap-lg lg:gap-xxl xl:gap-11 text-sm lg:text-md font-medium`;

  const variantStyles = {
    mobile: 'flex-col',
    desktop: 'flex-row',
  };

  const navLinksClasses =
    `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  return (
    <ul className={navLinksClasses}>
      {navItems.map((item) => (
        <li key={item.title} onClick={closeMenu}>
          <a href={`${item.href}`}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
