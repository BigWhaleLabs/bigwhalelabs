import { FoldText } from 'components/Text'
import DownArrows from 'components/DownArrows'
import classnames, {
  alignItems,
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
  width,
} from 'classnames/tailwind'

const wrapperBox = classnames(
  position('relative'),
  overflow('overflow-hidden'),
  width('md:w-fit', 'w-screen')
)
const futureBoxWrapper = classnames(
  position('md:absolute'),
  inset('-right-28', 'top-3/4')
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
  alignItems('md:items-start', 'items-center')
)
const imageStyles = classnames(
  height('sm:h-auto', 'h-max'),
  maxWidth('md:max-w-full', 'max-w-2xl'),
  overflow('overflow-clip'),
  margin('md:m-0', 'ml-24'),
  scale('md:scale-100', 'scale-125')
)

export default function () {
  return (
    <div className={wrapperBox}>
      <img width="933" src="/img/colorful-whale.webp" className={imageStyles} />
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
