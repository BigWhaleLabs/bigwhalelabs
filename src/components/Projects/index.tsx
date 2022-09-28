import Dosu from 'components/Projects/Dosu'
import Echo from 'components/Projects/Echo'
import Sealcaster from 'components/Projects/Sealcaster'
import classnames, {
  display,
  flexDirection,
  gap,
  margin,
  width,
  zIndex,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-y-64', 'md:gap-y-96'),
  zIndex('z-10'),
  width('w-full'),
  margin('mt-80', 'lg:mt-136')
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
