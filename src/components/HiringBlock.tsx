import {
  AccentText,
  ExtraBoldText,
  HeaderText,
  RetroText,
} from 'components/Text'
import Button from 'components/Button'
import Line from 'components/Line'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
  padding,
  space,
  width,
} from 'classnames/tailwind'

const hiringWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  width('w-full'),
  margin('mx-auto', 'md:mt-96', 'mt-44')
)
const lineBlockWrapper = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  space('space-x-3')
)
const bottomWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  margin('mx-auto'),
  maxWidth('max-w-400'),
  padding('pt-4'),
  width('w-full', 'md:w-4/6'),
  space('space-y-6')
)

export default function () {
  return (
    <div className={hiringWrapper}>
      <RetroText>WE’RE</RetroText>
      <RetroText>BUILDING</RetroText>
      <div className={lineBlockWrapper}>
        <Line gradientDirection="to-right" />
        <ExtraBoldText extraLeading>
          <AccentText color="text-secondary" shadow="drop-shadow-secondary">
            THE
          </AccentText>
        </ExtraBoldText>
        <Line gradientDirection="to-left" />
      </div>
      <RetroText>FUTURE</RetroText>
      <div className={bottomWrapper}>
        <HeaderText textSize="small" center>
          Interested in joining the team or want to reach out?
        </HeaderText>
        <Button
          outlined
          url="hi@bwl.gg"
          onClick={() => window.open('mailto:hi@bwl.gg')}
        >
          Message us
        </Button>
      </div>
    </div>
  )
}
