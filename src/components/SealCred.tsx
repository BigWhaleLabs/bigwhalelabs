import {
  AccentText,
  BodyText,
  HeaderText,
  PrimaryAccentText,
} from 'components/Text'
import Button from 'components/Button'
import SealCredLogo from 'icons/SealCredLogo'
import classnames, {
  alignItems,
  display,
  flexDirection,
  height,
  justifyContent,
  margin,
  maxWidth,
  space,
  width,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const phoneButtonWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-4'),
  margin('mt-4')
)
const PhoneGetStarted = () => (
  <div className={phoneButtonWrapper}>
    <BodyText center>
      With SealCred, you can build your pseudonymous wallet.
    </BodyText>
    <Button outlined url="https://sealcred.xyz/">
      Get started
    </Button>
  </div>
)

const cardWrapper = classnames(
  display('flex'),
  flexDirection('md:flex-row', 'flex-col'),
  justifyContent('md:justify-between'),
  width('md:w-3/4', 'w-full'),
  margin('md:mr-72', 'md:mt-80', 'mt-36'),
  space('md:space-y-0', 'space-y-32')
)
const card = classnames(
  margin('mx-4'),
  space('space-y-2'),
  maxWidth('max-w-400')
)
const cardHeader = space('space-y-4')
const cardBody = space('space-y-6')
const pseudoSuitWrapper = classnames(
  width('w-auto'),
  height('h-auto'),
  margin('md:mt-0', 'mt-32')
)

export default function () {
  const { onlyPhones } = useBreakpoints()

  return (
    <div className={cardWrapper}>
      <div className={card}>
        <div className={cardHeader}>
          <SealCredLogo />
          <PrimaryAccentText color="text-accent">SealCred</PrimaryAccentText>
        </div>
        <div className={cardBody}>
          <HeaderText>
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
      <div className={pseudoSuitWrapper}>
        <img src="/img/fullAnimationStatic.webp" />
        {onlyPhones && <PhoneGetStarted />}
      </div>
    </div>
  )
}
