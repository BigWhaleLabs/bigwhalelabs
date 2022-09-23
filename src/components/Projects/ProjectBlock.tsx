import { BodyText, HeaderText, PrimaryAccentText } from 'components/Text'
import { JSX } from 'preact/jsx-runtime'
import { useRef } from 'preact/hooks'
import Button from 'components/Button'
import Tilt from 'react-parallax-tilt'
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
    gap('gap-8'),
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
  customGlareBorderRadius,
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
  customGlareBorderRadius?: string
}) {
  const imgRef = useRef<HTMLImageElement>(null)

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
      <Tilt
        glareEnable
        glareMaxOpacity={0.4}
        glareBorderRadius={customGlareBorderRadius || '100%'}
        tiltReverse
        perspective={500}
        onMove={(onMove) => {
          if (!imgRef.current) return
          imgRef.current.style.filter = `hue-rotate(${
            -onMove.tiltAngleX * 2
          }deg)`
        }}
      >
        <img
          src={imageSource}
          ref={imgRef}
          className={dropShadow('drop-shadow-secondary-semi-transparent')}
        />
      </Tilt>
    </div>
  )
}
