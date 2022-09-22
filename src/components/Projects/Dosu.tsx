import { AccentText, BodyText } from 'components/Text'
import DosuGraphicsBlock from 'components/DosuGraphicsBlock'
import ProjectBlock from 'components/Projects/ProjectBlock'

export default function () {
  return (
    <ProjectBlock
      titleColor="text-primary"
      titleText="Dosu"
      subtitle="Socialize pseudonymously with ZK badges"
      description={
        <BodyText>
          <AccentText color="text-primary">Dosu</AccentText> will be a
          pseudonymous social network where you can share your thoughts with the
          world.
        </BodyText>
      }
      buttonTitle="Join Discord for updates"
      buttonUrl="https://discord.gg/NHk96pPZUV"
      imageElement={<DosuGraphicsBlock />}
      wrapReverse
    />
  )
}
