import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { service } from '@/data/service';

const ServicesSection = () => {
  const headerText = getSectionHeader('service');
  return (
    <section id='service'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5xl'>
          {service.map((item) => {
            return (
              <div
                key={item.id}
                className='relative flex flex-col gap-2xl rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-[#DEDCDC] dark:border-neutral-900 px-2xl pt-6xl pb-2xl lg:pt-7xl transition-transform duration-300 hover:scale-105 cursor-pointer'
              >
                <p className='font-bold text-md lg:text-xl'>{item.title}</p>
                <p className='font-medium text-neutral-500 text-sm lg:text-md'>
                  {item.description}
                </p>
                <div className='absolute size-7xl lg:size-8xl left-2xl -top-2xl'>
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    loading='lazy'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
