import { LinkText } from 'components/Text'
import QuoteBlock from 'components/QuoteBlock'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
  margin,
  padding,
  width,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  alignItems('items-center'),
  justifyContent('justify-center'),
  width('w-full'),
  gap('gap-y-8', 'md:gap-x-20'),
  padding('md:px-8'),
  margin('sm:mb-8', 'sm:mb-16', 'mt-16', 'md:mt-8')
)

export default function () {
  return (
    <div className={wrapper}>
      <QuoteBlock>
        Ask about our current project,{' '}
        <LinkText inline url="https://lunchbreak.com">
          Lunchbreak
        </LinkText>
        !
      </QuoteBlock>
      <QuoteBlock small>
        A Professional network worth your time. Vouch for colleagues. Earn real
        money from your expertise. Reach out to the best and brightest in your
        field.
      </QuoteBlock>
    </div>
  )
}
