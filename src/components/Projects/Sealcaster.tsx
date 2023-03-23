import { AccentText } from 'components/Text'
import { SealcasterBackground } from 'components/Backgrounds'
import ProjectBlock from 'components/Projects/ProjectBlock'
import SealcasterLogo from 'icons/SealcasterLogo'

const SealcasterDescription = () => (
  <>
    <AccentText color="text-quaternary">Sealcaster</AccentText> allows users of
    Farcaster to cast on the platform 100% anonymously.
  </>
)

export default function () {
  return (
    <ProjectBlock
      additionalBackground={<SealcasterBackground />}
      buttonTitle="Build your burner wallet"
      buttonUrl="https://sealcaster.xyz/"
      description={<SealcasterDescription />}
      imageElement={<img src="img/sealcaster-badge.svg" />}
      logo={<SealcasterLogo />}
      subtitle="Cast anonymously on Farcaster using a ZK burner wallet"
      titleColor="text-quaternary"
      titleText="Sealcaster"
    />
  )
}
