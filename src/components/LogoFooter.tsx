import { LinkText } from 'components/Text'
import Button from 'components/Button'
import Logo from 'components/Logo'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  margin,
  space,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-10'),
  margin('md:mt-116', 'mt-48')
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
    </div>
  )
}
