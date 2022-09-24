import Dosu from 'components/Projects/Dosu'
import Echo from 'components/Projects/Echo'
import Sealcaster from 'components/Projects/Sealcaster'
import classnames, { margin, space, width, zIndex } from 'classnames/tailwind'

const wrapper = classnames(
  space('space-y-64', 'md:space-y-96'),
  zIndex('z-10'),
  width('w-full'),
  margin('mt-80', 'mt-136')
)

export default function () {
  return (
    <div className={wrapper}>
      <Echo />
      <Sealcaster />
      <Dosu />
    </div>
  )
}
