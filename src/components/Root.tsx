import { classnames, margin } from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(margin('mx-auto'))

export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
