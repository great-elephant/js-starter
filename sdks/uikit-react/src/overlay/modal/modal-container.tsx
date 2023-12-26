import { useEffect, useState } from 'react';
import { modalSubject } from './modal-subject';
import { ModalData } from './types';
import { ModalWrapper } from './modal-wrapper';

export function ModalContainer() {
  const [modalList, setModalList] = useState<ModalData[]>([]);

  useEffect(() => {
    modalSubject.subscribe(modalList => {
      setModalList(modalList);
    });
  }, []);

  return (
    <>
      {modalList.map((modal, idx) => (
        <ModalWrapper key={idx} modal={modal} />
      ))}
    </>
  );
}
