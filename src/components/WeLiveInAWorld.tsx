import { AccentText, BodyText, HeaderText } from 'components/Text'
import { space } from 'classnames/tailwind'
import Card from 'components/Card'
import PrismOrb from 'components/PrismOrb'

const cardBody = space('space-y-6')

export default function () {
  return (
    <Card tall bigSpace>
      <div className={cardBody}>
        <HeaderText>
          We live in a world where privacy is limited and our digital footprints
          are not ours to control.
        </HeaderText>
        <BodyText bold large>
          <AccentText color="text-primary">We're changing that.</AccentText>
        </BodyText>
      </div>
      <PrismOrb />
    </Card>
  )
}
