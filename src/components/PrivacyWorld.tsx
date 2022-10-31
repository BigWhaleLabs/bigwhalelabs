import { LargeStrokeText } from 'components/Text'
import { displayFrom } from 'helpers/visibilityClassnames'
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

const Backgrounds = ({ inView }: { inView: boolean }) => (
  <div className={displayFrom('md')}>
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
    <Background
      width={1000}
      height={250}
      background="#81FFD9"
      bottom={100}
      left={20}
      inView={inView}
      blur={60}
      reversedAppear
    />
    <Background
      width={2000}
      height={600}
      background="#0A34CD"
      bottom={100}
      left={-10}
      rotate={23}
      inView={inView}
      reversedAppear
    />
  </div>
)

export default function () {
  const { ref, inView } = useInView({ threshold: 0.4 })

  return (
    <div className={privacyWorld} ref={ref}>
      <LargeStrokeText>
        We’re dedicated to building a pseudonymous WORLD WHERE privacy and
        identity are owned by the human, not the corporation.
      </LargeStrokeText>
      <Backgrounds inView={inView} />
    </div>
  )
}
