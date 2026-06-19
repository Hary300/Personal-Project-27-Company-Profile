import LightHeroImage from '../../assets/images/light-mode/light-hero-image.webp';
import DarkHeroImage from '../../assets/images/dark-mode/dark-hero-image.webp';
import { useDark } from '../../contexts/dark-mode/useDark';
import { companyInfo } from '@/data/company';
import Button from '../ui/buttons/Button';
import ImageVignetteOverlay from '../ui/ImageVignetteOverlay';

const HeroSection = () => {
  const { isDark } = useDark();

  const taglineFirstPart = companyInfo.tagline.split(' ').slice(0, 4).join(' ');
  const taglineSecondPart = companyInfo.tagline.split(' ').slice(4).join(' ');

  return (
    <section className='relative lg:flex lg:justify-end'>
      <div className='flex flex-col px-xl gap-5xl pt-15.25 pb-10.75 lg:absolute lg:z-10 lg:left-11xl lg:top-15 xl:top-36.5 lg:max-w-120 xl:max-w-163.25 lg:p-0'>
        <div>
          <p className='font-bold text-display-lg lg:text-display-xl xl:text-display-3xl'>
            {taglineFirstPart}{' '}
            <span className='text-primary-200'>{taglineSecondPart}</span>
          </p>
          <p className='font-semibold text-md lg:text-lg xl:text-xl'>
            {companyInfo.description}
          </p>
        </div>
        <a href='#contact' className='lg:max-w-50'>
          <Button />
        </a>
      </div>

      <div className='relative lg:w-130 xl:w-186.75 lg:-mt-21'>
        {isDark ? (
          <>
            <ImageVignetteOverlay variant='dark' />
            <img src={DarkHeroImage} alt='Hero image' />
          </>
        ) : (
          <>
            <ImageVignetteOverlay variant='light' />
            <img src={LightHeroImage} alt='Hero image' />
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
