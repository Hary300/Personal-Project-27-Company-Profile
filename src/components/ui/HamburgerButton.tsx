import { useMobileMenu } from '../../contexts/mobile-menu/useMobileMenu';

const HamburgerButton = () => {
  const { isOpen, toggleMenu } = useMobileMenu();

  const buttonClasses =
    'h-1 w-6 bg-neutral-950 rounded-full transition-all duration-200 dark:bg-white';

  return (
    <button className='flex flex-col gap-1 cursor-pointer' onClick={toggleMenu}>
      <span
        className={`${buttonClasses} ${isOpen && 'rotate-45 translate-y-2'}`}
      ></span>
      <span className={`${buttonClasses} ${isOpen && 'opacity-0'}`}></span>
      <span
        className={`${buttonClasses} ${isOpen && '-rotate-45 -translate-y-2'}`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
