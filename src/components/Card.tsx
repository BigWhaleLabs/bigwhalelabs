import {
  backdropBlur,
  backgroundColor,
  borderRadius,
  boxShadow,
  classnames,
  display,
  flex,
  flexDirection,
  maxHeight,
  maxWidth,
  padding,
  space,
  wordBreak,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

interface CardProps {
  tall?: boolean
  bigSpace?: boolean
}

const cardContainer = (tall?: boolean, bigSpace?: boolean) => {
  return classnames(
    display(tall ? undefined : 'flex'),
    flexDirection(tall ? undefined : 'flex-row'),
    maxWidth(tall ? 'max-w-535' : 'max-w-758'),
    maxHeight(tall ? 'max-h-620' : 'max-h-298'),
    padding(bigSpace ? undefined : 'p-12'),
    borderRadius('rounded-2xl'),
    backgroundColor('bg-card'),
    boxShadow('shadow-card'),
    wordBreak('break-words'),
    backdropBlur('backdrop-blur-lg'),
    space(tall ? 'space-x-52' : bigSpace ? 'space-x-7' : 'space-x-5')
  )
}

export default function ({
  tall,
  bigSpace,
  children,
}: ChildrenProp & CardProps) {
  return <div className={cardContainer(tall, bigSpace)}>{children}</div>
}
