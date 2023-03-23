import { AccentText } from 'components/Text'
import { KetlBackground } from 'components/Backgrounds'
import KetlGraphicsBlock from 'components/KetlGraphicsBlock'
import ProjectBlock from 'components/Projects/ProjectBlock'

const KetlDescription = () => (
  <>
    <AccentText color="text-primary">Ketl</AccentText> will be a pseudonymous
    social network where you can share your thoughts with the world.
  </>
)

export default function () {
  return (
    <ProjectBlock
      centered
      wrapReverse
      additionalBackground={<KetlBackground />}
      buttonTitle="Join Discord for updates"
      buttonUrl="https://discord.gg/NHk96pPZUV"
      description={<KetlDescription />}
      imageElement={<KetlGraphicsBlock />}
      shouldAnimate={false}
      subtitle="Socialize pseudonymously with ZK badges"
      titleColor="text-primary"
      titleText="Ketl"
    />
  )
}
