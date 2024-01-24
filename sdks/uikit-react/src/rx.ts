import { useEffect, useState } from 'react';

export class Subject<V> {
  private subs: ((value: V) => any)[] = [];

  constructor(private value: V) { }

  getValue() {
    return this.value;
  }

  next(value: V) {
    this.value = value;
    this.subs.forEach(cb => cb(value));
  }

  subscribe(cb: (value: V) => any) {
    this.subs.push(cb);

    return () => {
      this.subs = this.subs.filter(obs => obs !== cb);
    };
  }

  effect() {
    const self = this;
    const [value, setValue] = useState(self.getValue());

    useEffect(() => {
      return self.subscribe(v => setValue(v));
    }, []);

    return value;
  }
}
