import { companyInfo } from '@/data/company';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import NavLinks from '@/components/layout/NavLinks';
import SocialMedia from '@/components/ui/SocialMedia';

const Footer = () => {
  return (
    <footer>
      <Container variant='footer'>
        <div className='grid grid-cols-1 lg:grid-cols-2 p-2xl lg:p-5xl gap-3xl lg:gap-15 bg-neutral-50 dark:bg-neutral-950 border border-[#DFDFDF] dark:border-neutral-800 rounded-3xl w-full'>
          <Logo className='lg:order-2 lg:ml-auto' />
          <p className='font-bold text-display-sm lg:text-display-lg lg:order-1'>
            {companyInfo.cta}
          </p>
          <div className='h-px bg-[#DFDFDF] dark:bg-neutral-800 w-full lg:col-span-2 lg:order-3'></div>
          <div className='block lg:hidden'>
            <NavLinks />
          </div>
          <div className='hidden lg:flex items-center order-3'>
            <NavLinks variant='desktop' />
          </div>
          <SocialMedia className='lg:order-4 lg:ml-auto' />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
