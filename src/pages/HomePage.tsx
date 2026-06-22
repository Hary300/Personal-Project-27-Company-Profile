import {
  ClientsSection,
  ContactSection,
  FaqSection,
  HeroSection,
  IndustriesSection,
  OurProcessSection,
  ProjectsSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
} from '@/components/sections';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <StatsSection />
      <OurProcessSection />
      <ServicesSection />
      <IndustriesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
