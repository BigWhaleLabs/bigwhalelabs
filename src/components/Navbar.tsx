import { useCallback, useMemo, useState } from 'react'
import Button from 'components/Button'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  backdropBlur,
  backgroundColor,
  display,
  inset,
  justifyContent,
  margin,
  padding,
  position,
  space,
  zIndex,
} from 'classnames/tailwind'

const navbar = (visible?: boolean, withoutWallet?: boolean) =>
  classnames(
    position('sticky'),
    inset('top-0'),
    display('flex'),
    alignItems('items-center'),
    justifyContent('justify-between'),
    padding('py-8', 'px-25'),
    // space('space-x-9', 'lg:space-x-0'),
    zIndex('z-50'),
    backgroundColor('bg-navbar'),
    backdropBlur('backdrop-blur')
    // transitionProperty('transition-all')
  )

const logoContainer = classnames(
  display('inline-flex'),
  alignItems('items-center'),
  space('space-x-2'),
  margin('mt-2')
)

const buttonsContainer = classnames(
  display('inline-flex'),
  alignItems('items-center'),
  space('space-x-10')
)

export default function () {
  const [backgroundVisible, setBackgroundVisible] = useState(true)
  const onScroll = useCallback(() => {
    setBackgroundVisible(window.scrollY > 20)
  }, [])
  //   const throttledScroll = useThrottle(onScroll, 200)
  //   useMemo(() => {
  //     window.addEventListener('scroll', throttledScroll, { passive: true })
  //     return () => window.removeEventListener('scroll', throttledScroll)
  //   }, [throttledScroll])

  return (
    <nav className={navbar(backgroundVisible)}>
      <>
        <div className={logoContainer}>
          {/* <LogoText>SealCred</LogoText> */}
        </div>
      </>
      <>
        <div className={buttonsContainer}>
          <Button>Dosu</Button>
          <Button>SealCred</Button>
          <Button>Blog</Button>
          <Button>
            <Twitter />
          </Button>
          <Button outlined>Join our Discord</Button>
        </div>
      </>
    </nav>
  )
}
