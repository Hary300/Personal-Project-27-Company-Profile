import Container from '../ui/Container';
import Button from '../ui/buttons/Button';
import HamburgerButton from '../ui/buttons/HamburgerButton';
import NavLinks from './NavLinks';
import Logo from '../ui/Logo';
import DarkModeButton from '../ui/buttons/DarkModeButton';
import { useMobileMenu } from '@/contexts/mobile-menu/useMobileMenu';
import type { NavbarProps } from '@/types';

const Navbar = ({ scrolled }: NavbarProps) => {
  const { isOpen } = useMobileMenu();
  return (
    <header
      className={`sticky top-0 z-50 ${isOpen ? 'bg-white dark:bg-black' : scrolled ? 'backdrop-blur-2xl' : 'bg-transparent'}`}
    >
      <nav>
        <Container variant='header'>
          <Logo />

          <div className='hidden lg:block'>
            <NavLinks variant='desktop' />
          </div>

          <div className='flex justify-between items-center gap-2 lg:w-fit'>
            <DarkModeButton />
            <div className='hidden lg:block w-full min-w-49.25'>
              <a href='#contact'>
                <Button />
              </a>
            </div>

            <div className='flex items-center lg:hidden'>
              <HamburgerButton />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
