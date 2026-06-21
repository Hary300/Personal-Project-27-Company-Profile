import type { contactFormSchema } from '@/schemas/contactFormSchema';
import type { UseFormRegister } from 'react-hook-form';
import type z from 'zod';

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export interface InputProps {
  title: 'name' | 'email';
  type?: 'text' | 'email';
  register: UseFormRegister<ContactFormSchema>;
  errorMessage?: string;
}

export interface TextAreaProps {
  title: string;
  register: UseFormRegister<ContactFormSchema>;
  errorMessage?: string;
}

export interface CheckboxForm {
  id: number;
  content: string;
  errorMessage?: string;
}
