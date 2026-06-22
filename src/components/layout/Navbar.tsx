import { useMobileMenu } from '@/contexts/mobile-menu/useMobileMenu';
import type { NavbarProps } from '@/types';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import NavLinks from '@/components/layout/NavLinks';
import DarkModeButton from '@/components/ui/buttons/DarkModeButton';
import Button from '@/components/ui/buttons/Button';
import HamburgerButton from '@/components/ui/buttons/HamburgerButton';

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
