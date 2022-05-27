import {
  AccentText,
  BodyText,
  HeaderText,
  PrimaryAccentText,
} from 'components/Text'
import Button from 'components/Button'
import GemBlock from 'components/GemBlock'
import classnames, {
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
  space,
} from 'classnames/tailwind'

const card = classnames(space('space-y-2'), maxWidth('max-w-400'))
const cardBody = space('space-y-6')
const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  justifyContent('justify-between'),
  space('space-y-32'),
  margin('mb-72')
)

export default function () {
  return (
    <div className={wrapper}>
      <GemBlock />
      <div className={card}>
        <PrimaryAccentText color="text-primary">Dosu</PrimaryAccentText>
        <div className={cardBody}>
          <HeaderText small>Socialize pseudonymously with ZK badges</HeaderText>
          <BodyText>
            <AccentText color="text-primary">Dosu</AccentText> will be a
            pseudonymous social network where you can share your thoughts with
            the world.
          </BodyText>
          <Button
            outlined
            url="https://discordapp.com/channels/885322567693512754/955852267557367819/974663929294913576"
          >
            Join Discord for updates
          </Button>
        </div>
      </div>
    </div>
  )
}
