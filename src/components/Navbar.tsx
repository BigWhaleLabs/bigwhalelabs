import { MutableRef } from 'preact/hooks'
import { useCallback, useMemo, useRef, useState } from 'react'
import Burger from 'icons/Burger'
import Button from 'components/Button'
import Logo from 'components/Logo'
import NavbarLinks from 'components/NavbarLinks'
import classnames, {
  alignItems,
  backdropBlur,
  backgroundClip,
  backgroundColor,
  display,
  inset,
  justifyContent,
  padding,
  position,
  space,
  zIndex,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
import useClickOutside from 'hooks/useClickOutside'
import useThrottle from 'hooks/useThrottle'

const navbar = (visible?: boolean) =>
  classnames(
    position('sticky'),
    inset('top-0'),
    display('flex'),
    alignItems('items-center'),
    justifyContent('justify-between'),
    padding('py-2', 'px-4', 'md:py-8', 'lg:px-25'),
    zIndex('z-50'),
    backgroundClip('bg-clip-padding'),
    backgroundColor(visible ? 'bg-navbar' : undefined),
    backdropBlur(visible ? 'backdrop-blur-3xl' : undefined)
  )
const buttonsContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  space('space-x-4', 'lg:space-x-10')
)

export default function () {
  const { md } = useBreakpoints()

  const [isOpen, setIsOpen] = useState(false)
  const [backgroundVisible, setBackgroundVisible] = useState(false)

  const navbarRef = useRef() as MutableRef<HTMLDivElement>
  useClickOutside(navbarRef, () => setIsOpen(false))

  const onScroll = useCallback(() => {
    setBackgroundVisible(window.scrollY > 20)
  }, [])
  const throttledScroll = useThrottle(onScroll, 50)
  useMemo(() => {
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [throttledScroll])

  return (
    <nav ref={navbarRef} className={navbar(backgroundVisible)}>
      <Logo />
      <div className={buttonsContainer}>
        {md && <NavbarLinks />}

        <Button
          outlined
          small={!md}
          onClick={() => window.open('https://discord.gg/UtFAnyATNR', '_blank')}
        >
          Join our Discord
        </Button>
        {!md && (
          <>
            <Button onClick={() => setIsOpen(!isOpen)} icon>
              <Burger open={isOpen} />
            </Button>
          </>
        )}
      </div>
      {!md && isOpen && <NavbarLinks />}
    </nav>
  )
}
