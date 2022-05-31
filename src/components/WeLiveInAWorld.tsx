import { AccentText, BodyText, HeaderText } from 'components/Text'
import { space } from 'classnames/tailwind'
import Card from 'components/Card'
import PrismOrb from 'icons/PrismOrb'
import useBreakpoints from 'hooks/useBreakpoints'

const cardBody = space('space-y-4', '2xl:space-y-6')

export default function () {
  const { twoXl, lg, md } = useBreakpoints()
  return (
    <Card tall>
      <div className={cardBody}>
        <HeaderText textSize={twoXl ? undefined : lg || md ? 'base' : 'small'}>
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
