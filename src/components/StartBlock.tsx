import { FoldText } from 'components/Text'
import DownArrows from 'components/DownArrows'
import classnames, {
  display,
  flexDirection,
  inset,
  justifyContent,
  position,
  space,
} from 'classnames/tailwind'

const futureTextWrapper = classnames(
  position('absolute'),
  inset('-right-28', 'top-3/4')
)
const futureTextBox = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-end'),
  space('space-x-4')
)
const textBlock = classnames(display('flex'), flexDirection('flex-col'))

export default function () {
  return (
    <div className={position('relative')}>
      <img width="933" height="766" src="/img/colorful-whale.webp" />
      <div className={futureTextWrapper}>
        <div className={futureTextBox}>
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
