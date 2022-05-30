import { HeaderText } from 'components/Text'
import Button from 'components/Button'
import Card from 'components/Card'
import OrbSeal from 'components/OrbSeal'
import classnames, { margin, space, width } from 'classnames/tailwind'

const cardBody = classnames(
  space('space-y-6'),
  width('w-334'),
  margin('ml-19.5', 'my-12', 'mr-12')
)

export default function () {
  return (
    <Card>
      <OrbSeal />
      <div className={cardBody}>
        <HeaderText textSize="base">
          Verify NFT ownership while remaining anonymous
        </HeaderText>
        <Button outlined>Do this with SealCred</Button>
      </div>
    </Card>
  )
}
