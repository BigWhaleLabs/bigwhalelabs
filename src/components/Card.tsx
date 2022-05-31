import {
  alignItems,
  backdropBlur,
  backgroundColor,
  borderRadius,
  boxShadow,
  classnames,
  display,
  flexDirection,
  justifyContent,
  margin,
  maxHeight,
  maxWidth,
  padding,
  space,
  width,
  wordBreak,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'
import useBreakpoints from 'hooks/useBreakpoints'

interface CardProps {
  tall?: boolean
  bigSpace?: boolean
}

const cardContainer = (tall?: boolean, bigSpace?: boolean) => {
  const { twoXl } = useBreakpoints()

  return classnames(
    display(tall ? undefined : 'flex'),
    flexDirection(
      'flex-row',
      tall ? undefined : '2xl:flex-row',
      bigSpace ? 'flex-col-reverse' : 'flex-col'
    ),
    maxWidth(
      tall ? '2xl:!max-w-535' : '2xl:!max-w-758',
      'mobile:max-w-535',
      'max-w-270'
    ),
    maxHeight(tall ? '2xl:max-h-620' : '2xl:max-h-298'),
    width(twoXl ? undefined : 'w-mobile-card'),
    padding(tall ? '2xl:p-12' : '2xl:p-0', 'p-6'),
    margin(twoXl ? undefined : 'mx-auto'),
    borderRadius('rounded-2xl'),
    backgroundColor('bg-card'),
    boxShadow('shadow-card'),
    wordBreak('break-words'),
    backdropBlur('backdrop-blur-lg'),
    space(tall ? '2xl:space-x-52' : bigSpace ? '2xl:space-x-3' : undefined),
    space(tall ? '2xl:space-y-7' : undefined),
    alignItems('items-center')
  )
}

export default function ({
  tall,
  bigSpace,
  children,
}: ChildrenProp & CardProps) {
  return <div className={cardContainer(tall, bigSpace)}>{children}</div>
}
