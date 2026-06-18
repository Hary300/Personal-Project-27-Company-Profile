import type { NavbarProp } from '../../types';
import Container from './Container';
import Button from '../ui/Button';
import HamburgerButton from '../ui/HamburgerButton';
import NavLinks from './NavLinks';
import Logo from './Logo';
import DarkModeButton from '../ui/DarkModeButton';

const Navbar = ({ scrolled }: NavbarProp) => {
  return (
    <header
      className={`sticky top-0 ${scrolled ? 'backdrop-blur-2xl' : 'bg-transparent'}`}
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
                <Button>Let's Talk</Button>
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
