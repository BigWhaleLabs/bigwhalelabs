import { LargeStrokeText } from 'components/Text'
import { PrivacyWorldBackground } from 'components/Backgrounds'
import { useInView } from 'react-intersection-observer'
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
  const { inView, ref } = useInView({ threshold: 0.4 })

  return (
    <div className={privacyWorld} ref={ref}>
      <LargeStrokeText>
        We’re dedicated to building a pseudonymous WORLD WHERE privacy and
        identity are owned by the human, not the corporation.
      </LargeStrokeText>
      <PrivacyWorldBackground inView={inView} />
    </div>
  )
}
