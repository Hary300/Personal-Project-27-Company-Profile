import type { Industry } from '@/types';
import fintechImg from '@/assets/images/industry-section/image1.webp';
import ecomerceImg from '@/assets/images/industry-section/image2.webp';
import healthCareImg from '@/assets/images/industry-section/image3.webp';

export const industry: Industry[] = [
  {
    id: 1,
    title: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: fintechImg,
  },
  {
    id: 2,
    title: 'E-Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: ecomerceImg,
  },
  {
    id: 3,
    title: 'Healthcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: healthCareImg,
  },
];
