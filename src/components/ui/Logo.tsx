import { companyInfo } from '@/data/company';
import CompanyLogo from '@/assets/images/logo-symbol.svg';
import { useMobileMenu } from '@/contexts/mobile-menu/useMobileMenu';
import type { LogoProps } from '@/types';

const Logo = ({ className = '' }: LogoProps) => {
  const { closeMenu } = useMobileMenu();
  return (
    <div onClick={closeMenu} className={className}>
      <a href='#' className='flex gap-md items-center cursor-pointer'>
        <div className='w-[26.13px] h-[28.66px] lg:w-[29.59px] lg:h-[32.46px]'>
          <img src={CompanyLogo} alt='Company Logo' loading='lazy' />
        </div>
        <span className='font-semibold text-[21.19px] lg:text-2xl'>
          {companyInfo.name}
        </span>
      </a>
    </div>
  );
};

export default Logo;
