import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfinitScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfinitScroll({ callback, triggerRef, wrapperRef }: UseInfinitScrollOptions) {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = wrapperRef.current;
        let observer: null | IntersectionObserver = null;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
