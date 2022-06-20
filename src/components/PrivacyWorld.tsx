import { LargeStrokeText } from 'components/Text'
import classnames, {
  margin,
  maxWidth,
  wordBreak,
  zIndex,
} from 'classnames/tailwind'

const privacyWorld = classnames(
  margin('md:my-60', 'mb-32', 'mt-16'),
  wordBreak('break-words'),
  maxWidth('max-w-full'),
  zIndex('z-10')
)

export default function () {
  return (
    <div className={privacyWorld}>
      <LargeStrokeText>
        We’re dedicated to building a pseudonymous WORLD WHERE privacy and
        identity are owned by the human, not the corporation.
      </LargeStrokeText>
    </div>
  )
}
