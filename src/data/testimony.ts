import type { Testimony } from '@/types';
import sarahAvatar from '@/assets/images/avatar/sarah.webp';
import johnAvatar from '@/assets/images/avatar/john.webp';
import emilyAvatar from '@/assets/images/avatar/emily.webp';

export const testimony: Testimony[] = [
  {
    id: 1,
    rating: 5,
    quote:
      '“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”',
    author: {
      name: 'Sarah Tan',
      role: 'Product Manager at Finovate',
      avatar: sarahAvatar,
    },
  },
  {
    id: 2,
    rating: 4,
    quote:
      '“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”',
    author: {
      name: 'John Lee',
      role: 'Creative Director at Innovate Corp',
      avatar: johnAvatar,
    },
  },
  {
    id: 3,
    rating: 6,
    quote:
      '“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”',
    author: {
      name: 'Emily Chen',
      role: 'Marketing Head at Tech Solutions',
      avatar: emilyAvatar,
    },
  },
  {
    id: 4,
    rating: 5,
    quote:
      '“Exceptional service from start to finish. The team was responsive, professional, and truly understood our business needs.”',
    author: {
      name: 'John Lee',
      role: 'CEO at Nexora',
      avatar: johnAvatar,
    },
  },
  {
    id: 5,
    rating: 4,
    quote:
      '“A highly skilled team that delivered beyond expectations. The product quality and UX improvements were outstanding.”',
    author: {
      name: 'Sarah Tan',
      role: 'Lead Designer at BrightWave',
      avatar: sarahAvatar,
    },
  },
];
