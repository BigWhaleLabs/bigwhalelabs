import { AccentText, PlainText } from 'components/Text'
import classnames, {
  alignItems,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  height,
  padding,
  space,
  whitespace,
  width,
} from 'classnames/tailwind'
import useScrollPercent from 'hooks/useScrollPercent'

const wrapper = classnames(
  display('flex'),
  alignItems('items-center'),
  whitespace('whitespace-pre-line'),
  space('space-x-3')
)
const progress = classnames(
  display('flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  space('space-x-2')
)
const textBlockWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  space('space-y-2')
)
const progressBarWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  space('space-y-2')
)
const progressBar = classnames(
  borderColor('border-primary-semi-dimmed'),
  borderWidth('border'),
  borderRadius('rounded-sm'),
  padding('p-1'),
  height('h-4'),
  width('w-32')
)
const bar = classnames(
  backgroundColor('bg-tertiary'),
  width('w-full'),
  height('h-full')
)
const separator = classnames(
  height('h-9'),
  width('w-0.5'),
  borderRadius('rounded-xl'),
  backgroundColor('bg-primary-semi-dimmed')
)

export default function () {
  const scroll = useScrollPercent()

  return (
    <div className={wrapper}>
      <PlainText position="text-right">
        <AccentText color="text-tertiary">{`Pseudonymous
        suit ready`}</AccentText>
      </PlainText>
      <div className={separator}></div>
      <div className={progress}>
        <div className={progressBarWrapper}>
          <div className={progressBar}>
            <div
              className={bar}
              style={{
                animationName: 'progressAnimation',
                animationTimingFunction: 'ease-in-out',
                animationDuration: '1s',
                animationDirection: 'linear',
                animationPlayState: 'paused',
                animationDelay: `calc(${scroll} * -1s)`,
                animationIterationCount: 1,
                animationFillMode: 'both',
              }}
            ></div>
          </div>
          <div className={progressBar}>
            <div
              className={bar}
              style={{
                animationName: 'progressAnimation',
                animationTimingFunction: 'ease-in-out',
                animationDuration: '1s',
                animationDirection: 'linear',
                animationPlayState: 'paused',
                animationDelay: `calc(${scroll} * -1s)`,
                animationIterationCount: 1,
                animationFillMode: 'both',
              }}
            ></div>
          </div>
        </div>
        <div
          className={textBlockWrapper}
          style={{
            animationName: 'progressAnimationComplete',
            animationTimingFunction: 'ease-in-out',
            animationDuration: '1s',
            animationDirection: 'linear',
            animationPlayState: 'paused',
            animationDelay: `calc(${scroll} * -1s)`,
            animationIterationCount: 1,
            animationFillMode: 'both',
          }}
        >
          <PlainText>100% you / verified</PlainText>
          <PlainText>100% anonymous</PlainText>
        </div>
      </div>
    </div>
  )
}
