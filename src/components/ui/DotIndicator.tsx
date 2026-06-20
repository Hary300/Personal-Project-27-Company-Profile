import type { EmblaCarouselType } from 'embla-carousel';

interface DotIndicatorProps {
  count: number;
  api: EmblaCarouselType | undefined;
  current: number;
}

const DotIndicator = ({ count, api, current }: DotIndicatorProps) => {
  return (
    <div className='flex justify-center gap-2 mt-8'>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={`h-2 w-2 rounded-full transition-all ${
            current === index ? 'bg-primary-200 w-6' : 'bg-neutral-300'
          }`}
        />
      ))}
    </div>
  );
};

export default DotIndicator;
