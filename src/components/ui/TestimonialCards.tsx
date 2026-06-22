import type { TestimonialsCardProps } from '@/types';
import star from '@/assets/icons/star.svg';
import quoteMark from '@/assets/images/quote.svg';

const TestimonialCards = ({ item }: TestimonialsCardProps) => {
  const rating = item.rating;
  return (
    <div className='p-px bg-linear-to-br from-primary-200 to-[#DEDCDC] dark:to-neutral-900 from-5% to-30% rounded-2xl '>
      <div className='relative flex flex-col justify-center items-center pt-xl px-xl pb-6xl bg-neutral-50 dark:bg-neutral-950 rounded-2xl lg:pt-3xl lg:px-3xl '>
        <div className='flex gap-xs mb-lg'>
          {Array.from({ length: rating }).map((_, index) => (
            <img key={index} src={star} loading='lazy'></img>
          ))}
        </div>
        <p className='text-center mb-3xl font-semibold text-sm lg:text-lg'>
          {item.quote}
        </p>
        <p className='font-semibold text-sm lg:text-lg'>{item.author.name}</p>
        <p className='text-primary-200 font-semibold text-sm lg:text-lg'>
          {item.author.role}
        </p>
        <div className='absolute bottom-0 translate-y-1/2'>
          <img
            src={item.author.avatar}
            alt={`${item.author.name} avatar`}
            loading='lazy'
          />
        </div>
        <div className='absolute top-0 -translate-y-1/2 left-[25.67px]'>
          <img src={quoteMark} alt='quote mark' loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
