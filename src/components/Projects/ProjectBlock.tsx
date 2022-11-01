import { BackgroundsAnimated } from 'components/Background'
import { BodyText, HeaderText, PrimaryAccentText } from 'components/Text'
import { JSX } from 'preact/jsx-runtime'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'preact/hooks'
import Button from 'components/Button'
import Tilt from 'react-parallax-tilt'
import classnames, {
  alignItems,
  display,
  dropShadow,
  flexDirection,
  gap,
  inset,
  justifyContent,
  margin,
  position,
  rotate,
  scale,
  space,
  width,
  zIndex,
} from 'classnames/tailwind'

type Element = JSX.Element

const wrapper = (reverse?: boolean, centered?: boolean) =>
  classnames(
    position('relative'),
    display('flex'),
    gap('gap-8'),
    flexDirection(
      { 'lg:flex-row-reverse': reverse, 'flex-col-reverse': reverse },
      'flex-col',
      'lg:flex-row'
    ),
    alignItems('items-center'),
    justifyContent(centered ? 'justify-center' : 'justify-evenly'),
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

const tiltWrapper = (shouldAnimate?: boolean) =>
  classnames(
    display({ hidden: !shouldAnimate }),
    scale('scale-50', 'tiny:scale-65', 'sm:!scale-100'),
    position('absolute', 'sm:static'),
    rotate('-rotate-20', 'sm:rotate-0'),
    inset('-right-36', 'tiny:-right-28', 'bottom-80', 'tiny:bottom-64')
  )

const imageFilter = (hueAngle: number) =>
  `hue-rotate(${hueAngle}deg) drop-shadow(0px 0px 1rem var(--secondary-semi-transparent))`

export default function ({
  logo,
  titleText,
  titleColor,
  subtitle,
  description,
  buttonTitle,
  buttonUrl,
  imageElement,
  shouldAnimate = true,
  wrapReverse,
  customGlareBorderRadius,
  centered,
  additionalBackground,
}: {
  logo?: Element
  titleColor:
    | 'text-accent'
    | 'text-primary'
    | 'text-secondary'
    | 'text-quaternary'
  titleText: string
  subtitle: string
  description: Element
  buttonTitle: string
  buttonUrl: string
  imageElement?: Element
  shouldAnimate?: boolean
  wrapReverse?: boolean
  customGlareBorderRadius?: string
  centered?: boolean
  additionalBackground?: Element
}) {
  const { ref, inView } = useInView({ threshold: 0.4 })
  const imgRef = useRef<HTMLImageElement>(null)

  return (
    <div className={wrapper(wrapReverse, centered)} ref={ref}>
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

      {!shouldAnimate && imageElement}

      <div className={tiltWrapper(shouldAnimate)}>
        <Tilt
          glareEnable
          glareMaxOpacity={0.4}
          glareBorderRadius={customGlareBorderRadius || '100%'}
          tiltReverse
          perspective={500}
          onMove={({ tiltAngleX, tiltAngleY }) => {
            if (!imgRef.current) return
            imgRef.current.style.filter = imageFilter(tiltAngleX + tiltAngleY)
          }}
          className={dropShadow('drop-shadow-secondary-semi-transparent')}
        >
          <div ref={imgRef}>{imageElement}</div>
        </Tilt>
      </div>
      <BackgroundsAnimated inView={inView}>
        {additionalBackground}
      </BackgroundsAnimated>
    </div>
  )
}
