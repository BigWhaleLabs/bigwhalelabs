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
  alignItems,
  display,
  flexDirection,
  height,
  inset,
  justifyContent,
  margin,
  maxWidth,
  padding,
  position,
  space,
  width,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'
import useScrollPosition from 'hooks/useScrollPosition'
import useScrollPercent from 'hooks/useScrollPercent'

const phoneButtonWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-4'),
  margin('mt-4'),
  padding('px-3')
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
  flexDirection('lg:flex-row', 'flex-col'),
  justifyContent('lg:justify-between'),
  width('lg:w-3/4', 'w-full'),
  margin('lg:mt-80', 'mt-36'),
  space('lg:space-y-0', 'space-y-32'),
  alignItems('items-center')
)

const card = classnames(
  margin('mx-4'),
  space('space-y-2'),
  maxWidth('max-w-400'),
  position('sticky'),
  inset('left-32', 'top-1/4')
)
const cardHeader = space('space-y-4')
const cardBody = space('space-y-6')
const pseudoSuitWrapper = classnames(
  width('w-auto'),
  maxWidth('max-w-400'),
  height('h-auto'),
  margin('lg:mt-0', 'mt-32')
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
            Privacy-preserving social protocol built with ZK soul-bound NFTs
          </HeaderText>
          <BodyText>
            <AccentText color="text-accent">SealCred</AccentText> allows you to
            experience the world pseudonymously with zero knowledge verified
            NFTs. This means you can prove credentials, ownership, or facts
            without them tracing back to you.
          </BodyText>
          <Button outlined url="https://sealcred.xyz/">
            Get started
          </Button>
        </div>
      </div>

      <div className={pseudoSuitWrapper}>
        <SealCredAnimation />
        {onlyPhones && <PhoneGetStarted />}
      </div>
    </div>
  )
}
