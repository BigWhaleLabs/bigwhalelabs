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
  zIndex,
} from 'classnames/tailwind'

const card = classnames(space('space-y-2'), maxWidth('max-w-400'))
const cardBody = space('space-y-6')
const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  justifyContent('justify-between'),
  space('space-y-32'),
  margin('md:mt-64', 'mt-56', 'mx-4'),
  zIndex('z-10')
)

export default function () {
  return (
    <div className={wrapper}>
      <GemBlock />
      <div className={card}>
        <PrimaryAccentText color="text-primary">Dosu</PrimaryAccentText>
        <div className={cardBody}>
          <HeaderText textSize="small">
            Socialize pseudonymously with ZK badges
          </HeaderText>
          <BodyText>
            <AccentText color="text-primary">Dosu</AccentText> will be a
            pseudonymous social network where you can share your thoughts with
            the world.
          </BodyText>
          <Button outlined url="https://discord.gg/NHk96pPZUV">
            Join Discord for updates
          </Button>
        </div>
      </div>
    </div>
  )
}
