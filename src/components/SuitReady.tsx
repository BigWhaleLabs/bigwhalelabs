import { AccentText, PlainText } from 'components/Text'
import { useInView } from 'react-intersection-observer'
import classnames, {
  alignItems,
  alignSelf,
  animation,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  flexWrap,
  height,
  margin,
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
const textBlockReveal = (visible: boolean) =>
  classnames(
    opacity(visible ? 'opacity-100' : 'opacity-0'),
    transitionProperty('transition-opacity'),
    transitionDuration('duration-1000')
  )
const rightBlockWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  space('space-y-2')
)
const barAndStatusWrapper = classnames(
  display('flex'),
  flexDirection('flex-row'),
  flexWrap('flex-wrap'),
  space('space-y-2', 'sm:space-x-2', 'sm:space-y-0')
)
const barBox = classnames(
  borderColor('border-primary-semi-dimmed'),
  borderWidth('border'),
  borderRadius('rounded-sm'),
  padding('p-1'),
  height('h-4'),
  width('w-32'),
  margin('mr-2')
)
const bar = (visible: boolean) =>
  classnames(
    backgroundColor('bg-tertiary'),
    animation(visible ? 'animate-expand' : undefined),
    width('w-full'),
    height('h-full')
  )
const separatorWrapper = classnames(display('flex'), alignSelf('self-stretch'))
const separator = classnames(
  height('h-full'),
  width('w-0.5'),
  borderRadius('rounded-xl'),
  backgroundColor('bg-primary-semi-dimmed')
)

export default function () {
  const { ref, inView } = useInView()

  return (
    <div className={wrapper} ref={ref}>
      <PlainText position="text-right">
        <AccentText color="text-tertiary">Pseudonymous suit ready</AccentText>
      </PlainText>
      <div className={separatorWrapper}>
        <div className={separator} />
      </div>
      <div className={rightBlockWrapper}>
        <div className={barAndStatusWrapper}>
          <div className={barBox}>
            <div className={bar(inView)} />
          </div>
          <div className={textBlockReveal(inView)}>
            <PlainText>100% you / verified</PlainText>
          </div>
        </div>
        <div className={barAndStatusWrapper}>
          <div className={barBox}>
            <div className={bar(inView)} />
          </div>
          <div className={textBlockReveal(inView)}>
            <PlainText>100% anonymous</PlainText>
          </div>
        </div>
      </div>
    </div>
  )
}
