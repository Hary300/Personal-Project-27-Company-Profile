import { useMobileMenu } from '../../contexts/mobile-menu/useMobileMenu';
import Button from '../ui/buttons/Button';
import NavLinks from './NavLinks';

const OffcanvasMenu = () => {
  const { isOpen, closeMenu } = useMobileMenu();
  return (
    <div
      className={`z-30 flex flex-col fixed w-full min-h-screen transition-transform bg-white dark:bg-black px-4 gap-3 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <NavLinks variant='mobile' />
      <a href='#contact' onClick={closeMenu}>
        <Button />
      </a>
    </div>
  );
};

export default OffcanvasMenu;
