import type { InputProps } from '@/types';

const Input = ({
  title,
  type = 'text',
  register,
  errorMessage,
}: InputProps) => {
  const label =
    title.split('')[0].toUpperCase() + title.split('').slice(1).join('');

  return (
    <div className='flex flex-col gap-sm'>
      <div className='flex justify-between'>
        <label htmlFor={title} className='font-bold text-sm'>
          {label}
        </label>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      </div>
      <input
        type={type}
        placeholder={`Enter your ${title}`}
        id={title}
        className={`font-medium text-sm border dark:border-neutral-800 px-xl py-md rounded-xl ${errorMessage ? 'border-primary-200 dark:border-red-500/20' : 'border-[#DFDFDF]'} focus:outline-0 focus:bg-transparent`}
        {...register(title)}
      />
    </div>
  );
};

export default Input;
