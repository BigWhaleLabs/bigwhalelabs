import { AccentText } from 'components/Text'
import { displayFrom, displayTo } from 'helpers/visibilityClassnames'
import Background from 'components/Background'
import ProjectBlock from 'components/Projects/ProjectBlock'
import SealcasterLogo from 'icons/SealcasterLogo'

const Backgrounds = () => (
  <>
    <div className={displayFrom('lg')}>
      <Background
        width={1500}
        height={1000}
        background="#8349FF"
        bottom={-75}
        left={30}
        rotate={10}
        blur={50}
      />
    </div>
    <div className={displayTo('lg')}>
      <Background
        width={1500}
        height={1000}
        background="#8349FF"
        bottom={-75}
        left={0}
        rotate={10}
        blur={50}
      />
    </div>
  </>
)

const SealcasterDescription = () => (
  <>
    <AccentText color="text-quaternary">Sealcaster</AccentText> allows users of
    Farcaster to cast on the platform 100% anonymously.
  </>
)

export default function () {
  return (
    <ProjectBlock
      logo={<SealcasterLogo />}
      titleColor="text-quaternary"
      titleText="Sealcaster"
      subtitle="Cast anonymously on Farcaster using a ZK burner wallet"
      description={<SealcasterDescription />}
      buttonTitle="Build your burner wallet"
      buttonUrl="https://sealcaster.xyz/"
      imageSource="img/sealcaster-badge.svg"
      additionalBackground={<Backgrounds />}
    />
  )
}
