import { AccentText } from 'components/Text'
import { displayFrom, displayTo } from 'helpers/visibilityClassnames'
import Background from 'components/Background'
import EchoLogo from 'icons/EchoLogo'
import ProjectBlock from 'components/Projects/ProjectBlock'

const Backgrounds = () => (
  <>
    <div className={displayFrom('md')}>
      <Background
        width={750}
        height={500}
        background="#0013FF"
        bottom={-20}
        left={0}
        rotate={-30}
        blur={40}
      />
      <Background
        width={900}
        height={500}
        background="#8349FF"
        bottom={30}
        left={10}
        rotate={-30}
        blur={40}
      />
      <Background
        width={500}
        height={300}
        background="#FFCDFF"
        bottom={70}
        left={40}
        blur={80}
      />
      <Background
        width={800}
        height={550}
        background="#FF0095"
        bottom={20}
        left={50}
        rotate={30}
        blur={120}
      />
    </div>
    <div className={displayTo('md')}>
      <Background
        width={600}
        height={400}
        background="#FF0095"
        bottom={20}
        left={0}
        rotate={-30}
        blur={80}
      />
      <Background
        width={600}
        height={400}
        background="#8349FF"
        bottom={0}
        left={-50}
        rotate={30}
        blur={40}
      />
    </div>
  </>
)

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
      logo={<EchoLogo />}
      titleColor="text-secondary"
      titleText="Echo"
      subtitle="Tweet anonymously using your ZK badges"
      description={<EchoDescription />}
      buttonUrl="https://echo.sealcred.xyz/"
      buttonTitle="Create an Echo"
      imageSource="img/echo-badge.svg"
      customGlareBorderRadius="5% 5% 46% 46%"
      additionalBackground={<Backgrounds />}
      wrapReverse
    />
  )
}
