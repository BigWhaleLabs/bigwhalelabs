import { FoldText } from 'components/Text'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import DownArrows from 'components/DownArrows'
import IronSphere from 'icons/IronSphere'
import classnames, {
  alignItems,
  blur,
  brightness,
  display,
  flexDirection,
  height,
  inset,
  justifyContent,
  margin,
  maxWidth,
  overflow,
  position,
  scale,
  space,
  textAlign,
  visibility,
  width,
  wordBreak,
} from 'classnames/tailwind'

const wrapper = classnames(
  position('relative'),
  overflow('md:overflow-visible', 'overflow-hidden'),
  width('md:w-fit', 'w-screen')
)
const futureBoxWrapper = classnames(
  position('md:absolute'),
  inset('xl:-right-28', 'right-8', 'top-3/4')
)
const futureBox = classnames(
  display('flex'),
  flexDirection('md:flex-row', 'flex-col-reverse'),
  alignItems('items-center'),
  justifyContent('justify-end'),
  space('md:space-x-4'),
  margin('mt-32', 'sm:mt-40', 'lg:mt-0')
)
const textBlock = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('md:items-start', 'items-center'),
  wordBreak('break-words'),
  textAlign('md:text-left', 'text-center')
)
const bigWhaleStyles = classnames(
  height('sm:h-auto', 'h-max'),
  maxWidth('md:max-w-full', 'max-w-2xl'),
  overflow('overflow-clip'),
  margin('md:!ml-0', 'se:ml-24', 'ml-0', 'lg:!-mt-16', 'se:mt-0', '-mt-24'),
  scale('md:!scale-100', 'se:scale-125', 'scale-100')
)

const bgImage = classnames(position('absolute'), blur('blur-sm'))
const leftGem = classnames(
  bgImage,
  inset('md:top-1/3', 'md:-left-96'),
  brightness('brightness-75'),
  visibility('md:visible', 'invisible')
)
const rightGem = classnames(
  bgImage,
  inset(
    'xl:top-12',
    'xl:!-right-1/5',
    'md:right-2/3',
    '-bottom-11',
    '-right-44'
  ),
  scale('scale-50'),
  brightness('brightness-75')
)
const ironSphere = classnames(
  bgImage,
  inset(
    'md:right-1/2',
    'md:left-1/2',
    'md:bottom-3/4',
    'bottom-1/4',
    'left-1/4'
  )
)

export default function () {
  return (
    <div className={wrapper}>
      <ParallaxProvider>
        <Parallax speed={25}>
          <img src="/img/gem.webp" className={leftGem} />
          <img src="/img/gem.webp" className={rightGem} />
          <div className={ironSphere}>
            <IronSphere />
          </div>
          <Parallax speed={-20}>
            <img src="/img/colorful-whale.webp" className={bigWhaleStyles} />
          </Parallax>
          <div className={futureBoxWrapper}>
            <Parallax speed={-12}>
              <div className={futureBox}>
                <DownArrows />
                <div className={textBlock}>
                  <FoldText>We’re building the future</FoldText>
                  <FoldText>of pseudonymity</FoldText>
                </div>
              </div>
            </Parallax>
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  )
}
