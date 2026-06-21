import { getSectionHeader } from '@/helpers/getSectionHeader';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { useForm } from 'react-hook-form';
import { zodResolver } from './../../../node_modules/@hookform/resolvers/zod/src/zod';
import type { ContactFormSchema } from '@/types/contact';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import { checkbox } from '@/data/checkbox';
import Checkbox from '../ui/Checkbox';
import Button from '../ui/buttons/Button';
import { contactFormSchema } from '@/schemas/ContactFormSchema';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { modal } from '@/data/modal';
import type { ModalValue } from '@/types/modal';
import success from '../../assets/images/success-message.svg';

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalValue, setModalValue] = useState<ModalValue>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      service: [],
    },
  });

  const headerText = getSectionHeader('contact');

  const onSubmit = async (data: ContactFormSchema) => {
    const isSuccess = false;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (!isSuccess) {
        throw new Error('Error');
      }
      setModalValue(modal.success);
      console.log('SUCCESS', data);
    } catch (err) {
      setModalValue(modal.fail);
      if (err instanceof Error) {
        console.log('ERROR', err.message);
      } else {
        console.log('Unknown Error');
      }
    } finally {
      setIsOpen(true);
    }
  };

  return (
    <>
      <section id='contact'>
        <Container>
          <SectionHeader
            title={headerText.title}
            subtitle={headerText.subtitle}
          />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-2xl w-full lg:max-w-180 m-auto'
          >
            <Input
              title='name'
              register={register}
              errorMessage={errors.name?.message}
            />
            <Input
              title='email'
              register={register}
              errorMessage={errors.email?.message}
            />
            <TextArea
              title='message'
              register={register}
              errorMessage={errors.message?.message}
            />
            <Checkbox
              items={checkbox}
              register={register}
              errorMessage={errors.service?.message}
            />
            <div className='mt-2xl'>
              <Button type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Sending Message...' : 'Send'}
              </Button>
            </div>
          </form>
        </Container>
      </section>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <div className='bg-neutral-50 dark:bg-neutral-950 w-full flex justify-center'>
              <img src={modalValue?.image} alt={`${modalValue?.title} image`} />
            </div>
            <div className='flex flex-col gap-2xl items-center text-center px-8'>
              <DialogTitle className='font-bold text-xl'>
                {modalValue?.title}
              </DialogTitle>
              <DialogDescription className='font-medium text-md text-neutral-400'>
                {modalValue?.description}
              </DialogDescription>
            </div>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <div className='flex w-full max-w-90.25'>
                <Button>{modalValue?.buttonText}</Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>{' '}
    </>
  );
};

export default ContactSection;
