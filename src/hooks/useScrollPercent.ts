import { useCallback, useMemo, useState } from 'preact/hooks'
import useThrottle from 'hooks/useThrottle'

export default function () {
  const [scroll, setScroll] = useState(0)

  const handleScroll = useCallback(() => {
    setScroll(
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    )
  }, [])
  const throttledCallback = useThrottle(handleScroll, 10)

  useMemo(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true })

    return () => window.removeEventListener('scroll', throttledCallback, true)
  }, [throttledCallback])

  return scroll
}
