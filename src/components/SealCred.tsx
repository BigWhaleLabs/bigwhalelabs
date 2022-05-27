import {
  AccentText,
  BodyText,
  HeaderText,
  PrimaryAccentText,
} from 'components/Text'
import Button from 'components/Button'
import SealCredAnimation from 'components/SealCredAnimation'
import SealCredLogo from 'icons/SealCredLogo'
import classnames, {
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
  space,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
import useScrollPercent from 'hooks/useScrollPercent'

const card = classnames(space('space-y-2'), maxWidth('max-w-400'))
const sealCredBlock = classnames(
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  justifyContent('justify-between'),
  space('space-y-32'),
  margin('mb-72')
)

const cardStyles = (scroll: number) => ({
  animationName: 'slideDownCard',
  animationTimingFunction: 'ease-in-out',
  animationDuration: '1s',
  animationDirection: 'linear',
  animationPlayState: 'paused',
  animationDelay: `calc(${scroll} * -1s)`,
  animationIterationCount: 1,
  animationFillMode: 'both',
})

export default function () {
  const { tablet } = useBreakpoints()
  const scroll = useScrollPercent()

  return (
    <div className={sealCredBlock}>
      <div className={card} style={!tablet ? cardStyles(scroll) : ''}>
        <div className={space('space-y-4')}>
          <SealCredLogo />
          <PrimaryAccentText color="text-accent">SealCred</PrimaryAccentText>
        </div>
        <div className={space('space-y-6')}>
          <HeaderText small>
            Verify NFT ownership while remaining anonymous with ZK badges.
          </HeaderText>
          <BodyText>
            <AccentText color="text-accent">SealCred</AccentText> allows you to
            experience the world pseudonymously with zero knowledge proof (zk
            badges). This means you can prove ownership of an NFT without it
            tracing back to you.
          </BodyText>
          <Button outlined>Get started</Button>
        </div>
      </div>
      <SealCredAnimation />
    </div>
  )
}
