import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/buttons/Button';
import Modal from '@/components/ui/Modal';
import { getSectionHeader } from '@/helpers/getSectionHeader';
import { contactFormSchema } from '@/schemas/contactFormSchema';
import { checkbox } from '@/data/checkbox';
import { modal } from '@/data/modal';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ContactFormSchema, ModalValue } from '@/types';

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalValue, setModalValue] = useState<ModalValue>({
    title: '',
    description: '',
    buttonText: '',
    image: '',
  });

  const {
    register,
    handleSubmit,
    reset,
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
    const isSuccess = true;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (!isSuccess) {
        throw new Error('Error');
      }
      setModalValue(modal.success);
      reset();
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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalValue={modalValue} />
    </>
  );
};

export default ContactSection;
