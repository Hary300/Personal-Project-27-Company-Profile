import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { ModalValue } from '@/types';
import type { Dispatch, SetStateAction } from 'react';
import Button from './buttons/Button';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  modalValue: ModalValue;
}

const Modal = ({ isOpen, setIsOpen, modalValue }: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <div className='bg-neutral-50 dark:bg-neutral-950 w-full flex justify-center py-md'>
            <img
              src={modalValue?.image}
              alt={`${modalValue?.title} image`}
              className='w-11xl'
            />
          </div>
          <div className='flex flex-col pt-3xl pb-xl items-center text-center px-3xl'>
            <DialogTitle className='font-bold text-xl leading-4xl'>
              {modalValue?.title}
            </DialogTitle>
            <DialogDescription className='font-medium text-md text-neutral-400 leading-7'>
              {modalValue?.description}
            </DialogDescription>
          </div>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <div className='flex w-full max-w-76.25 lg:max-w-90.25'>
              <Button>{modalValue?.buttonText}</Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
