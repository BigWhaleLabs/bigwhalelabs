import { useCallback, useMemo, useState } from 'react'
import useThrottle from 'hooks/useThrottle'

export default function () {
  const [scrollPosition, setScrollPosition] = useState(0)

  const onScroll = useCallback(() => {
    setScrollPosition(window.scrollY)
  }, [])
  const throttledScroll = useThrottle(onScroll, 50)
  useMemo(() => {
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [throttledScroll])

  return scrollPosition
}
