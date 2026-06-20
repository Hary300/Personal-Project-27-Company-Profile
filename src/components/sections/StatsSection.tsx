import Container from '../ui/Container';
import { getSectionHeader } from '@/helpers/getSectionHeader';
import SectionHeader from '../ui/SectionHeader';
import { stats } from '@/data/stats';

const StatsSection = () => {
  const headerText = getSectionHeader('stats');

  return (
    <section id='about' className='pb-5xl'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />

        <div className='grid grid-cols-2 w-fit m-auto lg:grid-cols-4 gap-xl lg:gap-2xl'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='flex flex-col justify-center items-center gap-sm p-xl size-[clamp(172.5px,19vw,275px)] rounded-full bg-neutral-50 dark:bg-neutral-950 border border-[#DEDCDC] dark:border-neutral-900 group hover:scale-105 transition-all duration-300 cursor-pointer'
            >
              <p className='font-bold text-display-lg text-primary-200 lg:text-display-2xl group-hover:animate-bounce group-active:animate-spin'>
                {stat.value}
              </p>
              <p className='max-w-[140.5px] lg:max-w-60.75 font-semibold text-sm text-center lg:text-xl'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
