import LogoText from 'components/Text'
import Whale from 'icons/Whale'
import classnames, {
  alignItems,
  display,
  justifyContent,
  space,
  whitespace,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  space('space-x-2'),
  whitespace('whitespace-pre-line')
)
export default function ({ large }: { large?: boolean }) {
  return (
    <span className={container}>
      <LogoText large={large}>{`big
whale
labs`}</LogoText>
      <Whale large={large} />
    </span>
  )
}
