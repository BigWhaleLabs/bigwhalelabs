import { MutableRef } from 'preact/hooks'
import { useMemo } from 'preact/hooks'

export default function useOutsideAlerter(
  ref: MutableRef<HTMLDivElement>,
  callback: () => void
) {
  useMemo(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}
