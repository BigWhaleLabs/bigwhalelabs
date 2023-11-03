import ChildrenProp from 'models/ChildrenProp'
import classnames, {
  display,
  flex,
  flexDirection,
  position,
} from 'classnames/tailwind'

const innerBody = classnames(
  display('flex'),
  flex('flex-1'),
  flexDirection('flex-col'),
  position('relative')
)

export default function ({ children }: ChildrenProp) {
  return <div className={innerBody}>{children}</div>
}
