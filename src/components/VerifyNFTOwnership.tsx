import { HeaderText } from 'components/Text'
import Button from 'components/Button'
import Card from 'components/Card'
import OrbYellow from 'icons/OrbYellow'
import SealBig from 'components/SealBig'
import classnames, { space } from 'classnames/tailwind'

const orbSeal = classnames()
const cardBody = space('space-y-6')

export default function () {
  return (
    <Card nospace>
      <div className={orbSeal}>
        <OrbYellow />
        <SealBig />
      </div>
      <div className={cardBody}>
        <HeaderText>Verify NFT ownership while remaining anonymous</HeaderText>
        <Button>Do this with SealCred</Button>
      </div>
    </Card>
  )
}
