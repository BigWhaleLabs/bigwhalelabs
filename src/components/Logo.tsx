import LogoText from 'components/Text'
import Whale from 'icons/Whale'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  space,
  whitespace,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const container = classnames(
  display('flex'),
  flexDirection('flex-col', 'tiny:flex-row'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  space('space-y-2', 'tiny:space-y-0', 'tiny:space-x-2'),
  whitespace('whitespace-pre-line')
)
export default function ({ large }: { large?: boolean }) {
  const { xs } = useBreakpoints()

  return (
    <span className={container}>
      {large || !xs ? (
        <LogoText large={large}>{`big\nwhale\nlabs`}</LogoText>
      ) : null}
      <Whale large={large} />
    </span>
  )
}
