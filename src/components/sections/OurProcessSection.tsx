import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ourProcess } from '@/data/ourProcess';

const OurProcessSection = () => {
  const headerText = getSectionHeader('ourProcess');
  return (
    <section id='our-process'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />

        <Accordion
          type='multiple'
          defaultValue={['notifications']}
          className='relative flex flex-col gap-xl'
        >
          <div className='absolute -z-10 left-5 lg:left-1/2 -translate-x-1/2 h-full w-px bg-[#DFDFDF] dark:bg-neutral-800' />
          {ourProcess.map((item, index) => {
            const isEven = index % 2 === 0;
            const isFirst = index === 0;
            const isLast = index === ourProcess.length - 1;
            return (
              <div
                key={item.id}
                className='relative flex lg:grid lg:grid-cols-2 gap-lg lg:gap-9xl'
              >
                <div className='relative self-stretch flex items-center lg:absolute lg:inset-y-0 lg:left-1/2 lg:-translate-x-1/2'>
                  <p className='font-bold flex justify-center items-center text-white text-sm lg:text-md size-5xl aspect-square lg:size-6xl rounded-full bg-primary-200'>
                    {index + 1}
                  </p>
                  {(isFirst || isLast) && (
                    <div
                      className={`absolute h-1/2 w-full -z-10 bg-white dark:bg-black ${isFirst ? 'top-0' : 'bottom-0'}`}
                    />
                  )}
                </div>

                <AccordionItem
                  value={item.title}
                  className={`w-full border p-xl rounded-2xl bg-neutral-50 border-[#DEDCDC] dark:bg-neutral-950 dark:border-neutral-900 transition-transform duration-300 hover:scale-102 cursor-pointer ${isEven ? 'lg:col-start-1 lg:mr-auto' : 'lg:col-start-2 lg:ml-auto'}`}
                >
                  <AccordionTrigger className='font-bold text-md lg:text-xl cursor-pointer'>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className='font-medium text-sm text-neutral-500 lg:text-md'>
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
};

export default OurProcessSection;
