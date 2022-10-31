import { AccentText } from 'components/Text'
import Background from 'components/Background'
import DosuGraphicsBlock from 'components/DosuGraphicsBlock'
import ProjectBlock from 'components/Projects/ProjectBlock'

const DosuDescription = () => (
  <>
    <AccentText color="text-primary">Dosu</AccentText> will be a pseudonymous
    social network where you can share your thoughts with the world.
  </>
)

const Backgrounds = () => (
  <>
    <Background
      width={400}
      height={560}
      background="#FF0095"
      bottom={0}
      left={-15}
      blur={120}
    />
    <Background
      width={500}
      height={300}
      background="#FFCDFF"
      bottom={0}
      left={-10}
      blur={100}
    />
    <Background
      width={900}
      height={500}
      background="#8349FF"
      bottom={10}
      left={-5}
      rotate={-30}
      blur={100}
    />
    <Background
      width={700}
      height={400}
      background="#0013FF"
      bottom={20}
      left={20}
      rotate={-10}
      blur={100}
    />
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
      additionalBackground={<Backgrounds />}
      centered
      wrapReverse
    />
  )
}
