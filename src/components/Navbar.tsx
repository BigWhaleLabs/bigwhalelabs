import { useCallback, useMemo, useState } from 'react'
import Button from 'components/Button'
import Logo from 'components/Logo'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  backdropBlur,
  backgroundColor,
  display,
  inset,
  justifyContent,
  padding,
  position,
  space,
  zIndex,
} from 'classnames/tailwind'
import useThrottle from 'hooks/useThrottle'

const navbar = (visible?: boolean) =>
  classnames(
    position('sticky'),
    inset('top-0'),
    display('flex'),
    alignItems('items-center'),
    justifyContent('justify-between'),
    padding('py-8', 'px-25'),
    zIndex('z-50'),
    backgroundColor(visible ? 'bg-navbar' : undefined),
    backdropBlur(visible ? 'backdrop-blur' : undefined)
  )

const logoContainer = classnames(
  display('inline-flex'),
  alignItems('items-center'),
  space('space-x-2')
)

const buttonsContainer = classnames(
  display('inline-flex'),
  alignItems('items-center'),
  space('space-x-10')
)

export default function () {
  const [backgroundVisible, setBackgroundVisible] = useState(false)
  const onScroll = useCallback(() => {
    setBackgroundVisible(window.scrollY > 20)
  }, [])
  const throttledScroll = useThrottle(onScroll, 50)
  useMemo(() => {
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [throttledScroll])

  return (
    <nav className={navbar(backgroundVisible)}>
      <>
        <div className={logoContainer}>
          <Logo />
        </div>
      </>
      <>
        <div className={buttonsContainer}>
          <Button>
            <a href="https://dosu.io" target="_blank">
              Dosu
            </a>
          </Button>
          <Button>
            <a href="https://sealcred.xyz" target="_blank">
              SealCred
            </a>
          </Button>
          <Button>
            <a href="https://blog.bigwhalelabs.com/" target="_blank">
              Blog
            </a>
          </Button>
          <Button icon>
            <a href="https://twitter.com/bigwhalelabs" target="_blank">
              <Twitter />
            </a>
          </Button>
          <Button outlined>
            <a href="https://discord.gg/FW5w67yA" target="_blank">
              Join our Discord
            </a>
          </Button>
        </div>
      </>
    </nav>
  )
}
