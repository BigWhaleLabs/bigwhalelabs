import { MutableRef } from 'preact/hooks'
import { useRef, useState } from 'react'
import Burger from 'icons/Burger'
import Button from 'components/Button'
import Logo from 'components/Logo'
import NavbarLinks from 'components/NavbarLinks'
import classnames, {
  alignItems,
  backdropBlur,
  backgroundClip,
  backgroundColor,
  boxSizing,
  display,
  flexDirection,
  height,
  inset,
  justifyContent,
  opacity,
  overflow,
  padding,
  position,
  space,
  transitionDuration,
  transitionProperty,
  transitionTimingFunction,
  zIndex,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
import useClickOutside from 'hooks/useClickOutside'
import useScrollPosition from 'hooks/useScrollPosition'

const navbar = (backgroundVisible?: boolean) =>
  classnames(
    position('sticky'),
    inset('top-0'),
    zIndex('z-50'),
    backgroundClip('bg-clip-padding'),
    backgroundColor(backgroundVisible ? 'bg-navbar' : undefined),
    backdropBlur(backgroundVisible ? 'backdrop-blur-3xl' : undefined),
    display('flex'),
    flexDirection('flex-col'),
    alignItems('items-stretch')
  )
const buttonsContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  space('space-x-6'),
  zIndex('z-20')
)
const navbarInternalContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-between'),
  padding('py-2', 'lg:py-8', 'px-4', 'lg:px-25')
)
const navbarWrapper = (small: boolean, show: boolean) =>
  classnames(
    position('absolute'),
    inset('left-0', 'right-0', small ? 'top-58.5' : 'tiny:top-76'),
    height(show ? 'h-70' : 'h-0'),
    boxSizing('box-content'),
    overflow('overflow-hidden'),
    opacity(show ? 'opacity-100' : 'opacity-0'),
    backgroundColor('bg-navbar'),
    transitionProperty('transition-all'),
    transitionDuration('duration-500'),
    transitionTimingFunction('ease-in-out')
  )

export default function () {
  const { xs, md } = useBreakpoints()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollPosition = useScrollPosition()

  const navbarRef = useRef() as MutableRef<HTMLDivElement>
  useClickOutside(navbarRef, () => setIsMenuOpen(false))

  return (
    <nav
      ref={navbarRef}
      className={navbar(scrollPosition > 20)}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className={navbarInternalContainer}>
        <Logo />
        <div className={buttonsContainer}>
          {md && <NavbarLinks />}

          <Button outlined small={!md} url="https://discord.gg/NHk96pPZUV">
            Join our Discord
          </Button>
          {!md && (
            <>
              <Button onClick={() => setIsMenuOpen(!isMenuOpen)} icon>
                <Burger open={isMenuOpen} />
              </Button>
            </>
          )}
        </div>
      </div>
      {!md && (
        <div className={navbarWrapper(xs, isMenuOpen)}>
          <NavbarLinks />
        </div>
      )}
    </nav>
  )
}
