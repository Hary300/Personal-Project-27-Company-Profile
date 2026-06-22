import type { CheckboxProps } from '@/types';
import { Check } from 'lucide-react';

const Checkbox = ({ items, register, errorMessage }: CheckboxProps) => {
  return (
    <div className='flex flex-col gap-3.5 '>
      <div className='flex justify-between'>
        <label className='font-bold text-sm'>Services</label>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3.5 lg:gap-xl '>
        {items.map((item) => (
          <div key={`service-${item.id}`}>
            <label
              htmlFor={item.content}
              className='flex gap-lg cursor-pointer'
            >
              <input
                type='checkbox'
                id={item.content}
                value={item.content}
                className='peer hidden'
                {...register('service')}
              />
              <div className='flex justify-center items-center size-5 border border-[#DFDFDF] dark:border-neutral-800 rounded-sm peer-checked:bg-primary-200 peer-checked:border-primary-200 peer-checked:[&>svg]:opacity-100'>
                <Check className='text-neutral-25 size-4 opacity-0' />
              </div>
              <span className='font-medium text-sm lg:text-md'>
                {item.content}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
