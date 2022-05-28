import { HeaderText } from 'components/Text'
import { space } from 'classnames/tailwind'
import Button from 'components/Button'
import Card from 'components/Card'
import DosuCity from 'icons/DosuCity'

const cardBody = space('space-y-6')

export default function () {
  return (
    <Card bigSpace>
      <div className={cardBody}>
        <HeaderText small>Socialize pseudonymously using ZK badges</HeaderText>
        <Button outlined>Learn about Dosu</Button>
      </div>
      <DosuCity />
    </Card>
  )
}
