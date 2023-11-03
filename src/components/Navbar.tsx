import { MutableRef, useRef, useState } from 'preact/hooks'
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
  visibility,
  zIndex,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
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
const bgCover = (backgroundVisible?: boolean) =>
  classnames(
    position('absolute'),
    backgroundClip('bg-clip-padding'),
    inset('inset-0'),
    backgroundColor(backgroundVisible ? 'bg-navbar' : undefined),
    backdropBlur(backgroundVisible ? 'backdrop-blur-lg' : undefined),
    height('h-88', 'md:h-auto'),
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
    visibility({ visible: show }),
    opacity({ 'opacity-0': !show }),
    transitionProperty('transition-all'),
    transitionDuration('duration-500'),
    transitionTimingFunction('ease-in-out')
  )

export default function () {
  const { md } = useBreakpoints()

  const scrollpercent = useScrollPercent()

  const navbarRef = useRef() as MutableRef<HTMLDivElement>

  return (
    <nav
      className={navbar}
      ref={navbarRef}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className={bgCover(scrollpercent > 0.01)} />
      <div className={navbarInternalContainer}>
        <Logo />
        <div className={buttonsContainer}>
          <>{md && <NavbarLinks />}</>

          <div className={buttonsGroup}>
            <Button outlined small={!md} url="https://discord.gg/NHk96pPZUV">
              Join our Discord
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
