import type { TextAreaProps } from '@/types';

const TextArea = ({ title, register, errorMessage }: TextAreaProps) => {
  const label =
    title.split('')[0].toUpperCase() + title.split('').slice(1).join('');

  return (
    <div className='flex flex-col gap-sm'>
      <div className='flex justify-between'>
        <label htmlFor='message' className='font-bold text-sm'>
          {label}
        </label>
        {errorMessage && (
          <p className='text-red-500 text-right'>{errorMessage}</p>
        )}
      </div>
      <textarea
        placeholder='Enter your message'
        id='message'
        rows={5}
        className={`font-medium text-sm border border-[#DFDFDF] dark:border-neutral-800 px-xl py-md rounded-xl ${errorMessage ? 'border-primary-200 dark:border-red-500/20' : 'border-[#DFDFDF]'} focus:outline-0 bg-transparent`}
        {...register('message')}
      ></textarea>
    </div>
  );
};

export default TextArea;
