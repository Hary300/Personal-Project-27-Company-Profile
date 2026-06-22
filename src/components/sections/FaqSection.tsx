import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faq } from '@/data/faq';
import meeting from '@/assets/images/meeting-image.webp';
import Button from '@/components/ui/buttons/Button';

const FaqSection = () => {
  const headerText = getSectionHeader('faq');
  return (
    <section id='faq'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
          align='left'
          variant='faq'
        />
        <div className='h-px w-full bg-[#DFDFDF] dark:bg-neutral-800 -mb-5' />
        <div className='flex flex-col gap-3xl lg:flex-row lg:gap-18.25 lg:justify-between lg:items-start'>
          <Accordion type='single' collapsible defaultValue='item-1'>
            {faq.map((item) => (
              <AccordionItem key={item.id} value={item.value}>
                <AccordionTrigger
                  iconVariant='plus-minus'
                  className='font-bold text-lg lg:text-display-xs'
                >
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className='font-medium text-neutral-500 text-sm lg:text-xl'>
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className='flex flex-col gap-xl lg:gap-3xl rounded-xl lg:rounded-3xl bg-primary-300 p-2xl lg:px-3xl lg:max-w-82.25'>
            <p className='text-white font-bold text-display-sm lg:text-display-lg'>
              Let’s talk it through
            </p>
            <p className='text-white font-semibold text-sm lg:text-lg'>
              book a free consultation with our team.
            </p>
            <div className='rounded-2xl'>
              <img src={meeting} alt='people having a meeting' loading='lazy' />
            </div>
            <a href='#contact' className='mt-auto'>
              <Button variant='black'>Free Consultation</Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
