import { useCallback, useMemo, useState } from 'react'
import useThrottle from 'hooks/useThrottle'

const animationBreakpoints = {
  beforeSuperOrb: 0.42,
  animEnd: 0.55,
}

export default function () {
  const [scroll, setScroll] = useState(0)

  const handleScroll = useCallback(() => {
    setScroll(
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    )
  }, [])
  const throttledCallback = useThrottle(handleScroll, 10)

  useMemo(() => {
    window.addEventListener('scroll', throttledCallback, true)

    return () => window.removeEventListener('scroll', throttledCallback, true)
  }, [throttledCallback])

  console.log(scroll)

  return {
    beforeSuperOrb: scroll < animationBreakpoints.beforeSuperOrb,
    animationEnd: scroll >= animationBreakpoints.animEnd,
    scroll,
  }
}
