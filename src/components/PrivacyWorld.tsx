import { LargeStrokeText } from 'components/Text'
import { margin } from 'classnames/tailwind'

export default function () {
  return (
    <div className={margin('ml-3', 'mr-6')}>
      <LargeStrokeText>
        We’re dedicated to building a pseudonymous WORLD WHERE privacy and
        identity are owned by the human, not the corporation.
      </LargeStrokeText>
    </div>
  )
}
