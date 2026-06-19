import LightHeroImage from '../../assets/images/light-mode/light-hero-image.webp';
import DarkHeroImage from '../../assets/images/dark-mode/dark-hero-image.webp';
import { useDark } from '../../contexts/dark-mode/useDark';
import { companyInfo } from '@/data/company';
import Button from '../ui/Button';
import Container from '../layout/Container';
import ImageVignetteOverlay from '../ui/ImageVignetteOverlay';

const HeroSection = () => {
  const { isDark } = useDark();

  const taglineFirstPart = companyInfo.tagline.split(' ').slice(0, 4).join(' ');
  const taglineSecondPart = companyInfo.tagline.split(' ').slice(4).join(' ');

  return (
    <section>
      <Container className='pt-15.25 pb-10.75'>
        <div className='flex flex-col gap-5xl'>
          <div>
            <p className='font-bold text-display-lg lg:text-display-3xl'>
              {taglineFirstPart}{' '}
              <span className='text-primary-200'>{taglineSecondPart}</span>
            </p>
            <p className='font-semibold text-md lg:text-xl'>
              {companyInfo.description}
            </p>
          </div>
          <a href='#contact' className=''>
            <Button />
          </a>
        </div>
      </Container>
      <div>
        {isDark ? (
          <div className='relative'>
            <ImageVignetteOverlay variant='dark' />
            <img src={DarkHeroImage} alt='Hero image' />
          </div>
        ) : (
          <div className='relative'>
            <ImageVignetteOverlay variant='light' />
            <img src={LightHeroImage} alt='Hero image' />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
