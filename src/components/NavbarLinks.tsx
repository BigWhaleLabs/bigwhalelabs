import { LinkText } from 'components/Text'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  padding,
  space,
} from 'classnames/tailwind'

const navLinkContainer = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  space('space-y-10', 'md:space-y-0', 'md:space-x-4', 'lg:space-x-12'),
  padding('py-10', 'md:py-0')
)

export default function () {
  return (
    <div className={navLinkContainer}>
      <LinkText url="https://ketl.xyz">Ketl</LinkText>
      <LinkText url="https://sealcred.xyz">SealCred</LinkText>
      <LinkText url="https://blog.bigwhalelabs.com/">Blog</LinkText>
      <LinkText url="https://twitter.com/bigwhalelabs" tertiary>
        <Twitter />
      </LinkText>
    </div>
  )
}
