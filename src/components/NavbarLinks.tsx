import { LinkText } from 'components/Text'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  backdropBlur,
  backgroundColor,
  display,
  flexDirection,
  inset,
  justifyContent,
  padding,
  position,
  space,
} from 'classnames/tailwind'

const navLinkContainer = classnames(
  position('absolute', 'md:static'),
  inset('-bottom-60', 'left-0', 'right-0'),
  display('flex', 'md:flex'),
  flexDirection('flex-col', 'md:flex-row'),
  alignItems('items-center'),
  justifyContent('justify-center', 'md:justify-between'),
  space('space-y-10', 'md:space-y-0', 'md:space-x-3', 'lg:space-x-10'),
  backgroundColor('bg-navbar', 'md:bg-transparent'),
  backdropBlur('backdrop-blur-xl', 'md:backdrop-blur-none'),
  padding('pt-6', 'pb-4', 'md:pt-0', 'md:pb-0')
)

export default function () {
  return (
    <div className={navLinkContainer}>
      <LinkText url="https://dosu.io">Dosu</LinkText>
      <LinkText url="https://sealcred.xyz">SealCred</LinkText>
      <LinkText url="https://blog.bigwhalelabs.com/">Blog</LinkText>
      <LinkText url="https://twitter.com/bigwhalelabs" tertiary>
        <Twitter />
      </LinkText>
    </div>
  )
}
