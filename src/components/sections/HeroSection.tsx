import LightHeroImage from '../../assets/images/light-mode/light-hero-image.webp';
import DarkHeroImage from '../../assets/images/dark-mode/dark-hero-image.webp';
import { useDark } from '../../contexts/dark-mode/useDark';

const HeroSection = () => {
  const { isDark } = useDark();
  return (
    <section>
      <div>
        {isDark ? (
          <img src={DarkHeroImage} alt='' />
        ) : (
          <img src={LightHeroImage} alt='Hero image' />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
