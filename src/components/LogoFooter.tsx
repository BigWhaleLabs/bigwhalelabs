import { LogoText } from 'components/Text'
import Button from 'components/Button'
import Twitter from 'icons/Twitter'
import Whale from 'icons/Whale'
import classnames, {
  alignContent,
  alignItems,
  display,
  flexDirection,
  justifyContent,
  margin,
  space,
  width,
} from 'classnames/tailwind'

const logoFooterContainer = classnames(
  flexDirection('flex-col'),
  margin('mx-auto'),
  justifyContent('justify-center'),
  alignContent('content-center'),
  width('w-96'),
  space('space-y-10')
)

const logoContainer = classnames(
  display('inline-flex'),
  width('w-96'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-x-3')
)

const discordContainer = classnames(
  alignItems('items-center'),
  justifyContent('justify-center'),
  space('space-x-10'),
  width('w-96'),
  display('flex')
)

const linksContainer = classnames(
  display('inline-flex'),
  width('w-96'),
  flexDirection('flex-row'),
  justifyContent('justify-evenly')
)

export default function () {
  return (
    <div className={logoFooterContainer}>
      <div className={logoContainer}>
        <LogoText>
          big
          <br />
          whale
          <br />
          labs
        </LogoText>
        <Whale />
      </div>
      <div className={discordContainer}>
        <Button outlined>
          <a href="https://discord.gg/FW5w67yA" target="_blank">
            Join our Discord
          </a>
        </Button>
      </div>
      <div className={linksContainer}>
        <Button>
          <a href="https://dosu.io" target="_blank">
            Dosu
          </a>
        </Button>
        <Button>
          <a href="https://sealcred.xyz" target="_blank">
            SealCred
          </a>
        </Button>
        <Button>
          <a href="https://blog.bigwhalelabs.com/" target="_blank">
            Blog
          </a>
        </Button>
        <Button icon>
          <a href="https://twitter.com/bigwhalelabs" target="_blank">
            <Twitter />
          </a>
        </Button>
      </div>
    </div>
  )
}
