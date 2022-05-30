import { HeaderText } from 'components/Text'
import Button from 'components/Button'
import Card from 'components/Card'
import DosuCity from 'icons/DosuCity'
import classnames, { margin, space, width } from 'classnames/tailwind'

const cardBody = classnames(
  space('space-y-6'),
  width('2xl:w-334'),
  margin('2xl:m-12')
)

export default function () {
  return (
    <Card bigSpace>
      <div className={cardBody}>
        <HeaderText textSize="base">
          Socialize pseudonymously using ZK badges
        </HeaderText>
        <Button outlined>Learn about Dosu</Button>
      </div>
      <DosuCity />
    </Card>
  )
}
