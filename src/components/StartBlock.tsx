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
  overflow,
  position,
  scale,
  space,
  textAlign,
  visibility,
  width,
  wordBreak,
} from 'classnames/tailwind'

// 280-400 -- whale nose

const wrapper = classnames(
  position('relative'),
  overflow('md:overflow-visible', 'overflow-hidden'),
  width('w-full'),
  height('h-screen'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-end'),
  alignItems('items-center'),
  margin('-mt-24')
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
  alignItems('xl:items-start', 'items-center'),
  wordBreak('break-words'),
  textAlign('xl:text-left', 'text-center')
)
const bigWhaleStyles = classnames(
  height('h-fit'),
  width('w-fit'),
  overflow('overflow-clip'),
  margin('tablet:mr-0', '-mr-96'),
  scale('md:!scale-100', 'se:scale-125', 'scale-100')
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
    <div className={wrapper}>
      <ParallaxProvider>
        {/* <Parallax speed={25}> */}
        <img src="/img/gem.webp" className={leftGem} />
        <img src="/img/gem.webp" className={rightGem} />
        <div className={ironSphere}>
          <IronSphere />
        </div>
        {/* <Parallax speed={-20}> */}
        <img src="/img/colorful-whale.webp" className={bigWhaleStyles} />
        {/* </Parallax> */}
        <div className={futureBoxWrapper}>
          {/* <Parallax speed={-12}> */}
          <div className={futureBox}>
            <DownArrows />
            <div className={textBlock}>
              <FoldText>We’re building the future</FoldText>
              <FoldText>of pseudonymity</FoldText>
            </div>
          </div>
          {/* </Parallax> */}
        </div>
        {/* </Parallax> */}
      </ParallaxProvider>
    </div>
  )
}
