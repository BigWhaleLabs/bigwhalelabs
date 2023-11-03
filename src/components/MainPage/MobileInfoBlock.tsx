import { BodyText } from 'components/Text'
import BwlLinks from 'components/BwlLinks'
import QuoteBlock from 'components/QuoteBlock'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
  margin,
  width,
} from 'classnames/tailwind'

const hideOnBig = display('md:hidden')
const wrapper = classnames(hideOnBig, margin('mb-8'))
const crystal = classnames(
  width('w-full'),
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  margin('my-8'),
  hideOnBig
)
const quoteWrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-y-4')
)
const links = classnames(
  display('flex'),
  flexDirection('flex-row'),
  gap('gap-x-2')
)

export default function () {
  return (
    <>
      <div className={crystal}>
        <img src="/img/crystal.png" width={16} />
      </div>
      <div className={wrapper}>
        <QuoteBlock small>
          <div className={quoteWrapper}>
            <BodyText>Learn more or reach out</BodyText>
            <div className={links}>
              <BwlLinks />
            </div>
          </div>
        </QuoteBlock>
      </div>
    </>
  )
}
