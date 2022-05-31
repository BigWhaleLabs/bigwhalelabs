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
  flexDirection('flex-row'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-x-12')
)
const textAndButton = space('space-y-6')
export default function ({
  reverse,
  icon,
  text,
  buttonText,
  url,
}: {
  reverse?: boolean
  icon: ComponentChild
  text: string
  buttonText: string
  url: string
}) {
  const { lg } = useBreakpoints()

  return (
    <Card>
      <div className={container}>
        {!reverse && icon}
        <div className={textAndButton}>
          <HeaderText textSize={lg ? 'base' : 'small'}>{text}</HeaderText>
          <Button outlined url={url}>
            {buttonText}
          </Button>
        </div>
        {reverse && icon}
      </div>
    </Card>
  )
}
