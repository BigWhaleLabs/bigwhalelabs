import { useMemo } from 'preact/hooks'

export default function (callback: (event: KeyboardEvent) => void) {
  useMemo(() => {
    function handleKeyPressed(event: KeyboardEvent) {
      callback(event)
    }

    document.addEventListener('keyup', handleKeyPressed)
    return () => {
      document.removeEventListener('keyup', handleKeyPressed)
    }
  }, [callback])
}
