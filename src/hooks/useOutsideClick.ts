import type { MutableRefObject } from 'react';
import { useEffect, useRef, useCallback } from 'react';

/**
 *  useOutsideClick hook
 * Checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc.
 *
 * @param ref Ref whose outside click needs to be listened to
 * @param handler Callback to fire on outside click
 * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
 */
function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: MutableRefObject<T | null>, // initially html element refs will be null
  handler: (e: MouseEvent) => any,
  when: boolean = true
): void {
  const savedHandler = useRef(handler);

  const memoizedCallback = useCallback((e: MouseEvent | TouchEvent) => {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      savedHandler.current(e);
    }
  }, []);

  useEffect(() => {
    savedHandler.current = handler;
  });

  useEffect(() => {
    if (when) {
      document.addEventListener('click', memoizedCallback);
      document.addEventListener('touchstart', memoizedCallback);

      return () => {
        document.removeEventListener('click', memoizedCallback);
        document.removeEventListener('touchstart', memoizedCallback);
      };
    }
  }, [ref, handler, when]);
}

export { useOutsideClick };
