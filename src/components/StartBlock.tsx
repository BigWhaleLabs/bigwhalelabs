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

const sectionWrapper = classnames(
  overflow('md:overflow-visible', 'overflow-hidden'),
  width('w-full')
)
const parallaxWrapper = classnames(
  position('relative'),
  width('w-screen'),
  height('h-screen'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('md:justify-center', 'justify-end'),
  space('md:space-y-0', 'space-y-16'),
  alignItems('items-center'),
  margin('md:-mt-16', 'mt-0')
)
const futureBoxWrapper = classnames(
  position('2xl:absolute'),
  inset('right-64', 'top-3/4')
)
const futureBox = classnames(
  display('flex'),
  flexDirection('2xl:flex-row', 'flex-col-reverse'),
  alignItems('items-center'),
  justifyContent('justify-end'),
  space('2xl:space-x-4')
)
const textBlock = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('2xl:items-start', 'items-center'),
  wordBreak('break-words'),
  textAlign('2xl:text-left', 'text-center')
)
const bigWhaleStyles = classnames(
  height('md:h-fit', 'h-screen'),
  overflow('overflow-clip'),
  maxWidth('max-w-2xl'),
  margin('md:!mr-0', 'se:-mr-96', '-mr-80'),
  scale('lg:!scale-125', 'se:scale-90', 'scale-75')
)

const bgImage = classnames(position('absolute'), blur('blur-sm'))
const leftGem = classnames(
  bgImage,
  inset('md:top-1/3', 'xl:left-8', 'right-3'),
  brightness('brightness-75'),
  visibility('md:visible', 'invisible')
)
const rightGem = classnames(
  bgImage,
  inset('xl:top-12', 'xl:!right-3', 'md:right-2/3', '-bottom-11', '-right-44'),
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
    <div className={sectionWrapper}>
      <ParallaxProvider>
        <Parallax speed={25} className={parallaxWrapper}>
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
