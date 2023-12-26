import { ModalData } from './types';

export class Subject<D> {
  private sub: ((data: D) => any)[] = [];

  constructor(private data: D) { }

  getValue() {
    return this.data;
  }

  next(data: D) {
    this.data = data;
    this.sub.forEach(cb => cb(data));
  }

  subscribe(cb: (data: D) => any) {
    this.sub.push(cb);

    return () => {
      this.sub = this.sub.filter(obs => obs !== cb);
    };
  }
}

export const modalSubject = new Subject<ModalData[]>([]);
