import { useEffect, useRef } from 'react';

export function useAbort() {
  const abortCtrlRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortCtrlRef.current = new AbortController();

    return () => {
      abortCtrlRef.current?.abort();
    };
  }, []);

  return abortCtrlRef;
}