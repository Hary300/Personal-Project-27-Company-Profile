import type { Service } from '@/types';
import webDev from '@/assets/icons/IT-solution-webp/website.webp';
import mobApp from '@/assets/icons/IT-solution-webp/mobile.webp';
import uiUx from '@/assets/icons/IT-solution-webp/ux-design.webp';
import cloud from '@/assets/icons/IT-solution-webp/cloud.webp';
import softDev from '@/assets/icons/IT-solution-webp/software.webp';
import itInfra from '@/assets/icons/IT-solution-webp/IT-infrastructure.webp';
import cyber from '@/assets/icons/IT-solution-webp/cybersecurity.webp';
import qaSolution from '@/assets/icons/IT-solution-webp/question.webp';
import itConsult from '@/assets/icons/IT-solution-webp/IT-consulting.webp';

export const service: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO-friendly websites.',
    icon: webDev,
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
    icon: mobApp,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces',
    icon: uiUx,
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
    icon: cloud,
  },
  {
    id: 5,
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
    icon: softDev,
  },
  {
    id: 6,
    title: 'IT Infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
    icon: itInfra,
  },
  {
    id: 7,
    title: 'Cybersecurity Services',
    description: 'Stay protected with enterprise-grade security.',
    icon: cyber,
  },
  {
    id: 8,
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
    icon: qaSolution,
  },
  {
    id: 9,
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
    icon: itConsult,
  },
];
