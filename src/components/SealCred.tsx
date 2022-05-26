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
} from 'classnames/tailwind'
import SealCredAnimation from 'components/SealCredAnimation'

const card = classnames(space('space-y-2'), maxWidth('max-w-400'))
const sealCredBlock = classnames(
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  justifyContent('justify-between'),
  space('space-y-32'),
  margin('mb-72')
)

export default function () {
  return (
    <div className={sealCredBlock}>
      <div className={card}>
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
