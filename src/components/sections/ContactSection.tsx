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

const ContactSection = () => {
  const headerText = getSectionHeader('contact');
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

  const onSubmit = async (data: ContactFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
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
      <Dialog open={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              {/* <Button variant='outline'>Cancel</Button> */}
            </DialogClose>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>{' '}
    </>
  );
};

export default ContactSection;
