import { HeaderText } from 'components/Text'
import { space } from 'classnames/tailwind'
import Button from 'components/Button'
import Card from 'components/Card'
import OrbSeal from 'components/OrbSeal'

const cardBody = space('space-y-6')

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
