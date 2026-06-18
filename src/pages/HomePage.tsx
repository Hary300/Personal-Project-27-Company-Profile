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
} from '../components/sections';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <div>
        <StatsSection />
        <OurProcessSection />
        <ServicesSection />
        <IndustriesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
