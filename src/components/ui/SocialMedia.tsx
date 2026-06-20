import { companyInfo } from '@/data/company';
import type { SocialMediaProps } from '@/types';

const SocialMedia = ({ className = '' }: SocialMediaProps) => {
  return (
    <div className={`flex gap-xl ${className}`}>
      {companyInfo.socials.map((social) => {
        const Icon = social.icon;
        return (
          <a href={social.url} target='_blank' key={social.name}>
            <div className='flex justify-center items-center size-5xl rounded-full border border-[#DFDFDF] dark:border-neutral-800'>
              <Icon />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
