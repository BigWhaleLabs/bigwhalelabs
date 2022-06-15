import ChildrenProp from 'models/ChildrenProp'
import classnames, {
  alignItems,
  display,
  flexDirection,
  margin,
  overflow,
  position,
} from 'classnames/tailwind'

const innerBody = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  margin('mx-auto'),
  position('relative'),
  overflow('overflow-hidden')
)

export default function ({ children }: ChildrenProp) {
  return <div className={innerBody}>{children}</div>
}
