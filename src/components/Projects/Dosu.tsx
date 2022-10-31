import { AccentText } from 'components/Text'
import { DosuBackground } from 'components/Backgrounds'
import DosuGraphicsBlock from 'components/DosuGraphicsBlock'
import ProjectBlock from 'components/Projects/ProjectBlock'

const DosuDescription = () => (
  <>
    <AccentText color="text-primary">Dosu</AccentText> will be a pseudonymous
    social network where you can share your thoughts with the world.
  </>
)

export default function () {
  return (
    <ProjectBlock
      titleColor="text-primary"
      titleText="Dosu"
      subtitle="Socialize pseudonymously with ZK badges"
      description={<DosuDescription />}
      buttonTitle="Join Discord for updates"
      buttonUrl="https://discord.gg/NHk96pPZUV"
      imageElement={<DosuGraphicsBlock />}
      additionalBackground={<DosuBackground />}
      centered
      wrapReverse
    />
  )
}
