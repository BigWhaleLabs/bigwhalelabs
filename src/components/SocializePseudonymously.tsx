import { HeaderText } from 'components/Text'
import Button from 'components/Button'
import Card from 'components/Card'
import DosuCity from 'icons/DosuCity'
import classnames, { margin, space, width } from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const cardBody = classnames(
  space('space-y-4', '2xl:space-y-6'),
  width('2xl:w-334'),
  margin('2xl:m-12')
)

export default function () {
  const { twoXl, lg, md } = useBreakpoints()
  return (
    <Card bigSpace>
      <div className={cardBody}>
        <HeaderText textSize={twoXl || lg || md ? 'base' : 'small'}>
          Socialize pseudonymously using ZK badges
        </HeaderText>
        <Button outlined>Learn about Dosu</Button>
      </div>
      <DosuCity />
    </Card>
  )
}
