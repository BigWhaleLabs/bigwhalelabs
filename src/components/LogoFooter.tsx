import { LinkText } from 'components/Text'
import Background from 'components/Background'
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

const Backgrounds = () => (
  <>
    <Background
      width={1200}
      height={500}
      background="#0034EB"
      bottom={-100}
      left={-100}
    />
    <Background
      width={1900}
      height={750}
      background="#00F3F9"
      bottom={-105}
      left={-350}
      blur={100}
    />
  </>
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
  return (
    <div className={wrapper}>
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
      <Backgrounds />
    </div>
  )
}
