import type { CompanyInfo } from '@/types';
import facebookLogo from '../assets/icons/social-media/fb.svg?react';
import instagramLogo from '../assets/icons/social-media/ig.svg?react';
import linkedinLogo from '../assets/icons/social-media/lnk.svg?react';
import tiktokLogo from '../assets/icons/social-media/tiktok.svg?react';

export const companyInfo: CompanyInfo = {
  name: 'Your Logo',
  tagline: 'Your Tech Partner for Smarter Growth',
  description:
    'We deliver tailored IT solutions to help you scale with speed and confidence.',
  cta: "LET'S DISCUSS YOUR IDEAS",
  socials: [
    {
      name: 'facebook',
      url: 'https://facebook.com',
      icon: facebookLogo,
    },
    {
      name: 'instagram',
      url: 'https://instagram.com',
      icon: instagramLogo,
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com',
      icon: linkedinLogo,
    },
    {
      name: 'tiktok',
      url: 'https://tiktok.com',
      icon: tiktokLogo,
    },
  ],
};
