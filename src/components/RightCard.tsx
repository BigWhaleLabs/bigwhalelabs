import { ComponentChild } from 'preact'
import { HeaderText } from 'components/Text'
import Button from 'components/Button'
import Card from 'components/Card'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  space,
} from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const container = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('md:space-x-12', 'space-y-12', 'md:space-y-0')
)
const textAndButton = space('space-y-6')
export default function ({
  buttonText,
  icon,
  reverse,
  reverseBelowMedium,
  text,
  url,
}: {
  reverse?: boolean
  icon: ComponentChild
  text: string
  buttonText: string
  url: string
  reverseBelowMedium?: boolean
}) {
  const { lg, md } = useBreakpoints()

  const cardOnTop =
    (!reverse && md) ||
    (reverse && reverseBelowMedium && !md) ||
    (!reverse && !reverseBelowMedium)

  return (
    <Card>
      <div className={container}>
        {cardOnTop && icon}
        <div className={textAndButton}>
          <HeaderText textSize={lg ? 'base' : 'small'}>{text}</HeaderText>
          <Button outlined url={url}>
            {buttonText}
          </Button>
        </div>
        {!cardOnTop && <div>{icon}</div>}
      </div>
    </Card>
  )
}
