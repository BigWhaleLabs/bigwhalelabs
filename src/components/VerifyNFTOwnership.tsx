import { HeaderText } from 'components/Text'
import Button from 'components/Button'
import Card from 'components/Card'
import OrbSeal from 'components/OrbSeal'
import classnames, { margin, space, width } from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const cardBody = classnames(
  space('space-y-4', '2xl:space-y-6'),
  width('2xl:w-334'),
  margin('2xl:ml-19.5', '2xl:my-12', '2xl:mr-12')
)

export default function () {
  const { twoXl, lg, md } = useBreakpoints()

  return (
    <Card>
      <OrbSeal />
      <div className={cardBody}>
        <HeaderText textSize={twoXl || lg || md ? 'base' : 'small'}>
          Verify NFT ownership while remaining anonymous
        </HeaderText>
        <Button outlined>Do this with SealCred</Button>
      </div>
    </Card>
  )
}
