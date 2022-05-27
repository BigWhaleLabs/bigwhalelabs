import { FoldText } from 'components/Text'
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
  zIndex,
} from 'classnames/tailwind'

const wrapper = classnames(
  position('relative'),
  overflow('md:overflow-visible', 'overflow-hidden'),
  width('md:w-fit', 'w-screen'),
  margin('mx-auto')
)
const futureBoxWrapper = classnames(
  position('md:absolute'),
  inset('xl:-right-28', 'right-0', 'top-3/4')
)
const futureBox = classnames(
  display('flex'),
  flexDirection('md:flex-row', 'flex-col-reverse'),
  alignItems('items-center'),
  justifyContent('justify-end'),
  space('space-x-4')
)
const textBlock = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('md:items-start', 'items-center'),
  wordBreak('break-words'),
  textAlign('md:text-left', 'text-center'),
  width('lg:w-max', 'w-80')
)
const bigWhaleStyles = classnames(
  height('sm:h-auto', 'h-max'),
  maxWidth('md:max-w-full', 'max-w-2xl'),
  overflow('overflow-clip'),
  margin('md:m-0', 'ml-24'),
  scale('md:scale-100', 'scale-125')
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
  inset('md:top-12', 'md:-right-1/4', '-bottom-11', 'left-64'),
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
      <img src="/img/gem.webp" className={leftGem} />
      <img src="/img/gem.webp" className={rightGem} />
      <div className={ironSphere}>
        <IronSphere />
      </div>

      <img src="/img/colorful-whale.webp" className={bigWhaleStyles} />

      <div className={futureBoxWrapper}>
        <div className={futureBox}>
          <DownArrows />
          <div className={textBlock}>
            <FoldText>We’re building the future</FoldText>
            <FoldText>of pseudonymity</FoldText>
          </div>
        </div>
      </div>
    </div>
  )
}
