import {
  AccentText,
  BodyText,
  HeaderText,
  PrimaryAccentText,
} from 'components/Text'
import Button from 'components/Button'
import SealCredLogo from 'icons/SealCredLogo'
import classnames, {
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
  space,
  width,
} from 'classnames/tailwind'
import PseudoSuit from 'icons/PseudoSuit'

const cardWrapper = classnames(
  display('flex'),
  flexDirection('md:flex-row', 'flex-col'),
  justifyContent('md:justify-between'),
  width('md:w-3/4', 'w-full'),
  margin('md:mr-72')
)
const card = classnames(
  margin('mx-4'),
  space('space-y-2'),
  maxWidth('max-w-400')
)
const cardHeader = space('space-y-4')
const cardBody = space('space-y-6')

export default function () {
  return (
    <div className={cardWrapper}>
      <div className={card}>
        <div className={cardHeader}>
          <SealCredLogo />
          <PrimaryAccentText color="text-accent">SealCred</PrimaryAccentText>
        </div>
        <div className={cardBody}>
          <HeaderText small>
            Verify NFT ownership while remaining anonymous with ZK badges.
          </HeaderText>
          <BodyText>
            <AccentText color="text-accent">SealCred</AccentText> allows you to
            experience the world pseudonymously with zero knowledge proof (zk
            badges). This means you can prove ownership of an NFT without it
            tracing back to you.
          </BodyText>
          <Button outlined url="https://sealcred.xyz/">
            Get started
          </Button>
        </div>
      </div>
      <PseudoSuit />
    </div>
  )
}
