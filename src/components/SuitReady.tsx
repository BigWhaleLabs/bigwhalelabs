import { AccentText, PlainText } from 'components/Text'
import { useInView } from 'react-intersection-observer'
import classnames, {
  alignItems,
  animation,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  height,
  opacity,
  padding,
  space,
  transitionDuration,
  transitionProperty,
  whitespace,
  width,
} from 'classnames/tailwind'

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
const textBlockWrapper = (visible: boolean) =>
  classnames(
    display('flex'),
    flexDirection('flex-col'),
    space('space-y-2'),
    opacity(visible ? 'opacity-100' : 'opacity-0'),
    transitionProperty('transition-opacity'),
    transitionDuration('duration-1000')
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
const bar = (visible: boolean) =>
  classnames(
    backgroundColor('bg-tertiary'),
    animation(visible ? 'animate-expand' : undefined),
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
  const { ref, inView } = useInView()

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
            <div className={bar(inView)} ref={ref}></div>
          </div>
          <div className={progressBar}>
            <div className={bar(inView)}></div>
          </div>
        </div>
        <div className={textBlockWrapper(inView)} ref={ref}>
          <PlainText>100% you / verified</PlainText>
          <PlainText>100% anonymous</PlainText>
        </div>
      </div>
    </div>
  )
}
