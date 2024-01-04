import { useEffect } from 'react'

export function useKeyDown(
    cb: (event: { key: string }) => void,
) {

    useEffect(() => {
        document.addEventListener('keydown', cb, false)

        return () => {
            document.removeEventListener('keydown', cb, false)
        }
    }, [cb])

}