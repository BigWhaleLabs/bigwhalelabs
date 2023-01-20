import { LinkText } from 'components/Text'
import { LogoFooterBackground } from 'components/Backgrounds'
import { useInView } from 'react-intersection-observer'
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
        <LinkText url="https://ketl.xyz">Ketl</LinkText>
        <LinkText url="https://sealcred.xyz">SealCred</LinkText>
        <LinkText url="https://blog.bigwhalelabs.com">Blog</LinkText>
        <LinkText tertiary url="https://twitter.com/bigwhalelabs">
          <Twitter />
        </LinkText>
      </div>
      <LogoFooterBackground inView={inView} />
    </div>
  )
}
