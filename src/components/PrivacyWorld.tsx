import { LargeStrokeText } from 'components/Text'
import SectionBackground from 'components/SectionBackground'
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
  return (
    <div className={privacyWorld}>
      <LargeStrokeText>
        We’re dedicated to building a pseudonymous WORLD WHERE privacy and
        identity are owned by the human, not the corporation.
      </LargeStrokeText>
      <SectionBackground
        width={2759}
        height={744}
        background="#00F3F9"
        bottom={0}
        left={-50}
        rotate={23}
      />
    </div>
  )
}
