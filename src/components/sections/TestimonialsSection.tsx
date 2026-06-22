import { getSectionHeader } from '@/helpers/getSectionHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimony } from '@/data/testimony';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

import SideFadeOverlay from '@/components/ui/SideFadeOverlay';
import { useDark } from '@/contexts/dark-mode/useDark';
import { useEffect, useState } from 'react';
import DotIndicator from '@/components/ui/DotIndicator';
import TestimonialCards from '@/components/ui/TestimonialCards';

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { isDark } = useDark();

  const headerText = getSectionHeader('testimonial');
  const count = api?.scrollSnapList().length ?? 0;

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCurrent(api.selectedScrollSnap());
    };

    update();

    api.on('select', update);

    return () => {
      api.off('select', update);
    };
  }, [api]);

  return (
    <section
      id='testimonials'
      className='px-xl lg:px-0 max-w-360 m-auto relative py-5xl lg:py-8xl flex flex-col gap-6xl lg:gap-8xl overflow-hidden'
    >
      <SectionHeader title={headerText.title} subtitle={headerText.subtitle} />
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimony.map((item) => {
            return (
              <CarouselItem key={item.id} className='basis-full lg:basis-148.5'>
                <TestimonialCards item={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <DotIndicator count={count} api={api} current={current} />

      <div className='hidden lg:contents'>
        <SideFadeOverlay variant={isDark ? 'dark' : 'light'} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
