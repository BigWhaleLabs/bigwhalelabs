import { MutableRef, useRef, useState } from 'preact/hooks'
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
import useScrollPercent from 'hooks/useScrollPercent'

const navbar = classnames(
  position('sticky'),
  inset('top-0'),
  zIndex('z-50'),
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-stretch')
)
const buttonsContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  space('md:space-x-4', 'lg:space-x-12'),
  zIndex('z-20')
)
const buttonsGroup = classnames(
  display('flex'),
  alignItems('items-center'),
  space('space-x-4', 'sm:space-x-6')
)
const navbarInternalContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-between'),
  padding('py-2', 'lg:py-8', 'px-4', 'lg:px-25')
)
const bgCover = (
  backgroundVisible?: boolean,
  show?: boolean,
  small?: boolean
) =>
  classnames(
    position('absolute'),
    backgroundClip('bg-clip-padding'),
    inset('left-0', 'right-0', 'top-0'),
    backgroundColor(show || backgroundVisible ? 'bg-navbar' : undefined),
    backdropBlur(show || backgroundVisible ? 'backdrop-blur-lg' : undefined),
    height(show ? 'h-88' : small ? 'h-tiny-menu' : 'h-15', 'lg:h-large-menu'),
    transitionProperty('transition-all'),
    transitionDuration('duration-500'),
    transitionTimingFunction('ease-in-out')
  )
const navbarWrapper = (small: boolean, show: boolean) =>
  classnames(
    position('absolute'),
    inset('left-0', 'right-0', small ? 'top-58.5' : 'tiny:top-76'),
    boxSizing('box-content'),
    overflow('overflow-hidden'),
    opacity(show ? 'opacity-100' : 'opacity-0'),
    transitionProperty('transition-all'),
    transitionDuration('duration-500'),
    transitionTimingFunction('ease-in-out')
  )

export default function () {
  const { xs, md } = useBreakpoints()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollpercent = useScrollPercent()

  const navbarRef = useRef() as MutableRef<HTMLDivElement>
  useClickOutside(navbarRef, () => setIsMenuOpen(false))

  return (
    <nav
      ref={navbarRef}
      className={navbar}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className={bgCover(scrollpercent > 0.01, isMenuOpen, xs)}></div>
      <div className={navbarInternalContainer}>
        <Logo />
        <div className={buttonsContainer}>
          <>{md && <NavbarLinks />}</>

          <div className={buttonsGroup}>
            <Button outlined small={!md} url="https://discord.gg/NHk96pPZUV">
              Join our Discord
            </Button>
            {!md && (
              <Button onClick={() => setIsMenuOpen(!isMenuOpen)} icon>
                <Burger open={isMenuOpen} />
              </Button>
            )}
          </div>
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
