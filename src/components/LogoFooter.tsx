import { LinkText } from 'components/Text'
import { displayFrom, displayTo } from 'helpers/visibilityClassnames'
import { useInView } from 'react-intersection-observer'
import Background, { BackgroundsAnimated } from 'components/Background'
import Button from 'components/Button'
import Logo from 'components/Logo'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  margin,
  position,
  space,
  zIndex,
} from 'classnames/tailwind'

const Backgrounds = ({ inView }: { inView: boolean }) => (
  <BackgroundsAnimated inView={inView}>
    <div className={displayFrom('md')}>
      <Background
        width={1200}
        height={500}
        background="#0034EB"
        bottom={-80}
        left={-100}
      />
      <Background
        width={1900}
        height={750}
        background="#00F3F9"
        bottom={-80}
        left={-350}
        blur={100}
      />
    </div>
    <div className={displayTo('md')}>
      <Background
        width={800}
        height={800}
        background="#0034EB"
        bottom={-150}
        left={20}
      />
      <Background
        width={1000}
        height={750}
        background="#00F3F9"
        bottom={-175}
        left={-150}
        blur={100}
      />
    </div>
  </BackgroundsAnimated>
)

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  position('relative'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-10'),
  margin('md:mt-116', 'mt-48'),
  zIndex('z-10')
)
const linksContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  space('space-x-8')
)

export default function () {
  const { ref, inView } = useInView({ threshold: 0.4 })

  return (
    <div className={wrapper} ref={ref}>
      <Logo large />
      <Button outlined url="https://discord.gg/NHk96pPZUV">
        Join our Discord
      </Button>
      <div className={linksContainer}>
        <LinkText url="https://dosu.io">Dosu</LinkText>
        <LinkText url="https://sealcred.xyz">SealCred</LinkText>
        <LinkText url="https://blog.bigwhalelabs.com">Blog</LinkText>
        <LinkText tertiary url="https://twitter.com/bigwhalelabs">
          <Twitter />
        </LinkText>
      </div>
      <Backgrounds inView={inView} />
    </div>
  )
}
