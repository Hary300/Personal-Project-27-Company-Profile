import Container from '../ui/Container';
import { getSectionHeader } from '@/helpers/getSectionHeader';
import SectionHeader from '../ui/SectionHeader';

const StatsSection = () => {
  const headerText = getSectionHeader('stats');

  return (
    <section id='about' className='pb-5xl'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />
      </Container>
    </section>
  );
};

export default StatsSection;
