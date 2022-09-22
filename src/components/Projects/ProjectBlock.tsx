import { BodyText, HeaderText, PrimaryAccentText } from 'components/Text'
import { JSX } from 'preact/jsx-runtime'
import Button from 'components/Button'
import classnames, {
  TTextColor,
  alignItems,
  display,
  dropShadow,
  flexDirection,
  gap,
  justifyContent,
  margin,
  space,
  width,
  zIndex,
} from 'classnames/tailwind'

type Element = JSX.Element

const wrapper = (reverse?: boolean) =>
  classnames(
    display('flex'),
    gap('gap-4'),
    flexDirection(
      { 'lg:flex-row-reverse': reverse, 'flex-col-reverse': reverse },
      'flex-col',
      'lg:flex-row'
    ),
    alignItems('items-center'),
    justifyContent('justify-evenly'),
    width('w-auto', 'md:w-full'),
    margin('mx-4'),
    zIndex('z-10')
  )

const descriptionBlock = classnames(
  display('flex'),
  flexDirection('flex-col'),
  width('w-fit', 'sm:w-96'),
  alignItems('items-start')
)
const cardHeader = space('space-y-4')
const cardBody = space('space-y-6')

export default function ({
  logo,
  titleText,
  titleColor,
  subtitle,
  description,
  buttonTitle,
  buttonUrl,
  imageElement,
  imageSource,
  wrapReverse,
}: {
  logo?: Element
  titleColor: TTextColor
  titleText: string
  subtitle: string
  description: Element
  buttonTitle: string
  buttonUrl: string
  imageElement?: Element
  imageSource?: string
  wrapReverse?: boolean
}) {
  return (
    <div className={wrapper(wrapReverse)}>
      <div className={descriptionBlock}>
        <div className={cardHeader}>
          {logo}
          <PrimaryAccentText color={titleColor}>{titleText}</PrimaryAccentText>
        </div>
        <div className={cardBody}>
          <HeaderText textSize="small">{subtitle}</HeaderText>
          <BodyText>{description}</BodyText>
          <Button outlined url={buttonUrl}>
            {buttonTitle}
          </Button>
        </div>
      </div>
      {imageElement}
      <img
        src={imageSource}
        className={dropShadow('drop-shadow-secondary-semi-transparent')}
      />
    </div>
  )
}
