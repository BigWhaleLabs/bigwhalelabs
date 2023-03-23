import { AccentText } from 'components/Text'
import { EchoBackground } from 'components/Backgrounds'
import EchoBadge from 'components/Badges/EchoBadge'
import EchoLogo from 'icons/EchoLogo'
import ProjectBlock from 'components/Projects/ProjectBlock'

const EchoDescription = () => (
  <>
    <AccentText color="text-accent">SealCred</AccentText>{' '}
    <AccentText color="text-secondary">| Echo</AccentText> allows you to spill
    the tea using a pseudonymous identity built from your ZK badges. Imagine
    creating a ZK badge of your work email and tweeting 100% anonymously O_O
  </>
)

export default function () {
  return (
    <ProjectBlock
      wrapReverse
      additionalBackground={<EchoBackground />}
      buttonTitle="Create an Echo"
      buttonUrl="https://echo.sealcred.xyz/"
      customGlareBorderRadius="10% 10% 45% 45%"
      description={<EchoDescription />}
      imageElement={<EchoBadge />}
      logo={<EchoLogo />}
      subtitle="Tweet anonymously using your ZK badges"
      titleColor="text-secondary"
      titleText="Echo"
    />
  )
}
