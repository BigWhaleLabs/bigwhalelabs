import { LinkText } from 'components/Text'
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
    padding('py-4', 'px-4', 'lg:py-8', 'lg:px-25'),
    zIndex('z-50'),
    backgroundColor(visible ? 'bg-navbar' : undefined),
    backdropBlur(visible ? 'backdrop-blur' : undefined)
  )

const logoContainer = classnames(
  display('inline-flex'),
  alignItems('items-center'),
  space('space-x-1', 'lg:space-x-2')
)

const buttonsContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  space('space-x-4', 'lg:space-x-10')
)
const navLinkContainer = classnames(
  display('hidden', 'md:inline-flex'),
  alignItems('items-center'),
  space('space-x-4', 'lg:space-x-10')
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
          <div className={navLinkContainer}>
            <LinkText url="https://dosu.io">Dosu</LinkText>
            <LinkText url="https://sealcred.xyz">SealCred</LinkText>
            <LinkText url="https://blog.bigwhalelabs.com/">Blog</LinkText>
            <LinkText url="https://twitter.com/bigwhalelabs" tertiary>
              <Twitter />
            </LinkText>
          </div>

          <Button
            outlined
            onClick={() =>
              window.open('https://discord.gg/UtFAnyATNR', '_blank')
            }
          >
            Join our Discord
          </Button>
        </div>
      </>
    </nav>
  )
}
