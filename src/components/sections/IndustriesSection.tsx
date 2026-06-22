import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { industry } from '@/data/industry';

const IndustriesSection = () => {
  const headerText = getSectionHeader('industry');

  return (
    <section>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
          align='left'
        />
        <Tabs
          defaultValue='Fintech'
          orientation='vertical'
          className='flex flex-col lg:flex-row gap-3xl lg:justify-between'
        >
          <TabsList variant='line' className='gap-lg lg:gap-3xl'>
            {industry.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.title}
                className='border-l-4 border-l-neutral-600 font-bold cursor-pointer text-md lg:text-xl'
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {industry.map((item) => (
            <TabsContent
              key={item.id}
              value={item.title}
              className='lg:max-w-210 flex flex-col gap-2xl'
            >
              <p className='font-medium text-sm lg:text-lg leading-7 lg:leading-8'>
                {item.description}
              </p>
              <div className='h-50 lg:h-87.75 overflow-hidden rounded-lg lg:rounded-3xl '>
                <img
                  src={item.image}
                  alt={`${item.title} image`}
                  loading='lazy'
                  className='w-full h-full object-center object-cover'
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default IndustriesSection;
