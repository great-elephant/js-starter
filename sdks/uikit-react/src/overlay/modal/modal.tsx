import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Fade, FadeSlide } from '@uikit-react/animation';
import { useModal } from './modal-context';
import { Button } from '@uikit-react/button';

type ModalSize = 'xs' | 'sm' | 'none';

type ModalProps = PropsWithChildren<{
  title?: React.ReactNode;
  className?: string;

  /**
   * Default: "sm".
   */
  size?: ModalSize;
}>;

const DURATION_IN_MS = 150;
const DURATION_IN_SECOND = DURATION_IN_MS / 1000;

export function Modal({ children, className, size = 'sm' }: ModalProps) {
  const [show, setShow] = useState(false);
  const { modal } = useModal();
  const closeFuncRef = useRef(modal.modalRef.close);
  const { options } = modal;

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    modal.modalRef.close = (data?: unknown) => {
      setShow(false);
      setTimeout(() => {
        closeFuncRef.current?.(data);
      }, DURATION_IN_MS);
    };
  }, [modal.modalRef]);

  return (
    <div className='w-screen h-screen overflow-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 grid items-center justify-center py-8'>
      <Fade
        duration={DURATION_IN_SECOND}
        className='bg-black/60 absolute top-0 right-0 bottom-0 left-0'
        show={show}
      >
        <div onClick={() => !options.disableEsc && modal.modalRef.close()} className='absolute top-0 right-0 bottom-0 left-0' />
      </Fade>

      <FadeSlide
        duration={DURATION_IN_SECOND}
        show={show}
      >
        <div className={clsx(
          'relative bg-background mx-auto shadow-md rounded-lg border',
          {
            'min-w-[300px] max-w-[300px] sm:min-w-[420px] sm:max-w-[420px]': size === 'sm',
            'min-w-[300px] max-w-[300px] sm:min-w-[320px] sm:max-w-[320px]': size === 'xs',
          },
          className,
        )}>
          {children}
        </div>
      </FadeSlide>
    </div>
  );
}

type ModalHeaderProps = PropsWithChildren<{
  className?: string;
}>

export function ModalHeader({
  children,
  className,
}: ModalHeaderProps) {
  const { modal } = useModal();

  return (
    <header className='flex justify-between items-center gap-4 px-6 pt-6 text-xl rounded-t-lg'>
      <span className={clsx('font-semibold', className)}>{children}</span>
    </header>
  );
};

type BodyProps = PropsWithChildren<{
  className?: string;
}>;

export function ModalBody({ children, className }: BodyProps) {
  return (
    <div className={clsx('p-6', className)}>{children}</div>
  );
};

type FooterProps = PropsWithChildren<{
  className?: string;
}>;

export function ModalFooter({ children, className }: FooterProps) {
  return (
    <footer className={clsx('flex justify-end gap-4 pb-6 px-6', className)}>{children}</footer>
  );
};

export function ModalCloseButton({ children }: PropsWithChildren) {
  const { modal } = useModal();
  return (
    <Button onClick={() => modal.modalRef.close()} variant='ghost'>{children}</Button>
  );
}
