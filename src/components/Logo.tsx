import LogoText from 'components/Text'
import Whale from 'icons/Whale'
import classnames, {
  alignItems,
  display,
  justifyContent,
  space,
  whitespace,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const container = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  space('space-x-2'),
  whitespace('whitespace-pre-line')
)
export default function ({ large }: { large?: boolean }) {
  const { xs } = useBreakpoints()

  return (
    <span className={container}>
      {large || (!large && !xs) ? (
        <LogoText large={large}>{`big\nwhale\nlabs`}</LogoText>
      ) : null}
      <Whale large={large} />
    </span>
  )
}
