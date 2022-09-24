import { AccentText, BodyText } from 'components/Text'
import EchoLogo from 'icons/EchoLogo'
import ProjectBlock from 'components/Projects/ProjectBlock'

export default function () {
  return (
    <ProjectBlock
      logo={<EchoLogo />}
      titleColor="text-secondary"
      titleText="Echo"
      subtitle="Tweet anonymously using your ZK badges"
      description={
        <BodyText>
          <AccentText color="text-accent">SealCred</AccentText>{' '}
          <AccentText color="text-secondary">| Echo</AccentText> allows you to
          spill the tea using a pseudonymous identity built from your ZK badges.
          Imagine creating a ZK badge of your work email and tweeting 100%
          anonymously O_O
        </BodyText>
      }
      buttonUrl="https://echo.sealcred.xyz/"
      buttonTitle="Create an Echo"
      imageSource="img/echo-badge.svg"
      customGlareBorderRadius="5% 5% 46% 46%"
      wrapReverse
    />
  )
}
