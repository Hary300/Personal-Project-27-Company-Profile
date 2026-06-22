import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { project } from '@/data/project';

const ProjectsSection = () => {
  const headerText = getSectionHeader('project');

  return (
    <section id='projects'>
      <Container>
        <SectionHeader
          title={headerText.title}
          subtitle={headerText.subtitle}
        />
        <div className='flex flex-wrap gap-2xl justify-center'>
          {project.map((item) => (
            <div
              key={item.id}
              className='flex flex-col gap-md lg:gap-lg max-w-93.25 hover:scale-102 transition-transform'
            >
              <div className='rounded-xl overflow-hidden'>
                <img
                  src={item.image}
                  alt={`${item.title} image`}
                  loading='lazy'
                />
              </div>
              <p className='font-medium text-sm text-primary-200 lg:text-md'>
                Landing Page
              </p>
              <p className='font-bold text-md lg:text-xl'>{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
