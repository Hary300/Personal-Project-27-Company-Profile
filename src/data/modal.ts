import successImage from '../assets/images/success-message.svg';
import failImage from '../assets/images/fail-message.svg';
import type { ModalKey, ModalValue } from '@/types';

export const modal: Record<ModalKey, ModalValue> = {
  success: {
    title: 'Message Received!',
    description:
      'Thanks for reaching out — we’ll get back to you as soon as possible.',
    buttonText: 'Back to Home',
    image: successImage,
  },
  fail: {
    title: 'Oops! Something went wrong.',
    description:
      'We couldn’t send your message. Please try again or check your connection.',
    buttonText: 'Try Again',
    image: failImage,
  },
};
