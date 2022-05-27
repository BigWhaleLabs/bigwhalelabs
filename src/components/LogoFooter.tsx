import Button from 'components/Button'
import Logo from 'components/Logo'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  space,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-10')
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
      <Button outlined url="https://discord.gg/FW5w67yA">
        Join our Discord
      </Button>
      <div className={linksContainer}>
        <Button url="https://dosu.io">Dosu</Button>
        <Button url="https://sealcred.xyz">SealCred</Button>
        <Button url="https://blog.bigwhalelabs.com">Blog</Button>
        <Button icon url="https://twitter.com/bigwhalelabs">
          <Twitter />
        </Button>
      </div>
    </div>
  )
}
