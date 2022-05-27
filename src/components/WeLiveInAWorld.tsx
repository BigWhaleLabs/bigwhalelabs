import { AccentText, BodyText, HeaderText } from 'components/Text'
import PyramidSphere from 'components/PyramidSphere'
import classnames, { maxWidth, space } from 'classnames/tailwind'

const card = classnames(space('space-y-2'), maxWidth('max-w-400'))
const cardBody = space('space-y-6')

export default function () {
  return (
    <div className={card}>
      <div className={cardBody}>
        <HeaderText>
          We live in a world where privacy is limited and our digital footprints
          are not ours to control.
        </HeaderText>
        <AccentText color="text-accent">We're changing that.</AccentText>
      </div>
      <PyramidSphere />
    </div>
  )
}
