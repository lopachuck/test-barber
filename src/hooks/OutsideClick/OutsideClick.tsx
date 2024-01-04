import { RefObject, useEffect } from 'react'

declare type ClickOutsideHandler = (trigger: boolean) => void;

/**
 * Hook that execute callback onClick outside the passed ref
 */
export function useOutsideClick(
    ref: RefObject<HTMLElement>,
    callback?: ClickOutsideHandler,
) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (callback) {
                    callback(false)
                }
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}