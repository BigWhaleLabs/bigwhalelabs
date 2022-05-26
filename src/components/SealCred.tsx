import {
  AccentText,
  BodyText,
  HeaderText,
  PrimaryAccentText,
} from 'components/Text'
import Button from 'components/Button'
import SealCredLogo from 'icons/SealCredLogo'
import classnames, { maxWidth, space } from 'classnames/tailwind'

const card = classnames(space('space-y-2'), maxWidth('max-w-400'))
const cardHeader = space('space-y-4')
const cardBody = space('space-y-6')

export default function () {
  return (
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
        <Button outlined>Get started</Button>
      </div>
    </div>
  )
}
