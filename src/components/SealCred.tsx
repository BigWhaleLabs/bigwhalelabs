import { AccentText, BodyText } from 'components/Text'
import Button from 'components/Button'
import ProjectBlock from 'components/Projects/ProjectBlock'
import SealCredAnimation from 'components/SealCredAnimation'
import SealCredLogo from 'icons/SealCredLogo'
import classnames, {
  alignItems,
  alignSelf,
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
  zIndex,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

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

const blockWrapper = classnames(
  display('flex'),
  flexDirection('lg:flex-row', 'flex-col'),
  justifyContent('lg:justify-between'),
  width('lg:w-3/4', 'w-full'),
  margin('lg:mt-80', 'mt-36'),
  space('lg:space-y-0', 'space-y-32'),
  alignItems('items-center'),
  zIndex('z-10')
)

const card = classnames(
  margin('mx-4'),
  space('space-y-2'),
  maxWidth('max-w-400'),
  position('lg:sticky'),
  inset('lg:top-1/5'),
  alignSelf('lg:self-start')
)
const pseudoSuitWrapper = classnames(
  width('w-auto'),
  maxWidth('max-w-400'),
  height('h-auto'),
  margin('lg:mt-0', 'mt-32')
)

const SealCredDescription = () => (
  <>
    <AccentText color="text-accent">SealCred</AccentText> allows you to
    experience the world pseudonymously with zero knowledge verified NFTs. This
    means you can prove credentials, ownership, or facts without them tracing
    back to you.
  </>
)

export default function () {
  const { onlyPhones } = useBreakpoints()

  return (
    <div className={blockWrapper}>
      <div className={card}>
        <ProjectBlock
          logo={<SealCredLogo />}
          titleColor="text-accent"
          titleText="SealCred"
          subtitle="Privacy-preserving social protocol built with ZK soul-bound NFTs"
          description={<SealCredDescription />}
          buttonTitle="Get started"
          buttonUrl="https://sealcred.xyz/"
          wrapReverse
        />
      </div>

      <div className={pseudoSuitWrapper}>
        <SealCredAnimation />
        {onlyPhones && <PhoneGetStarted />}
      </div>
    </div>
  )
}
