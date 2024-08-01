import { MutableRef, useRef } from 'preact/hooks'
import { LunchbreakTwitter } from 'helpers/constants'
import Button from 'components/Button'
import BwlLogo from 'icons/BwlLogo'
import NavbarLinks from 'components/NavbarLinks'
import classnames, {
  alignItems,
  backdropBlur,
  backgroundClip,
  backgroundColor,
  display,
  flexDirection,
  height,
  inset,
  justifyContent,
  padding,
  position,
  space,
  transitionDuration,
  transitionProperty,
  transitionTimingFunction,
  zIndex,
} from 'classnames/tailwind'
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
  zIndex('z-10'),
  padding('p-6', 'lg:py-10', 'lg:px-16')
)
const bgCover = (backgroundVisible?: boolean) =>
  classnames(
    position('absolute'),
    backgroundClip('bg-clip-padding'),
    inset('inset-0'),
    backgroundColor(backgroundVisible ? 'bg-navbar' : undefined),
    backdropBlur(backgroundVisible ? 'backdrop-blur-lg' : undefined),
    height('h-auto'),
    transitionProperty('transition-all'),
    transitionDuration('duration-500'),
    transitionTimingFunction('ease-in-out')
  )

export default function () {
  const scrollPercent = useScrollPercent()
  const navbarRef = useRef() as MutableRef<HTMLDivElement>

  return (
    <nav
      className={navbar}
      ref={navbarRef}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className={bgCover(scrollPercent > 0.01)} />
      <div className={navbarInternalContainer}>
        <BwlLogo />
        <div className={buttonsContainer}>
          <NavbarLinks />

          <div className={buttonsGroup}>
            <Button url={LunchbreakTwitter}>Follow us</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
