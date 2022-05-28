import { HeaderText } from 'components/Text'
import { space } from 'classnames/tailwind'
import Button from 'components/Button'
import Card from 'components/Card'
import PrismOrb from 'components/PrismOrb'

const cardBody = space('space-y-6')

export default function () {
  return (
    <Card nospace>
      <div className={cardBody}>
        <HeaderText small>Socialize pseudonymously using ZK badges</HeaderText>
        <Button>Learn about Dosu</Button>
      </div>
      <PrismOrb />
    </Card>
  )
}
