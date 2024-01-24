import { Subject } from '../../rx';
import { ModalData } from './types';

export const modalSubject = new Subject<ModalData[]>([]);
