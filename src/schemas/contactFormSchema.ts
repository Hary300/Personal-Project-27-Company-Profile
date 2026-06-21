import z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'At least 10 characters'),
  service: z.array(z.string()).nonempty('Please select at least one service'),
});
