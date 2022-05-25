import { LogoText } from 'components/Text'
import Whale from 'icons/Whale'
import classnames, {
  alignItems,
  display,
  justifyContent,
  space,
  whitespace,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const logoContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  space('space-x-1', 'lg:space-x-2'),
  whitespace('whitespace-pre-line')
)

export default function () {
  const { xs } = useBreakpoints()
  return (
    <div className={logoContainer}>
      {!xs && (
        <LogoText>{`big
          whale
          labs`}</LogoText>
      )}
      <Whale />
    </div>
  )
}
