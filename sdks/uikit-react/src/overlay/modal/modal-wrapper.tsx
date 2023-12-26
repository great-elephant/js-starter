import * as Dialog from '@radix-ui/react-dialog';
import { ModalContext } from './modal-context';
import { ModalData } from './types';

interface ModalWrapperProps {
  modal: ModalData;
}

export function ModalWrapper(props: ModalWrapperProps) {
  const { modal } = props;
  const { options } = modal;

  const handleRestoreFocus = () => {
    const modalOpts = modal.options;
    if (!modalOpts.focusedEl || modalOpts.disableFocusRestore) {
      return;
    }

    (modalOpts.focusedEl as HTMLElement).focus?.();
  };

  return (
    <ModalContext.Provider value={{ modal }}>
      <Dialog.Root open onOpenChange={() => modal.modalRef.close()}>
        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content
            className='relative z-50'
            onEscapeKeyDown={e => options.disableEsc && e.preventDefault()}
            onCloseAutoFocus={handleRestoreFocus}
          >
            <modal.content modalRef={modal.modalRef} data={options.data} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ModalContext.Provider >
  );
}
