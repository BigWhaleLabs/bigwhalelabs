import { LinkText } from 'components/Text'
import { useCallback, useMemo, useState } from 'react'
import Burger from 'icons/Burger'
import Button from 'components/Button'
import Logo from 'components/Logo'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  backdropBlur,
  backgroundColor,
  display,
  flexDirection,
  inset,
  justifyContent,
  padding,
  position,
  space,
  zIndex,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
import useThrottle from 'hooks/useThrottle'

const navbar = (visible?: boolean) =>
  classnames(
    position('sticky'),
    inset('top-0'),
    display('flex'),
    alignItems('items-center'),
    justifyContent('justify-between'),
    padding('py-4', 'px-4', 'md:py-8', 'lg:px-25'),
    zIndex('z-50'),
    backgroundColor(visible ? 'bg-navbar' : undefined),
    backdropBlur(visible ? 'backdrop-blur-xl' : undefined)
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
const menuBlock = classnames(
  position('absolute'),
  inset('bottom-0', 'left-0', 'right-0'),
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  space('space-y-10'),
  backgroundColor('bg-navbar'),
  backdropBlur('backdrop-blur-xl'),
  backgroundColor('bg-navbar'),
  padding('pt-6', 'pb-4')
)

export default function () {
  const { md } = useBreakpoints()

  const [isOpen, setIsOpen] = useState(false)
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
      <Logo />
      <div className={buttonsContainer}>
        {md && (
          <div className={navLinkContainer}>
            <LinkText url="https://dosu.io">Dosu</LinkText>
            <LinkText url="https://sealcred.xyz">SealCred</LinkText>
            <LinkText url="https://blog.bigwhalelabs.com/">Blog</LinkText>
            <LinkText url="https://twitter.com/bigwhalelabs" tertiary>
              <Twitter />
            </LinkText>
          </div>
        )}

        <Button
          outlined
          onClick={() => window.open('https://discord.gg/UtFAnyATNR', '_blank')}
        >
          Join our Discord
        </Button>
        {!md && (
          <>
            <Button onClick={() => setIsOpen(!isOpen)}>
              <Burger open={isOpen} />
            </Button>
          </>
        )}
      </div>
      {!md && isOpen && (
        <div className={menuBlock}>
          <LinkText url="https://dosu.io">Dosu</LinkText>
          <LinkText url="https://sealcred.xyz">SealCred</LinkText>
          <LinkText url="https://blog.bigwhalelabs.com/">Blog</LinkText>
          <LinkText url="https://twitter.com/bigwhalelabs" tertiary>
            <Twitter />
          </LinkText>
        </div>
      )}
    </nav>
  )
}
