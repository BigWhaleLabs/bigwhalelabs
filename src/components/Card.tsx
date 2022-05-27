import {
  backdropBlur,
  backgroundColor,
  borderRadius,
  boxShadow,
  classnames,
  maxHeight,
  maxWidth,
  padding,
  space,
  wordBreak,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

interface CardProps {
  tall?: boolean
  nospace?: boolean
  orb?: boolean
}

const cardContainer = (tall?: boolean, nospace?: boolean, orb?: boolean) => {
  return classnames(
    space(nospace ? undefined : 'space-y-2'),
    maxWidth(tall ? 'max-w-535' : undefined),
    maxHeight(tall ? 'max-h-636' : undefined),
    padding('p-12'),
    borderRadius('rounded-2xl'),
    backgroundColor('bg-card'),
    boxShadow('shadow-card'),
    wordBreak('break-words'),
    backdropBlur('backdrop-blur-lg'),
    space(orb ? 'space-x-52' : undefined)
  )
}

export default function ({
  tall,
  nospace,
  orb,
  children,
}: ChildrenProp & CardProps) {
  return <div className={cardContainer(tall, nospace, orb)}>{children}</div>
}
