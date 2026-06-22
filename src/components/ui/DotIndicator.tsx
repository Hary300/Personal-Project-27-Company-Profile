import type { DotIndicatorProps } from '@/types';

const DotIndicator = ({ count, api, current }: DotIndicatorProps) => {
  return (
    <div className='flex justify-center gap-2'>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
            current === index ? 'bg-primary-200 w-6' : 'bg-neutral-300'
          }`}
        />
      ))}
    </div>
  );
};

export default DotIndicator;
