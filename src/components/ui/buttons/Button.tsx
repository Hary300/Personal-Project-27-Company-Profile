import type { ButtonProps } from '@/types';

const Button = ({
  children = "Let's Talk",
  variant = 'default',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  // Base styles yang selalu applied
  const baseStyles =
    'w-full font-bold p-2 font-medium rounded-full transition-all duration-200 cursor-pointer  text-neutral-25 text-sm md:text-base';

  // Disabled styles
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const variantStyle = {
    default: 'bg-primary-200 hover:bg-primary-300',
    black: 'bg-black hover:bg-black/80 active:ring-black',
  };

  // Combine all styles
  const buttonClasses = `
    ${baseStyles}
    ${disabled ? disabledStyles : ''}
    ${variantStyle[variant]}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;

/**
 * TODO untuk kamu:
 * 1. Lihat button styles di Figma design
 * 2. Update colors sesuai design system (primary color, etc)
 * 3. Adjust padding, border-radius, font-size
 * 4. Add more variants jika diperlukan (e.g., 'ghost', 'link')
 * 5. Consider adding icon support:
 *    - leftIcon prop
 *    - rightIcon prop
 * 6. Add loading state jika diperlukan
 * 7. Test semua variants dan sizes
 */
