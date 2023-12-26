import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Fade, FadeSlide } from '../../animation';
import { useModal } from './modal-context';
import { X } from 'lucide-react';

type SheetSize = 'xs' | 'sm' | 'none';

type SheetProps = PropsWithChildren<{
  title?: React.ReactNode;
  className?: string;
  position?: 'right';

  /**
   * Default: "sm".
   */
  size?: SheetSize,
}>;

const DURATION_IN_MS = 150;
const DURATION_IN_SECOND = DURATION_IN_MS / 1000;

export function Sheet({ children, className, size = 'sm' }: SheetProps) {
  const { modal } = useModal();
  const [show, setShow] = useState(false);
  const closeFuncRef = useRef(modal.modalRef.close);

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
    <div className='w-screen h-screen bg-black/20 overflow-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 grid items-center justify-end'>
      <Fade
        duration={DURATION_IN_SECOND}
        className='fixed top-0 right-0 bottom-0 left-0'
        show={show}
      >
        <div onClick={() => modal.modalRef.close()} className='absolute top-0 right-0 bottom-0 left-0' />
      </Fade>

      <FadeSlide
        duration={DURATION_IN_SECOND}
        distance={320}
        dir='right'
        show={show}
      >
        <div className={clsx(
          'relative bg-white mx-auto shadow-md min-h-screen',
          {
            ' min-w-[260px] max-w-[260px] sm:min-w-[380px] sm:max-w-[380px]': size === 'sm',
            'min-w-[260px] max-w-[260px] sm:min-w-[320px] sm:max-w-[320px]': size === 'xs',
          },
          className,
        )}>
          {children}
        </div>
      </FadeSlide>
    </div>
  );
}

type SheetTitleProps = PropsWithChildren<{
  hasCloseBtn?: boolean;
  className?: string;
}>

export function SheetHeader({
  children,
  className,
  hasCloseBtn = true,
}: SheetTitleProps) {
  const { modal } = useModal();

  return (
    <div className='flex justify-between items-center gap-4 px-4 py-2 border-b border-gray-200 bg-gray-50 rounded-t-lg'>
      <span className={clsx('font-semibold', className)}>{children}</span>

      {hasCloseBtn && <button onClick={() => modal.modalRef.close()} className='duration-200 min-w-[28px] w-[28px] h-[28px] rounded-md outline-none focus:bg-gray-200 hover:bg-gray-200 flex items-center justify-center' aria-label='Close'>
        <X className='text-gray-600' width={22} height={20} />
      </button>}
    </div>
  );
};

type BodyProps = PropsWithChildren<{
  className?: string;
}>;

export function SheetBody({ children, className }: BodyProps) {
  return (
    <div className={clsx(className, 'p-4')}>{children}</div>
  );
};

type FooterProps = PropsWithChildren<{
  className?: string;
}>;

export function SheetFooter({ children, className }: FooterProps) {
  return (
    <div className={clsx(className, 'p-4')}>{children}</div>
  );
};
