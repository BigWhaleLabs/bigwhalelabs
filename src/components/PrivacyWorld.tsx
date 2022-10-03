import { LargeStrokeText } from 'components/Text'
import { useInView } from 'react-intersection-observer'
import Background from 'components/Background'
import classnames, {
  margin,
  maxWidth,
  position,
  wordBreak,
  zIndex,
} from 'classnames/tailwind'

const privacyWorld = classnames(
  position('relative'),
  margin('md:my-60', 'my-32'),
  wordBreak('break-words'),
  maxWidth('max-w-full'),
  zIndex('z-10')
)

export default function () {
  const { ref, inView } = useInView({ threshold: 0.4 })

  return (
    <div className={privacyWorld} ref={ref}>
      <LargeStrokeText>
        We’re dedicated to building a pseudonymous WORLD WHERE privacy and
        identity are owned by the human, not the corporation.
      </LargeStrokeText>
      <Background
        width={3000}
        height={1000}
        background="#00F3F9"
        bottom={0}
        left={-50}
        rotate={23}
        inView={inView}
        reversedAppear
      />
    </div>
  )
}
