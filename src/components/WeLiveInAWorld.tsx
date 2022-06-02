import { AccentText, BodyText, HeaderText } from 'components/Text'
import Card from 'components/Card'
import PrismOrb from 'icons/PrismOrb'
import classnames, {
  display,
  flexDirection,
  height,
  justifyContent,
  space,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-between'),
  height('h-full')
)
const text = space('space-y-6')
const orb = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-end')
)
export default function () {
  const { lg } = useBreakpoints()
  return (
    <Card>
      <div className={container}>
        <div className={text}>
          <HeaderText textSize={lg ? 'base' : 'small'}>
            We live in a world where privacy is limited and our digital
            footprints are not ours to control
          </HeaderText>
          <BodyText bold large>
            <AccentText color="text-primary">We're changing that</AccentText>
          </BodyText>
        </div>
        <div className={orb}>
          <PrismOrb />
        </div>
      </div>
    </Card>
  )
}
