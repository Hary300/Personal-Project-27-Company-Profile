import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';
import { useDark } from '../../contexts/dark-mode/useDark';

const DarkModeButton = () => {
  const { isDark, toggleDark } = useDark();

  useEffect(() => {
    const rootClassName = document.documentElement.classList;
    if (isDark) {
      rootClassName.add('dark');
    } else {
      rootClassName.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      className='p-0.5 cursor-pointer rounded-lg border-2 border-neutral-950 dark:border-white'
      onClick={toggleDark}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} fill='black' />}
    </button>
  );
};

export default DarkModeButton;
