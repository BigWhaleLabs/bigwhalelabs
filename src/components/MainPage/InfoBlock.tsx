import { LinkText } from 'components/Text'
import { ketlUrl } from 'helpers/constants'
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
      <QuoteBlock small>
        We eliminate information asymmetry by creating open-source distributed,
        anonymous communities of verified individuals using
        cryptographically-secure credentials.
      </QuoteBlock>
      <QuoteBlock>
        Check out our current product:{' '}
        <LinkText inline url={ketlUrl}>
          ketl.xyz
        </LinkText>{' '}
        for founders and vcs.
      </QuoteBlock>
    </div>
  )
}
