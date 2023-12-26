import { ComponentType } from 'react';
import { ExtractPropsFromComponent } from '@sdks/types-shared';

export type AfterClosedCb = (data?: any) => any;

export interface ModalRef {
  close: (data?: any) => void;
  afterClosed: (cb: AfterClosedCb) => void;
}

export interface ModalOptions<Data = any> {
  data?: Data;

  /**
   * Where it should disable restore focus after closing modal.
   * 
   * Default: false.
   */
  disableFocusRestore?: boolean;

  /**
   * The element will be focused after closing modal.
   * By default, it will use `document.activeElement`.
   */
  focusedEl?: Element;

  /**
   * Whether press 'esc' or click out side will close modal.
   * 
   * Default: false.
   */
  disableEsc?: boolean;
}

export interface ModalData {
  modalId: number;
  content: ComponentType<ModalProps>;
  options: ModalOptions;
  modalRef: ModalRef;
}

export interface ModalProps<Data = any> {
  modalRef: ModalRef;
  data?: Data;
}

type ExtractModalDataFromProps<P> = P extends ModalProps<infer ModalData> ? ModalData : any;

export type ExtractModalData<T = any> = T extends (props: infer P) => any
  ? ExtractModalDataFromProps<P>
  : ExtractModalDataFromProps<ExtractPropsFromComponent<T>>;
