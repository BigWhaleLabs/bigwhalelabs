import {
  alignItems,
  backdropBlur,
  backgroundColor,
  borderRadius,
  boxShadow,
  classnames,
  display,
  padding,
  wordBreak,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const cardContainer = classnames(
  display('flex'),
  padding('px-4', 'py-10', 'sm:p-10'),
  borderRadius('rounded-2xl'),
  backgroundColor('bg-card'),
  boxShadow('shadow-card'),
  wordBreak('break-words'),
  backdropBlur('backdrop-blur-lg'),
  alignItems('items-center')
)
export default function ({ children }: ChildrenProp) {
  return <div className={cardContainer}>{children}</div>
}
