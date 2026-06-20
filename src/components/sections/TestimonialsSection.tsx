import { getSectionHeader } from '@/helpers/getSectionHeader';
import SectionHeader from '../ui/SectionHeader';

const TestimonialsSection = () => {
  const headerText = getSectionHeader('testimonial');

  return (
    <section
      id='testimonials'
      className='max-w-360 m-auto relative py-5xl lg:py-8xl flex-col gap-3xl lg:gap-7xl'
    >
      <SectionHeader title={headerText.title} subtitle={headerText.subtitle} />
    </section>
  );
};

export default TestimonialsSection;
